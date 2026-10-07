// Backend API endpoint resolution
function getApiEndpoint() {
  // If running on custom live server ports (e.g. 5500, 5501, 8080) or file protocol, point to backend server
  if (window.location.protocol === "file:" || (window.location.port && window.location.port !== "3000")) {
    return "http://localhost:3000/api/ask-mln131";
  }
  return "/api/ask-mln131";
}

const API_ENDPOINT = getApiEndpoint();

const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const stopBtn = document.getElementById("stop-btn");
const pdfStatus = document.getElementById("pdf-status");
const suggestionButtons = document.querySelectorAll(".suggestion-btn");
const historyList = document.getElementById("history-list");
const historyEmpty = document.getElementById("history-empty");
const clearHistoryBtn = document.getElementById("clear-history-btn");

const HISTORY_KEY = "philoMapAiHistory";

let isBusy = false;
let activeRequestId = 0;
let currentLoadingBubble = null;

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
  } catch (error) {
    console.warn("Không thể đọc lịch sử:", error);
    return [];
  }
}

function saveHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, 30)));
}

function formatTime(value) {
  const date = new Date(value);
  return date.toLocaleString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
  });
}

function renderHistory() {
  if (!historyList || !historyEmpty) return;
  const items = loadHistory();
  historyList.innerHTML = "";

  if (!items.length) {
    historyEmpty.classList.remove("hidden");
    return;
  }

  historyEmpty.classList.add("hidden");
  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "w-full text-left px-4 py-3 rounded-xl border border-gray-200 hover:border-primary/40 hover:bg-blue-50 transition-colors";
    button.innerHTML = `
      <div class="text-xs text-slate-400 mb-1">${formatTime(
        item.createdAt,
      )}</div>
      <div class="text-sm text-slate-700 font-semibold line-clamp-2">${escapeHtml(
        item.question,
      )}</div>
    `;
    button.addEventListener("click", () => {
      chatInput.value = item.question;
      chatInput.focus();
    });
    historyList.appendChild(button);
  });
}

function setStatus(text) {
  if (pdfStatus) {
    pdfStatus.textContent = text;
  }
}

