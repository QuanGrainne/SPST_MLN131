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

const CURRICULUM_PATH = path.join(__dirname, "data", "hcm-curriculum.json");
let cachedCurriculum = null;

async function loadCurriculum() {
  if (cachedCurriculum) return cachedCurriculum;
  
  try {
    // Sử dụng require để Vercel có thể bundle tự động file json vào serverless function
    cachedCurriculum = require("./data/hcm-curriculum.json");
    return cachedCurriculum;
  } catch (err) {
    console.error("Không thể load giáo trình JSON:", err);
    return { title: "Giáo trình Tư tưởng HCM", pages: [] };
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

// API endpoint to handle Ask HCM requests
app.post("/api/ask-hcm", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const curriculum = await loadCurriculum();
    const pagesArray = Array.isArray(curriculum) ? curriculum : (curriculum.pages || []);
    const relevantPages = findRelevantPages(question, pagesArray);
    
    // Gộp nội dung các trang thành context
    const contextText = relevantPages.map(p => `--- Trang ${p.page_num} ---\n${p.content}`).join("\n\n");

    const systemPrompt = `
Bạn là "Minh" - trợ lý học tập chuyên về Tư tưởng Hồ Chí Minh.
Tính cách: Vui vẻ, nhí nhảnh, thân thiện như một người bạn học (thường dùng icon cảm xúc).
Nhiệm vụ: 
1. Cố gắng sử dụng thông tin từ giáo trình được cung cấp (nếu có) để trả lời và nhớ trích dẫn "Trang X".
2. Nếu sinh viên hỏi những câu hỏi mở rộng, yêu cầu phân tích sâu, xin ví dụ thực tế hoặc hỏi những nội dung không có sẵn trong giáo trình, BẠN HOÀN TOÀN ĐƯỢC PHÉP sử dụng kiến thức sâu rộng của bản thân để trả lời, phân tích và cho ví dụ cụ thể để giúp sinh viên hiểu bài tốt nhất! Đừng bao giờ từ chối trả lời.
3. Sử dụng Markdown để định dạng câu trả lời cho đẹp (in đậm, in nghiêng, danh sách).
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
      try {
        console.log("Calling Gemini SDK fallback...");
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: systemPrompt,
        });

        const prompt = `Context từ giáo trình:\n${contextText}\n\nCâu hỏi của sinh viên: ${question}`;
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        if (responseText) {
          answer = responseText;
          console.log("✓ Gemini SDK fallback success");
        }
      } catch (geminiErr) {
        console.error("Gemini SDK fallback error:", geminiErr);
        lastError = geminiErr;
      }
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
});

// Alias for backward compatibility if needed
app.post("/api/ask-gemini", (req, res) => {
  // redirect logic to the new one
  req.url = '/api/ask-hcm';
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
Bạn là "Trợ giảng AI" của môn Tư tưởng Hồ Chí Minh. Nhiệm vụ: giúp sinh viên ôn thi cuối kỳ (FE) bằng cách giải thích rõ câu hỏi trắc nghiệm, vì sao đáp án đúng lại đúng, các đáp án khác sai ở đâu, và trả lời các câu hỏi đào sâu thêm mà sinh viên tự đặt ra.
Phong cách: ngắn gọn, sư phạm, thân thiện, có thể dùng emoji vừa phải. Trả lời bằng tiếng Việt, định dạng Markdown (in đậm, danh sách) cho dễ đọc.
Nếu câu hỏi của sinh viên nằm ngoài phạm vi Tư tưởng Hồ Chí Minh / bối cảnh câu quiz, vẫn có thể trả lời ngắn gọn nhưng nhắc sinh viên quay lại trọng tâm ôn thi.
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
