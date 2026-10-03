// Màn 2 — dữ liệu lịch sử tách riêng khỏi logic game.
// Wikipedia chỉ dùng để định hướng chủ đề; đáp án dưới đây đã được đối chiếu
// với Tư liệu Văn kiện Đảng, Bảo tàng Lịch sử Quốc gia và Bộ Quốc phòng.
window.HISTORICAL_ISSUE = {
  id: "issue-02",
  nextPage: "issue3.html",
  period: "1946–1954",
  source: {
    title: "Giáo trình Tư tưởng Hồ Chí Minh (2019) và nguồn chính thống đối chiếu",
    verificationStatus: "verified-official-sources"
  },
  dossier: [
    { date: "19/12/1946", clue: "Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến." },
    { date: "Thu–Đông 1947", clue: "Một chiến thắng làm phá sản chiến lược “đánh nhanh, thắng nhanh” của thực dân Pháp." },
    { date: "16/9–17/10/1950", clue: "Chiến dịch nhằm phá thế phong tỏa, khai thông biên giới phía Bắc." },
    { date: "7/5/1954", clue: "Một chiến dịch kéo dài 56 ngày đêm kết thúc thắng lợi." }
  ],
  errors: {
    e1: { wrong: "20 tháng 12 năm 1946", correct: "19 tháng 12 năm 1946", fact: "Đêm 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến." },
    e2: { wrong: "Việt Bắc Thu–Đông 1948", correct: "Việt Bắc Thu–Đông 1947", fact: "Chiến thắng Việt Bắc Thu–Đông diễn ra năm 1947." },
    e3: { wrong: "Chiến dịch Tây Bắc", correct: "Chiến dịch Biên giới", fact: "Chiến dịch Biên giới diễn ra trên tuyến biên giới Đông Bắc năm 1950." },
    e4: { wrong: "năm 1949", correct: "năm 1950", fact: "Chiến dịch Biên giới diễn ra từ 16/9 đến 17/10/1950." },
    e5: { wrong: "13 tháng 3 năm 1953", correct: "13 tháng 3 năm 1954", fact: "Chiến dịch Điện Biên Phủ mở màn ngày 13/3/1954." },
    e6: { wrong: "Đại tướng Nguyễn Chí Thanh", correct: "Đại tướng Võ Nguyên Giáp", fact: "Đại tướng Võ Nguyên Giáp được giao trọng trách Tư lệnh kiêm Bí thư Đảng ủy Chiến dịch Điện Biên Phủ." },
    e7: { wrong: "7 tháng 5 năm 1955", correct: "7 tháng 5 năm 1954", fact: "Chiều 7/5/1954, Chiến dịch Điện Biên Phủ kết thúc thắng lợi sau 56 ngày đêm." }
  }
};
