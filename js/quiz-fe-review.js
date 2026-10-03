// Ngan hang cau hoi on thi FE - Tu tuong Ho Chi Minh
// Nguon: bo cau hoi do nguoi dung cung cap (Quizlet) + noi dung module1-6.html, da phan loai theo chuong
const FE_REVIEW_MODULES = [
  {
    "id": "m1",
    "title": "Cơ sở hình thành Tư tưởng Hồ Chí Minh"
  },
  {
    "id": "m2",
    "title": "Tư tưởng HCM về Độc lập Dân tộc và CNXH"
  },
  {
    "id": "m3",
    "title": "Tư tưởng HCM về Đảng và Nhà nước"
  },
  {
    "id": "m4",
    "title": "Tư tưởng HCM về Đoàn kết"
  },
  {
    "id": "m5",
    "title": "Tư tưởng HCM về Văn hóa và Đạo đức"
  },
  {
    "id": "m6",
    "title": "Tư tưởng HCM về Con người"
  }
];

const FE_REVIEW_QUESTIONS = [
  {
    id: "m1-1",
    module: "m1",
    question: "Nguyễn Ái Quốc đọc \"Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa\" của Lênin vào thời gian nào?",
    options: ["A. 7/1917","B. 7/1918","C. 7/1919","D. 7/1920"],
    correct: 3,
    explanation: "Đáp án đúng là: \"7/1920\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-2",
    module: "m1",
    question: "Hồ Chí Minh mất bao nhiêu năm bôn ba nước ngoài để tìm đường cứu nước?",
    options: ["A. 10 năm","B. 25 năm","C. 30 năm","D. 35 năm"],
    correct: 2,
    explanation: "Đáp án đúng là: \"30 năm\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-3",
    module: "m1",
    question: "Giai đoạn nào sau đây tư tưởng Hồ Chí Minh tiếp tục phát triển, hoàn thiện?",
    options: ["A. 1945 đến 1960","B. 1930 đến 1969","C. 1945 đến 1969","D. 1930 đến 1945"],
    correct: 2,
    explanation: "Đáp án đúng là: \"1945 đến 1969\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-4",
    module: "m1",
    question: "Giai đoạn nào sau đây Hồ Chí Minh tìm thấy con đường cứu nước giải phóng dân tộc?",
    options: ["A. 1911 đến 1930","B. 1911 đến 1920","C. 1911 đến 1935","D. 1930 đến 1945"],
    correct: 1,
    explanation: "Đáp án đúng là: \"1911 đến 1920\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-5",
    module: "m1",
    question: "Văn hoá phương Tây nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh trước khi người ra đi tìm đường cứu nước?",
    options: ["A. Văn hoá dân chủ, tiến bộ của Đức","B. Văn hoá dân chủ, tiến bộ của Pháp","C. Văn hoá dân chủ, tiến bộ của Nga","D. Văn hóa dân chủ, tiến bộ của Anh"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Văn hoá dân chủ, tiến bộ của Pháp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-6",
    module: "m1",
    question: "Nguyễn Tất Thành ở Anh vào thời gian nào?",
    options: ["A. 1911-1912","B. 1912-1913","C. 1914-1917","D. 1911-1915"],
    correct: 2,
    explanation: "Đáp án đúng là: \"1914-1917\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-7",
    module: "m1",
    question: "Ngoại ngữ nào sau đây được Hồ Chí Minh sử dụng trong thời gian học tập ở trường Quốc học Huế?",
    options: ["A. Tiếng Anh","B. Tiếng Pháp","C. Tiếng Trung","D. Tiếng Nga"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tiếng Pháp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-8",
    module: "m1",
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Tam dân của Tôn Trung Sơn là gì?",
    options: ["A. Chống phong kiến.","B. Đấu tranh vì tự do, dân chủ.","C. Phù hợp với điều kiện thực tế nước ta."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Phù hợp với điều kiện thực tế nước ta.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-9",
    module: "m1",
    question: "Tư tưởng Hồ Chí Minh hình thành trên cơ sở:",
    options: ["A. Vận dụng và phát triển sáng tạo chủ nghĩa Mác- Lênin","B. Tiếp thu toàn bộ chủ nghĩa Mác-Lênin","C. Tiếp thu một bộ phận của chủ nghĩa Mác-Lênin","D. Vận dụng hoàn toàn chủ nghĩa Mác - Lênin"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Vận dụng và phát triển sáng tạo chủ nghĩa Mác- Lênin\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-10",
    module: "m1",
    question: "Một trong những giá trị của văn hoá phương Tây được Hồ Chí Minh tiếp thu để hình thành tư tưởng của mình là:",
    options: ["A. Tư tưởng văn hoá dân chủ và cách mạng của cách mạng Pháp và cách mạng Mỹ.","B. Những mặt tích cực của Nho Giáo","C. Tư tưởng vị tha của Phật giáo","D. Chủ nghĩa Tam dân của Tôn Trung Sơn."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tư tưởng văn hoá dân chủ và cách mạng của cách mạng Pháp và cách mạng Mỹ.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-11",
    module: "m1",
    question: "Tư tưởng Hồ Chí Minh là",
    options: ["A. Hệ thống các luận điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam","B. Hệ thống các quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam","C. Hệ thống các tư tưởng toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam","D. Hệ thống các học thuyết toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Hệ thống các quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-12",
    module: "m1",
    question: "Tư tưởng Hồ Chí Minh được hình thành và phát triển qua mấy giai đoạn?",
    options: ["A. 3","B. 4","C. 5","D. 6"],
    correct: 2,
    explanation: "Đáp án đúng là: \"5\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-13",
    module: "m1",
    question: "Chọn phương án trả lời đúng nhất?",
    options: ["A. Chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng","B. Tư tưởng Hồ Chí Minh là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng","C. Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng ta"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Cùng với chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng ta\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-14",
    module: "m1",
    question: "Giai đoạn nào sau đây hình thành tư tưởng yêu nước và ý chí cứu nước của Hồ Chí Minh?",
    options: ["A. 1911 đến 1920","B. 1921 đến 1930","C. 1930 đến 1945","D. 1890 đến 1911"],
    correct: 3,
    explanation: "Đáp án đúng là: \"1890 đến 1911\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-15",
    module: "m1",
    question: "Để chuẩn bị thành lập Đảng Cộng sản Việt Nam, Nguyễn Ái Quốc đã từ Liên Xô về Trung Quốc năm nào?",
    options: ["A. 1925","B. 1927","C. 1923","D. 1924"],
    correct: 3,
    explanation: "Đáp án đúng là: \"1924\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-16",
    module: "m1",
    question: "\"Luận cương của V.I. Lênin làm cho tôi rất cảm động, phấn khởi, sáng tỏ, tin tưởng biết bao. Tôi vui mừng đến phát khóc lên. Ngồi một mình trong buồng mà tôi nói to lên như đang nói trước quần chúng đông đảo: hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta\" Nguyễn Ái Quốc nói câu ấy khi đang ở đâu?",
    options: ["A. Anh","B. Trung Quốc","C. Pháp","D. Liên Xô"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Pháp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-17",
    module: "m1",
    question: "Yếu tố nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh:",
    options: ["A. Lý luận và kinh nghiệm các cuộc cách mạng điển hình phương Tây","B. Kinh nghiệm các cuộc cách mạng điển hình ở phương Đông","C. Lý luận và thực tiễn các cuộc cách mạng điển hình trên thế giới"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Lý luận và thực tiễn các cuộc cách mạng điển hình trên thế giới\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-18",
    module: "m1",
    question: "Giá trị đạo đức nào sau đây ảnh hưởng chủ yếu đến sự hình thành tư tưởng Hồ Chí Minh?",
    options: ["A. Đạo đức Thiên chúa giáo","B. Đạo đức Phật giáo","C. Đạo đức Nho giáo"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Đạo đức Nho giáo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-19",
    module: "m1",
    question: "Đoạn viết sau đây ghi lại các điều kiện hình thành tư tưởng Hồ Chí Minh. Điều kiện nào bị viết sai?",
    options: ["A. Nhu cầu khách quan và bức thiết do cách mạng Việt Nam đặt ra là muốn cứu nước, phải tìm một con đường cách mạng mới.","B. Quê hương Hồ Chí Minh là mảnh đất giàu truyền thống yêu nước, chống giặc ngoại xâm.","C. Hồ Chí Minh sinh ra trong một gia đình nhà Nho yêu nước, gần gũi nhân dân, cụ thân sinh có tư tưởng thương dân, chủ trương lấy dân làm hậu thuẫn cho mọi cải cách chính trị.","D. Ngay từ khi còn nhỏ ở trong trường, Hồ Chí Minh đã nhận thức được đặc điểm thời đại."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Ngay từ khi còn nhỏ ở trong trường, Hồ Chí Minh đã nhận thức được đặc điểm thời đại.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-20",
    module: "m1",
    question: "Nguyễn Ái Quốc đến Liên Xô lần đầu khi nào?",
    options: ["A. 1921","B. 1922","C. 1923","D. 1924"],
    correct: 2,
    explanation: "Đáp án đúng là: \"1923\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-21",
    module: "m1",
    question: "Hồ Chí Minh không thừa nhận bản thân mình là:",
    options: ["A. Nhà khoa học","B. Nhà thơ","C. Nhà soạn nhac","D. Nhà chính trị chuyên nghiệp"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Nhà thơ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-22",
    module: "m1",
    question: "Giai đoạn nào sau đây Hồ Chí Minh vượt qua thử thách, kiên trì giữ vững lập trường cách mạng?",
    options: ["A. 1911 đến 1920","B. 1921 đến 1930","C. 1930 đến 1945","D. 1890 đến 1911"],
    correct: 2,
    explanation: "Đáp án đúng là: \"1930 đến 1945\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-23",
    module: "m1",
    question: "Nguyễn Tất Thành tham dự cuộc biểu tình chống thuế của nông dân tỉnh Thừa Thiên vào thời gian nào?",
    options: ["A. 5/1905","B. 5/1906","C. 5/1908","D. 6/1911"],
    correct: 2,
    explanation: "Đáp án đúng là: \"5/1908\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-24",
    module: "m1",
    question: "Một trong những yêu cầu cơ bản trong nghiên cứu tư tưởng Hồ Chí Minh là:",
    options: ["A. Đảm bảo thống nhất nguyên tắc tính Đảng và tính khoa học","B. Đảm bảo thống nhất nguyên tắc tính Nhà nước và tính khoa học","C. Đảm bảo thống nhất nguyên tắc tính Đảng và tính Nhà nước","D. Đảm bảo thống nhất nguyên tắc tính triết học và tính khoa học"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảm bảo thống nhất nguyên tắc tính Đảng và tính khoa học\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-25",
    module: "m1",
    question: "Ngoại ngữ nào sau đây được Hồ Chí Minh học đầu tiên?",
    options: ["A. Tiếng Anh","B. Tiếng Pháp","C. Tiếng Trung","D. Tiếng Nga"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tiếng Trung\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-26",
    module: "m1",
    question: "Nguồn gốc nào sau đây quyết định tư tưởng Hồ Chí Minh:",
    options: ["A. Tư tưởng Tam dân của Tôn Trung Sơn","B. Tư tưởng của Khổng tử","C. Tư tưởng của chủ nghĩa Mác-Lênin","D. Tư tưởng của Giêsu"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tư tưởng của chủ nghĩa Mác-Lênin\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-27",
    module: "m1",
    question: "Nguyên tắc cơ bản nào sau đây cần phải quán triệt trong nghiên cứu tư tưởng Hồ Chí Minh?",
    options: ["A. Quan điểm kế thừa và phát triển","B. Quan điểm kế thừa và toàn diện","C. Quan điểm cách mạng và cụ thể","D. Quan điểm toàn diện và cụ thể"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Quan điểm kế thừa và phát triển\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-28",
    module: "m1",
    question: "Người thầy giáo đầu tiên của Hồ Chí Minh là ai?",
    options: ["A. Vương Thúc Quý","B. Phan Bội Châu","C. Nguyễn Sinh Sắc","D. Phan Châu Trình"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Nguyễn Sinh Sắc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-29",
    module: "m1",
    question: "Nguyễn Ái Quốc tham dự Đại hội Tua, tán thành Quốc tế 3, tham gia thành lập Đảng Cộng sản Pháp thời gian nào?",
    options: ["A. 12/1921","B. 12/1918","C. 12/1919","D. 12/1920"],
    correct: 3,
    explanation: "Đáp án đúng là: \"12/1920\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-30",
    module: "m1",
    question: "Giai đoạn nào sau đây hình thành cơ bản tư tưởng Hồ Chí Minh về cách mạng Việt Nam?",
    options: ["A. 1945 đến 1969","B. 1930 đến 1945","C. 1921 đến 1930","D. 1911 đến 1920"],
    correct: 2,
    explanation: "Đáp án đúng là: \"1921 đến 1930\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-31",
    module: "m1",
    question: "Theo Hồ Chí Minh, học chủ nghĩa Mác - Lênin nghĩa là gì?",
    options: ["A. Học thuộc các luận điểm lý luận.","B. Để sống với nhau có tình, có nghĩa.","C. Để chứng tỏ trình độ lý luận.","D. Tất cả các phương án."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Để sống với nhau có tình, có nghĩa.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-32",
    module: "m1",
    question: "Tư tưởng Hồ Chí Minh được hình thành trong bối cảnh nào?",
    options: ["A. Chủ nghĩa tư bản đang trong giai đoạn tự do cạnh tranh.","B. Chủ nghĩa tư bản từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền.","C. Chủ nghĩa tư bản đang trong giai đoạn hình thành.","D. Chủ nghĩa xã hội đang trong giai đoạn phát triển."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Chủ nghĩa tư bản từ giai đoạn tự do cạnh tranh sang giai đoạn độc quyền.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-33",
    module: "m1",
    question: "Vận dụng tư tưởng Hồ Chí Minh cần phải nắm vững nguyên tắc:",
    options: ["A. Quan điểm lịch sử thế giới","B. Quan điểm lịch sử Việt Nam","C. Quan điểm lịch sử cụ thể","D. Quan điểm lịch sử toàn diện"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Quan điểm lịch sử cụ thể\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-34",
    module: "m1",
    question: "Nguyễn Tất Thành ở Mỹ vào thời gian nào?",
    options: ["A. 1911-1912","B. 1912-1913","C. 1914-1917","D. 1911-1915"],
    correct: 1,
    explanation: "Đáp án đúng là: \"1912-1913\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-35",
    module: "m1",
    question: "Một trong những quan điểm cơ bản nghiên cứu tư tưởng Hồ Chí Minh là:",
    options: ["A. Quan điểm đồng nhất","B. Quan điểm lịch sử cụ thể","C. Quan điểm cách mạng","D. Quan điểm phát triển"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Quan điểm lịch sử cụ thể\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-36",
    module: "m1",
    question: "Tư tưởng nào sau đây ảnh hưởng chủ yếu đến sự hình thành tư tưởng Hồ Chí Minh?",
    options: ["A. Đức hy sinh của Hồi giáo","B. Đức hy sinh của Nho giáo","C. Đức hy sinh của Ấn độ giáo","D. Đức hy sinh của Thiên chúa giáo"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Đức hy sinh của Thiên chúa giáo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-37",
    module: "m1",
    question: "Quan điểm nào sau đây thuộc về một trong những cơ sở phương pháp luận khi nghiên cứu tư tưởng Hồ Chí Minh?",
    options: ["A. Quan điểm toàn diện và hệ thống","B. Quan điểm khách quan và cụ thể","C. Quan điểm cách mạng và khoa học","D. Quan điểm toàn diện và cụ thể"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Quan điểm toàn diện và hệ thống\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-38",
    module: "m1",
    question: "Tư tưởng tôn giáo nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh?",
    options: ["A. Tư duy, hành động, ứng xử của Phật giáo","B. Tư duy, hành động, ứng xử của Hồi giáo","C. Tư duy, hành động, ứng xử của Ấn độ giáo"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tư duy, hành động, ứng xử của Phật giáo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-39",
    module: "m1",
    question: "Chọn phương án trả lời đúng với một trong những giai đoạn hình thành và phát triển tư tưởng Hồ Chí Minh?",
    options: ["A. Từ năm 1890 - 1911: Thời kỳ nghiên cứu, khảo sát thực tế, đến với chủ nghĩa Mác - Lênin.","B. Từ năm 1921 - 1930: Thời kỳ hình thành cơ bản tư tưởng về con đường cách mạng Việt Nam.","C. Từ năm 1911 - 1920: Thời kỳ hình thành tư tưởng yêu nước, chí hướng cứu nước"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Từ năm 1921 - 1930: Thời kỳ hình thành cơ bản tư tưởng về con đường cách mạng Việt Nam.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-40",
    module: "m1",
    question: "Nguyễn Tất Thành ra đi tìm đường cứu nước tại bến cảng Nhà Rồng - Sài Gòn vào thời gian nào?",
    options: ["A. 5/6/1911","B. 6/5/1911","C. 5/6/1910","D. 6/5/1912"],
    correct: 0,
    explanation: "Đáp án đúng là: \"5/6/1911\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-41",
    module: "m1",
    question: "Nguyên tắc cơ bản trong nghiên cứu tư tưởng Hồ Chí Minh là:",
    options: ["A. Lý luận gắn liền với thực tiễn","B. Thống nhất giữa tính Đảng và tính thực tiễn","C. Thống nhất giữa tính khoa học và thực tiễn","D. Quan điểm gắn liền với thực tiễn"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Lý luận gắn liền với thực tiễn\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-42",
    module: "m1",
    question: "Một trong những tiền đề tư tưởng, lí luận dẫn đến sự hình thành tư tưởng Hồ Chí Minh là:",
    options: ["A. Giá trị truyền thống dân tộc Việt Nam","B. Giá trị văn hiến dân tộc Việt Nam","C. Giá trị tư tưởng dân tộc Việt Nam","D. Giá trị văn minh dân tộcViệt Nam"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giá trị truyền thống dân tộc Việt Nam\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-43",
    module: "m1",
    question: "Nguyễn Ái Quốc là người Việt Nam thứ mấy tham gia vào Đảng Cộng sản Pháp?",
    options: ["A. Thứ nhất","B. Thứ hai","C. Thứ ba","D. Thứ tư"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Thứ nhất\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-44",
    module: "m1",
    question: "Một trong những nguyên tắc phương pháp luận khi nghiên cứu tư tưởng Hồ Chí Minh là:",
    options: ["A. Kết hợp nghiên cứu các tác phẩm với thực tiễn chỉ đạo cách mạng của Hồ Chí Minh.","B. Kết hợp nghiên cứu các tác phẩm với thực tiễn cách mạng thế giới.","C. Kết hợp nghiên cứu các tác phẩm với thực tiễn cách mạng Việt Nam.","D. Kết hợp thực tiễn cách mạng Việt Nam và cách mạng thế giới."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Kết hợp nghiên cứu các tác phẩm với thực tiễn chỉ đạo cách mạng của Hồ Chí Minh.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-45",
    module: "m1",
    question: "Trong thời gian ở nước ngoài, Nguyễn Tất Thành đã làm những công việc gì?",
    options: ["A. Đốt lò, bán báo","B. Thợ ảnh, làm bánh","C. Phụ bếp, cào tuyết","D. Tất cả các công việc"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các công việc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-46",
    module: "m1",
    question: "Nguyễn Tất Thành lấy tên là Nguyễn Ái Quốc vào thời gian nào?",
    options: ["A. Khi Bác lên tàu từ bến Nhà Rồng năm 1911.","B. Khi Bác tham gia sáng lập Đảng cộng sản Pháp tại Đại hội Tua 12/1920.","C. Tại hội nghị Vécxay (Pháp) ngày 18/6/1919.","D. Khi Bác sang Liên Xô làm việc ở Ban phương Đông của Quốc tế Cộng sản tháng 6/1923."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tại hội nghị Vécxay (Pháp) ngày 18/6/1919.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-47",
    module: "m1",
    question: "Một trong những truyền thống tốt đẹp của tư tưởng và văn hoá Việt Nam được Hồ Chí Minh tiếp thu để hình thành tư tưởng của mình là:",
    options: ["A. Chủ nghĩa yêu nước Việt Nam.","B. Những mặt tích cực của Nho Giáo","C. Tư tưởng vị tha của Phật giáo","D. Tư tưởng bác ái của Thiên Chúa Giáo."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa yêu nước Việt Nam.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-48",
    module: "m1",
    question: "Chủ nghĩa nào sau đây ảnh hưởng đến sự hình thành tư tưởng Hồ Chí Minh?",
    options: ["A. Chủ nghĩa dân tộc của Grady.","B. Chủ nghĩa dân chủ của Kenedy.","C. Chủ nghĩa tam dân của Tôn Trung Sơn."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Chủ nghĩa tam dân của Tôn Trung Sơn.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-49",
    module: "m1",
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Khổng Tử là gì?",
    options: ["A. Tinh thần hiếu học.","B. Quản lý xã hội bằng đạo đức.","C. Sự tu dưỡng đạo đức cá nhân."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Sự tu dưỡng đạo đức cá nhân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-50",
    module: "m1",
    question: "Tháng 7 năm 1920, Hồ Chí Minh đọc ... của V.I.Lênin",
    options: ["A. Tác phẩm Làm gì.","B. Sơ thảo lần thứ nhất Luận cương về các vấn đề dân tộc.","C. Sơ thảo lần thứ nhất những Luận cương về các vấn đề dân tộc và vấn đề thuộc địa","D. Tác phẩm Tuyên ngôn của Đảng Cộng sản"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Sơ thảo lần thứ nhất những Luận cương về các vấn đề dân tộc và vấn đề thuộc địa\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-51",
    module: "m1",
    question: "Khi ở Pháp Hồ Chí Minh đã sử dụng vật dụng nào để sưởi ấm?",
    options: ["A. Viên gạch","B. Hòn đá","C. Gối","D. Lò sưởi"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Viên gạch\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-52",
    module: "m1",
    question: "Mục đích chính để Hồ Chí Minh muốn ra nước ngoài là gì?",
    options: ["A. Xem nước Pháp và các nước khác làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.","B. Xem nước Pháp và các nước khác học như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.","C. Xem nước Pháp và các nước khác văn minh như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.","D. Xem nước Pháp và các nước khác tiến bộ như thế nào, tôi sẽ trở về giúp đồng bào chúng ta."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Xem nước Pháp và các nước khác làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-53",
    module: "m1",
    question: "Nguyễn Ái Quốc có tên là Hồ Chí Minh vào năm nào?",
    options: ["A. Năm 1942","B. Năm 1941","C. Năm 1943","D. Năm 1940"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Năm 1942\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-54",
    module: "m1",
    question: "Hồ Chí Minh bị quân Tưởng Giới Thạch bắt năm nào?",
    options: ["A. Năm 1944","B. Năm 1942","C. Năm 1941"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Năm 1942\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-55",
    module: "m1",
    question: "Hồ Chí Minh hoạt động tại Thái Lan vào thời gian nào?",
    options: ["A. 1933-1937","B. 1930-1931","C. 1932-1933","D. 1928-1929"],
    correct: 3,
    explanation: "Đáp án đúng là: \"1928-1929\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-56",
    module: "m1",
    question: "Hồ Chí Minh đến Nga lần đầu tiên vào năm nào?",
    options: ["A. Năm 1923","B. Năm 1924","C. Năm 1928","D. Năm 1920"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Năm 1923\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-57",
    module: "m1",
    question: "Hồ Chí Minh về nước lần đầu tiên vào năm nào?",
    options: ["A. Cuối năm 1941","B. Cuối năm 1942","C. Cuối năm 1944","D. Cuối năm 1911"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Cuối năm 1941\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-58",
    module: "m1",
    question: "Theo Hồ Chí Minh, việc vận dụng chủ nghĩa Mác - Lênin phải:",
    options: ["A. Luôn phù hợp với từng đối tượng.","B. Luôn luôn phù hợp với từng hoàn cảnh.","C. Tất cả các phương án."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Luôn luôn phù hợp với từng hoàn cảnh.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m1-59",
    module: "m1",
    question: "\"Đường cách mệnh\" là tác phẩm chính trị được Hồ Chí Minh viết tại nước nào sau đây:",
    options: ["A. Pháp","B. Trung Quốc","C. Anh","D. Liên Xô"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Trung Quốc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-1",
    module: "m2",
    question: "Nguyễn Ái Quốc gửi bản \"Bản yêu sách của nhân dân An Nam\" tới Hội nghị Vécxây, đòi chính phủ Pháp thừa nhận các quyền tự do, dân chủ và bình đẳng của nhân dân Việt Nam vào thời gian nào?",
    options: ["A. 6/1917","B. 6/1918","C. 6/1919","D. 6/1920"],
    correct: 2,
    explanation: "Đáp án đúng là: \"6/1919\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-2",
    module: "m2",
    question: "Phẩm chất nào dưới đây không có trong nhân tố chủ quan dẫn đến hình thành tư tưởng Hồ Chí Minh?",
    options: ["A. Một trái tim yêu nước thương dân, sẵn sàng chịu đựng hy sinh","B. Tư duy độc lập, tự chủ, sáng tạo, đầu óc phê phán tinh tường, sáng suốt","C. Bản lĩnh kiên định, luôn tin vào nhân dân, khiêm tốn, bình dị, ham học hỏi","D. Ham công danh, phú quý."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Ham công danh, phú quý.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-3",
    module: "m2",
    question: "Theo Hồ Chí Minh, ưu điểm lớn nhất của chủ nghĩa Mác là gì?",
    options: ["A. Bản chất cách mạng","B. Chủ nghĩa nhân đạo triệt để","C. Phương pháp làm việc biện chứng","D. Bản chất khoa học"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Phương pháp làm việc biện chứng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-4",
    module: "m2",
    question: "Một trong những giá trị nào dưới đây dẫn đến hình thành tư tưởng Hồ Chí Minh?",
    options: ["A. Chủ nghĩa yêu nước","B. Chủ nghĩa xã hội","C. Chủ nghĩa nhân đạo","D. Chủ nghĩa nhân văn"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa yêu nước\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-5",
    module: "m2",
    question: "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh trong thời đại cách mạng vô sản là vấn đề:",
    options: ["A. Vấn đề dân tộc chủ nghĩa","B. Vấn đề dân tộc thuộc địa","C. Vấn đề dân tộc phương Đông","D. Vấn đề dân tộc nói chung"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Vấn đề dân tộc thuộc địa\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-6",
    module: "m2",
    question: "Cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
    options: ["A. Tiến hành chủ động và sáng tạo","B. Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác.","C. Dựa vào thắng lợi của cách mạng vô sản ở chính quốc.","D. Tiến hành song hành với cách mạng vô sản ở chính quốc ."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tiến hành chủ động và sáng tạo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-7",
    module: "m2",
    question: "Hồ Chí Minh cho rằng giải phóng dân tộc là sự nghiệp của:",
    options: ["A. Toàn dân","B. Toàn quân","C. Toàn Đảng","D. Giai cấp công nhân"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Toàn dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-8",
    module: "m2",
    question: "Theo Hồ Chí Minh đối tượng cơ bản của cách mạng thuộc địa là:",
    options: ["A. Thực dân, tay sai phản động.","B. Thực dân, đế quốc.","C. Thực dân, tư sản.","D. Thực dân, phong kiến."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Thực dân, tay sai phản động.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-9",
    module: "m2",
    question: "Hồ Chí Minh vạch ra mục tiêu của cách mạng giải phóng dân tộc thuộc địa là:",
    options: ["A. Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của nhân dân.","B. Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay người lao động.","C. Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền về tay lực lượng cách mạng.","D. Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của công nông."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-10",
    module: "m2",
    question: "Luận điểm nào là của Hồ Chí Minh?",
    options: ["A. Hãy xóa bỏ tình trạng người bóc lột người thì tình trạng dân tộc này bóc lột dân tộc khác sẽ bị xóa bỏ.","B. Khi mà sự đối kháng giữa các giai cấp trong nội bộ dân tộc không còn nữa thì sự thù địch giữa các dân tộc cũng đồng thời mất theo.","C. Giải phóng giai cấp là nhiệm vụ trung tâm, là điều kiện để giải phóng dân tộc."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Giải phóng giai cấp là nhiệm vụ trung tâm, là điều kiện để giải phóng dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-11",
    module: "m2",
    question: "Theo Hồ Chí Minh, giải quyết vấn đề dân tộc luôn gắn với vấn đề :",
    options: ["A. Xã hội","B. Người lao động","C. Giai cấp","D. Nông dân"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Giai cấp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-12",
    module: "m2",
    question: "Các luận điểm sau đây đều thể hiện tư tưởng dựa vào sức mình là chính. Luận điểm nào không phải của Hồ Chí Minh?",
    options: ["A. Sự nghiệp giải phóng của giai cấp công nhân phải do bản thân giai cấp công nhân tự làm lấy.","B. Công cuộc giải phóng các dân tộc thuộc địa chỉ có thể thực hiện được bằng sự nỗ lực của bản thân các dân tộc đó.","C. Đem sức ta mà tự giải phóng cho ta.","D. Muốn người ta giúp cho, thì trước hết mình phải tự giúp lấy mình đã."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Sự nghiệp giải phóng của giai cấp công nhân phải do bản thân giai cấp công nhân tự làm lấy.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-13",
    module: "m2",
    question: "Con đường cứu nước của Hồ Chí Minh là:",
    options: ["A. Độc lập dân tộc gắn liền với chủ nghĩa xã hội.","B. Giải phóng dân tộc gắn liền với chủ nghĩa xã hội.","C. Giải phóng dân tộc gắn với chủ nghĩa dân tộc.","D. Độc lập dân tộc gắn liền với chế độ dân chủ."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Độc lập dân tộc gắn liền với chủ nghĩa xã hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-14",
    module: "m2",
    question: "Thực chất vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh là:",
    options: ["A. Thực hiện quyền tự quyết đối với tất cả các dân tộc.","B. Đòi quyền tự do dân chủ tối thiểu cho nhân dân.","C. Đấu tranh giải phóng các dân tộc thuộc địa khỏi sự áp bức, thống trị của nước ngoài, giành độc lập dân tộc, thành lập nhà nước dân tộc độc lập và đưa đất nước phát triển theo xu thế của thời đại."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Đấu tranh giải phóng các dân tộc thuộc địa khỏi sự áp bức, thống trị của nước ngoài, giành độc lập dân tộc, thành lập nhà nước dân tộc độc lập và đưa đất nước phát triển theo xu thế của thời đại.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-15",
    module: "m2",
    question: "Một trong những nội dung cơ bản của bản Yêu sách gồm tám điểm của Nguyễn Ái Quốc gửi đến Hội nghị Vecxay (Pháp) là:",
    options: ["A. Đòi quyền tự do dân chủ tối thiểu cho nhân dân.","B. Đòi quyền tự trị của dân tộc.","C. Đòi quyền độc lập dân tộc.","D. Đòi quyền bình đẳng."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đòi quyền tự do dân chủ tối thiểu cho nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-16",
    module: "m2",
    question: "Hồ Chí Minh là người đấu tranh đòi quyền độc lập cho:",
    options: ["A. Dân tộc Việt Nam .","B. Các dân tộc thuộc địa ở phương Đông.","C. Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới.","D. Dân tộc thuộc địa ở Đông Dương."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Dân tộc Việt Nam và tất cả các dân tộc bị áp bức trên thế giới.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-17",
    module: "m2",
    question: "Đâu là câu nói nổi tiếng của Hồ Chí Minh",
    options: ["A. Không có gì quý hơn độc lập tự do","B. Hạnh phúc là đấu tranh","C. Cách mạng là bạo lực"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Không có gì quý hơn độc lập tự do\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-18",
    module: "m2",
    question: "Theo Hồ Chí Minh",
    options: ["A. Giữ vững độc lập của dân tộc mình đồng thời tôn trọng độc lập của các dân tộc khác","B. Giữ vững độc lập của dân tộc mình đồng thời kính trọng độc lập của các dân tộc khác","C. Giữ vững độc lập của dân tộc mình đồng thời tôn trọng tự do của các dân tộc khác","D. Giữ vững độc lập của dân tộc mình đồng thời giữ vững độc lập của các dân tộc khác."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giữ vững độc lập của dân tộc mình đồng thời tôn trọng độc lập của các dân tộc khác\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-19",
    module: "m2",
    question: "Giải phóng dân tộc theo tư tưởng Hồ Chí Minh, xét về thực chất là:",
    options: ["A. Đánh đổ ách áp bức, thống trị của đế quốc, thực dân giành độc lập dân tộc.","B. Giành độc lập dân tộc, hình thành nhà nước dân tộc độc lập.","C. Tự do lựa chọn con đường phát triển của dân tộc phù hợp với xu thế phát triển của thời đại.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-20",
    module: "m2",
    question: "Cách mạng giải phóng dân tộc muốn thắng lợi phải:",
    options: ["A. Có tổ chức đoàn thể lãnh đạo.","B. Có Đảng của giai cấp công nhân lãnh đạo.","C. Có một cá nhân xuất sắc lãnh đạo.","D. Có một giai cấp lãnh đạo."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Có Đảng của giai cấp công nhân lãnh đạo.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-21",
    module: "m2",
    question: "Thực chất của giải phóng giai cấp theo tư tưởng Hồ Chí Minh là:",
    options: ["A. Xóa bỏ các giai cấp bóc lột với tính cách là giai cấp thống trị xã hội.","B. Tiêu diệt cá nhân những con người thuộc các giai cấp bóc lột.","C. Không chủ trương thủ tiêu giai cấp bóc lột thống trị xã hội.","D. Tất cả các phương án."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Xóa bỏ các giai cấp bóc lột với tính cách là giai cấp thống trị xã hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-22",
    module: "m2",
    question: "Theo Hồ Chí Minh",
    options: ["A. Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp","B. Giải phóng dân tộc tạo tiền đề để giải phóng nhân loại","C. Giải phóng dân tộc tạo tiền đề để giải phóng người lao động","D. Giải phóng dân tộc tạo tiền đề để giải phóng xã hội"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giải phóng dân tộc tạo tiền đề để giải phóng giai cấp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-23",
    module: "m2",
    question: "Bạo lực cách mạng theo tư tưởng Hồ Chí Minh là:",
    options: ["A. Đấu tranh chính trị.","B. Đấu tranh vũ trang.","C. Kết hợp đấu tranh chính trị với đấu tranh vũ trang.","D. Đấu tranh ngoại giao."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Kết hợp đấu tranh chính trị với đấu tranh vũ trang.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-24",
    module: "m2",
    question: "Theo Hồ Chí Minh, đặc điểm của cách mạng tư sản là:",
    options: ["A. Độc lập dân tộc","B. Đấu tranh giải phóng dân tộc thuộc địa","C. Không đến nơi","D. Xây dựng nhà nước công nông"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Không đến nơi\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-25",
    module: "m2",
    question: "Mối quan hệ giữa vấn đề dân tộc và vấn đề giai cấp trong tư tưởng Hồ Chí Minh là:",
    options: ["A. Dân tộc với giai cấp có quan hệ chặt chẽ với nhau.","B. Độc lập dân tộc gắn liền chủ nghĩa xã hội.","C. Giải phóng dân tộc là tiền đề để giải phóng giai cấp.","D. Tất cả các phương án"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-26",
    module: "m2",
    question: "Hồ Chí Minh cho rằng:",
    options: ["A. Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.","B. Độc lập, tự do là tất yếu đối với các dân tộc.","C. Độc lập, tự do là khát vọng thiêng liêng của mọi dân tộc.","D. Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của riêng dân tộc Việt Nam."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-27",
    module: "m2",
    question: "Vấn đề dân tộc trong tư tưởng Hồ Chí Minh là sự kết hợp nhuần nhuyễn:",
    options: ["A. Dân tộc với giai cấp.","B. Độc lập dân tộc và chủ nghĩa xã hội.","C. Chủ nghĩa yêu nước với chủ nghĩa quốc tế.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-28",
    module: "m2",
    question: "Nội dung cốt lõi của tư tưởng Hồ Chí Minh là:",
    options: ["A. Độc lập dân tộc gắn liền với chủ nghĩa xã hội.","B. Giải phóng giai cấp.","C. Giải phóng dân tộc.","D. Giải phóng con người."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Độc lập dân tộc gắn liền với chủ nghĩa xã hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-29",
    module: "m2",
    question: "Theo Hồ Chí Minh độc lập, tự do là:",
    options: ["A. Quyền thiêng liêng của tất cả các dân tộc.","B. Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc.","C. Quyền bất khả xâm phạm của tất cả các dân tộc.","D. Đặc quyền của mỗi một dân tộc."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Quyền thiêng liêng và bất khả xâm phạm của tất cả các dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-30",
    module: "m2",
    question: "Các lực lượng thực hiện giải phóng dân tộc, giải phóng giai cấp, giải phóng con người theo tư tưởng Hồ Chí Minh là:",
    options: ["A. Đảng cộng sản.","B. Khối đại đoàn kết dân tộc, đòan kết toàn dân mà nòng cốt là liên minh công-nông-trí thức.","C. Các lực lượng cách mạng thế giới.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-31",
    module: "m2",
    question: "Hồ Chí Minh vạch ra nhiệm vụ hàng đầu của cách mạng ở thuộc địa là:",
    options: ["A. Giải phóng dân tộc","B. Giải phóng giai cấp","C. Giải phóng nhân loại","D. Giải phóng xã hội"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giải phóng dân tộc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-32",
    module: "m2",
    question: "Tư tưởng bạo lực cách mạng của Hồ Chí Minh gắn bó hữu cơ với:",
    options: ["A. Nhân văn, hòa bình","B. Nhân đạo, hòa bình","C. Tự do, hòa bình","D. Dân chủ, hòa bình"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Nhân đạo, hòa bình\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-33",
    module: "m2",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc cần được tiến hành:",
    options: ["A. Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc","B. Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản thế giới","C. Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng thuộc địa"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ động, sáng tạo và có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-34",
    module: "m2",
    question: "Hồ Chí Minh ví trẻ em như",
    options: ["A. Hoa trên cành","B. Búp trên cành","C. Lá non trên cành"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Búp trên cành\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-35",
    module: "m2",
    question: "Hồ Chí Minh trực tiếp chỉ huy chiến dịch nào sau đây trong kháng chiến chống Pháp?",
    options: ["A. Chiến dịch Đông Xuân","B. Chiến dịch Điện Biên Phủ","C. Chiến dịch Biên giới"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Chiến dịch Biên giới\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-36",
    module: "m2",
    question: "Trong tư tưởng Hồ Chí Minh, nhiệm vụ hàng đầu, trên hết, trước hết của cách mạng Việt Nam là :",
    options: ["A. Giải phóng dân tộc.","B. Giải phóng giai cấp.","C. Giải phóng con người.","D. Tất cả các phương án"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giải phóng dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-37",
    module: "m2",
    question: "Hồ Chí Minh cho rằng:",
    options: ["A. Chủ nghĩa dân tộc là động lực lớn của đất nước.","B. Chủ nghĩa dân tộc là khát khao lớn của đất nước.","C. Chủ nghĩa dân tộc là mục tiêu lớn của đất nước.","D. Chủ nghĩa dân tộc là chiến lược hàng đầu của cách mạng."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa dân tộc là động lực lớn của đất nước.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-38",
    module: "m2",
    question: "Giải phóng con người theo tư tưởng Hồ Chí Minh là:",
    options: ["A. Giải phóng con người với tư cách từng cá nhân","B. Giải phóng con người với tư cách là cả loài người.","C. Giải phóng con người với tư cách từng cá nhân và cả loài người.","D. Giải phóng những người bị bóc lột."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Giải phóng con người với tư cách từng cá nhân và cả loài người.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-39",
    module: "m2",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi phải do ai lãnh đạo?",
    options: ["A. Đảng Cộng sản","B. Giai cấp công nhân","C. Giai cấp vô sản","D. Đảng của giai cấp tư sản"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng Cộng sản\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-40",
    module: "m2",
    question: "Theo Hồ Chí Minh:",
    options: ["A. Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế.","B. Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân văn.","C. Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa nhân đạo.","D. Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa dân tộc."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Phải kết hợp nhuần nhuyễn dân tộc với giai cấp, độc lập dân tộc và chủ nghĩa xã hội, chủ nghĩa yêu nước với chủ nghĩa quốc tế.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-41",
    module: "m2",
    question: "Nội dung nào không đúng về giá trị lý luận và thực tiễn của Tư tưởng Hồ Chí Minh về vấn đề dân tộc và cách mạng giải phóng dân tộc:",
    options: ["A. Làm phong phú học thuyết Mác-Lênin về cách mạng thuộc địa.","B. Soi đường thắng lợi cho cách mạng giải phóng dân tộc ở Việt Nam","C. Nền tảng tư tưởng và kim chỉ nam cho hành động của cách mạng Việt Nam"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Nền tảng tư tưởng và kim chỉ nam cho hành động của cách mạng Việt Nam\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-42",
    module: "m2",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc cần tiến hành bằng:",
    options: ["A. Con đường cách mạng bất bạo động","B. Con đường cách mạng bạo lực","C. Con đường cách mạng ôn hòa","D. Con đường cách mạng cải lương"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Con đường cách mạng bạo lực\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-43",
    module: "m2",
    question: "Nội dung nào không phải là thực chất vấn đề dân tộc thuộc địa trong tư tưởng Hồ Chí Minh:",
    options: ["A. Đấu tranh chống chủ nghĩa thực dân, giải phóng dân tộc.","B. Lựa chọn con đường phát triển của dân tộc là CNXH.","C. Đòi quyền tự do dân chủ tối thiểu cho nhân dân."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Đòi quyền tự do dân chủ tối thiểu cho nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-44",
    module: "m2",
    question: "Theo Hồ Chí Minh, nội dung cốt lõi của vấn đề dân tộc thuộc địa là:",
    options: ["A. Tự do, dân chủ","B. Độc lập, tự do","C. Người cày có ruộng","D. Quyền con người"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Độc lập, tự do\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-45",
    module: "m2",
    question: "Cách mạng giải phóng dân tộc là sự nghiệp đoàn kết của:",
    options: ["A. Giai cấp công nhân.","B. Giai cấp công nhân và nông dân","C. Toàn dân, trên cơ sở liên minh công-nông.","D. Công - nông - trí thức"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Toàn dân, trên cơ sở liên minh công-nông.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-46",
    module: "m2",
    question: "Theo Hồ Chí Minh, cách mạng giải phóng dân tộc muốn thắng lợi:",
    options: ["A. Phải đi theo con đường cách mạng vô sản.","B. Phải đi theo con đường cách mạng Pháp, Mỹ.","C. Phải đi theo con đường cách mạng tháng Mười Nga","D. Phải đi theo con đường cách mạng của các bậc tiền bối Việt Nam."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Phải đi theo con đường cách mạng vô sản.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-47",
    module: "m2",
    question: "Giải phóng dân tộc theo tư tưởng Hồ Chí Minh, xét về thực chất là:",
    options: ["A. Đánh đổ ách áp bức, thống trị của đế quốc, thực dân giành độc lập dân tộc.","B. Hình thành nhà nước dân tộc độc lập.","C. Tự do lựa chọn con đường phát triển của dân tộc phù hợp với xu thế phát triển của thời đại.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-48",
    module: "m2",
    question: "Nội dung cốt lõi của vấn đề dân tộc thuộc địa được Hồ Chí Minh tiếp cận từ:",
    options: ["A. Tự do dân chủ","B. Quyền con người","C. Khát vọng giải phóng dân tộc","D. Chủ quyền dân tộc"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Quyền con người\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-49",
    module: "m2",
    question: "Theo Hồ Chí Minh, lực lượng của cách mạng giải phóng dân tộc là:",
    options: ["A. Toàn dân tộc.","B. Công nhân và nông dân.","C. Trí thức, tiểu tư sản, tư sản dân tộc, địa chủ vừa và nhỏ.","D. Công nhân, nông dân và trí thức"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Toàn dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-50",
    module: "m2",
    question: "Cách mạng giải phóng dân tộc muốn giành được thắng lợi cần phải:",
    options: ["A. Dựa vào sự thắng lợi của cách mạng ở các nước thuộc địa khác.","B. Dựa vào thắng lợi của cách mạng vô sản ở chính quốc.","C. Tiến hành chủ động và sáng tạo.","D. Tiến hành sau khi cách mạng vô sản ở chính quốc giành thắng lợi."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tiến hành chủ động và sáng tạo.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-51",
    module: "m2",
    question: "Ai là người đầu tiên được Hồ Chí Minh phong hàm đại tướng?",
    options: ["A. Võ Nguyên Giáp","B. Nguyễn Sơn","C. Nguyễn Chí Thanh"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Võ Nguyên Giáp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-52",
    module: "m2",
    question: "Theo Hồ Chí Minh, nhiệm vụ lịch sử của thời kỳ quá độ ở nước ta là phải:",
    options: ["A. Xây dựng nền tảng vật chất và kỹ thuật của chủ nghĩa xã hội.","B. Cải tạo nền kinh tế cũ và xây dựng nền kinh tế mới.","C. Tất cả các phương án."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Xây dựng nền tảng vật chất và kỹ thuật của chủ nghĩa xã hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-53",
    module: "m2",
    question: "Theo Hồ Chí Minh:",
    options: ["A. Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Việt Nam.","B. Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng thế giới","C. Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Đông Nam Á."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Sự ra đời của CNXH ở Việt Nam là sản phẩm tất yếu của quá trình phát triển lịch sử, quá trình cách mạng Việt Nam.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-54",
    module: "m2",
    question: "Theo Hồ Chí Minh, biện pháp cơ bản nhất để xây dựng chủ nghĩa xã hội là:",
    options: ["A. Đem của dân, tài dân, sức dân làm lợi cho dân.","B. Nhà nước phải ban phát từ trên xuống.","C. Phải dựa vào sự giúp đỡ của các nước xã hội chủ nghĩa.","D. Phải tự lực cánh sinh, dựa vào sức mình là chính."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đem của dân, tài dân, sức dân làm lợi cho dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-55",
    module: "m2",
    question: "Trong xây dựng chủ nghĩa xã hội, Hồ Chí Minh chủ trương đối xử với giai cấp tư sản dân tộc như thế nào?",
    options: ["A. Xóa bỏ quyền sở hữu về tư liệu sản xuất của họ","B. Không xóa bỏ quyền sở hữu tư liệu sản xuất của họ","C. Đánh đổ họ với tư cách là giai cấp bóc lột","D. Phát triển giai cấp này cả về số lượng và chất lượng"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Không xóa bỏ quyền sở hữu tư liệu sản xuất của họ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-56",
    module: "m2",
    question: "Quan điểm nào dưới đây thuộc về bản chất của CNXH trong tư tưởng Hồ Chí Minh?",
    options: ["A. Có đạo đức, con người phát triển cao","B. Có văn hóa, con người phát triển cao","C. Có văn hóa, đạo đức phát triển cao"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Có văn hóa, đạo đức phát triển cao\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-57",
    module: "m2",
    question: "Theo Hồ Chí Minh, về bước đi trong thời kỳ quá độ, chúng ta phải:",
    options: ["A. Trải qua nhiều bước","B. Làm thật mau và rầm rộ","C. Làm nhanh và rầm rộ qua nhiều bước"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Trải qua nhiều bước\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-58",
    module: "m2",
    question: "Theo Hồ Chí Minh, mục tiêu kinh tế của thời kỳ quá độ lên CNXH là:",
    options: ["A. Công, lâm nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện.","B. Công, diêm nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện.","C. Công, nông nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Công, nông nghiệp hiện đại, khoa học - kỹ thuật tiên tiến, bóc lột được bỏ dần, vật chất được cải thiện.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-59",
    module: "m2",
    question: "Theo Hồ Chí Minh, muốn xây dựng chủ nghĩa xã hội trước hết cần có cái gì?",
    options: ["A. Khoa học - kỹ thuật tiên tiến","B. Con người xã hội chủ nghĩa","C. Kinh tế phát triển","D. Tài nguyên thiên nhiên của đất nước"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Con người xã hội chủ nghĩa\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-60",
    module: "m2",
    question: "Theo Hồ Chí Minh, động lực chủ yếu để phát triển đất nước là:",
    options: ["A. Sức mạnh đoàn kết của cả cộng đồng dân tộc.","B. Sức mạnh của cá nhân con người.","C. Sức mạnh thời đại.","D. Vai trò lãnh đạo của Đảng."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Sức mạnh đoàn kết của cả cộng đồng dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-61",
    module: "m2",
    question: "Theo Hồ Chí Minh, nền kinh tế mà chúng ta xây dựng phải được tạo lập trên cơ sở:",
    options: ["A. Nền nông nghiệp hiện đại.","B. Nền công nghiệp hiện đại.","C. Khoa học kỹ thuật tiên tiến.","D. Chế độ công hữu về tư liệu sản xuất."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Chế độ công hữu về tư liệu sản xuất.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-62",
    module: "m2",
    question: "Theo Hồ Chí Minh, cách mạng XHCN phải tiến hành đồng thời với:",
    options: ["A. Cách mạng tư sản","B. Cách mạng dân tộc dân chủ nhân dân","C. Cách mạng văn hóa","D. Cách mạng giai cấp"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Cách mạng dân tộc dân chủ nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-63",
    module: "m2",
    question: "Theo Hồ Chí Minh, trong thời kỳ quá độ còn tồn tại hình thức:",
    options: ["A. Sở hữu của nhà nước và sở hữu của hợp tác xã.","B. Sở hữu của người lao động riêng lẻ và sở hữu của nhà tư bản.","C. Tất cả các phương án."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-64",
    module: "m2",
    question: "Con đường quá độ lên chủ nghĩa xã hội ở nước ta đươc Hồ Chí Minh vạch ra dựa trên:",
    options: ["A. Chủ nghĩa Mác-Lênin.","B. Chủ nghĩa dân chủ.","C. Sự kết hợp giữa chủ nghĩa Mác-lênin với thực tế Việt Nam.","D. Kết hợp giữa chủ nghĩa Tam dân và thực tế Việt Nam."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Sự kết hợp giữa chủ nghĩa Mác-lênin với thực tế Việt Nam.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-65",
    module: "m2",
    question: "Theo Hồ Chí Minh, CNXH phải do:",
    options: ["A. Nhân dân lao động làm chủ","B. Giai cấp công nhân làm chủ","C. Giai cấp nông dân làm chủ","D. Công nhân - nông dân - trí thức làm chủ"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Nhân dân lao động làm chủ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-66",
    module: "m2",
    question: "Theo Hồ Chí Minh, con đường quá độ lên CNXH ở Việt Nam là:",
    options: ["A. Quá độ trực tiếp.","B. Quá độ gián tiếp.","C. Quá độ kết hợp nhiều hình thức.","D. Quá độ gián tiếp cụ thể."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Quá độ gián tiếp cụ thể.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-67",
    module: "m2",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh, để xác định bước đi và tìm cách làm của chủ nghĩa xã hội phù hợp với Việt Nam cần phải:",
    options: ["A. Theo bước đi của các nước xã hội chủ nghĩa, vừa làm vừa tìm kiếm mô hình phù hợp.","B. Quán triệt các nguyên lý cơ bản của chủ nghĩa Mác-Lênin về xây dựng chế độ mới, có thể tham khảo, học tập kinh nghiệm của các nước anh em.","C. Xuất phát từ điều kiện thực tế, đặc điểm dân tộc, nhu cầu và khả năng thực tế của nhân dân."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Theo bước đi của các nước xã hội chủ nghĩa, vừa làm vừa tìm kiếm mô hình phù hợp.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-68",
    module: "m2",
    question: "Quan điểm nào dưới đây thuộc về bản chất của CNXH trong tư tưởng Hồ Chí Minh?",
    options: ["A. Chế độ chính trị do nhân dân làm chủ.","B. Chế độ chính trị do nhân dân sáng tạo.","C. Chế độ chính trị do nhà nước làm chủ.","D. Chế độ chính trị do Đảng làm chủ."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chế độ chính trị do nhân dân làm chủ.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-69",
    module: "m2",
    question: "Hồ Chí Minh chủ trương tiến hành:",
    options: ["A. Cách mạng tư sản dân quyền trước cách mạng thổ địa","B. Cách mạng thổ địa trước cách mạng tư sản dân quyền","C. Tiến hành động thời cách mạng tư sản dân quyền với cách mạng xã hội chủ nghĩa"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Cách mạng tư sản dân quyền trước cách mạng thổ địa\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-70",
    module: "m2",
    question: "Quá độ lên chủ nghĩa xã hội theo Hồ Chí Minh là:",
    options: ["A. Xóa bỏ toàn bộ những thành tựu của xã hội cũ","B. Kế thừa toàn bộ những gì xã hội cũ để lại","C. Kế thừa những giá trị của xã hội cũ"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Kế thừa những giá trị của xã hội cũ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-71",
    module: "m2",
    question: "Theo Hồ Chí Minh, nội dung nào không đúng để phát huy động lực con người:",
    options: ["A. Phát huy sức mạnh đoàn kết của cả cộng đồng dân tộc.","B. Phát huy sức mạnh của cá nhân con người.","C. Phát huy các yếu tố chính trị, tinh thần."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Phát huy sức mạnh của cá nhân con người.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-72",
    module: "m2",
    question: "Quan điểm của Hồ Chí Minh là:",
    options: ["A. Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu đối với các nước phương Đông.","B. Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu của các nước đang phát triển.","C. Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu của các nước trên thế giới.","D. Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu ở Việt Nam sau khi nước nhà giành được độc lập theo con đường cách mạng vô sản."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tiến lên chủ nghĩa xã hội là bước phát triển tất yếu ở Việt Nam sau khi nước nhà giành được độc lập theo con đường cách mạng vô sản.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-73",
    module: "m2",
    question: "Ham muốn tột bậc của Hồ Chí Minh là gì?",
    options: ["A. Nước được độc lập","B. Dân được tự do","C. Đồng bào ai cũng có cơm ăn, áo mặc, được học hành","D. Tất cả các phương án"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Đồng bào ai cũng có cơm ăn, áo mặc, được học hành\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-74",
    module: "m2",
    question: "Để bảo đảm thực hiện thắng lợi chủ nghĩa xã hội ở Việt Nam trong thời kỳ quá độ, theo Hồ Chí Minh phải:",
    options: ["A. Giữ vững và tăng cường vai trò lãnh đạo của Đảng; nâng cao vai trò quản lý của nhà nước.","B. Phát huy tính tích cực, chủ động của các tổ chức chính trị-xã hội; xây dựng đội ngũ cán bộ đủ đức và tài.","C. Tất cả các phương án"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giữ vững và tăng cường vai trò lãnh đạo của Đảng; nâng cao vai trò quản lý của nhà nước.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-75",
    module: "m2",
    question: "Trong bản di chúc, Hồ Chí Minh có viết điều mong muốn cuối cùng là:",
    options: ["A. Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh và góp phần xứng đáng vào sự nghiệp cách mạng thế giới.","B. Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh và góp phần xứng đáng vào sự nghiệp cách mạng khu vực.","C. Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh và góp phần xứng đáng vào sự nghiệp cách mạng chung."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh và góp phần xứng đáng vào sự nghiệp cách mạng chung.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-76",
    module: "m2",
    question: "Đâu là bản chất của CNXH trong tư tưởng Hồ Chí Minh?",
    options: ["A. Có xã hội dân sự","B. Có xã hội dân quyền","C. Có nền chính trị dân chủ"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Có xã hội dân sự\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-77",
    module: "m2",
    question: "Hồ Chí Minh cho rằng quá độ lên chủ nghĩa xã hội ở Việt Nam phải tiến hành:",
    options: ["A. Dần dần, từng bước một","B. Nhanh chóng, chính xác","C. Cận thận, không chủ quan","D. Tiến nhanh, tiến mạnh"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Dần dần, từng bước một\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-78",
    module: "m2",
    question: "Theo Hồ Chí Minh, động lực của CNXH gồm:",
    options: ["A. Động lực tinh thần và bên ngoài.","B. Động lực vật chất và bên trong.","C. Động lực vật chất và tinh thần, nội sinh và ngoại sinh.","D. Động lực tinh thần và nội sinh."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Động lực vật chất và tinh thần, nội sinh và ngoại sinh.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-79",
    module: "m2",
    question: "Theo Hồ Chí Minh, nhân tố nào sau đây quyết định thành công của thời kỳ quá độ lên CNXH:",
    options: ["A. Con người","B. Văn hóa","C. Xã hội","D. Chính trị"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Con người\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-80",
    module: "m2",
    question: "Hồ Chí Minh cho rằng chủ nghĩa xã hội",
    options: ["A. Phù hợp với các dân tộc phương Đông","B. Phù hợp với các dân tộc phương Tây","C. Phù hợp với các nước thuộc địa hơn các nước chính quốc"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Phù hợp với các dân tộc phương Đông\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-81",
    module: "m2",
    question: "Theo Hồ Chí Minh, đặc điểm cơ bản nhất của nước ta trong thời kỳ quá độ là:",
    options: ["A. Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải trải qua giai đoạn phát triển tư bản chủ nghĩa.","B. Bị chiến tranh tàn phá nặng nề.","C. Tất cả các phương án."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải trải qua giai đoạn phát triển tư bản chủ nghĩa.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-82",
    module: "m2",
    question: "Theo Hồ Chí Minh, chỉ có..... mới giải phóng được các dân tộc bị áp bức và giai cấp công nhân toàn thế giới.",
    options: ["A. Chủ nghĩa xã hội và chủ nghĩa cộng sản.","B. Giai cấp công nhân và giai cấp nông dân","C. Giai cấp công nhân và nhân dân lao động","D. Đảng Cộng sản và giai cấp công nhân"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa xã hội và chủ nghĩa cộng sản.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-83",
    module: "m2",
    question: "Quan điểm nào dưới đây thuộc về bản chất của CNXH trong tư tưởng Hồ Chí Minh:",
    options: ["A. Là chế độ không còn người bóc lột người","B. Là chế độ còn một ít người bóc lột","C. Là chế độ người bóc lột bị khinh rẻ","D. Là chế độ người bóc lột được thừa nhận"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Là chế độ không còn người bóc lột người\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-84",
    module: "m2",
    question: "Phương thức tiếp cận về CNXH của Hồ Chí Minh thiên về hướng nào dưới đây:",
    options: ["A. Hồ Chí Minh tiếp cận CNXH từ phương diện kinh tế là chủ yếu","B. Hồ Chí Minh tiếp cận CNXH từ phương diện văn hoá là chủ yếu","C. Hồ Chí Minh tiếp cận CNXH từ phương diện chính trị là chủ yếu"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Hồ Chí Minh tiếp cận CNXH từ phương diện văn hoá là chủ yếu\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-85",
    module: "m2",
    question: "Theo Hồ Chí Minh, về bước đi trong thời kỳ quá độ, chúng ta phải:",
    options: ["A. Theo bước đi của các nước xã hội chủ nghĩa.","B. Căn cứ vào đặc điểm lịch sử cụ thể của nước ta từ đó có bước đi phù hợp.","C. Căn cứ vào đặc điểm lịch sử cụ thể của nước ta từ đó có bước đi phù hợp, đi bước nào vững chắc bước ấy.","D. Bước đi chậm, mạnh, vững chắc."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Căn cứ vào đặc điểm lịch sử cụ thể của nước ta từ đó có bước đi phù hợp, đi bước nào vững chắc bước ấy.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-86",
    module: "m2",
    question: "Theo Hồ Chí Minh, trong thời kỳ quá độ, nền kinh tế phải ưu tiên là:",
    options: ["A. Kinh tế hợp tác xã.","B. Kinh tế tư bản tư nhân.","C. Kinh tế thủ công và lao động riêng lẻ.","D. Kinh tế quốc doanh."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Kinh tế quốc doanh.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-87",
    module: "m2",
    question: "Theo Hồ Chí Minh, cách mạng XHCN do:",
    options: ["A. Đảng lãnh đạo","B. Giai cấp công nhân lãnh đạo","C. Tầng lớp trí thức lãnh đạo","D. Công - nông - trí lãnh đạo"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng lãnh đạo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-88",
    module: "m2",
    question: "Theo Hồ Chí Minh, con đường quá độ lên CNXH ở Việt Nam là:",
    options: ["A. Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển tư bản chủ nghĩa.","B. Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển xã hội phong kiến.","C. Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển xã hội dân chủ.","D. Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển cộng sản chủ nghĩa."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Quá độ lên chủ nghĩa xã hội không qua giai đoạn phát triển tư bản chủ nghĩa.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-89",
    module: "m2",
    question: "Theo Hồ Chí Minh muốn xây dựng chủ nghĩa xã hội, trước hết cần có:",
    options: ["A. Cơ sở vật chất vững chắc.","B. Con người năng động, sáng tạo.","C. Con người xã hội chủ nghĩa.","D. Nền kinh tế phát triển cao."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Con người xã hội chủ nghĩa.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-90",
    module: "m2",
    question: "Nội dung nào không có trong cách tiếp cận của Hồ Chí Minh về chủ nghĩa xã hội:",
    options: ["A. Hồ Chí Minh tiếp cận chủ nghĩa xã hội trên phương diện kinh tế.","B. Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ khát vọng giải phóng dân tộc Việt Nam.","C. Hồ Chí Minh tiếp cận chủ nghĩa xã hội trên phương diện đạo đức.","D. Hồ Chí Minh tiếp cận chủ nghĩa xã hội từ văn hóa."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Hồ Chí Minh tiếp cận chủ nghĩa xã hội trên phương diện kinh tế.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-91",
    module: "m2",
    question: "Loại giặc nào được Hồ Chí Minh đề cập đầu tiên?",
    options: ["A. Giặc dốt","B. Giặc đói","C. Giặc ngoại xâm"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Giặc đói\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-92",
    module: "m2",
    question: "Hồ Chí Minh coi chủ nghĩa dân tộc là:",
    options: ["A. Mùa xuân của xã hội","B. Động lực lớn của đất nước","C. Nền tảng tư tưởng của Đảng"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Động lực lớn của đất nước\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-93",
    module: "m2",
    question: "Theo Hồ Chí Minh, CNXH là một xã hội phát triển cao về:",
    options: ["A. Văn hóa, giáo dục","B. Giáo dục, chính trị","C. Văn hóa, đạo đức","D. Chính trị, đạo đức"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Văn hóa, đạo đức\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-94",
    module: "m2",
    question: "Hồ Chí Minh quan niệm mục tiêu cao nhất của chủ nghĩa xã hội là:",
    options: ["A. Nâng cao đời sống nhân dân.","B. Nâng cao đời sống tinh thần cho nhân dân.","C. Nâng cao đời sống vật chất cho nhân dân."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Nâng cao đời sống nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-95",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"CNXH là một chế độ xã hội có nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về các tư liệu sản xuất chủ yêú, nhằm không ngừng nâng cao đời sống vật chất và tinh thần cho nhân dân, trước hết là cho (........)\"",
    options: ["A. Con người","B. Dân tộc","C. Giai cấp công nhân","D. Nhân dân lao động"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Nhân dân lao động\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-96",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Nền kinh tế mà chúng ta xây dựng cần phải phát triển toàn diện các ngành, với những ngành chủ yếu là: công-nông-thương nghiệp; trong đó, (...........) là hai cái chân của nền kinh tế nước nhà\".",
    options: ["A. Nông nghiệp và thương nghiệp","B. Nông nghiệp và công nghiệp nhẹ","C. Công nghiệp nặng và nông nghiệp","D. Công nghiệp và nông nghiệp"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Công nghiệp và nông nghiệp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-97",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Tiến lên CNXH là bước phát triển tất yếu ở Việt Nam sau khi nước nhà đã giành được (.........) theo con đường cách mạng vô sản.",
    options: ["A. Tự do","B. Bình đẳng","C. Độc lập","D. Tất cả các phương án trả lời đều đúng trả lời đều đúng"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Độc lập\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-98",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Kẻ thù muốn đè bẹp ta về kinh tế thay bằng (...........), vì vậy ta phải phát triển kinh tế\".",
    options: ["A. Chính trị","B. Quân sự","C. Ngoại giao","D. Văn hóa"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Quân sự\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-99",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Chỉ có chủ nghĩa cộng sản mới cứu (........), đem lại cho mọi người không phân biệt chủng tộc và nguồn gốc sự tự do, bình đẳng, bác ái, đoàn kết, ấm no trên quả đất, việc làm cho mọi người và vì mọi người, niềm vui, hòa bình, hạnh phúc...\"",
    options: ["A. Con người","B. Loài người","C. Nhân dân","D. Nhân loại"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Nhân loại\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-100",
    module: "m2",
    question: "Điều mong muốn cuối cùng của Chủ tịch Hồ Chí Minh là:",
    options: ["A. Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, góp phần xứng đáng vào sự nghiệp cách mạng loài người.","B. Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, góp phần xứng đáng vào sự nghiệp cách mạng XHCN.","C. Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, góp phần xứng đáng vào sự nghiệp cách mạng thế giới."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, góp phần xứng đáng vào sự nghiệp cách mạng thế giới.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-101",
    module: "m2",
    question: "Mục tiêu giải phóng dân tộc theo con đường cách mạng vô sản mà Hồ Chí Minh đã lựa chọn cho dân tộc Việt Nam là:",
    options: ["A. Nước nhà độc lập.","B. Nhân dân được hưởng cuộc sống ấm no, tự do, hạnh phúc.","C. Tất cả các phương án trả lời đều đúng"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tất cả các phương án trả lời đều đúng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-102",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"CNXH là công trình tập thể của (...........), do nhân dân tự xây dựng lấy dưới sự lãnh đạo của Đảng\".",
    options: ["A. Nhà nước","B. Nhân dân","C. Chính quyền","D. Cộng đồng"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-103",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"CNXH là một xã hội (..........) ; làm nhiều hưởng nhiều, làm ít hưởng ít, không làm thì không được hưởng; các dân tộc đều bình đẳng, miền núi được giúp đỡ để tiến kịp miền xuôi\".",
    options: ["A. Công bằng, dân chủ","B. Công bằng, bình đẳng","C. Công bằng, hợp lý","D. Công bằng, đạo đức"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Công bằng, hợp lý\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-104",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Động lực văn hoá, khoa học, giáo dục là động lực (......) không thể thiếu của chủ nghĩa xã hội\".",
    options: ["A. Quyết định","B. Vật chất","C. Tinh thần","D. Vật chất và tinh thần"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tinh thần\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m2-105",
    module: "m2",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Trong sự nghiệp xây dựng CNXH, chúng ta chưa có kinh nghiệm, nhất là về lĩnh vực (...........). Nó là công việc hết sức mới mẻ nên ta phải vừa làm, vừa học và có thể có vấp váp, thiếu sót\".",
    options: ["A. Chính trị","B. Quân sự","C. Kinh tế","D. Văn hóa"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Kinh tế\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-1",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng phải triệt để thực hành dân chủ, mà trước hết dân chủ trong:",
    options: ["A. Nội bộ Đảng.","B. Chính quyền.","C. Nhân dân."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Nội bộ Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-2",
    module: "m3",
    question: "Quan điểm nào sau đây là tư cách Đảng viên theo tư tưởng Hồ Chí Minh",
    options: ["A. Đặt lợi ích của Đảng, của con người lên trên hết","B. Đặt lợi ích của Đảng, của nhân dân lên trên hết","C. Đặt lợi ích của Đảng, của đất nước lên trước hết"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đặt lợi ích của Đảng, của nhân dân lên trên hết\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-3",
    module: "m3",
    question: "Theo Hồ Chí Minh, tập trung trong Đảng có nghĩa là thiểu số phục tùng đa số, cấp dưới phục tùng cấp trên, tất cả đảng viên chấp hành:",
    options: ["A. Vô điều kiện nghị quyết của Tổng bí thư.","B. Vô điều kiện nghị quyết của Chủ tịch nước.","C. Vô điều kiện nghị quyết của Đảng.","D. Vô điều kiện nghị quyết của Quốc hội."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Vô điều kiện nghị quyết của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-4",
    module: "m3",
    question: "Trong một cách thể hiện khác về vấn đề \"Đảng của ai\", theo Hồ Chí Minh Đảng là của:",
    options: ["A. Giai cấp","B. Dân tộc","C. Nhân loại","D. Nhân dân"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Dân tộc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-5",
    module: "m3",
    question: "Trong các yếu tố hình thành Đảng Cộng sản Việt Nam, đâu là yếu tố sáng tạo của Hồ Chí Minh?",
    options: ["A. Chủ nghĩa Mác - Lênin","B. Phong trào công nhân","C. Tư tưởng yêu nước truyền thống","D. Phong trào yêu nước"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Phong trào yêu nước\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-6",
    module: "m3",
    question: "Tìm phương án giải thích sai trong luận điểm của Hồ Chí Minh \"Đảng cầm quyền vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân\".",
    options: ["A. Người lãnh đạo là xác định quyền lãnh đạo duy nhất của Đảng đối với toàn bộ xã hội và khi có chính quyền, Đảng lãnh đạo chính quyền nhà nước.","B. Lãnh đạo phải bằng giáo dục, thuyết phục, nghĩa là Đảng phải làm cho dân tin, dân phục để dân theo.","C. Là người lãnh đạo Đảng phải sâu sát, gắn bó mật thiết với nhân dân, lắng nghe ý kiến của dân, khiêm tốn học hỏi nhân dân và phải kiểm soát nhân dân.","D. \"đầy tớ\" có nghĩa là tận tâm, tận lực phụng sự nhân dân nhằm đem lại quyền lợi và lợi ích cho nhân dân."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Là người lãnh đạo Đảng phải sâu sát, gắn bó mật thiết với nhân dân, lắng nghe ý kiến của dân, khiêm tốn học hỏi nhân dân và phải kiểm soát nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-7",
    module: "m3",
    question: "Hồ Chí Minh cho rằng: \"Một dân tộc, một đảng và mỗi con người, ngày hôm qua là vĩ đại, có sức hấp dẫn lớn, không nhất định hôm nay và ngày mai vẫn được mọi người yêu mến và ca ngợi, nếu lòng dạ không trong sáng nữa, nếu ....\".",
    options: ["A. Sa vào tham ô, lãnh phí.","B. Sa vào chủ nghĩa cá nhân.","C. Thoái hóa biến chất."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Sa vào chủ nghĩa cá nhân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-8",
    module: "m3",
    question: "Theo Hồ Chí Minh:",
    options: ["A. Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một sự nghiệp vẻ vang","B. Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một công việc vẻ vang","C. Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một nghề nghiệp vẻ vang"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Làm cách mạng để cải tạo xã hội cũ thành xã hội mới là một sự nghiệp vẻ vang\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-9",
    module: "m3",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh về Thái độ, phương pháp tự phê bình và phê bình:",
    options: ["A. Phải tiến hành thuờng xuyên như người ta rửa mặt hằng ngày.","B. Phải thẳng thắn, chân thành, trung thực, không nể nang, không giấu giếm và cũng không thêm bớt khuyết điểm.","C. \"Phải có tình đồng chí thương yêu lẫn nhau\".","D. Phải khôn khéo biến hóa cho phù hợp."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Phải khôn khéo biến hóa cho phù hợp.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-10",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng phải thường xuyên tự đổi mới và chỉnh đốn về những mặt nào?",
    options: ["A. Chính trị","B. Tư tưởng","C. Tổ chức","D. Tất cả các phương án"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tổ chức\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-11",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng cầm quyền vừa là người lãnh đạo, vừa là:",
    options: ["A. người thầy trung thành của nhân dân.","B. người hầu trung thành của nhân dân.","C. người đầy tớ trung thành của nhân dân.","D. người lính trung thành của nhân dân."],
    correct: 2,
    explanation: "Đáp án đúng là: \"người đầy tớ trung thành của nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-12",
    module: "m3",
    question: "Theo Hồ Chí Minh, nền tảng tư tưởng của Đảng Cộng sản Việt Nam là gì?",
    options: ["A. Chủ nghĩa xã hội","B. Chủ nghĩa Mác-Lênin","C. Chủ nghĩa xã hội dân chủ","D. Chủ nghĩa Tam dân"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Chủ nghĩa Mác-Lênin\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-13",
    module: "m3",
    question: "Trong hệ thống tổ chức đảng, Hồ Chí Minh rất coi trọng vai trò của:",
    options: ["A. Đảng bộ.","B. Chi ủy.","C. Chi bộ."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Chi bộ.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-14",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, luận điểm Đảng Cộng sản Việt Nam là sản phẩm của sự kết hợp giữa chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước là:",
    options: ["A. Xác định nhiệm vụ của Đảng.","B. Xác định bản chất của Đảng.","C. Xác định nguồn gốc ra đời của Đảng.","D. Xác định năng lực của Đảng."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Xác định nguồn gốc ra đời của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-15",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, nền tảng tư tưởng của Đảng phải dựa trên:",
    options: ["A. Chủ nghĩa Mác-Lênin.","B. Nguyên tắc tập trung dân chủ.","C. Nguyên tắc phê bình và tự phê bình.","D. Chủ nghĩa xã hội khoa học."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa Mác-Lênin.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-16",
    module: "m3",
    question: "Tìm ra luận điểm sai trong tư tưởng Hồ Chí Minh khi Người lưu ý tiếp nhận và vận dụng chủ nghĩa Mác - Lênin:",
    options: ["A. Một là, việc học tập, nghiên cứu, tuyên truyền chủ nghĩa Mác - Lênin phải luôn phù hợp với từng đối tượng.","B. Hai là, việc vận dụng chủ nghĩa Mác - Lênin phải luôn luôn kiên định trong mọi hoàn cảnh.","C. Ba là, trong quá trình hoạt động, Đảng ta phải chú ý học tập, kế thừa những kinh nghiệm tốt của các đảng cộng sản khác, đồng thời Đảng ta phải tổng kết kinh nghiệm của mình để bổ sung chủ nghĩa Mác - Lênin.","D. Bốn là, Đảng ta phải tăng cường đấu tranh để bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Hai là, việc vận dụng chủ nghĩa Mác - Lênin phải luôn luôn kiên định trong mọi hoàn cảnh.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-17",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng cầm quyền là Đảng tiếp tục lãnh đạo sự nghiệp cách mạng trong điều kiện Đảng lãnh đạo quần chúng nhân dân giành được quyền lực nhà nước và:",
    options: ["A. Đảng gương mẫu lãnh đạo bộ máy nhà nước đó.","B. Đảng trực tiếp lãnh đạo bộ máy nhà nước đó.","C. Đảng khiêm nhường lãnh đạo bộ máy nhà nước đó.","D. Đảng gián tiếp lãnh đạo bộ máy nhà nước đó."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đảng trực tiếp lãnh đạo bộ máy nhà nước đó.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-18",
    module: "m3",
    question: "Theo Hồ Chí Minh, là người đày tớ của dân không có nghĩa là \"tôi tớ, tôi đòi hay theo đuôi quần chúng\" mà là:",
    options: ["A. Hiểu và đánh giá đúng nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân.","B. Tận tâm, tận lực phụng sự nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân.","C. Tất cả các phương án"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tận tâm, tận lực phụng sự nhân dân nhằm đem lại các quyền và lợi ích cho nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-19",
    module: "m3",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh về Thái độ, phương pháp tự phê bình và phê bình:",
    options: ["A. Phải tiến hành thuờng xuyên như người ta rửa mặt hằng ngày.","B. Phải thẳng thắn, chân thành, trung thực, không nể nang, không giấu giếm và cũng không thêm bớt khuyết điểm.","C. \"Phải có tình đồng chí thương yêu lẫn nhau\".","D. Phải khôn khéo biến hóa cho phù hợp."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Phải khôn khéo biến hóa cho phù hợp.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-20",
    module: "m3",
    question: "Theo Hồ Chí Minh, bản chất của Đảng:",
    options: ["A. Không thay đổi khi có chính quyền trong tay.","B. Luôn thay đổi khi có chính quyền trong tay.","C. Đôi khi thay đổi khi có chính quyền trong tay.","D. Đã thay đổi khi có chính quyền trong tay."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Không thay đổi khi có chính quyền trong tay.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-21",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, luận điểm Đảng Cộng sản là nhân tố quyết định hàng đầu để đưa cách mạng Việt Nam đi đến thắng lợi là:",
    options: ["A. Xác định vị thế cầm quyền của Đảng.","B. Xác định vai trò lãnh đạo của Đảng.","C. Xác định mục đích của Đảng.","D. Xác định nhiệm vụ của Đảng."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Xác định vai trò lãnh đạo của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-22",
    module: "m3",
    question: "Đối với Hồ Chí Minh, muôn việc thành công hay thất bại là do:",
    options: ["A. Cán bộ giỏi hay dốt","B. Cán bộ tốt hay kém.","C. Công việc dễ hay khó"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Cán bộ tốt hay kém.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-23",
    module: "m3",
    question: "Quy luật ra đời của Đảng Cộng sản Việt Nam được Hồ Chí Minh vạch ra:",
    options: ["A. Không khác với chủ nghĩa Mác-Lênin.","B. Trái ngược với chủ nghĩa Mác-Lênin.","C. Không liên quan đến chủ nghĩa Mác-Lênin.","D. Bổ sung vào kho tàng lý luận của chủ nghĩa Mác - Lênin."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Bổ sung vào kho tàng lý luận của chủ nghĩa Mác - Lênin.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-24",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng cộng sản Việt Nam là sản phẩm của sự kết hợp giữa:",
    options: ["A. Chủ nghĩa Mác-Lênin với phong trào công nhân.","B. Phong trào công nhân với phong trào yêu nước.","C. Chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước.","D. Chủ nghĩa Mác - Lênin với phong trào yêu nước."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Chủ nghĩa Mác-Lênin với phong trào công nhân và phong trào yêu nước.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-25",
    module: "m3",
    question: "\"Việc gì đã được đông người bàn bạc kỹ lưỡng rồi, kế hoạch định rõ ràng rồi, thì cần phải giao cho một người hoặc một nhóm ít người phụ trách theo kế hoạch đó mà thi hành. Như thế mới có chuyên trách, công việc mới chạy. Nếu không có ..... thì sẽ sinh cái tệ người này ủy cho người kia, người kia ủy cho người nọ, kết quả là không ai thi hành. Như thế thì việc gì cũng không xong\"",
    options: ["A. Tập thể lãnh đạo","B. Cá nhân phụ trách","C. Cá nhân lãnh đạo","D. Tập thể phụ trách"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Cá nhân phụ trách\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-26",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng lãnh đạo phải bằng:",
    options: ["A. Mệnh lệnh, đòi hỏi, yêu cầu dân chúng.","B. Dạy dỗ, chỉ bảo dân chúng.","C. Giáo dục, thuyết phục, tuyên truyền, giác ngộ dân chúng.","D. Pháp luật, kỷ luật đối với dân chúng."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Giáo dục, thuyết phục, tuyên truyền, giác ngộ dân chúng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-27",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam là Đảng của:",
    options: ["A. Giai cấp công nhân.","B. Giai cấp công nhân, nhân dân lao động và của dân tộc Việt Nam.","C. Nhân dân lao động","D. Giai cấp công nhân, nhân dân lao động"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Giai cấp công nhân, nhân dân lao động và của dân tộc Việt Nam.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-28",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng không phải là một tổ chức tự thân, mà có tổ chức chặt chẽ và vì vậy, mục đích, tôn chỉ của Đảng là \"tận tâm\", \"tận lực\", \"phụng sự\" và \"trung thành\" với:",
    options: ["A. Lợi ích của dân tộc Việt Nam","B. Lợi ích của Đảng","C. Lợi ích của giai cấp công nhân"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Lợi ích của dân tộc Việt Nam\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-29",
    module: "m3",
    question: "Trong tác phẩm \"Đường cách mệnh\" Hồ Chí Minh ví Đảng như:",
    options: ["A. Kim chỉ nam","B. Người cầm lái","C. Người chỉ huy"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Người cầm lái\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-30",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, luận điểm Đảng Cộng sản Việt Nam là \"Đảng của giai cấp công nhân, đồng thời là Đảng của dân tộc Việt Nam\" nhằm:",
    options: ["A. Xác định vị thế cầm quyền của Đảng.","B. Xác định bản chất giai cấp của Đảng.","C. Xác định chức năng của Đảng.","D. Xác định vai trò lãnh đạo của Đảng."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Xác định bản chất giai cấp của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-31",
    module: "m3",
    question: "Theo Hồ Chí Minh, ngoài lợi ích của giai cấp, của nhân dân và toàn thể dân tộc Việt Nam, Đảng:",
    options: ["A. Không còn lợi ích nào khác","B. Còn vì lợi ích của mình","C. Còn vì lợi ích của nhà nước"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Không còn lợi ích nào khác\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-32",
    module: "m3",
    question: "\"(....) có vững cách mạng mới thành công cũng như người cầm lái có vững thuyền mới chạy\"",
    options: ["A. Đảng","B. Chính quyền","C. Lực lượng","D. Đoàn thể"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-33",
    module: "m3",
    question: "Hồ Chí Minh dạy Cán bộ, Đảng viên phải biết:",
    options: ["A. Làm tốt hơn nhân dân","B. Làm lợi hơn cho nhân dân","C. Học tập từ nhân dân"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Học tập từ nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-34",
    module: "m3",
    question: "Trong di chúc của mình, Hồ Chí Minh trước tiên nói về:",
    options: ["A. Thiếu niên, nhi đồng","B. Đảng","C. Thanh niên"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đảng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-35",
    module: "m3",
    question: "Theo Hồ Chí Minh, việc học tập, nghiên cứu, tuyên truyền chủ nghĩa Mác - Lênin phải:",
    options: ["A. Luôn phù hợp với từng đối tượng.","B. Luôn phù hợp với từng hoàn cảnh.","C. Tất cả các phương án."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Luôn phù hợp với từng đối tượng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-36",
    module: "m3",
    question: "Hồ Chí Minh luôn nhấn mạnh thái độ nào sau đây của Đảng viên:",
    options: ["A. Nêu gương","B. Dũng cảm","C. Đoàn kết","D. Chí công vô tư"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Nêu gương\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-37",
    module: "m3",
    question: "Theo Hồ Chí Minh, Trong xây dựng đường lối chính trị, phải học tập kinh nghiệm của các đảng cộng sản anh em, nhưng phải tính đến những điều kiện cụ thể của đất nước và của:",
    options: ["A. Loài người.","B. Thời đại.","C. Dân tộc."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Thời đại.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-38",
    module: "m3",
    question: "Hồ Chí Minh cho rằng cán bộ, đảng viên phải lưu ý cái gì có lợi cho dân dù nhỏ đến mấy cũng phải:",
    options: ["A. Cố mà làm","B. Phấn đấu","C. Cố gắng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Cố mà làm\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-39",
    module: "m3",
    question: "Hồ Chí Minh khẳng định sức mạnh của Đảng bắt nguồn từ:",
    options: ["A. Con người.","B. Tổ chức.","C. Dân tộc."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tổ chức.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-40",
    module: "m3",
    question: "Theo Hồ Chí Minh, mỗi cán bộ, đảng viên \"đều là công bộc của dân, nghĩa là để gánh việc chung cho dân, chứ không phải để:",
    options: ["A. Đè đầu dân.","B. Hạch sách dân","C. Làm khó cho dân"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đè đầu dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-41",
    module: "m3",
    question: "Trong tác phẩm \"Đường cách mệnh\", theo Hồ Chí Minh cách mạng trước hết phải có:",
    options: ["A. Đảng cách mạng","B. Quần chúng cách mạng","C. Lực lượng cách mạng","D. Vũ trang cách mạng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-42",
    module: "m3",
    question: "Trong các nội dung sau đâu là nội dung không đúng?",
    options: ["A. Phong trào yêu nước có vị trí, vai trò cực kỳ to lớn trong quá trình phát triển của dân tộc Việt Nam.","B. Phong trào công nhân kết hợp được với phong trào yêu nước bởi vì hai phong trào đó đều có mục tiêu chung.","C. Phong trào yêu nước của trí thức Việt Nam là nhân tố quan trọng thúc đẩy sự kết hợp các yếu tố cho sự ra đời của Đảng Cộng sản Việt Nam.","D. Phong trào nông dân không kết hợp được với phong trào công nhân."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Phong trào nông dân không kết hợp được với phong trào công nhân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-43",
    module: "m3",
    question: "Theo Hồ Chí Minh, nội dung quy định bản chất giai cấp công nhân là:",
    options: ["A. Số lượng đảng viên xuất thân từ giai cấp công nhân.","B. Nền tảng lý luận và tư tưởng của Đảng là chủ nghĩa Mác - Lênin.","C. Tất cả các phương án"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Nền tảng lý luận và tư tưởng của Đảng là chủ nghĩa Mác - Lênin.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-44",
    module: "m3",
    question: "Theo Hồ Chí Minh, Là người lãnh đạo, nhưng Đảng phải sâu sát, gắn bó mật thiết với nhân dân, lắng nghe ý kiến của nhân dân, khiêm tốn học hỏi nhân dân và:",
    options: ["A. Phải không được kiểm soát nhân dân.","B. Phải kiểm soát được nhân dân.","C. Phải chịu sự kiểm soát của nhân dân."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Phải chịu sự kiểm soát của nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-45",
    module: "m3",
    question: "Theo Hồ Chí Minh Đảng cộng sản Việt Nam ra đời trên cơ sở của những yếu tố nào?",
    options: ["A. Chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào cách mạng thế giới.","B. Chủ nghĩa Mác - Lênin, phong trào yêu nước Việt Nam.","C. Phong trào công nhân, phong trào yêu nước Việt Nam, phong trào cách mạng thế giới.","D. Chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước Việt Nam."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Chủ nghĩa Mác - Lênin, phong trào công nhân, phong trào yêu nước Việt Nam.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-46",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin \"làm cốt\" nghĩa là:",
    options: ["A. Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm nền tảng tư tưởng.","B. Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm chủ trương, đường lối.","C. Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm học thuyết của Đảng.","D. Tất cả các phương án."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng Cộng sản Việt Nam phải lấy chủ nghĩa Mác-Lênin làm nền tảng tư tưởng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-47",
    module: "m3",
    question: "Hồ Chí Minh chỉ ra nguyên tắc quan hệ giữa Đảng với dân là:",
    options: ["A. Đảng viên, cán bộ vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân","B. Đảng viên, cán bộ vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của người lao động.","C. Đảng viên, cán bộ vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của mọi người."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng viên, cán bộ vừa là người lãnh đạo, vừa là người đầy tớ thật trung thành của nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-48",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng cộng sản Việt Nam là Đảng",
    options: ["A. Cầm quyền","B. Quản lý","C. Phân quyền","D. Lãnh đạo"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Cầm quyền\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-49",
    module: "m3",
    question: "Luận điểm: \"Cách mệnh trước hết phải có cái gì? Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp ở mọi nơi. Đảng có vững thì cách mạng mới thành công, cũng như người cầm lái có vững thuyền mới chạy\" được trích từ tác phẩm nào của Hồ Chí Minh?",
    options: ["A. Bản án chế độ thực dân Pháp","B. Đường cách mệnh","C. Bản án chế độ thực dân Pháp","D. Thường thức chính trị"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đường cách mệnh\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-50",
    module: "m3",
    question: "Theo Hồ Chí Minh, Mục đích phê bình là:",
    options: ["A. Cốt để giúp nhau sửa chữa, giúp nhau tiến bộ.","B. Cốt để đổi cách làm việc cho tốt hơn, đúng hơn.","C. Cốt để đoàn kết và thống nhất nội bộ.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-51",
    module: "m3",
    question: "Trong việc tiếp nhận và vận dụng chủ nghĩa Mác-Lênin, Hồ Chí Minh lưu ý Đảng ta phải tăng cường đấu tranh để:",
    options: ["A. Bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin.","B. Bảo vệ sự trong sáng của Đảng Cộng sản Việt Nam.","C. Bảo vệ chính quyền.","D. Bảo vệ nhân dân."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Bảo vệ sự trong sáng của chủ nghĩa Mác - Lênin.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-52",
    module: "m3",
    question: "Theo Hồ Chí Minh, chức năng lãnh đạo và sự lãnh đạo của Đảng phải:",
    options: ["A. Bảo đảm trên tất cả các mặt, các lĩnh vực, phải quan tâm chăm lo đến đời sống nhân dân ở những việc nhỏ.","B. Bảo đảm trên tất cả các mặt, các lĩnh vực, phải quan tâm chăm lo đến đời sống nhân dân từ việc nhỏ đến việc lớn.","C. Bảo đảm trên tất cả các mặt, các lĩnh vực, phải quan tâm chăm lo đến đời sống nhân dân ở những việc lớn."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Bảo đảm trên tất cả các mặt, các lĩnh vực, phải quan tâm chăm lo đến đời sống nhân dân từ việc nhỏ đến việc lớn.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-53",
    module: "m3",
    question: "Hồ Chí minh đã dùng từ nào sau đây để chỉ tính nghiêm minh của pháp luật",
    options: ["A. Thần linh pháp quyền","B. Tinh thần pháp luật","C. Nhà nước pháp quyền","D. Nhà nước hợp hiến"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Thần linh pháp quyền\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-54",
    module: "m3",
    question: "Theo Hồ Chí Minh, trong quá trình hoạt động, Đảng ta phải chủ ý học tập, kế thừa những kinh nghiệm tốt của các đảng cộng sản khác, đồng thời Đảng ta phải tổng kết kinh nghiệm của mình để:",
    options: ["A. Bổ sung lý luận về Đảng Cộng sản cầm quyền","B. Bổ sung tư duy của Đảng Cộng sản","C. Bổ sung đường lối của Đảng Cộng sản","D. Bổ sung chủ nghĩa Mác - Lênin."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Bổ sung chủ nghĩa Mác - Lênin.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-55",
    module: "m3",
    question: "Theo Hồ Chí Minh, một Đảng chân chính cách mạng phải có (...). (...) tạo nên uy tín, sức mạnh của Đảng, giúp Đảng đủ tư cách lãnh đạo, hướng dẫn quần chúng nhân dân.",
    options: ["A. Đạo đức","B. Lý luận","C. Năng lực","D. Tài năng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đạo đức\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-56",
    module: "m3",
    question: "\"Lực lượng của giai cấp công nhân và nhân dân lao động là rất to lớn, là vô cùng vô tận. Nhưng lực lượng ấy cần có (....) mới chắc chắn thắng lợi\"",
    options: ["A. Chính quyền tổ chức","B. Đảng lãnh đạo","C. Nhà nước quản lý","D. Đoàn thể lãnh đạo"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đảng lãnh đạo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-57",
    module: "m3",
    question: "Bản chất giai cấp công nhân của Đảng Cộng sản Việt Nam thể hiện ở:",
    options: ["A. Số lượng Đảng viên trong Đảng.","B. Trình độ Đảng viên trong Đảng.","C. Nền tảng lý luận, mục tiêu, đường lối, nguyên tắc tổ chức của Đảng.","D. Tất cả các phương án"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Nền tảng lý luận, mục tiêu, đường lối, nguyên tắc tổ chức của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-58",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng phải thường xuyên tự đổi mới, tự chỉnh đốn về mặt:",
    options: ["A. Chính trị, tư tưởng.","B. Tư tưởng, tổ chức.","C. Tổ chức, chính trị.","D. Chính trị, tổ chức, tư tưởng."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Chính trị, tổ chức, tư tưởng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-59",
    module: "m3",
    question: "Theo Hồ Chí Minh, người cán bộ phải có đủ đức và tài, phẩm chất và năng lực, trong đó:",
    options: ["A. Đức là phẩm chất gốc.","B. Tài là phẩm chất gốc.","C. Năng lực là phẩm chất gốc."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đức là phẩm chất gốc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-60",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, Đảng Cộng sản Việt Nam vừa là người lãnh đạo, vừa là người đầy tớ trung thành của nhân dân, Đảng phải chăm lo mối quan hệ giữa Đảng với dân là nhằm:",
    options: ["A. Xác định vị thế cầm quyền của Đảng.","B. Xác định phương thức cầm quyền của Đảng.","C. Xác định năng lực cầm quyền của Đảng.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-61",
    module: "m3",
    question: "Theo Hồ Chí Minh, Muốn lãnh đạo được nhân dân lao động, trước hết Đảng phải có:",
    options: ["A. Tư cách, phẩm chất, năng lực cần thiết.","B. Quyền lực chính trị.","C. Tiềm lực kinh tế.","D. Chính quyền."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tư cách, phẩm chất, năng lực cần thiết.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-62",
    module: "m3",
    question: "Hồ Chí Minh cho rằng cán bộ, đảng viên không được:",
    options: ["A. Theo đuôi quần chúng","B. Làm theo quần chúng","C. Đi trước quần chúng","D. Làm gương cho quần chúng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Theo đuôi quần chúng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-63",
    module: "m3",
    question: "Theo Hồ Chí Minh, công tác cán bộ là:",
    options: ["A. Công tác gốc của chính quyền.","B. Công tác của Đảng.","C. Công tác gốc của Đảng.","D. Công tác của chính quyền."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Công tác gốc của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-64",
    module: "m3",
    question: "Một trong những nguyên tắc xây dựng Đảng của Hồ Chí Minh là:",
    options: ["A. Tập thể lãnh đạo, quần chúng phụ trách.","B. Tập thể lãnh đạo, cá nhân phụ trách.","C. Tập thể lãnh đạo, đảng viên phụ trách.","D. Cá nhân lãnh đạo, tập thể phụ trách."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tập thể lãnh đạo, cá nhân phụ trách.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-65",
    module: "m3",
    question: "Theo Hồ Chí Minh, quyền lực thuộc về nhân dân là bản chất, là nguyên tắc của chế độ mới, một khi xa rời nguyên tắc này, Đảng sẽ trở thành:",
    options: ["A. Đối lập với nhà nước.","B. Đối lập với nhân dân.","C. Đối lập với chế độ."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đối lập với nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-66",
    module: "m3",
    question: "Hồ Chí Minh cho rằng Cán bộ, Đảng viên phải lưu ý cái gì có hại cho dân dù nhỏ đến máy cũng phải",
    options: ["A. Tránh","B. Đề phòng","C. Vượt qua"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tránh\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-67",
    module: "m3",
    question: "Hồ Chí Minh cho rằng:",
    options: ["A. Do lời nói và việc làm, đảng viên, đoàn viên và cán bộ làm cho dân tin, dân phục, dân yêu","B. Do hành động của đảng viên, đoàn viên và cán bộ làm cho dân tin, dân phục, dân yêu","C. Do lời nói và việc làm, đảng viên, đoàn viên và cán bộ làm cho dân ấm no, hạnh phúc"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Do lời nói và việc làm, đảng viên, đoàn viên và cán bộ làm cho dân tin, dân phục, dân yêu\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-68",
    module: "m3",
    question: "Trong hệ thống các quan điểm của Hồ Chí Minh về Đảng Cộng sản, quan điểm nào không phải thật sự là sự sáng tạo riêng của Người góp phần cụ thể hóa và phát triển lý luận Mác - Lênin về Đảng Cộng sản?",
    options: ["A. Mối quan hệ biện chứng giữa tính phổ biến và tính đặc thù của quy luật hình thành Đảng vô sản kiểu mới trong điều kiện từng nước.","B. Quan điểm về sự thống nhất biện chứng giữa bản chất giai cấp công nhân với tính dân tộc và tính nhân dân của Đảng.","C. Quan niệm về Đảng Cộng sản cầm quyền và các yếu tố bảo đảm vai trò cầm quyền của Đảng.","D. Quan điểm về những vấn đề có tính nguyên tắc trong xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Quan điểm về những vấn đề có tính nguyên tắc trong xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-69",
    module: "m3",
    question: "Đối với Hồ Chí Minh, Đảng là \"Đầy tớ trung thành\" là để nhắc nhở và chỉ rõ vai trò, trách nhiệm của mỗi cán bộ, đảng viên trong mọi hoạt động của mình đều phải:",
    options: ["A. Quan tâm thực sự đến sức khỏe của nhân dân.","B. Quan tâm thực sự đến lợi ích của nhân dân.","C. Quan tâm thực sự đến tinh thần của nhân dân.","D. Quan tâm thực sự đến vật chất của nhân dân."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Quan tâm thực sự đến lợi ích của nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-70",
    module: "m3",
    question: "Hồ Chí Minh sử dụng bộ phận nào trong cơ thể con người để chỉ tầm quan trọng của đoàn kết trong đảng",
    options: ["A. Con ngươi","B. Bàn tay","C. Trái tim","D. Khối óc"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Con ngươi\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-71",
    module: "m3",
    question: "Bản chất của Đảng theo Hồ Chí Minh:",
    options: ["A. Mang bản chất giai cấp công nhân, dân tộc.","B. Mang bản chất giai cấp công nhân, nhân dân lao động.","C. Mang bản chất giai cấp công nhân, con người.","D. Mang bản chất giai cấp công nhân."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Mang bản chất giai cấp công nhân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-72",
    module: "m3",
    question: "Theo Hồ Chí Minh, đường lối chính trị là:",
    options: ["A. Một vấn đề cốt tử trong tồn tại và phát triển của Đảng.","B. Một vấn đề không quan trọng trong tồn tại và phát triển của Đảng.","C. Một vấn đề thứ yếu trong tồn tại và phát triển của Đảng."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Một vấn đề cốt tử trong tồn tại và phát triển của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-73",
    module: "m3",
    question: "Quy luật ra đời của Đảng cộng sản Việt Nam được Hồ Chí Minh vạch ra:",
    options: ["A. Không phù hợp với tinh thần của chủ nghĩa Mác- Lênin","B. Trái với tinh thần của chủ nghĩa Mác- Lênin","C. Không trái với tinh thần của chủ nghĩa Mác- Lênin"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Không trái với tinh thần của chủ nghĩa Mác- Lênin\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-74",
    module: "m3",
    question: "Một trong những nguyên tắc xây dựng Đảng của Hồ Chí Minh là:",
    options: ["A. Tập thể phê bình và tự phê bình","B. Phê bình và tự phê bình","C. Phê bình và tập thể phê bình","D. Tự phê bình và cùng phê bình"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Phê bình và tự phê bình\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-75",
    module: "m3",
    question: "Theo Hồ Chí Minh, dân chủ là tư tưởng phải được tự do. Tự do là đối với mọi vấn đề, mọi người tự do bày tỏ ý kiến của mình, góp phần tìm ra:",
    options: ["A. Chân lý.","B. Thực tiễn.","C. Lý lẽ.","D. Nguyên tắc."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chân lý.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-76",
    module: "m3",
    question: "Hồ Chí Minh ví công việc phê bình và tự phê bình như:",
    options: ["A. Rửa mặt hằng ngày","B. Ăn cơm hàng ngày","C. Học tập hàng ngày","D. Uống nước hàng ngày"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Rửa mặt hằng ngày\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-77",
    module: "m3",
    question: "Một trong những nguyên tắc xây dựng Đảng của Hồ Chí Minh là:",
    options: ["A. Tập trung hợp tác","B. Tập trung dân chủ","C. Tập trung thống nhất","D. Hợp tác dân chủ"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tập trung dân chủ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-78",
    module: "m3",
    question: "Hồ Chí Minh nhận thức cán bộ là cái dây chuyền của bộ máy, là mắt khâu trung gian nối liền giữa:",
    options: ["A. Nhà nước với nhân dân.","B. Đảng với dân.","C. Đảng, Nhà nước với nhân dân.","D. Đảng với Nhà nước."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Đảng, Nhà nước với nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-79",
    module: "m3",
    question: "Theo tư tưởng Hồ Chí Minh, nhân tố quyết định hàng đầu để đưa cách mạng Việt Nam đến thắng lợi là:",
    options: ["A. Đoàn kết dân tộc","B. Đoàn kết giai cấp","C. Kết hợp sức mạnh dân tộc với sức mạnh thời đại","D. Phải có Đảng Cộng sản"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Phải có Đảng Cộng sản\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-80",
    module: "m3",
    question: "\"Muốn khỏi đi lạc phương hướng, (....) phải có Đảng lãnh đạo để nhận rõ tình hình, đường lối và định phương châm cho đúng\"",
    options: ["A. Quần chúng","B. Nhân dân","C. Dân tộc"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Quần chúng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-81",
    module: "m3",
    question: "Hồ Chí Minh nhắc cán bộ nhà nước phải:",
    options: ["A. Có mối liên hệ mật thiết với đại diện của nhân dân","B. Có mối liên hệ mật thiết với giai cấp mình","C. Có mối liên hệ mật thiết với chính quyền","D. Có mối liên hệ mật thiết với nhân dân"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Có mối liên hệ mật thiết với nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-82",
    module: "m3",
    question: "Theo Hồ Chí Minh, nhân dân lao động làm chủ Nhà nước thì dẫn đến một hệ quả là nhân dân có quyền:",
    options: ["A. Không chịu sự kiểm soát của Nhà nước","B. Kiểm soát Nhà nước","C. Không phải đóng thuế cho Nhà nước","D. Không phải tuân theo pháp luật"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Kiểm soát Nhà nước\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-83",
    module: "m3",
    question: "Điền vào chỗ trống để hoàn thiện đoạn trích Lời phát biểu của Hồ Chí Minh trong phiên họp thứ 2 Quốc hội khóa I thông qua Hiến pháp đầu tiên của nước ta ngày 09/11/1946. « Hiến pháp đó tuyên bố với thế giới nước Việt Nam đã độc lập. Hiến pháp đó tuyên bố với thế giới biết dân tộc Việt Nam đã có đủ mọi quyền tự do. Chính phủ cố gắng làm theo ba chính sách: Dân sinh, Dân quyền và ... ... »",
    options: ["A. Dân chủ","B. Dân túy","C. Dân biểu","D. Dân tộc"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Dân tộc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-84",
    module: "m3",
    question: "Để tăng cường tính nghiêm minh của pháp luật đi đôi với đẩy mạnh giáo dục đạo đức cách mạng, Hồ Chí Minh đã kết kết hợp nhuần nhuyễn giữa:",
    options: ["A. \"đức trị\" và \"pháp trị\".","B. \"nhân trị\" và \"pháp trị\".","C. \"pháp trị\" và \"tiền lệ\".","D. \"đức trị\" và \"tiền lệ\"."],
    correct: 0,
    explanation: "Đáp án đúng là: \"\"đức trị\" và \"pháp trị\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-85",
    module: "m3",
    question: "Hồ Chí Minh chỉ ra căn bệnh nguy hiểm nhất đối với cán bộ nhà nước là:",
    options: ["A. Chủ nghĩa cá nhân","B. Chủ nghĩa đồng hương","C. Kéo bè kéo cánh"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa cá nhân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-86",
    module: "m3",
    question: "Hồ Chí Minh khái quát dân chủ có nghĩa là:",
    options: ["A. Dân là chủ và dân làm chủ","B. Dân là người chủ","C. Dân làm quản lý","D. Dân làm người chủ"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Dân là chủ và dân làm chủ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-87",
    module: "m3",
    question: "Theo Hồ Chí Minh, nhà nước vì dân là:",
    options: ["A. Do nhân dân lập nên","B. Quyền lực của nhà nước và xã hội thuộc về nhân dân","C. Tất cả các phương án","D. Nhà nước lấy lợi ích chính đáng của nhân dân làm mục tiêu"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Nhà nước lấy lợi ích chính đáng của nhân dân làm mục tiêu\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-88",
    module: "m3",
    question: "Theo Hồ Chí Minh, Nhà nước vì dân là một Nhà nước lấy lợi ích chính đáng của nhân dân làm mục tiêu, tất cả đều vì lợi ích của nhân dân, ngoài ra:",
    options: ["A. Không có bất cứ một lợi ích nào khác.","B. Chỉ có lợi ích tự thân của Nhà nước.","C. Không có bất cứ lợi ích không chính đáng nào khác."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Không có bất cứ một lợi ích nào khác.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-89",
    module: "m3",
    question: "Trong tư tưởng Hồ Chí Minh, Đảng lãnh đạo nhà nước bằng:",
    options: ["A. Đường lối, quan điểm, chủ trương","B. Pháp luật, chính sách, kế hoạch","C. Tất cả các phương án"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đường lối, quan điểm, chủ trương\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-90",
    module: "m3",
    question: "Theo Hồ Chí Minh, Đảng lãnh đạo Nhà nước bằng phương thức nào?",
    options: ["A. Đường lối, chủ trương, chính sách.","B. Qua các tổ chức Đảng, đảng viên trong bộ máy nhà nước.","C. Bằng công tác kiểm tra.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-91",
    module: "m3",
    question: "Hồ Chí Minh là đã trực tiếp chỉ đạo biên soạn Hiến pháp nào của nước ta?",
    options: ["A. Hiến pháp năm 1946.","B. Hiến pháp năm 1959.","C. Tất cả các phương án"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tất cả các phương án\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-92",
    module: "m3",
    question: "Một trong những nội dung về xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ theo tư tưởng Hồ Chí Minh là:",
    options: ["A. Xây dựng đội ngũ cán bộ, công chức đủ đức và tài","B. Xây dựng đội ngũ cán bộ, công chức đủ phẩm chất tốt","C. Xây dựng đội ngũ cán bộ, công an đủ đức và tài"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Xây dựng đội ngũ cán bộ, công chức đủ đức và tài\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-93",
    module: "m3",
    question: "Theo Hồ Chí Minh, dân là chủ nghĩa là:",
    options: ["A. Đề cập tới vị trí của dân.","B. Đề cập tới vị thế của dân.","C. Đề cập tới trách nhiệm của dân.","D. Đề cập tới năng lực của dân"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đề cập tới vị thế của dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-94",
    module: "m3",
    question: "Điểm đặc sắc nhất trong tư tưởng Hồ Chí Minh về Nhà nước pháp quyền là:",
    options: ["A. Coi trọng luật pháp trong quản lý xã hội.","B. Đề cao đạo đức trong quản lý xã hội.","C. Đảm bảo tính nghiêm minh và hiệu lực của pháp luật.","D. Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-95",
    module: "m3",
    question: "Tìm ra nội dung không đúng trong tư tưởng Hồ Chí Minh về Dân chủ trong các lĩnh vực của đời sống xã hội:",
    options: ["A. Việc bảo đảm quyền con người, quyền công dân.","B. Phương thức tổ chức xã hội.","C. Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Kết hợp nhuần nhuyễn cả pháp luật và đạo đức trong quản lý xã hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-96",
    module: "m3",
    question: "Nội dung nào không đúng với bản chất giai cấp công nhân của nhà nước theo tư tưởng Hồ Chí Minh?",
    options: ["A. Nhà nước do Đảng Cộng sản lãnh đạo.","B. Tính định hướng xã hội chủ nghĩa của sự phát triển đất nước.","C. Nguyên tắc tổ chức và hoạt động cơ bản của nó là nguyên tắc tập trung dân chủ.","D. Nhà nước dưới sự lãnh đạo của Quốc hội."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Nhà nước dưới sự lãnh đạo của Quốc hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-97",
    module: "m3",
    question: "Trong quan điểm của Hồ Chí Minh về bản chất của nhà nước có sự thống nhất giữa bản chất giai cấp công nhân với:",
    options: ["A. Tính nhân dân và tính dân tộc","B. Tính xã hội chủ nghĩa và tính dân tộc","C. Tính nhân dân và tính xã hội chủ nghĩa"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tính nhân dân và tính dân tộc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-98",
    module: "m3",
    question: "Theo Hồ Chí Minh, nhà nước do dân thể hiện ở chỗ",
    options: ["A. Do nhân dân lập nên","B. Do nhân dân làm chủ","C. Do nhân dân ủng hộ","D. Tất cả các phương án"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-99",
    module: "m3",
    question: "Chọn phương án trả lời không đúng với tư tưởng Hồ Chí Minh về nhà nước vì dân:",
    options: ["A. Phục vụ nhân dân.","B. Chăm lo mọi mặt đời sống nhân dân.","C. Do dân làm chủ, tổ chức nên.","D. Đem lại lợi ích cho dân."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Do dân làm chủ, tổ chức nên.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-100",
    module: "m3",
    question: "Nội dung nào không đúng với tư tưởng Hồ Chí Minh trong việc thực thi Hiến pháp và pháp luật?",
    options: ["A. Pháp luật phải đúng và phải đủ","B. Tăng cường tuyên truyền, giáo dục pháp luật cho người cao tuổi","C. Người thực thi luật pháp phải thật sự công tâm và nghiêm minh","D. Bất kỳ ai vi phạm pháp luật cũng đều bị trừng trị nghiêm khắc, đúng người, đúng tội."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tăng cường tuyên truyền, giáo dục pháp luật cho người cao tuổi\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-101",
    module: "m3",
    question: "Theo Hồ Chí Minh, xây dựng nhà nước trong sạch vững mạnh cần phải:",
    options: ["A. Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cách mạng","B. Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cán bộ","C. Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức quần chúng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tăng cường tính nghiêm minh của pháp luật đi đôi với giáo dục đạo đức cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-102",
    module: "m3",
    question: "Trong tư tưởng Hồ Chí Minh, Quản lý nhà nước là quản lý bằng bộ máy, bằng pháp luật và bằng nhiều biện pháp khác nhau trong đó quan trọng bậc nhất là:",
    options: ["A. Hiến pháp","B. Quyền lực","C. Mệnh lệnh","D. Hình phạt"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Hiến pháp\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-103",
    module: "m3",
    question: "Đâu là quan điểm của Hồ Chí Minh về xây dựng nhà nước có hiệu lực pháp lý mạnh mẽ?",
    options: ["A. Hoạt động quản lý nhà nước bằng Hiến pháp và pháp luật, chú trọng đưa pháp luật vào cuộc sống.","B. Hoạt động quản lý nhà nước bằng quy định và đạo luật, chú trọng đưa quy định vào cuộc sống.","C. Hoạt động quản lý nhà nước bằng Hiến pháp và sắc lệnh, chú trọng đưa sắc lệnh vào cuộc sống."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Hoạt động quản lý nhà nước bằng Hiến pháp và pháp luật, chú trọng đưa pháp luật vào cuộc sống.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-104",
    module: "m3",
    question: "Theo Hồ Chí Minh, nhà nước của dân là:",
    options: ["A. Do nhân dân lập ra","B. Do nhân dân lãnh đạo","C. Do nhân dân quản lý","D. Quyền lực của nhà nước và xã hội thuộc về nhân dân"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Quyền lực của nhà nước và xã hội thuộc về nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-105",
    module: "m3",
    question: "Chọn phương án trả lời đúng nhất theo tư tưởng Hồ Chí Minh về bản chất của nhà nước Việt Nam?",
    options: ["A. Mang bản chất giai cấp công nhân.","B. Có tính dân tộc, tính nhân dân sâu sắc.","C. Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc.","D. Mang tính dân tộc."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Có sự thống nhất bản chất giai cấp công nhân với tính nhân dân và tính dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-106",
    module: "m3",
    question: "Hồ Chí Minh chỉ rõ: \"Ở nước ta chính quyền là của nhân dân, do nhân dân làm chủ. Nhân dân là (....) nắm chính quyền. Nhân dân bầu ra đại biểu thay mặt mình thi hành chính quyền ấy. Thế là dân chủ\".",
    options: ["A. Ông chủ","B. Người đại diện","C. Công bộc"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Ông chủ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-107",
    module: "m3",
    question: "Theo Hồ Chí Minh, trong Nhà nước vì dân, từ Chủ tịch nước đến công chức bình thường đều phải làm công bộc, làm đầy tớ cho nhân dân chứ không phải làm:",
    options: ["A. Tướng","B. Quan","C. Quan cách mạng","D. Trâu, ngựa"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Quan cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-108",
    module: "m3",
    question: "Theo Hồ Chí Minh, mọi người phải hiểu và tuyệt đối chấp hành pháp luật, bất kể người đó giữ cương vị nào. Vì thần linh pháp quyền là:",
    options: ["A. Sức mạnh do thần linh và vì con người.","B. Sức mạnh do con người và vì con người.","C. Sức mạnh do con người và vì thần linh."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Sức mạnh do con người và vì con người.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-109",
    module: "m3",
    question: "Hồ Chí Minh nhắc cán bộ nhà nước phải biết",
    options: ["A. Học tập từ nhân dân","B. Tự tôn dân tộc trước nhân dân","C. Quan cách trước nhân dân"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Học tập từ nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-110",
    module: "m3",
    question: "Trong những câu nói sau đây, câu nào không phải là của Hồ Chí Minh:",
    options: ["A. \"Muốn được dân yêu, muốn được lòng dân, trước hết phải yêu dân, phải đặt quyền lợi của dân trên hết thảy, phải có một tinh thần chí công vô tư\".","B. \"Chúng ta đã xây dựng nên nước Việt Nam Dân chủ Cộng hòa. Nhưng nếu nước độc lập mà dân không được hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì\".","C. \"Chính phủ nhân dân bao giờ cũng phải đặt quyền lợi của dân lên trên hết thảy. Việc gì có lợi cho dân thì phải hết sức làm. Việc gì hại đến dân thì phải hết sức tránh\".","D. \"Khoan thư sức dân làm kế sâu rễ bền gốc\"."],
    correct: 3,
    explanation: "Đáp án đúng là: \"\"Khoan thư sức dân làm kế sâu rễ bền gốc\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-111",
    module: "m3",
    question: "Một nhà nước pháp quyền có hiệu lực pháp lý mạnh mẽ theo tư tưởng Hồ Chí Minh phải là:",
    options: ["A. Một nhà nước hợp hiến.","B. Một nhà nước thống nhất, có chủ quyền quốc gia.","C. Một nhà nước của dân, do dân, vì dân.","D. Một nhà nước không có tiêu cực, không có đặc quyền đặc lợi."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Một nhà nước hợp hiến.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-112",
    module: "m3",
    question: "Quan điểm nào sau đây được xem là đánh giá của Hồ Chí Minh về giá trị của dân chủ:",
    options: ["A. Dân chủ là của quý báu nhất của nhân dân","B. Dân chủ là tài sản quý báu nhất của dân quyền","C. Dân chủ là tài sản của mọi chế độ xã hội"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Dân chủ là của quý báu nhất của nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-113",
    module: "m3",
    question: "Theo Hồ Chí Minh, kỷ cương, phép nước thời nào cũng luôn được đề cao và phải được áp dụng cho tất cả mọi người. Từ đó Người đưa ra yêu cầu:",
    options: ["A. Pháp luật phải thẳng tay trừng trị những kẻ bất liêm, bất kỳ kẻ ấy ở địa vị nào, làm nghề nghiệp gì.","B. Phải cảm hoá những người có lỗi lầm, kéo họ đi với cách mạng, giáo dục những người mắc khuyết điểm để họ tránh phạm pháp.","C. Tất cả các phương án."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-114",
    module: "m3",
    question: "Theo Hồ Chí Minh, dân làm chủ nghĩa là:",
    options: ["A. Đề cập tới năng lực của dân","B. Đề cập tới trách nhiệm của dân","C. Tất cả các phương án"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tất cả các phương án\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-115",
    module: "m3",
    question: "Theo Hồ Chí Minh, những tiêu cực của đội ngũ cán bộ trong hoạt động của bộ máy nhà nước là:",
    options: ["A. Đặc quyền, đặc lợi.","B. Tham ô, lãng phí, quan liêu.","C. Tư túng, chia rẽ, kiêu ngạo.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-116",
    module: "m3",
    question: "Theo Hồ Chí Minh, Nhà nước Việt Nam được xây dựng phải là:",
    options: ["A. Nhà nước hợp pháp, hợp hiến","B. Nhà nước quốc gia dân tộc","C. Nhà nước tự lập, tự tôn","D. Nhà nước bảo hộ cho phép"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Nhà nước hợp pháp, hợp hiến\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-117",
    module: "m3",
    question: "Hồ Chí Minh viết",
    options: ["A. Một Đảng mà giấu giếm khuyết điểm của mình là một đảng hỏng","B. Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải xó bỏ","C. Một Đảng mà giấu giếm khuyết điểm của mình là một đảng cần phải thay thế"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Một Đảng mà giấu giếm khuyết điểm của mình là một đảng hỏng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-118",
    module: "m3",
    question: "Trong di chúc Hồ Chí Minh viết rằng",
    options: ["A. Đảng phải có kế hoạch tốt để phát triển kinh tế, văn hóa","B. Đảng phải có kế hoạch tốt để phát triển kinh tế, chính trị","C. Đảng phải có kế hoạch tốt để phát triển kinh tế, xã hội"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng phải có kế hoạch tốt để phát triển kinh tế, văn hóa\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-119",
    module: "m3",
    question: "Đối với Hồ Chí Minh, dân ta tài năng, trí tuệ và sáng tạo, họ biết \"giải quyết nhiều vấn đề một cách giản đơn, mau chóng, đầy đủ, mà những người tài giỏi, những đoàn thể to lớn,....",
    options: ["A. nghĩ mãi không ra\".","B. nghĩ mãi mới ra\".","C. làm mãi không được\".","D. làm mãi mới được"],
    correct: 0,
    explanation: "Đáp án đúng là: \"nghĩ mãi không ra\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-120",
    module: "m3",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Dân là chủ thì Chính phủ phải là (............ ). Nếu Chính phủ làm hại dân thì dân có quyền đuổi Chính phủ\".",
    options: ["A. Tôi tớ","B. Đầy tớ","C. Người lãnh đạo","D. Người hầu"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đầy tớ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-121",
    module: "m3",
    question: "Hồ Chí Minh khẳng định: \"Nếu không có nhân dân thì Chính phủ không đủ lực lượng. Nếu không có Chính phủ, thì nhân dân không ai:",
    options: ["A. Đầy tớ","B. Ủng hộ","C. Dẫn đường","D. Phục vụ"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Dẫn đường\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-122",
    module: "m3",
    question: "Theo Hồ Chí Minh, dân làm chủ, nghĩa là đề cập đến:",
    options: ["A. Vị thế của dân","B. Năng lực và trách nhiệm của dân","C. Cả a và b"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Năng lực và trách nhiệm của dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-123",
    module: "m3",
    question: "Bảo đảm dân chủ trong việc xác lập quyền lực của nhân dân.",
    options: ["A. Phải làm cho dân có ăn","B. Phải làm cho dân có mặc","C. Phải làm cho dân có chỗ ở","D. Phải làm cho dân được học hành","E. Tất cả các phương án"],
    correct: 4,
    explanation: "Đáp án đúng là: \"Tất cả các phương án\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-124",
    module: "m3",
    question: "Theo Hồ Chí Minh, có bảo đảm và phát huy .........ở trong Đảng thì mới bảo đảm được dân chủ của toàn xã hội.",
    options: ["A. Dân chủ","B. Bình đẳng","C. Tự do","D. Bác ái"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Dân chủ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-125",
    module: "m3",
    question: "Theo Hồ Chí Minh, giải phóng phụ nữ để .......... với nam giới, thực sự tham gia tích cực vào các công việc xã hội.",
    options: ["A. Tự do","B. Công bằng","C. Bình đẳng","D. Dân chủ"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Bình đẳng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-126",
    module: "m3",
    question: "Điền vào chỗ trống để hoàn thiện câu nói sau của Hồ Chí Minh: \"Nước ta là nước (..........) , địa vị cao nhất là dân, vì dân là chủ\".",
    options: ["A. Tự do","B. Tự chủ","C. Dân chủ","D. Bình đẳng"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Dân chủ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-127",
    module: "m3",
    question: "Theo Hồ Chí Minh, tất cả các cơ quan Nhà nước phải dựa vào nhân dân, liên hệ chặt chẽ với nhân dân, lắng nghe ý kiến và chịu sự:",
    options: ["A. Kìm kẹp của nhân dân","B. Giáo dục của nhân dân","C. Kiểm soát của Đảng","D. Kiểm soát của nhân dân"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Kiểm soát của nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-128",
    module: "m3",
    question: "Hồ Chí Minh cho rằng: Muốn khẳng định là một nước dân chủ thì phải có cấu tạo quyền lực xã hội mà ở đó người dân, cả trực tiếp, cả gián tiếp qua dân chủ đại diện, một hệ thống chính trị do:",
    options: ["A. \"Đảng cử ra\" và \"do Đảng tổ chức nên\"","B. \"Nhà nước cử ra\" và \"do Nhà nước tổ chức nên\"","C. \"Mặt trận Tổ quốc cử ra\" và \"do Mặt trận Tổ quốc tổ chức nên\"","D. \"dân cử ra\" và \"do dân tổ chức nên\""],
    correct: 3,
    explanation: "Đáp án đúng là: \"'dân cử ra' và 'do dân tổ chức nên'\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-129",
    module: "m3",
    question: "Theo Hồ Chí Minh, dân chủ thể hiện trên lĩnh vực nào là quan trọng nhất, nổi bật nhất?",
    options: ["A. Chính trị","B. Kinh tế","C. Văn Hóa","D. Xã hội"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chính trị\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-130",
    module: "m3",
    question: "Theo Hồ Chí Minh, Nhà nước do dân tạo ra và nhân dân tham gia quản lý là ở chỗ: toàn bộ công dân bầu ra .........., cơ quan quyền lực cao nhất của Nhà nước, cơ quan duy nhất có quyền lập pháp.",
    options: ["A. Đảng","B. Nhà nước","C. Quốc hội","D. Chủ tịch nước"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Quốc hội\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-131",
    module: "m3",
    question: "Theo Hồ Chí Minh, dân chủ thể hiện ở việc bảo đảm quyền:",
    options: ["A. Con người, quyền giai cấp","B. Con người, quyền nhân dân","C. Con người, quyền dân tộc","D. Con người, quyền công dân"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Con người, quyền công dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-132",
    module: "m3",
    question: "Điền vào chỗ trống để hoàn thiện câu nói sau của Hồ Chí Minh: \"Nước Việt Nam là một nước dân chủ cộng hoà, tất cả quyền bính trong nước là của toàn thể nhân dân Việt Nam, không phân biệt nòi giống, gái trai, giàu nghèo, giai cấp, tôn giáo; những việc quan hệ đến vận mệnh quốc gia sẽ đưa ra toàn (............) phúc quyết\"",
    options: ["A. Quốc","B. Đảng","C. Dân","D. Quốc hội"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-133",
    module: "m3",
    question: "Hiến pháp năm 1959 đã tiếp tục khẳng định quan điểm gì trong tư tưởng Hồ Chí Minh?",
    options: ["A. Bảo đảm dân quyền trong việc xác lập quyền lực của nhân dân.","B. Bảo đảm dân chủ trong việc xác lập quyền lực của nhân dân.","C. Bảo đảm dân chủ trong việc xác lập quyền lực của nhà nước.","D. Bảo đảm dân quyền trong việc xác lập quyền lực của chính quyền."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Bảo đảm dân chủ trong việc xác lập quyền lực của nhân dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-134",
    module: "m3",
    question: "Theo Hồ Chí Minh, việc gì có hại cho dân dù nhỏ mấy cũng cố gắng:",
    options: ["A. Làm","B. Tránh","C. Học","D. Khắc phục"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tránh\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m3-135",
    module: "m3",
    question: "Điền vào chỗ trống để hoàn thiện câu nói sau của Hồ Chí Minh: \"Đối với nông dân, nông dân thật sự nắm (.........), nông dân phải được giải phóng.\"",
    options: ["A. Ruộng đất","B. Xí nghiệp, hầm mỏ","C. Chính quyền","D. Đảng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Ruộng đất\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-1",
    module: "m4",
    question: "Hồ Chí Minh gọi đồng bào Miền nam với cái tên thân thương và trìu mến đó là",
    options: ["A. Thành đồng tổ quốc","B. Anh hùng bất khuất","C. Anh dũng kiên cường","D. Giai cấp cách mệnh"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Thành đồng tổ quốc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-2",
    module: "m4",
    question: "Đại đoàn kết dân tộc được xác định là nhiệm vụ nào trong những nhiệm vụ dưới đây của Đảng và của toàn dân tộc ta?",
    options: ["A. Cơ bản của Đảng và của dân tộc","B. Hàng đầu của Đảng và của dân tộc","C. Quan trọng của Đảng và của dân tộc ta","D. Thiết yếu"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Hàng đầu của Đảng và của dân tộc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-3",
    module: "m4",
    question: "Theo Hồ Chí Minh, xây dựng khối đại đoàn kết toàn dân để tập hợp lực lượng, không được phép bỏ sót một lực lượng nào miễn không là Việt gian, không phản bội lại quyền lợi của dân chúng phải:",
    options: ["A. Đứng vững trên lập trường nhân dân lao động, giải quyết hài hoà mối quan hệ giai cấp - dân tộc.","B. Đứng vững trên lập trường giai cấp nông dân, giải quyết hài hoà mối quan hệ giai cấp - dân tộc.","C. Đứng vững trên lập trường giai cấp công nhân, giải quyết hài hoà mối quan hệ giai cấp - dân tộc."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Đứng vững trên lập trường giai cấp công nhân, giải quyết hài hoà mối quan hệ giai cấp - dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-4",
    module: "m4",
    question: "Đối với Hồ Chí Minh, toàn dân tộc chỉ trở thành lực lượng to lớn, có sức mạnh vô địch khi được tập hợp, tổ chức lại thành một khối vững chắc, được giác ngộ về mục tiêu chiến đấu chung và hoạt động theo:",
    options: ["A. Một Đảng chính trị đúng đắn","B. Một đường lối chính trị đúng đắn.","C. Một tổ chức chính trị đúng đắn"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Một đường lối chính trị đúng đắn.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-5",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, lực lượng nào là chủ thể của khối đại đoàn kết dân tộc?",
    options: ["A. Công nhân","B. Công - nông","C. Nhân dân","D. Không xác định lực lượng chủ thể"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Công nhân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-6",
    module: "m4",
    question: "Theo Hồ Chí Minh, để đánh bại các thế lực đế quốc thực dân chỉ có tinh thần yêu nước là chưa đủ, cách mạng muốn đến nơi, phải tập hợp được tất cả mọi lực lượng có thể tập hợp, xây dựng được:",
    options: ["A. Khối đại đoàn kết dân tộc bền vững.","B. Chương trình tập hợp lực lượng đoàn kết rộng rãi.","C. Chính sách dân tộc phù hợp."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Khối đại đoàn kết dân tộc bền vững.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-7",
    module: "m4",
    question: "Nguyên tắc tối cao để đoàn kết rộng rãi trong quần chúng nhân dân là:",
    options: ["A. Yêu dân, tin dân, dựa vào dân, vì hạnh phúc của nhân dân","B. Đoàn kết trên cơ sở độc lập tự chủ","C. Đoàn kết chặt chẽ, chân thành","D. Đoàn kết trên cơ sở tự nguyện"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Yêu dân, tin dân, dựa vào dân, vì hạnh phúc của nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-8",
    module: "m4",
    question: "Theo Hồ Chí Minh, \"Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta (....) với họ\".",
    options: ["A. Hợp tác","B. Đoàn kết","C. Bắt tay","D. Chia sẻ"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đoàn kết\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-9",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, mối quan hệ giữa Đảng và Mặt trận được xác định là mối quan hệ:",
    options: ["A. Song song","B. Máu thịt","C. Biện chứng","D. Độc lập"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Máu thịt\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-10",
    module: "m4",
    question: "Trong quá trình xây dựng khối đại đoàn kết toàn dân tộc phải đứng vững trên lập trường của giai cấp nào?",
    options: ["A. Giai cấp nông dân","B. Tầng lớp trí thức","C. Giai cấp công nhân","D. Tư sản dân tộc"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Giai cấp công nhân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-11",
    module: "m4",
    question: "Theo Hồ Chí Minh, để thực hiện đoàn kết quốc tế thì đoàn kết (....) \"là điều kiện quan trọng nhất để bảo đảm cho phong trào cộng sản và công nhân toàn thắng\"",
    options: ["A. Giữa các Đảng","B. Giữa các chính phủ","C. Giữa các dân tộc","D. Tất cả các phương án"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giữa các Đảng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-12",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước người Việt Nam, bao gồm cả những người:",
    options: ["A. Định cư ở nước ngoài","B. Nước ngoài","C. Tất cả các phương án"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Định cư ở nước ngoài\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-13",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc phải biến thành sức mạnh vật chất, trở thành lực lượng vật chất có tổ chức. Tổ chức đó chính là:",
    options: ["A. Đoàn thể chính trị quần chúng.","B. Đảng Cộng sản Việt Nam.","C. Mặt trận dân tộc thống nhất.","D. Đoàn thanh niên Cộng sản."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Mặt trận dân tộc thống nhất.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-14",
    module: "m4",
    question: "Hồ Chí Minh minh cho rằng \"đoàn kết phải gắn với (....), (....) để tăng cường đoàn kết\".",
    options: ["A. Đấu tranh","B. Lợi ích","C. Tự do","D. Dân chủ"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đấu tranh\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-15",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, nền tảng của khối đại đoàn kết dân tộc là:",
    options: ["A. Liên minh công-nông","B. Liên minh công-nông, lao động trí óc.","C. Liên minh công-nông và các tầng lớp lao động khác.","D. Liên minh công-nông và các lực lượng yêu nước khác."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Liên minh công-nông và các tầng lớp lao động khác.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-16",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc là:",
    options: ["A. Đoàn kết công-nông.","B. Đoàn kết công-nông-lao động trí óc.","C. Đoàn kết công-nông và các tầng lớp xã hội khác.","D. Đại đoàn kết toàn dân."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Đại đoàn kết toàn dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-17",
    module: "m4",
    question: "Hồ Chí Minh chỉ ra nguyên tắc xây dựng mặt trận:",
    options: ["A. Mặt trận phải hoạt động theo nguyên tắc hiệp thương dân chủ","B. Mặt trận phải hoạt động theo nguyên tắc hiệp thương dân quyền","C. Mặt trận phải hoạt động theo nguyên tắc hiệp thương quần chúng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Mặt trận phải hoạt động theo nguyên tắc hiệp thương dân chủ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-18",
    module: "m4",
    question: "Đâu là nguyên tắc đoàn kết quốc tế trong tư tưởng Hồ Chí Minh?",
    options: ["A. Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình.","B. Đoàn kết trên cơ sở thống nhất mục tiêu độc lập của dân tộc mình và mục tiêu của nhân loại","C. Đoàn kết trên cơ sở thống nhất mục tiêu và mục đích, có lý, có tình."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích, có lý, có tình.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-19",
    module: "m4",
    question: "Hồ Chí Minh cho rằng:",
    options: ["A. Đại đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược, quyết định sự thành công của cách mạng","B. Đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược tác động trực tiếp đến sự thành công của cách mạng","C. Đại đoàn kết toàn dân là vấn đề có ý nghĩa chiến lược, quyết định sự trưởng thành của cách mạng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đại đoàn kết dân tộc là vấn đề có ý nghĩa chiến lược, quyết định sự thành công của cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-20",
    module: "m4",
    question: "Khẩu hiệu chiến lược: \"Giai cấp vô sản tất cả các nước và các dân tộc bị áp bức, đoàn kết lại\" là của:",
    options: ["A. C. Mác","B. Ph. Ăngghen","C. V.I.Lênin","D. Hồ Chí Minh"],
    correct: 2,
    explanation: "Đáp án đúng là: \"V.I.Lênin\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-21",
    module: "m4",
    question: "Trong quan hệ quốc tế, Hồ Chí Minh nhấn mạnh: phải có thực lực, thực lực là cái (....), ngoại giao là cái tiếng, (....) có to tiếng mới lớn.",
    options: ["A. Chiêng","B. Trống","C. Kèn","D. Đàn"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chiêng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-22",
    module: "m4",
    question: "Theo Hồ Chí Minh, quyền lãnh đạo Mặt trận của Đảng không phải do Đảng tự phong cho mình, mà phải được:",
    options: ["A. Nhân dân bỏ phiếu.","B. Trưng cầu dân ý.","C. Nhân dân thừa nhận.","D. Chính quyền cho phép."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Nhân dân thừa nhận.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-23",
    module: "m4",
    question: "Đâu là nguyên tắc đoàn kết quốc tế trong tư tưởng Hồ Chí Minh?",
    options: ["A. Đoàn kết trên cơ sở độc lập, tự chủ, tự lực, tự cường.","B. Đoàn kết trên cơ sở dựa vào sức mình là chính, nhận sự giúp đỡ quốc tế.","C. Đoàn kết trên cơ sở nhận sự giúp đỡ quốc tế và có nghĩa vụ quốc tế."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đoàn kết trên cơ sở độc lập, tự chủ, tự lực, tự cường.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-24",
    module: "m4",
    question: "Trong Mặt trận dân tộc thống nhất, Đảng Cộng sản là:",
    options: ["A. Thành viên của Mặt trận dân tộc thống nhất.","B. Lực lượng lãnh đạo Mặt trận dân tộc thống nhất.","C. Vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận dân tộc thống nhất.","D. Đại biểu của giai cấp công nhân trong Mặt trận dân tộc thống nhất."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Vừa là thành viên, vừa là lực lượng lãnh đạo Mặt trận dân tộc thống nhất.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-25",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, Mặt trận dân tộc thống nhất càng rộng rãi, sức mạnh của khối liên minh công nông trí thức càng:",
    options: ["A. Suy yếu và ngược lại.","B. Được tăng cường và ngược lại.","C. Gắn kết và ngược lại"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Được tăng cường và ngược lại.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-26",
    module: "m4",
    question: "Theo Hồ Chí Minh, để quy tụ được mọi lực lượng vào khối đại đoàn kết toàn dân, cần phải có:",
    options: ["A. Chính sách và phương pháp phù hợp.","B. Lòng khoan dung rộng lớn.","C. Tinh thần thương yêu con người."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chính sách và phương pháp phù hợp.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-27",
    module: "m4",
    question: "Theo Hồ Chí Minh, nguyên tắc hiệp thương dân chủ đòi hỏi tất cả mọi vấn đề của Mặt trận đều phải được đem ra cho tất cả các thành viên cùng nhau bàn bạc công khai, để đi đến nhất trí, loại trừ mọi sự áp đặt hoặc:",
    options: ["A. Dân chủ hình thức.","B. Dân chủ.","C. Chuyên quyền."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Dân chủ hình thức.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-28",
    module: "m4",
    question: "Lực lượng chủ yếu của khối đại đoàn kết dân tộc theo tư tưởng Hồ Chí Minh là:",
    options: ["A. Công nhân","B. Công nhân, nông dân","C. Học trò, nhà buôn","D. Công nhân, nông dân, lao động trí óc."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Công nhân, nông dân, lao động trí óc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-29",
    module: "m4",
    question: "Theo Hồ Chí Minh, đoàn kết là",
    options: ["A. Truyền thống quý báu của dân tộc ta","B. Sức mạnh vô địch của dân tộc ta","C. Ý chí tự lực, tự cường của dân tộc ta"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Truyền thống quý báu của dân tộc ta\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-30",
    module: "m4",
    question: "Mặt trận dân tộc thống nhất trong tư tưởng Hồ Chí Minh được xây dựng như thế nào?",
    options: ["A. Là nơi tập hợp mọi người dân ở trong nước Việt Nam","B. Là tổ chức tập hợp ngẫu nhiên quần chúng nhân dân","C. Là khối đại đoàn kết chặt chẽ có tổ chức trên nền tảng khối liên minh công - nông - trí thức do Đảng Cộng sản lãnh đạo","D. Là nơi quy tụ mọi người Việt Nam định cư ở nước ngoài, dù ở bất cứ phương trời nào"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Là khối đại đoàn kết chặt chẽ có tổ chức trên nền tảng khối liên minh công - nông - trí thức do Đảng Cộng sản lãnh đạo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-31",
    module: "m4",
    question: "Theo Hồ Chí Minh, muốn tăng cường đoàn kết quốc tế trong cuộc đấu tranh vì mục tiêu chung, các Đảng Cộng sản phải tiến hành có hiệu quả việc giáo dục chủ nghĩa yêu nước chân chính kết hợp với:",
    options: ["A. Chủ nghĩa vô sản.","B. Chủ nghĩa xã hội.","C. Chủ nghĩa quốc tế.","D. Chủ nghĩa Mác - Lênin."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa vô sản.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-32",
    module: "m4",
    question: "Hồ Chí Minh cho rằng",
    options: ["A. Đại đoàn kết là vấn đề chiến lược","B. Đại đoàn kết là vấn đề sách lược","C. Đại đoàn kết là vấn đề thời đại"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đại đoàn kết là vấn đề chiến lược\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-33",
    module: "m4",
    question: "Đại đoàn kết quốc tế trong tư tưởng Hồ Chí Minh được xác định là:",
    options: ["A. Một nhân tố thường xuyên và hết sức quan trọng giúp cho cách mạng Việt Nam đi đến thắng lợi hoàn toàn.","B. Có ý nghĩa sống còn đối với cách mạng Việt Nam.","C. Vấn đề cơ bản của cách mạng việt Nam.","D. Sức mạnh giúp cho dân tộc ta vượt qua mọi thử thách, khó khăn trong dựng nước và giữ nước."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Một nhân tố thường xuyên và hết sức quan trọng giúp cho cách mạng Việt Nam đi đến thắng lợi hoàn toàn.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-34",
    module: "m4",
    question: "Theo Hồ Chí Minh, để thực hành đoàn kết rộng rãi, cần có niềm tin vào (....).",
    options: ["A. Dân","B. Đảng","C. Chính quyền"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-35",
    module: "m4",
    question: "Theo Hồ Chí Minh, để lãnh đạo mặt trận, Đảng phải:",
    options: ["A. Có chính sách mặt trận đúng đắn","B. Có chính sách đoàn kết đúng đắn","C. Có chính sách tập hợp đúng đắn"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Có chính sách mặt trận đúng đắn\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-36",
    module: "m4",
    question: "Lực lượng nào vừa là thành viên của Mặt trận dân tộc thống nhất vừa là lực lượng lãnh đạo Mặt trận?",
    options: ["A. Các tổ chức chính trị xã hội","B. Đảng cộng sản Việt Nam","C. Nhà nước cộng hòa xã hội chủ nghĩa Việt Nam","D. Quần chúng nhân dân"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Đảng cộng sản Việt Nam\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-37",
    module: "m4",
    question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc phải luôn được nhận thức là vấn đề sống còn, quyết định:",
    options: ["A. Lực lượng của cách mạng.","B. Thắng lợi của cách mạng.","C. Thành bại của cách mạng."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Thành bại của cách mạng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-38",
    module: "m4",
    question: "Mục đích chung của Mặt trận dân tộc thống nhất được Hồ Chí Minh xác định cụ thể phù hợp là:",
    options: ["A. Đoàn kết chặt chẽ, lâu dài, thật sự, chân thành.","B. Tất cả các phương án.","C. Độc lập, tự do."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đoàn kết chặt chẽ, lâu dài, thật sự, chân thành.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-39",
    module: "m4",
    question: "Theo Hồ Chí Minh, \"Đoàn kết là (.....). Điểm này mà thực hiện tốt thì đẻ ra con cháu đều tốt\".",
    options: ["A. Điểm mẹ","B. Điểm quyết định","C. Điểm thắng lợi","D. Điểm bố"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Điểm mẹ\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-40",
    module: "m4",
    question: "Luận điểm \"Lao động tất cả các nước đoàn kết lại\" là của:",
    options: ["A. C. Mác","B. Ph. Ăngghen","C. V.I.Lênin","D. Hồ Chí Minh"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Hồ Chí Minh\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-41",
    module: "m4",
    question: "Theo Hồ Chí Minh, để lãnh đạo Mặt trận, Đảng phải đi đúng đường lối quần chúng, không được:",
    options: ["A. Vận động, giáo dục, thuyết phục, nêu gương, lấy lòng chân thành để đối xử, cảm hóa, khơi gợi tinh thần tự giác, tự nguyện.","B. Quan liêu, mệnh lệnh và gò ép.","C. Lấy quyền uy để thuyết phục mọi người đi theo."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Quan liêu, mệnh lệnh và gò ép.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-42",
    module: "m4",
    question: "Theo Hồ Chí Minh, Đại đoàn kết dân tộc là nhiệm vụ hàng đầu của Đảng, đồng thời cũng là nhiệm vụ hàng đầu của:",
    options: ["A. Mọi giai đoạn cách mạng.","B. Toàn quân.","C. Toàn dân."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Mọi giai đoạn cách mạng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-43",
    module: "m4",
    question: "Theo Hồ Chí Minh, để thực hiện được đoàn kết, cần xoá bỏ hết mọi thành kiến, cần phải (....) và giúp đỡ lẫn nhau cùng tiến bộ.",
    options: ["A. Nghiêm túc hợp tác","B. Thật thà hợp tác","C. Sẵn sàng hợp tác"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Thật thà hợp tác\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-44",
    module: "m4",
    question: "Luận điểm \"Công cuộc giải phóng anh em chỉ có thể thực hiện bằng sự nỗ lực của bản thân anh em\" là của:",
    options: ["A. C. Mác","B. Ph. Ăngghen","C. V.I.Lênin","D. Hồ Chí Minh"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Hồ Chí Minh\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-45",
    module: "m4",
    question: "Đối với phong trào cộng sản và công nhân, quốc tế, Hồ Chí Minh giương cao ngọn cờ độc lập dân tộc gắn liền với chủ nghĩa xã hội, thực hiện đoàn kết thống nhất trên nền tảng của chủ nghĩa Mác-Lênin và:",
    options: ["A. Chủ nghĩa Mác - Lênin, có lý, có tình.","B. Chủ nghĩa quốc tế vô sản, có tình, có nghĩa.","C. Chủ nghĩa quốc tế vô sản, có lý, có tình."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Chủ nghĩa quốc tế vô sản, có lý, có tình.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-46",
    module: "m4",
    question: "Theo Hồ Chí Minh, thực hiện đại đoàn kết dân tộc phải gắn liền với đoàn kết quốc tế; đại đoàn kết dân tộc phải là:",
    options: ["A. Cơ sở cho việc thực hiện đoàn kết quốc tế.","B. Chỗ dựa cho việc thực hiện đoàn kết quốc tế.","C. Chỗ đứng cho việc thực hiện đoàn kết quốc tế."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Cơ sở cho việc thực hiện đoàn kết quốc tế.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-47",
    module: "m4",
    question: "Hồ Chí Minh cho rằng đoàn kết toàn dân để:",
    options: ["A. Phụng sự nhân dân","B. Phụng sự cách mạng","C. Phụng sự tổ quốc"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Phụng sự tổ quốc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-48",
    module: "m4",
    question: "Theo Hồ Chí Minh, Mặt trận dân tộc thống nhất phải được xây dựng trên nền tảng khối liên minh công - nông - trí thức, đặt dưới:",
    options: ["A. Sự lãnh đạo của Đảng.","B. Sự lãnh đạo của tổ chức","C. Sự lãnh đạo của chính quyền"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Sự lãnh đạo của Đảng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-49",
    module: "m4",
    question: "Đối với Hồ Chí Minh, phải biết \"dễ (1....) lần không dân cũng chịu, khó (2....) lần dân liệu cũng xong\".",
    options: ["A. 1.vạn 2.trăm","B. 1.trăm 2.vạn","C. 1.nghìn 2.triệu","D. 1.triệu 2.nghìn"],
    correct: 1,
    explanation: "Đáp án đúng là: \"1.trăm 2.vạn\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-50",
    module: "m4",
    question: "Đại đoàn kết quốc tế trong tư tưởng Hồ Chí Minh được xác định là:",
    options: ["A. Một nhân tố thường xuyên và hết sức quan trọng giúp cho cách mạng Việt Nam đi đến thắng lợi hoàn toàn.","B. Có ý nghĩa sống còn đối với cách mạng Việt Nam.","C. Vấn đề cơ bản của cách mạng việt Nam.","D. Sức mạnh giúp cho dân tộc ta vượt qua mọi thử thách, khó khăn trong dựng nước và giữ nước."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Một nhân tố thường xuyên và hết sức quan trọng giúp cho cách mạng Việt Nam đi đến thắng lợi hoàn toàn.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-51",
    module: "m4",
    question: "Trong tư tưởng Hồ Chí Minh, đại đoàn kết dân tộc:",
    options: ["A. Là vấn đề cơ bản quyết định thành công của cách mạng.","B. Là vấn đề có ý nghĩa sách lược, quyết định thành công của cách mạng.","C. Là vấn đề cơ bản có ý nghĩa chiến lược, quyết định thành công của cách mạng."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Là vấn đề cơ bản có ý nghĩa chiến lược, quyết định thành công của cách mạng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-52",
    module: "m4",
    question: "Sức mạnh dân tộc trong tư tưởng Hồ Chí Minh bao gồm:",
    options: ["A. Chủ nghĩa yêu nước và văn hóa truyền thống Việt Nam.","B. Tinh thần đoàn kết, ý thức đấu tranh cho độc lập, tự do.","C. Ý thức tự lực, tự cường.","D. Tất cả các phương án"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-53",
    module: "m4",
    question: "Theo Hồ Chí Minh hình thức tổ chức của khối đại đoàn kết dân tộc là:",
    options: ["A. Mặt trận dân tộc thống nhất","B. Các đoàn thể quần chúng nhân dân","C. Đảng Cộng sản","D. Chính quyền"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Mặt trận dân tộc thống nhất\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-54",
    module: "m4",
    question: "Theo Hồ Chí Minh: \"Trong bầu trời không gì quý bằng nhân dân, trong thế giới không gì mạnh bằng:",
    options: ["A. lực lượng đoàn kết của nhân dân\".","B. lực lượng đoàn kết của nông dân\".","C. lực lượng đoàn kết của công nhân\"."],
    correct: 0,
    explanation: "Đáp án đúng là: \"lực lượng đoàn kết của nhân dân\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m4-55",
    module: "m4",
    question: "Hồ Chí Minh xác định trong thế giới không có gì mạnh bằng:",
    options: ["A. Giai cấp công nhân","B. Liên minh công - nông","C. Lực lượng đoàn kết của nhân dân","D. Sức mạnh đoàn kết quốc tế"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Lực lượng đoàn kết của nhân dân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-1",
    module: "m5",
    question: "Hồ Chí Minh cho rằng đạo đức cách mạng phải:",
    options: ["A. Tự mình tu dưỡng mà thành","B. Tự mình phấn đấu mà thành","C. Tự mình học tập mà thành"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tự mình tu dưỡng mà thành\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-2",
    module: "m5",
    question: "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
    options: ["A. Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh; hướng con người đến chân, thiện, mỹ để hoàn thiện xã hội.","B. Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh; hướng con người đến chân, thiện, mỹ để hoàn thiện bản thân.","C. Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh; hướng con người đến chân, thiện, mỹ để hoàn thiện con người."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Bồi dưỡng những phẩm chất, phong cách và lối sống tốt đẹp, lành mạnh; hướng con người đến chân, thiện, mỹ để hoàn thiện bản thân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-3",
    module: "m5",
    question: "Vi trùng rất độc này đẻ ra hàng trăm thứ bệnh: quan liêu, mệnh lệnh, bè phái, chuyên quyền, tham ô, lãng phí, tự cao tự đại, độc đoán chuyên quyền, bảo thủ, rụt rè không dám nói, không dám làm, không dám đề ra ý kiến, tóm lại không dám đổi mới và sáng tạo. Theo Hồ Chí Minh là gì?",
    options: ["A. Chủ nghĩa cá nhân","B. Đế quốc","C. Chủ nghĩa tư bản","D. Giặc đói"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa cá nhân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-4",
    module: "m5",
    question: "Hồ Chí Minh nói: \"Đạo đức cũ như người đầu ngược xuống đất chân chổng lên trời. Đạo đức mới như người hai chân đứng vững được dưới đất, đầu:",
    options: ["A. ngửng lên trời\".","B. ngửa lên trời\".","C. chổng lên trời\"."],
    correct: 0,
    explanation: "Đáp án đúng là: \"ngửng lên trời\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-5",
    module: "m5",
    question: "Trong tư tưởng Hồ Chí Minh: đức là gốc của tài; hồng là gốc của chuyên; phẩm chất là gốc của năng lực. Tài là thể hiện cụ thể của:",
    options: ["A. Đức trong hiệu quả hành động.","B. Năng lực trong hiệu quả hành động.","C. Kỹ năng trong hiệu quả hành động."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đức trong hiệu quả hành động.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-6",
    module: "m5",
    question: "Lối sống ích kỷ, chỉ biết có riêng mình, thu vén cho riêng mình, chỉ thấy công lao của mình mà quên công lao của người khác. Theo Hồ Chí Minh là gì?",
    options: ["A. Chủ nghĩa cá nhân","B. Chủ nghĩa vị kỷ","C. Chủ nghĩa tư bản","D. Phong cách tiểu tư sản"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa cá nhân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-7",
    module: "m5",
    question: "Hồ Chí Minh đưa ra mấy điểm lớn định hướng cho việc xây dựng nền văn hoá dân tộc?",
    options: ["A. Bốn","B. Năm","C. Sáu","D. Ba"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Năm\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-8",
    module: "m5",
    question: "Đoạn viết dưới đây ghi tóm tắt lời giải thích của Hồ Chí Minh về cần, kiệm, liêm, chính. Hỏi: Điểm tóm tắt nào đã bị ghi nhầm nội dung?",
    options: ["A. Cần là lao động cần cù, siêng năng, lao động có kế hoạch, sáng tạo và có năng suất lao động cao...","B. Kiệm là không xa xỉ, không hoang phí, không bừa bãi...","C. Liêm là luôn tôn trọng của công và của dân, không tham tiền của, địa vị, danh tiếng.","D. Chính là trong sạch, không tham lam đồng xu, hạt thóc của nhà nước, của dân."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Chính là trong sạch, không tham lam đồng xu, hạt thóc của nhà nước, của dân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-9",
    module: "m5",
    question: "Theo Hồ Chí Minh, văn nghệ (bao gồm văn học và nghệ thuật) là biểu hiện tập trung nhất của nền văn hoá, là đỉnh cao của đời sống tinh thần, là hình ảnh của:",
    options: ["A. Trí tuệ dân tộc.","B. Vật chất dân tộc .","C. Tâm hồn dân tộc."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Tâm hồn dân tộc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-10",
    module: "m5",
    question: "Theo Hồ Chí Minh Trung với nước là tuyệt đối trung thành với sự nghiệp dựng nước và giữ nước, trung thành với con đường đi lên của đất nước; là suốt đời phấn đấu cho:",
    options: ["A. Đảng, cho cách mạng.","B. Nhà nước, cho cách mạng.","C. Dân tộc, cho cách mạng."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đảng, cho cách mạng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-11",
    module: "m5",
    question: "Theo Hồ Chí Minh, tính khoa học của nền văn hoá mới thể hiện ở tính hiện đại, tiên tiến, thuận với:",
    options: ["A. Trào lưu tiến hoá của dân tộc.","B. Trào lưu tiến hoá của thời đại.","C. Trào lưu tiến hoá của khoa học kỹ thuật."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Trào lưu tiến hoá của thời đại.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-12",
    module: "m5",
    question: "Hồ Chí Minh cho rằng, phong trào cộng sản công nhân quốc tế trở thành lực lượng quyết định vận mệnh của loài người không chỉ do chiến lược và sách lược thiên tài của cách mạng vô sản, mà còn do:",
    options: ["A. Những phẩm chất đạo đức cao quý làm cho chủ nghĩa cộng sản trở thành một sức mạnh vô địch.","B. Vũ khí, đạn dược hiện đại làm cho chủ nghĩa cộng sản trở thành một sức mạnh vô địch.","C. Khoa học, kỹ thuật tiên tiến làm cho chủ nghĩa cộng sản trở thành một sức mạnh vô địch."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Những phẩm chất đạo đức cao quý làm cho chủ nghĩa cộng sản trở thành một sức mạnh vô địch.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-13",
    module: "m5",
    question: "Theo Hồ Chí Minh, cần là siêng năng, chăm chỉ; lao động có kế hoạch, có hiệu quả, có năng suất cao với tinh thần:",
    options: ["A. Tự lực cánh sinh.","B. Chịu khó.","C. Cầu thị.","D. Nỗ lực."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tự lực cánh sinh.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-14",
    module: "m5",
    question: "Theo Hồ Chí Minh, hiếu với dân thể hiện ở chỗ thương dân, tin dân, phục vụ nhân dân hết lòng. Vì thế, phải gần dân, kính trọng và học tập nhân dân, phải dựa vào dân và lấy:",
    options: ["A. dân làm gốc.","B. dân làm chỗ dựa.","C. dân làm điểm tựa."],
    correct: 0,
    explanation: "Đáp án đúng là: \"dân làm gốc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-15",
    module: "m5",
    question: "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh?",
    options: ["A. Có tinh thần quốc tế trong sáng","B. Có tinh thần quốc tế cao đẹp","C. Có tinh thần quốc tế chân chính"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Có tinh thần quốc tế trong sáng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-16",
    module: "m5",
    question: "Theo Hồ Chí Minh, phải kiên quyết khắc phục kịp thời các phản động lực trong con người và tổ chức. Đó là:",
    options: ["A. Chủ nghĩa cá nhân.","B. Chủ nghĩa vị kỷ","C. Phong cách tiểu tư sản","D. Phong cách tư sản"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chủ nghĩa cá nhân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-17",
    module: "m5",
    question: "Nội dung nào không đúng trong năm điểm lớn định hướng cho việc xây dựng nền văn hóa dân tộc theo tư tưởng Hồ Chí Minh?",
    options: ["A. Xây dựng luân lý, tâm lý, xã hội, chính trị, kinh tế","B. Xây dựng luân lý, tâm lý, xã hội, chính trị, luật pháp","C. Xây dựng luân lý, tâm lý, xã hội, chính trị, khoa học"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Xây dựng luân lý, tâm lý, xã hội, chính trị, kinh tế\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-18",
    module: "m5",
    question: "Đâu là nguyên tắc xây dựng đạo đức mới trong tư tưởng Hồ Chí Minh?",
    options: ["A. Phải tu dưỡng đạo đức suốt đời","B. Phải tu dưỡng đạo đức thường xuyên","C. Phải tu dưỡng đạo đức hàng ngày"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Phải tu dưỡng đạo đức suốt đời\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-19",
    module: "m5",
    question: "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh?",
    options: ["A. Thương yêu con người, sống có tình nghĩa","B. Thương yêu con người, sống có lý","C. Thương yêu con người, sống có trách nhiệm"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Thương yêu con người, sống có tình nghĩa\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-20",
    module: "m5",
    question: "Đạo đức được Hồ chí Minh coi là gì của người cách mạng?",
    options: ["A. Là sức mạnh của người cách mạng","B. Là cái gốc của người cách mạng","C. Là văn hóa của người cách mạng","D. Tất cả các phương án"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Là cái gốc của người cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-21",
    module: "m5",
    question: "Hồ Chí Minh đưa ra định nghĩa về văn hóa:",
    options: ["A. Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn","B. Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sống còn","C. Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự trường tồn"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Văn hoá là tổng hợp của mọi phương thức sinh hoạt cùng với biểu hiện của nó mà loài người đã sản sinh ra nhằm thích ứng những nhu cầu đời sống và đòi hỏi của sự sinh tồn\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-22",
    module: "m5",
    question: "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
    options: ["A. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho con người","B. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho xã hội","C. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho nhân loại"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho con người\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-23",
    module: "m5",
    question: "Đâu là chức năng của văn hóa theo tư tưởng Hồ Chí Minh?",
    options: ["A. mở rộng hiểu biết, nâng cao dân trí.","B. mở rộng hiểu biết, nâng cao quan trí.","C. mở rộng hiểu biết, nâng cao trình độ."],
    correct: 0,
    explanation: "Đáp án đúng là: \"mở rộng hiểu biết, nâng cao dân trí.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-24",
    module: "m5",
    question: "Đâu là nguyên tắc xây dựng đạo đức mới trong tư tưởng Hồ Chí Minh?",
    options: ["A. Nói đi đôi với làm, phải nêu gương về đạo đức","B. Nói đi đôi với làm, phải nêu gương về lối sống","C. Nói đi đôi với làm, phải nêu gương về tác phong"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Nói đi đôi với làm, phải nêu gương về đạo đức\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-25",
    module: "m5",
    question: "Theo Hồ Chí Minh, đạo đức mới chỉ có thể được xây dựng trên cơ sở sự tự giác tu dưỡng đạo đức của mỗi người thông qua hoạt động thực tiễn, phải kiên trì rèn luyện như:",
    options: ["A. công việc rửa mặt hàng ngày.","B. việc đánh răng hàng ngày.","C. việc ăn uống hàng ngày","D. việc hít thở hàng ngày"],
    correct: 0,
    explanation: "Đáp án đúng là: \"công việc rửa mặt hàng ngày.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-26",
    module: "m5",
    question: "Trong tư tưởng đạo đức Hồ Chí Minh, đức và tài, hồng và chuyên, phẩm chất và năng lực thống nhất làm một. Đó là đạo đức trong hành động, lấy:",
    options: ["A. Số lượng công việc làm thước đo.","B. Hiệu quả thực tế làm thước đo.","C. Chất lượng công việc làm thước đo.","D. Trình độ chuyên môn nghiệp vụ làm thước đo."],
    correct: 1,
    explanation: "Đáp án đúng là: \"Hiệu quả thực tế làm thước đo.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-27",
    module: "m5",
    question: "Theo Hồ Chí Minh, văn hoá không thể đứng ngoài mà phải ở trong kinh tế và chính trị, phải:",
    options: ["A. phục vụ nhiệm vụ kinh tế và thúc đẩy sự phát triển của chính trị.","B. phục vụ nhiệm vụ chính trị và thúc đẩy sự phát triển của kinh tế.","C. phục vụ nhiệm vụ văn hóa và thúc đẩy sự phát triển của kinh tế, chính trị."],
    correct: 1,
    explanation: "Đáp án đúng là: \"phục vụ nhiệm vụ chính trị và thúc đẩy sự phát triển của kinh tế.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-28",
    module: "m5",
    question: "Theo Hồ Chí Minh, chí công vô tư là nêu cao chủ nghĩa tập thể, trừ bỏ:",
    options: ["A. chủ nghĩa cá nhân.","B. chủ nghĩa tư nhân.","C. chủ nghĩa tư bản.","D. chủ nghĩa vị kỷ."],
    correct: 0,
    explanation: "Đáp án đúng là: \"chủ nghĩa cá nhân.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-29",
    module: "m5",
    question: "Theo Hồ Chí Minh, tính dân tộc của nền văn hoá là đặc tính dân tộc, cốt cách dân tộc, chiều sâu bản chất rất đặc trưng của văn hoá dân tộc, không nhầm lẫn với:",
    options: ["A. Văn hoá của các dân tộc khác.","B. Tinh hoa của các dân tộc khác.","C. Văn minh của các dân tộc khác."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Văn hoá của các dân tộc khác.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-30",
    module: "m5",
    question: "Hồ Chí Minh cho rằng đạo đức cách mạng không phải:",
    options: ["A. Trên trời sa xuống","B. Phẩm chất vốn có","C. Tự nhiên mà có"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Trên trời sa xuống\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-31",
    module: "m5",
    question: "Đối với một quốc gia, cần, kiệm, liêm, chính là thước đo sự giàu có về vật chất, vững mạnh về tinh thần, thể hiện:",
    options: ["A. Sự văn minh tiến bộ.","B. Văn hóa cao","C. Truyền thống tốt đẹp","D. Văn hiến lâu đời"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Sự văn minh tiến bộ.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-32",
    module: "m5",
    question: "Theo Hồ Chí Minh phải chú trọng \"đạo làm gương\". Đối với Người \"một tấm gương sống còn có giá trị hơn:",
    options: ["A. một trăm bài diễn văn tuyên truyền\",","B. một trăm hòm vàng\",","C. một trăm tủ sách\","],
    correct: 0,
    explanation: "Đáp án đúng là: \"một trăm bài diễn văn tuyên truyền\",\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-33",
    module: "m5",
    question: "Theo Hồ Chí Minh, văn hóa là đời sống tinh thần của xã hội, thuộc:",
    options: ["A. Kiến trúc thượng tầng","B. Cơ sở hạ tầng","C. Tất cả các phương án"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Kiến trúc thượng tầng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-34",
    module: "m5",
    question: "Đâu là chuẩn mực đạo đức cách mạng trong tư tưởng Hồ Chí Minh?",
    options: ["A. Cần, kiệm, liêm, chính, chí công vô tư.","B. Cần, kiệm, liêm, chính, sáng suốt.","C. Cần, kiệm, liêm, chính, tự do."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Cần, kiệm, liêm, chính, chí công vô tư.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-35",
    module: "m5",
    question: "Theo Hồ Chí Minh, đạo đức là nhân tố tạo nên:",
    options: ["A. sức mạnh, sức hấp dẫn của chủ nghĩa xã hội.","B. sức mạnh, sức hấp dẫn của chủ nghĩa Mác-Lênin.","C. sức mạnh, sức hấp dẫn của tư tưởng Hồ Chí Minh."],
    correct: 0,
    explanation: "Đáp án đúng là: \"sức mạnh, sức hấp dẫn của chủ nghĩa xã hội.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-36",
    module: "m5",
    question: "Nguyên tắc quan trọng bậc nhất trong xây dựng một nền đạo đức mới theo tư tưởng Hồ Chí Minh là:",
    options: ["A. Nói đi đôi với làm","B. Nêu gương về đạo đức","C. Xây đi đôi với chống","D. Tu dưỡng đạo đức suốt đời"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Nói đi đôi với làm\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-37",
    module: "m5",
    question: "Yêu thương con người được Hồ Chí Minh xác định là một trong những phẩm chất đạo đức cao đẹp nhất. Người nói, người cách mạng là người giàu tình cảm, có tình cảm cách mạng:",
    options: ["A. mới đi làm cách mạng.","B. mới yêu thương con người.","C. mới là người cách mạng."],
    correct: 0,
    explanation: "Đáp án đúng là: \"mới đi làm cách mạng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-38",
    module: "m5",
    question: "Hồ Chí Minh cho rằng văn hóa có tính:",
    options: ["A. Dân tộc, khoa học và đại chúng","B. Dân tộc, khoa học và nhân dân","C. Dân tộc, khoa học và nhân bản"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Dân tộc, khoa học và đại chúng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-39",
    module: "m5",
    question: "Theo Hồ Chí Minh, tính đại chúng của nền văn hoá là phải phục vụ nhân dân và do:",
    options: ["A. Nhà nước xây dựng nên.","B. Nhân dân xây dựng thêm.","C. Nhân dân xây dựng nên.","D. Nhà nước xây dựng thêm."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Nhân dân xây dựng nên.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-40",
    module: "m5",
    question: "Theo Hồ Chí Minh, Liêm là luôn tôn trọng của công và của dân. Phải:",
    options: ["A. \"trong sạch, không tham lam\" tiền của, địa vị, danh tiếng.","B. \"trong sáng, không tham lam\" tiền của, địa vị, danh tiếng.","C. \"trong sạch, không ham muốn\" tiền của, địa vị, danh tiếng.","D. \"trong sạch, không đòi hỏi\" tiền của, địa vị, danh tiếng."],
    correct: 0,
    explanation: "Đáp án đúng là: \"\"trong sạch, không tham lam\" tiền của, địa vị, danh tiếng.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-41",
    module: "m5",
    question: "Tính khoa học của văn hoá đòi hỏi phải đấu tranh chống lại chủ nghĩa duy tâm, thần bí, mê tín dị đoan, phải biết gạn đục, khơi trong, là sự kế thừa truyền thống tốt đẹp của dân tộc và tiếp thu:",
    options: ["A. Tinh hoa văn hoá nhân loại.","B. Bản sắc văn hoá nhân loại.","C. Truyền thống văn hoá nhân loại.","D. Tính dân tộc của văn hóa nhân loại."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tinh hoa văn hoá nhân loại.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-42",
    module: "m5",
    question: "Theo Hồ Chí Minh, xây dựng đạo đức mới, trước hết là thực hành đạo đức cách mạng, thực hành.....",
    options: ["A. Chí công vô tư","B. Cần kiệm liêm chính","C. Trung với nước, hiếu với dân","D. Cần, kiệm, liêm, chính, chí công vô tư"],
    correct: 3,
    explanation: "Đáp án đúng là: \"Cần, kiệm, liêm, chính, chí công vô tư\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-43",
    module: "m5",
    question: "Hồ Chí Minh có lần chỉ rõ: \"Nói chung thì các dân tộc phương Đông đều giàu tình cảm và đối với họ một (.....) còn có giá trị hơn một trăm bài diễn văn tuyên truyền\"",
    options: ["A. Quyển sách","B. Tấm gương sống","C. Tác phẩm lý luận","D. Câu chuyện ngụ ngôn"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Tấm gương sống\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-44",
    module: "m5",
    question: "Hồ Chí Minh dạy: \"Hiểu chủ nghĩa Mác - Lênin là phải sống với nhau có tình, có nghĩa. Nếu thuộc bao nhiêu sách mà sống không có tình có nghĩa thì sao gọi là:",
    options: ["A. Hiểu chủ nghĩa Mác - Lênin được\".","B. Học chủ nghĩa Mác - Lênin được\".","C. Theo chủ nghĩa Mác - Lênin được\"."],
    correct: 0,
    explanation: "Đáp án đúng là: \"Hiểu chủ nghĩa Mác - Lênin được\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-45",
    module: "m5",
    question: "Trong tác phẩm sửa đổi lối làm việc, tháng 10-1947, Hồ Chí Minh viết: \"cũng giống như sông có nguồn mới có nước, không có nguồn thì sông cạn. Cây phải có gốc, không có gốc thì cây héo. Người cách mạng thì phải có ...., không có... thì tài giỏi đến mấy cũng không lãnh đạo được nhân dân\".",
    options: ["A. trí tuệ","B. đạo đức","C. trình độ","D. chuyên môn"],
    correct: 1,
    explanation: "Đáp án đúng là: \"đạo đức\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-46",
    module: "m5",
    question: "Theo Hồ Chí Minh, toàn bộ những sáng tạo và phát minh của con người nhằm thích ứng nhu cầu đời sống và sinh tồn tức là:",
    options: ["A. văn hoá.","B. truyền thống.","C. văn minh."],
    correct: 0,
    explanation: "Đáp án đúng là: \"văn hoá.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-47",
    module: "m5",
    question: "Theo tư tưởng Hồ Chí Minh, văn hoá có chức năng:",
    options: ["A. Bồi dưỡng tư tưởng đúng đắn và tình cảm cao đẹp cho con người.","B. Nâng cao dân trí.","C. Bồi dưỡng những phẩm chính tốt đẹp, những phong cách, lối sống lành mạnh, luôn hướng con người vươn tới cái chân, cái thiện, cái mỹ, không ngừng hoàn thiện bản thân mình.","D. Tất cả các phương án."],
    correct: 3,
    explanation: "Đáp án đúng là: \"Tất cả các phương án.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-48",
    module: "m5",
    question: "Hồ Chí Minh cho rằng: \"Người cách mạng phải có (....) làm nền tảng, mới hoàn thành được nhiệm vụ cách mạng vẻ vang\".",
    options: ["A. Trí tuệ","B. Phương pháp cách mạng","C. Đạo đức cách mạng","D. Ý chí cách mạng"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Đạo đức cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-49",
    module: "m5",
    question: "Lần đầu tiên Hồ Chí Minh đưa ra định nghĩa về văn hóa là vào thời gian nào?",
    options: ["A. Tháng 8-1943","B. Tháng 8-1945","C. Tháng 8-1946"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Tháng 8-1943\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-50",
    module: "m5",
    question: "Nguyên tắc xây dựng đạo đức mới theo tư tưởng Hồ Chí Minh gồm:",
    options: ["A. 2 nguyên tắc.","B. 3 nguyên tắc.","C. 4 nguyên tắc.","D. 5 nguyên tắc."],
    correct: 1,
    explanation: "Đáp án đúng là: \"3 nguyên tắc.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-51",
    module: "m5",
    question: "Đâu là nguyên tắc xây dựng đạo đức mới trong tư tưởng Hồ Chí Minh?",
    options: ["A. Xây đi đôi với chống","B. Xây đi đôi với bảo vệ","C. Xây đi đôi với cải tạo"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Xây đi đôi với chống\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m5-52",
    module: "m5",
    question: "Điền vào chỗ trống theo tư tưởng Hồ Chí Minh: \"Nền văn hoá XHCN là một nền văn hoá lấy (.............) của đồng bào làm cơ sở\".",
    options: ["A. Tự do","B. Ấm no","C. Hạnh phúc","D. Tất cả các phương án trả lời đều đúng"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Hạnh phúc\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-1",
    module: "m6",
    question: "Trong tư tưởng Hồ Chí Minh, nhân dân được xác định vị trí như thế nào của cách mạng?",
    options: ["A. Là mục tiêu của cách mạng","B. Là động lực của cách mạng","C. Vừa là mực tiêu vừa là động lực của cách mạng","D. Là người bạn đường của cách mạng"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Vừa là mực tiêu vừa là động lực của cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-2",
    module: "m6",
    question: "Theo Hồ Chí Minh, con người luôn có xu hướng vươn lên cái Chân - Thiện - Mỹ, mặc dù:",
    options: ["A. \"có thế này, có thế khác\".","B. \"có giàu, có nghèo\".","C. « có thiện, có ác ».","D. « có sang, có hèn »"],
    correct: 0,
    explanation: "Đáp án đúng là: \"\"có thế này, có thế khác\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-3",
    module: "m6",
    question: "Hồ Chí Minh cho rằng: \"Học để làm việc, (....) , làm cán bộ\"",
    options: ["A. Làm thầy","B. Làm cách mạng","C. Làm người","D. Làm đầy tớ"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Làm người\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-4",
    module: "m6",
    question: "Hồ Chí Minh ví tuổi trẻ như:",
    options: ["A. Mùa xuân của xã hội","B. Mùa xuân của đất nước","C. Mùa xuân của Đảng","D. Mùa xuân của Nhà nước"],
    correct: 1,
    explanation: "Đáp án đúng là: \"Mùa xuân của đất nước\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-5",
    module: "m6",
    question: "Theo Hồ Chí Minh, \"Muốn xây dựng chủ nghĩa xã hội, trước hết cần có:",
    options: ["A. những con người xã hội chủ nghĩa\"","B. khoa học kỹ thuật tiên tiến\"","C. công, nông nghiệp hiện đại\""],
    correct: 0,
    explanation: "Đáp án đúng là: \"những con người xã hội chủ nghĩa\"\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-6",
    module: "m6",
    question: "Theo Hồ Chí Minh, để thực hiện chiến lược \"trồng người\", cần có nhiều biện pháp, nhưng biện pháp quan trọng bậc nhất là:",
    options: ["A. Giáo dục - đào tạo","B. Thuyết phục - nêu gương","C. Cảm hóa - động viên","D. Ép buộc - cưỡng chế"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Giáo dục - đào tạo\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-7",
    module: "m6",
    question: "Đâu là quan điểm của Hồ Chí Minh về xây dựng con người?",
    options: ["A. Con người cụ thể, lịch sử","B. Con người cụ thể, văn hóa","C. Con người cụ thể, xã hội","D. Con người lịch sử, văn hóa"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Con người cụ thể, lịch sử\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-8",
    module: "m6",
    question: "Theo Hồ Chí Minh, không phải mọi con người đều trở thành động lực, mà phải là những con người:",
    options: ["A. Được giác ngộ và tổ chức.","B. Có đạo đức","C. Có năng lực","D. Có trình độ và hiểu biết"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Được giác ngộ và tổ chức.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-9",
    module: "m6",
    question: "Câu nói nào sau đây là của Hồ Chí Minh?",
    options: ["A. Học không biết chán, dạy không biết mỏi","B. Học, học nữa, học mãi","C. Việc học không bao giờ cùng, còn sống còn phải học"],
    correct: 2,
    explanation: "Đáp án đúng là: \"Việc học không bao giờ cùng, còn sống còn phải học\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-10",
    module: "m6",
    question: "Đâu là quan điểm của Hồ Chí Minh về chiến lược trồng người?",
    options: ["A. \"Trồng người\" là trung tâm của phát triển xã hội","B. \"Trồng người\" là trung tâm phát triển của nhân loại","C. \"Trồng người\" là trung tâm phát triển thế giới"],
    correct: 0,
    explanation: "Đáp án đúng là: \"\"Trồng người\" là trung tâm của phát triển xã hội\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-11",
    module: "m6",
    question: "Chiến lược trồng người được Hồ Chí Minh xác định ở vị trí nào trong sự phát triển kinh tế xã hội?",
    options: ["A. Cơ bản","B. Trọng tâm","C. Quan trọng","D. Cần thiết"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Cơ bản\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-12",
    module: "m6",
    question: "Khái niệm con người trong tư tưởng Hồ Chí Minh để chỉ:",
    options: ["A. Một con người cụ thể.","B. Một cộng đồng người.","C. Con người cụ thể gắn với hoàn cảnh lịch sử cụ thể.","D. Tất cả các phương án."],
    correct: 2,
    explanation: "Đáp án đúng là: \"Con người cụ thể gắn với hoàn cảnh lịch sử cụ thể.\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-13",
    module: "m6",
    question: "Hồ Chí Minh xem xét con người trong sự thống nhất của hai mặt đối lập: thiện và ác, hay và dở, tốt và xấu , hiền và dữ,... nhưng:",
    options: ["A. \"dù là xấu, tốt, văn minh hay dã man đều có lý\".","B. \"dù là xấu, tốt, văn minh hay dã man đều có tình\".","C. \"dù là xấu, tốt, văn minh hay dã man đều có đức\".","D. \"dù là xấu, tốt, văn minh hay dã man đều có học\"."],
    correct: 1,
    explanation: "Đáp án đúng là: \"\"dù là xấu, tốt, văn minh hay dã man đều có tình\".\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-14",
    module: "m6",
    question: "Hồ Chí Minh cho rằng xây dựng con người mới XHCN trước hết phải:",
    options: ["A. Diệt trừ chủ nghĩa cá nhân","B. Diệt trừ văn hóa phong kiến","C. Diệt trừ văn hóa tư sản"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Diệt trừ chủ nghĩa cá nhân\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-15",
    module: "m6",
    question: "Con người trong quan điểm của Hồ Chí Minh được nhìn nhận như một:",
    options: ["A. Chỉnh thể","B. Tế bào","C. Xã hội","D. Cộng đồng"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Chỉnh thể\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-16",
    module: "m6",
    question: "Theo tư tưởng Hồ Chí Minh, con người Việt Nam trong thời đại mới phải có:",
    options: ["A. 3 phẩm chất cơ bản","B. 4 phẩm chất cơ bản","C. 5 phẩm chất cơ bản","D. 6 phẩm chất cơ bản"],
    correct: 1,
    explanation: "Đáp án đúng là: \"4 phẩm chất cơ bản\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  },
  {
    id: "m6-17",
    module: "m6",
    question: "Hồ Chí Minh cho rằng con người mới XHCN phải có:",
    options: ["A. Đạo đức cách mạng","B. Đạo đức quần chúng","C. Đạo đức nhân dân"],
    correct: 0,
    explanation: "Đáp án đúng là: \"Đạo đức cách mạng\". Bấm \"Hỏi AI\" bên dưới nếu bạn muốn trợ giảng giải thích sâu hơn."
  }
];