function appendMessage(content, type = "ai", isHtml = false) {
  const wrapper = document.createElement("div");
  wrapper.className =
    type === "user"
      ? "flex justify-end"
      : "flex justify-start";

  const bubble = document.createElement("div");
  bubble.className =
    type === "user"
      ? "bg-primary dark:bg-[#D4A017] text-white dark:text-[#0F172A] px-4 py-3 rounded-2xl rounded-br-md w-fit max-w-[85%] md:max-w-[75%] lg:max-w-2xl text-sm leading-relaxed shadow-sm transition-colors duration-300 font-medium"
      : "bg-slate-100 dark:bg-[#1E293B] text-slate-800 dark:text-slate-200 px-4 py-3 rounded-2xl rounded-bl-md w-fit max-w-[85%] md:max-w-[75%] lg:max-w-2xl text-sm leading-relaxed border border-slate-200/50 dark:border-slate-850/30 transition-colors duration-300 chat-bubble-markdown";

  if (isHtml) {
    bubble.innerHTML = content;
  } else {
    bubble.textContent = content;
  }

  wrapper.appendChild(bubble);
  chatBox.appendChild(wrapper);
  chatBox.scrollTop = chatBox.scrollHeight;
  return bubble;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatAnswer(text) {
  // Parse markdown into HTML using marked.js
  if (typeof marked !== 'undefined') {
    return marked.parse(text);
  }
  
  // Fallback if marked is not loaded
  const safe = escapeHtml(text);
  return safe
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

// Fallback local textbook answer when backend Node.js is offline
async function fallbackLocalTextbookAnswer(userQuestion) {
  const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
  const qNorm = norm(userQuestion);

  // 1. Check in FE_REVIEW_QUESTIONS (from quiz-fe-review.js)
  if (typeof FE_REVIEW_QUESTIONS !== 'undefined' && Array.isArray(FE_REVIEW_QUESTIONS)) {
    const match = FE_REVIEW_QUESTIONS.find(item => {
      const qText = norm(item.question);
      return qNorm.includes(qText) || qText.includes(qNorm) || (qText.length > 25 && qNorm.includes(qText.slice(0, 30)));
    });

    if (match) {
      const correctOptText = match.options[match.correct] || "";
      return `### 💡 Phân tích & Trả lời từ Giáo trình MLN131

**Câu hỏi:** ${match.question}

* **Đáp án đúng:** **${correctOptText}**
* **Căn cứ lý luận trong giáo trình:**
  > ${match.explanation}

#### 📖 Phân tích sâu & Bối cảnh thực tiễn:
- **Chiến lược "Đi tắt đón đầu":** Theo Giáo trình *Kinh tế chính trị Mác - Lênin 2021* (Bộ GD&ĐT, Chương 6, trang 219 - 220), mô hình CNH của Nhật Bản và các nước NICs (Hàn Quốc, Singapore) đặc biệt thành công nhờ không lặp lại tuần tự 60 - 80 năm của phương Tây mà rút ngắn còn **20 - 30 năm**.
- **Phương thức thực hiện:** Kết hợp giữa nghiên cứu chế tạo trong nước với nhập khẩu và chuyển giao công nghệ cao từ nước ngoài, hướng mạnh về xuất khẩu để tích lũy ngoại tệ và nâng cao năng lực cạnh tranh quốc tế.
- **Ý nghĩa đối với Việt Nam:** Là bài học trực tiếp cho Việt Nam trong đẩy mạnh CNH, HĐH gắn với phát triển kinh tế tri thức và thích ứng Cách mạng công nghiệp lần thứ tư (CMCN 4.0).

---
> ℹ️ *Ghi chú: Phản hồi này được trích xuất từ cơ sở dữ liệu **Giáo trình MLN131 2021** (chế độ phản hồi nhanh). Để kích hoạt mô hình AI Gemini phân tích tương tác tự do, bạn hãy mở Terminal trong VS Code và chạy lệnh: \`npm start\` (hoặc \`node server.js\`).*`;
    }
  }

  // 2. Try loading data/mln131-curriculum.json directly if available
  try {
    const res = await fetch("data/mln131-curriculum.json");
    if (res.ok) {
      const data = await res.json();
      const pages = Array.isArray(data) ? data : (data.pages || []);
      const matched = pages.filter(p => {
        const cNorm = norm(p.content);
        const words = qNorm.split(/\s+/).filter(w => w.length > 3);
        const hitCount = words.filter(w => cNorm.includes(w)).length;
        return hitCount >= 2;
      });

      if (matched.length > 0) {
        const top = matched[0];
        return `### 📚 Trích dẫn Giáo trình KTCT Mác - Lênin (Bộ GD&ĐT 2021)

**Nội dung tham chiếu [${top.chapter_title} - Trang ${top.page_num}]:**
${top.content}

---
> ℹ️ *Ghi chú: Phản hồi này được tra cứu tự động từ cơ sở dữ liệu Giáo trình. Để đặt câu hỏi đào sâu hoặc nhận giải thích trực tiếp từ AI Gemini, bạn hãy mở Terminal và chạy lệnh: \`npm start\`.*`;
      }
    }
  } catch (e) {
    // Ignore fetch error
  }

  // 3. Instruction card if no exact match found
  return `### ⚠️ Backend Server Node.js Chưa Được Khởi Động

Bạn đang truy cập trang web qua Live Server tĩnh (\`127.0.0.1:5500\`). Để hệ thống Trợ lý AI có thể kết nối với mô hình AI Gemini:

1. **Mở Terminal trong VS Code:** Nhấn tổ hợp phím **\`Ctrl + \`\`** (hoặc chọn menu **Terminal -> New Terminal**).
2. **Khởi động server backend:** Chạy lệnh:
   \`\`\`bash
   npm start
   \`\`\`
   *(hoặc: \`node server.js\`)*
3. **Sử dụng:** Sau khi thấy thông báo \`Server is running on http://localhost:3000\`, bạn chỉ cần nhấn **Gửi lại** câu hỏi này để nhận phân tích chi tiết!`;
}

async function askPhilosophyGemini(userQuestion) {
  setStatus("Đang gửi câu hỏi...");

  let response;
  try {
    response = await fetch(getApiEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: userQuestion,
      }),
    });
  } catch (netErr) {
    // If relative endpoint failed, try localhost:3000 fallback
    try {
      response = await fetch("http://localhost:3000/api/ask-mln131", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
        }),
      });
    } catch (fallbackErr) {
      // Backend server is offline -> gracefully provide local curriculum answer
      console.warn("Backend server offline, falling back to local textbook database...");
      return await fallbackLocalTextbookAnswer(userQuestion);
    }
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    if (response.status === 429) {
      const retryAfter = errorData.retryAfter;
      const waitText = retryAfter
        ? ` Vui lòng thử lại sau ${retryAfter}s.`
        : " Vui lòng thử lại sau ít phút.";
      throw new Error(
        `Bạn đã vượt giới hạn miễn phí.${waitText} Nếu cần, hãy nâng quota hoặc đợi sang ngày mới.`,
      );
    }
    // If backend returns an error (e.g. no API key configured), fallback to local textbook
    console.warn("Backend returned error, falling back to local textbook...", errorData);
    return await fallbackLocalTextbookAnswer(userQuestion);
  }

  const data = await response.json();
  return data.answer;
}

