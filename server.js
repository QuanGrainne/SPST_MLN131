const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs/promises");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const crosswordRoutes = require("./routes/crossword.routes");
const wordleRoutes = require("./routes/wordle.routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
// Serve static files with absolute path for better compatibility
app.use(express.static(path.join(__dirname))); // Serve static files
app.use("/api/crossword", crosswordRoutes);
app.use("/api/wordle", wordleRoutes);

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const CURRICULUM_PATH = path.join(__dirname, "data", "mln131-curriculum.json");
let cachedCurriculum = null;

async function loadCurriculum() {
  if (cachedCurriculum) return cachedCurriculum;
  
  try {
    try {
      cachedCurriculum = require("./data/mln131-curriculum.json");
    } catch (e1) {
      cachedCurriculum = require("./data/hcm-curriculum.json");
    }
    return cachedCurriculum;
  } catch (err) {
    console.error("Không thể load giáo trình JSON:", err);
    return { title: "Giáo trình Kinh tế chính trị Mác - Lênin", pages: [] };
  }
}

// Hàm đơn giản để tìm trang liên quan (keyword matching có khử dấu tiếng Việt)
function removeVietnameseTones(str) {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function findRelevantPages(question, pages) {
  const stopWords = ["la", "va", "cua", "cac", "nhung", "thi", "ma", "theo", "trong", "ngoai", "voi", "nay", "kia", "de", "cho", "o", "mot", "nhu", "cung"];
  
  // Normalize and extract keywords
  const normalizedQuestion = removeVietnameseTones(question.toLowerCase());
  const rawKeywords = normalizedQuestion.split(/[^a-z0-9]+/);
  const keywords = rawKeywords.filter(k => k.length > 0 && !stopWords.includes(k));
  
  if (keywords.length === 0) return pages.slice(0, 5); // Fallback

  const scoredPages = pages.map(page => {
    let score = 0;
    const contentLower = removeVietnameseTones((page.content || '').toLowerCase());
    
    // Exact phrase match bonus
    if (contentLower.includes(normalizedQuestion)) {
      score += 10; 
    }
    
    // Keyword match
    for (const kw of keywords) {
      if (contentLower.includes(kw)) score += 1;
    }
    
    // Bonus for consecutive words (bi-grams)
    for (let i = 0; i < keywords.length - 1; i++) {
        const bigram = keywords[i] + ' ' + keywords[i+1];
        if (contentLower.includes(bigram)) score += 3;
    }

    return { ...page, score };
  });

  // Sort by score descending and take top 10 relevant pages
  scoredPages.sort((a, b) => b.score - a.score);
  return scoredPages.filter(p => p.score > 0).slice(0, 10);
}

// Function to handle MLN131 AI question
async function handleAskMLN131(req, res) {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const curriculum = await loadCurriculum();
    const pagesArray = Array.isArray(curriculum) ? curriculum : (curriculum.pages || []);
    const relevantPages = findRelevantPages(question, pagesArray);
    
    // Gộp nội dung các trang thành context
    const contextText = relevantPages.map(p => `--- Trang ${p.page_num} (${p.chapter_title || ''}) ---\n${p.content}`).join("\n\n");

    const systemPrompt = `
Bạn là "Trợ lý AI Học thuật của Nhóm 5" - chuyên gia cố vấn môn Kinh tế chính trị Mác - Lênin (mã học phần MLN131), dựa trên Giáo trình Kinh tế chính trị Mác - Lênin (Bộ Giáo dục và Đào tạo, NXB Chính trị quốc gia Sự thật, Hà Nội - 2021).
Tính cách: Học thuật, thông tuệ, nhiệt tình, chuẩn xác theo giáo trình chuẩn quốc gia.
Nhiệm vụ: 
1. Sử dụng thông tin chính xác từ Giáo trình Kinh tế chính trị Mác - Lênin 2021 (gồm 6 chương cốt lõi: Đối tượng & Chức năng; Hàng hóa & Thị trường; Giá trị thặng dư; Cạnh tranh & Độc quyền; Kinh tế thị trường định hướng XHCN; Công nghiệp hóa, hiện đại hóa & Hội nhập).
2. Khi dẫn chứng, luôn trích dẫn rõ Chương và số Trang tương ứng từ giáo trình (ví dụ: "[Giáo trình MLN131 - Trang X]").
3. Giải thích tường minh các công thức toán học kinh tế chính trị: G = c + (v+m), k = c + v, m' = (m/v)*100%, M = m'*V, p' = [p/(c+v)]*100%, n = CH/ch, v.v.
4. Trình bày bằng Markdown đẹp mắt với tiêu đề, gạch đầu dòng, công thức rõ ràng.
`;

    const openRouterKey = process.env.OPENROUTER_API_KEY;
    const geminiKey = process.env.GEMINI_API_KEY;

    let answer = null;
    let lastError = null;

    // 1. Thử gọi qua OpenRouter API nếu có key
    if (openRouterKey) {
      try {
        const candidateModels = [
          "google/gemini-2.0-flash-exp:free",
          "meta-llama/llama-3.3-70b-instruct:free",
          "deepseek/deepseek-r1:free",
          "nvidia/nemotron-3-ultra-550b-a55b:free"
        ];

        for (const model of candidateModels) {
          try {
            const payload = {
              model,
              messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: `Context từ giáo trình:\n${contextText}\n\nCâu hỏi của sinh viên: ${question}` }
              ],
              temperature: 0.3
            };

            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${openRouterKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000", 
                "X-Title": "PhiloVerse AI" 
              },
              body: JSON.stringify(payload)
            });

            if (response.ok) {
              const data = await response.json();
              if (data.choices && data.choices[0]?.message?.content) {
                answer = data.choices[0].message.content;
                console.log(`✓ OpenRouter success with model: ${model}`);
                break;
              }
            }
          } catch (modelErr) {
            console.warn(`OpenRouter model ${model} failed, trying next...`);
          }
        }
      } catch (orErr) {
        console.warn("OpenRouter API error:", orErr.message);
        lastError = orErr;
      }
    }

    // 2. Fallback sang Google Gemini SDK nếu OpenRouter không phản hồi
    if (!answer && geminiKey) {
      const geminiCandidateModels = ["gemini-3.5-flash", "gemini-3.8-flash"];
      for (const modelName of geminiCandidateModels) {
        try {
          console.log(`Calling Gemini SDK with ${modelName}...`);
          const model = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: systemPrompt,
          });

          const prompt = `Context từ giáo trình:\n${contextText}\n\nCâu hỏi của sinh viên: ${question}`;
          const result = await model.generateContent(prompt);
          const responseText = result.response.text();
          if (responseText) {
            answer = responseText;
            console.log(`✓ Gemini SDK success with ${modelName}`);
            break;
          }
        } catch (geminiErr) {
          console.error(`Gemini SDK error with ${modelName}:`, geminiErr.message);
          lastError = geminiErr;
        }
      }
    }

    // 3. Fallback sang cơ sở dữ liệu Giáo trình nếu chưa có API key hoặc API lỗi
    if (!answer && relevantPages.length > 0) {
      const top = relevantPages[0];
      answer = `### 📚 Phân tích từ Giáo trình Kinh tế chính trị Mác - Lênin (Bộ GD&ĐT 2021)

**Căn cứ lý luận [Chương ${top.chapter || 6}: ${top.chapter_title || ''} - Trang ${top.page_num}]:**
${top.content}

---
> 💡 *Ghi chú: Phản hồi này được tra cứu tự động từ cơ sở dữ liệu Giáo trình chuẩn MLN131 (262 trang). Để kích hoạt mô hình AI Gemini đàm thoại tự do, hãy thêm \`GEMINI_API_KEY\` vào file \`.env\`.*`;
    }

    if (answer) {
      return res.json({ answer });
    }

    throw lastError || new Error("Không thể kết nối với AI provider (Vui lòng kiểm tra API key trong .env)");
  } catch (error) {
    console.error("Error in /api/ask-hcm:", error);
    res.status(500).json({
      error: "Không thể lấy phản hồi từ AI: " + (error.message || "Lỗi server"),
      details: error.message,
    });
  }
}

