# 📖 Nền Tảng Học Tập Tương Tác Kinh Tế Chính Trị Mác – Lênin (MLN131)

> **Dự án thực hiện bởi: NHÓM 5**  
> Nền tảng hỗ trợ sinh viên học tập, ôn luyện và tra cứu kiến thức môn **Kinh tế chính trị Mác – Lênin (MLN131)** thông qua giao diện tương tác trực quan, trò chơi học tập và Trợ lý AI thông minh.

---

## 🌟 Tính Năng Nổi Bật

### 1. 📚 6 Chuyên Đề Học Tập Chuẩn Giáo Trình (Modules 1 – 6)
Bám sát cấu trúc **Giáo trình Kinh tế chính trị Mác – Lênin (Bộ GD&ĐT, 2021)**:
- **Chương 1:** Đối tượng, phương pháp nghiên cứu và chức năng của KTCT Mác – Lênin.
- **Chương 2:** Hàng hóa, thị trường và vai trò của các chủ thể tham gia thị trường.
- **Chương 3:** Giá trị thặng dư trong nền kinh tế thị trường (Học thuyết GTTD, tư bản bất biến/khả biến, tích lũy tư bản).
- **Chương 4:** Cạnh tranh và độc quyền trong nền kinh tế thị trường.
- **Chương 5:** Kinh tế thị trường định hướng XHCN và các quan hệ lợi ích kinh tế ở Việt Nam.
- **Chương 6:** Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế của Việt Nam.

### 2. 🤖 Trợ Lý AI Học Thuật 24/7 (Nhóm 5 AI Assistant)
- Tích hợp công nghệ **Google Gemini AI (`gemini-3.5-flash`)**.
- Trả lời và giải thích chính xác các khái niệm, quy luật và công thức kinh tế chính trị ($G = c + v + m$, $m'$, $M$, $p'$, $k$,...).
- Tự động trích dẫn số trang và chương mục đối chiếu từ giáo trình chuẩn.

### 3. 🎯 Luyện Tập Trắc Nghiệm & Đề Thi (Practice & Quizzes)
- Ngân hàng câu hỏi trắc nghiệm phong phú theo từng chương.
- Chế độ làm bài tự động chấm điểm, tính phần trăm hoàn thành.
- Giải thích chi tiết cơ sở lý luận cho từng đáp án đúng/sai.

### 4. 🎮 Trò Chơi Học Tập Tương Tác (Educational Mini-games)
- **Game Ô chữ (Crossword):** Giải mã các từ khóa kinh tế chính trị quan trọng.
- **Game Ghép từ & Bản đồ tư tưởng:** Rèn luyện tư duy logic và ghi nhớ thuật ngữ nhanh chóng.

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** HTML5, CSS3 (Vanilla + TailwindCSS), Modern JavaScript (ES6+).
- **Backend:** Node.js, Express.js.
- **Trí tuệ nhân tạo (AI):** `@google/generative-ai` (Google Gemini SDK).

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu cầu tiên quyết:
- Đã cài đặt [Node.js](https://nodejs.org/) (khuyến nghị phiên bản 18+).

### Các bước thực hiện:

1. **Clone repository về máy:**
   ```bash
   git clone https://github.com/QuanGrainne/SPST_MLN131.git
   cd SPST_MLN131
   ```

2. **Cài đặt thư viện (Dependencies):**
   ```bash
   npm install
   ```

3. **Cấu hình file môi trường (`.env`):**  
   Tạo file `.env` ở thư mục gốc dự án:
   ```env
   PORT=3000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *(Lấy API Key miễn phí tại [Google AI Studio](https://aistudio.google.com/app/apikey) nếu cần sử dụng tính năng Chatbot AI).*

4. **Khởi động ứng dụng:**
   ```bash
   # Chạy server thường
   npm start

   # Hoặc chạy chế độ phát triển (tự động reload khi sửa code)
   npm run dev
   ```

5. **Truy cập ứng dụng:**  
   Mở trình duyệt và truy cập: **`http://localhost:3000`**

---

## 📂 Cấu Trúc Thư Mục

```text
├── assets/             # Hình ảnh giao diện, font và tài nguyên
├── css/                # Stylesheet và giao diện tùy biến
├── data/               # Dữ liệu nội dung giáo trình JSON chuẩn
├── js/                 # Logic JavaScript (Trợ lý AI, Quiz, Games,...)
├── routes/             # API routes (Crossword, Wordle,...)
├── home.html           # Trang chủ nền tảng
├── ai-assistants.html  # Trang trò chuyện với Trợ lý AI Nhóm 5
├── practice.html       # Trang ngân hàng trắc nghiệm & đề thi
├── games.html          # Trang tổng hợp trò chơi giáo dục
├── server.js           # Server Node.js / Express xử lý API & serve web
├── .gitignore          # Cấu hình bỏ qua các file rác, file nặng và .env
└── package.json        # Danh sách thư viện và scripts dự án
```

---

## 👥 Nhóm Thực Hiện
- **Môn học:** Kinh tế chính trị Mác – Lênin (MLN131)
- **Đơn vị thực hiện:** **Nhóm 5**