async function handleSend() {
  const question = chatInput.value.trim();
  if (!question || isBusy) {
    return;
  }

  isBusy = true;
  activeRequestId += 1;
  const requestId = activeRequestId;

  sendBtn.disabled = true;
  sendBtn.classList.add("opacity-60", "cursor-not-allowed");
  if (stopBtn) {
    stopBtn.disabled = false;
    stopBtn.classList.remove("opacity-50", "cursor-not-allowed");
  }

  appendMessage(question, "user");
  chatInput.value = "";

  const loadingBubble = appendMessage(
    "Đang tra cứu giáo trình, vui lòng đợi...",
    "ai",
  );
  currentLoadingBubble = loadingBubble;

  try {
    const answer = await askPhilosophyGemini(question);
    if (requestId !== activeRequestId) {
      return;
    }
    loadingBubble.innerHTML = formatAnswer(answer);

    const historyItems = loadHistory();
    historyItems.unshift({
      question,
      answer,
      createdAt: Date.now(),
    });
    saveHistory(historyItems);
    renderHistory();
  } catch (error) {
    if (requestId !== activeRequestId) {
      return;
    }
    console.error("Lỗi gọi Gemini:", error);
    const fallbackMessage =
      "Xin lỗi, hệ thống đang quá tải hoặc không đọc được tài liệu. Vui lòng thử lại sau.";
    const errorMessage =
      error && error.message ? `Lỗi: ${error.message}` : fallbackMessage;
    const networkHint =
      error &&
      error.message &&
      error.message.toLowerCase().includes("failed to fetch")
        ? " (Kiểm tra backend đang chạy ở http://localhost:3000)"
        : "";
    loadingBubble.textContent = errorMessage + networkHint;
  } finally {
    if (requestId !== activeRequestId) {
      return;
    }
    setStatus("Sẵn sàng");
    isBusy = false;
    currentLoadingBubble = null;
    sendBtn.disabled = false;
    sendBtn.classList.remove("opacity-60", "cursor-not-allowed");
    if (stopBtn) {
      stopBtn.disabled = true;
      stopBtn.classList.add("opacity-50", "cursor-not-allowed");
    }
  }
}

sendBtn.addEventListener("click", handleSend);
if (stopBtn) {
  stopBtn.addEventListener("click", () => {
    if (!isBusy) return;
    isBusy = false;
    activeRequestId += 1;
    if (currentLoadingBubble) {
      currentLoadingBubble.textContent =
        "Đã dừng phản hồi. Bạn có thể chỉnh lại câu hỏi và gửi lại.";
      currentLoadingBubble = null;
    }
    setStatus("Đã dừng");
    sendBtn.disabled = false;
    sendBtn.classList.remove("opacity-60", "cursor-not-allowed");
    stopBtn.disabled = true;
    stopBtn.classList.add("opacity-50", "cursor-not-allowed");
  });
}
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    handleSend();
  }
});

suggestionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chatInput.value = button.dataset.question || "";
    chatInput.focus();
  });
});

const chapterButtons = document.querySelectorAll(".chapter-btn");
chapterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chatInput.value = button.dataset.query || "";
    chatInput.focus();
    // Auto send when clicking a chapter
    handleSend();
  });
});

const incomingQuestion = new URLSearchParams(window.location.search).get("q");

if (!incomingQuestion) {
  appendMessage(
    formatAnswer("Xin chào! Mình là Nhóm 5 👋 Mình hỗ trợ giải đáp các thắc mắc về môn **Kinh tế chính trị Mác - Lênin (MLN131)**. Thắc mắc gì cứ hỏi nhé, nhưng nhớ là mình chỉ giải đáp dựa trên **giáo trình** thôi đó! 📚"),
    "ai",
    true
  );
}

renderHistory();
if (stopBtn) {
  stopBtn.disabled = true;
  stopBtn.classList.add("opacity-50", "cursor-not-allowed");
}
if (clearHistoryBtn) {
  clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  });
}

// Auto-fill + auto-send when arriving from a quiz "Hỏi AI" link (?q=...)
if (incomingQuestion) {
  chatInput.value = incomingQuestion;
  handleSend();
}
