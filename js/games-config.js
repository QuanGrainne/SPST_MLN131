/**
 * Cấu hình trò chơi tương tác cho website Kinh tế chính trị Mác - Lênin (MLN131).
 * Gồm 4 game: Giải mã thuật ngữ, Bản đồ tư duy 6 chương, Ô chữ kinh tế chính trị, và Đấu trường Ghế nóng.
 */
const MLN131_GAMES_LIST = [
  {
    id: "decode-mln131",
    title: "Giải mã Thuật ngữ Kinh tế Chính trị",
    description:
      "Đọc gợi ý từ giáo trình, chọn các mảnh ghép từ khóa theo đúng thứ tự để giải mã các phạm trù kinh tế cốt lõi: Giá trị thặng dư, Tư bản khả biến, Lao động trừu tượng... Có hệ thống điểm, combo và giải thích chi tiết trích từ sách.",
    url: "game-1.html",
    icon: "encrypted",
    badge: "GIẢI MÃ THUẬT NGỮ",
    image: "assets/images/games/game1-decode.png",
    tags: [
      { icon: "extension", label: "Ghép từ khóa" },
      { icon: "bolt", label: "Combo điểm số" },
      { icon: "school", label: "Ôn 6 chương MLN131" },
      { icon: "auto_stories", label: "Dẫn chứng Giáo trình 2021" }
    ]
  },
  {
    id: "mindmap-mln131",
    title: "Bản đồ Tư duy 6 Chương KTCT",
    description:
      "Kéo và thả các khái niệm kinh tế vào đúng chương kiến thức: Đối tượng phương pháp, Thị trường & Giá trị thặng dư, Độc quyền & CNTB, KTTT định hướng XHCN, CNH-HĐH 4.0, hay Quan hệ lợi ích. Mỗi lượt chọn ngẫu nhiên các chủ đề và từ khóa.",
    url: "game-2.html",
    icon: "account_tree",
    badge: "MIND MAP 6 CHƯƠNG",
    image: "assets/images/games/game2-mindmap.png",
    tags: [
      { icon: "shuffle", label: "Từ khóa ngẫu nhiên" },
      { icon: "drag_indicator", label: "Kéo & thả trực quan" },
      { icon: "touch_app", label: "Hỗ trợ điện thoại" },
      { icon: "hub", label: "Hệ thống hóa tư duy" }
    ]
  },
  {
    id: "crossword-mln131",
    title: "Ô chữ Kinh tế Chính trị Mác - Lênin",
    description:
      "Thử thách trí tuệ với lưới ô chữ thông minh phủ khắp 6 chương của giáo trình 2021. Hơn 60 khái niệm chuẩn xác với gợi ý hướng ngang - hướng dọc, tự động kiểm tra đáp án và lưu lại tiến độ người học.",
    url: "crossword-game.html",
    icon: "grid_view",
    badge: "Ô CHỮ 60+ TỪ",
    image: "assets/images/games/game3-history.png",
    tags: [
      { icon: "grid_on", label: "Lưới ma trận linh hoạt" },
      { icon: "help_center", label: "Gợi ý thông minh" },
      { icon: "bookmark", label: "Tự lưu tiến độ" },
      { icon: "menu_book", label: "6 chương hoàn chỉnh" }
    ]
  },
  {
    id: "hotseat-mln131",
    title: "Đấu trường Ghế nóng Kinh tế Chính trị",
    description:
      "Chinh phục 15 câu hỏi trắc nghiệm kịch tính theo độ khó tăng dần từ nhận biết, thông hiểu đến vận dụng thực tiễn kinh tế. Sử dụng 3 quyền trợ giúp: 50:50, Tra cứu giáo trình và Hỏi ý kiến hội trường.",
    url: "game-hcm/game2/index.html",
    icon: "quiz",
    badge: "15 CÂU KỊCH TÍNH",
    image: "assets/images/games/game4-hotseat.png",
    tags: [
      { icon: "shuffle", label: "Ngân hàng trắc nghiệm chuẩn" },
      { icon: "timer", label: "Đếm ngược 15 giây" },
      { icon: "support", label: "3 quyền trợ giúp" },
      { icon: "military_tech", label: "Bậc thang giải thưởng" }
    ]
  }
];

window.HCM_GAMES = MLN131_GAMES_LIST;
window.MLN131_GAMES = MLN131_GAMES_LIST;
