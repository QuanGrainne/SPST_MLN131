/**
 * Cấu hình game cho website HCM.
 * Cấu hình 4 game HCM: Giải mã, Bản đồ tư tưởng, Dòng Mực Lịch Sử và Ghế nóng.
 */
window.HCM_GAMES = [
  {
    id: "decode-hcm",
    title: "Giải mã câu hỏi",
    description:
      "Đọc gợi ý, chọn các mảnh từ khóa theo đúng thứ tự và giải mã đáp án. Có điểm, combo, gợi ý và giải thích sau mỗi câu.",
    url: "game-1.html",
    icon: "encrypted",
    badge: "GIẢI MÃ",
    image: "assets/images/games/game1-decode.png",
    tags: [
      { icon: "extension", label: "Ghép từ khóa" },
      { icon: "bolt", label: "Combo điểm" },
      { icon: "school", label: "Ôn 6 chương" }
    ]
  },
  {
    id: "mindmap-hcm",
    title: "Bản đồ tư tưởng",
    description:
      "Phân loại các keyword của Tư tưởng Hồ Chí Minh vào đúng nhóm kiến thức. Mỗi lượt chơi chọn ngẫu nhiên chủ đề và từ khóa nên bộ câu sẽ thay đổi liên tục.",
    url: "game-2.html",
    icon: "account_tree",
    badge: "MIND MAP",
    image: "assets/images/games/game2-mindmap.png",
    tags: [
      { icon: "shuffle", label: "Random keyword" },
      { icon: "drag_indicator", label: "Kéo & thả" },
      { icon: "touch_app", label: "Hỗ trợ mobile" }
    ]
  },
  {
    id: "historical-hcm",
    title: "Dòng Mực Lịch Sử",
    description:
      "Trở thành người kiểm chứng lịch sử: đọc các số báo, phát hiện thông tin bị cài sai và đối chiếu các dấu mốc trong hành trình cách mạng và tư tưởng Hồ Chí Minh.",
    url: "game-hcm/index.html",
    icon: "newspaper",
    badge: "KIỂM CHỨNG",
    image: "assets/images/games/game3-history.png",
    tags: [
      { icon: "search", label: "Tìm sai lệch" },
      { icon: "history_edu", label: "5 hồ sơ" },
      { icon: "verified", label: "Kiểm chứng" }
    ]
  },
  {
    id: "quiz-show-hcm",
    title: "Ghế nóng Tư tưởng Hồ Chí Minh",
    description:
      "Chinh phục 15 câu hỏi ngẫu nhiên theo độ khó tăng dần, với các quyền trợ giúp 50:50, tra cứu giáo trình và hỏi hội trường.",
    url: "game-hcm/game2/index.html",
    icon: "quiz",
    badge: "15 CÂU",
    image: "assets/images/games/game4-hotseat.png",
    tags: [
      { icon: "shuffle", label: "Câu hỏi ngẫu nhiên" },
      { icon: "timer", label: "15 giây" },
      { icon: "help", label: "3 quyền trợ giúp" }
    ]
  }
];