app.post("/api/ask-mln131", handleAskMLN131);
app.post("/api/ask-hcm", handleAskMLN131);

// Alias for backward compatibility if needed
app.post("/api/ask-gemini", (req, res) => {
  req.url = '/api/ask-mln131';
  app.handle(req, res);
});

// AI helper for the "Ôn thi FE" quiz tab - explains quiz questions and answers follow-ups via Gemini
app.post("/api/ask-quiz", async (req, res) => {
  try {
    const { question, quizContext, history } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY in environment variables.");
    }

    const systemInstruction = `
Bạn là "Trợ giảng AI" của môn Kinh tế chính trị Mác - Lênin (MLN131). Nhiệm vụ: giúp sinh viên ôn thi cuối kỳ (FE) bằng cách giải thích rõ câu hỏi trắc nghiệm, vì sao đáp án đúng lại đúng, các đáp án khác sai ở đâu, và trả lời các câu hỏi đào sâu thêm mà sinh viên tự đặt ra dựa trên Giáo trình Kinh tế chính trị Mác - Lênin 2021.
Phong cách: ngắn gọn, sư phạm, thân thiện, có thể dùng emoji vừa phải. Trả lời bằng tiếng Việt, định dạng Markdown (in đậm, danh sách) cho dễ đọc.
`.trim();

    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction,
    });

    let contextBlock = "";
    if (quizContext && quizContext.question) {
      const optionsText = Array.isArray(quizContext.options) ? quizContext.options.join("\n") : "";
      contextBlock = `Bối cảnh câu hỏi quiz đang được ôn (chương: ${quizContext.moduleTitle || "không rõ"}):\n"${quizContext.question}"\n${optionsText}\nĐáp án đúng: ${quizContext.correctAnswer || "không rõ"}\nGiải thích có sẵn: ${quizContext.explanation || "không có"}\n\n`;
    }

    const chatHistory = Array.isArray(history)
      ? history
          .filter((turn) => turn && turn.text)
          .map((turn) => ({
            role: turn.role === "model" ? "model" : "user",
            parts: [{ text: turn.text }],
          }))
      : [];

    const chat = model.startChat({ history: chatHistory });
    const result = await chat.sendMessage(`${contextBlock}Câu hỏi của sinh viên: ${question}`);
    const answer = result.response.text() || "Xin lỗi, mình chưa có câu trả lời lúc này 😢";

    res.json({ answer });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({
      error: "Failed to get response from AI",
      details: error.message,
    });
  }
});

app.get("/api/clear-pdf-cache", (req, res) => {
  cachedPdfData = null;
  res.json({ ok: true });
});

// Serve component HTML files explicitly
app.get("/header.html", (req, res) => {
  res.sendFile(path.join(__dirname, "header.html"));
});

app.get("/footer.html", (req, res) => {
  res.sendFile(path.join(__dirname, "footer.html"));
});

// Serve home.html for root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Chỉ listen port nếu không chạy trên Vercel (môi trường production serverless)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/home.html`);
    console.log(`API endpoint: http://localhost:${PORT}/api/ask-gemini`);
  });
}

// Export app để Vercel nhận diện là một Serverless Function
module.exports = app;
