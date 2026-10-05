// Ngân hàng câu hỏi ôn thi FE — Môn Kinh tế chính trị Mác - Lênin (MLN131)
// Căn cứ theo Giáo trình chuẩn Bộ Giáo dục & Đào tạo, NXB Chính trị quốc gia Sự thật, Hà Nội - 2021
// Bao gồm toàn bộ 6 Chương (Trang 8 - 257)

const FE_REVIEW_MODULES = [
  {
    id: "m1",
    title: "Chương 1: Đối tượng, phương pháp NC và chức năng của KTCT Mác - Lênin"
  },
  {
    id: "m2",
    title: "Chương 2: Hàng hóa, thị trường và các chủ thể tham gia thị trường"
  },
  {
    id: "m3",
    title: "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường"
  },
  {
    id: "m4",
    title: "Chương 4: Cạnh tranh và độc quyền trong nền kinh tế thị trường"
  },
  {
    id: "m5",
    title: "Chương 5: Kinh tế thị trường định hướng XHCN và quan hệ lợi ích ở VN"
  },
  {
    id: "m6",
    title: "Chương 6: Công nghiệp hóa, hiện đại hóa và hội nhập kinh tế quốc tế"
  }
];

const FE_REVIEW_QUESTIONS = [
  // =========================================================================
  // CHƯƠNG 1: ĐỐI TƯỢNG, PHƯƠNG PHÁP NGHIÊN CỨU VÀ CHỨC NĂNG CỦA KTCT (12 câu)
  // =========================================================================
  {
    id: "m1-1",
    module: "m1",
    question: "Thuật ngữ \"Kinh tế chính trị\" (oeconomie politique) xuất hiện lần đầu tiên vào năm 1615 trong tác phẩm của ai?",
    options: [
      "A. Adam Smith",
      "B. Antoine de Montchrétien",
      "C. William Petty",
      "D. David Ricardo"
    ],
    correct: 1,
    explanation: "Giáo trình trang 9: Thuật ngữ khoa học kinh tế chính trị được xuất hiện ở châu Âu vào năm 1615 trong tác phẩm 'Chuyên luận về kinh tế chính trị' của nhà kinh tế người Pháp Antoine de Montchrétien."
  },
  {
    id: "m1-2",
    module: "m1",
    question: "Ai là người đã đưa kinh tế chính trị chính thức trở thành môn học với hệ thống các phạm trù, khái niệm chuyên ngành vào thế kỷ XVIII?",
    options: [
      "A. Karl Marx",
      "B. Francois Quesney",
      "C. Adam Smith",
      "D. Thomas Mun"
    ],
    correct: 2,
    explanation: "Giáo trình trang 9: Tới thế kỷ XVIII, với sự xuất hiện hệ thống lý luận của nhà kinh tế học người Anh Adam Smith, kinh tế chính trị chính thức trở thành môn học với các phạm trù, khái niệm chuyên ngành."
  },
  {
    id: "m1-3",
    module: "m1",
    question: "Hệ thống lý luận kinh tế chính trị bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩa trong lịch sử là:",
    options: [
      "A. Chủ nghĩa trọng thương",
      "B. Chủ nghĩa trọng nông",
      "C. Kinh tế chính trị cổ điển Anh",
      "D. Kinh tế chính trị mácxít"
    ],
    correct: 0,
    explanation: "Giáo trình trang 10: Chủ nghĩa trọng thương được ghi nhận là hệ thống lý luận kinh tế chính trị bước đầu nghiên cứu về nền sản xuất tư bản chủ nghĩa (giữa thế kỷ XV đến giữa thế kỷ XVII)."
  },
  {
    id: "m1-4",
    module: "m1",
    question: "Hạn chế lịch sử lớn nhất của trường phái Chủ nghĩa trọng nông ở nước Pháp là gì?",
    options: [
      "A. Cho rằng lợi nhuận chỉ sinh ra từ thương nghiệp",
      "B. Cho rằng chỉ có nông nghiệp mới là ngành sản xuất thực sự tạo ra của cải",
      "C. Không thừa nhận sự tồn tại của tiền tệ",
      "D. Phủ nhận quyền tư hữu ruộng đất của địa chủ"
    ],
    correct: 1,
    explanation: "Giáo trình trang 10-11: Chủ nghĩa trọng nông hướng việc nghiên cứu vào sản xuất, nhưng hạn chế là cho rằng chỉ có nông nghiệp mới là sản xuất thực sự."
  },
  {
    id: "m1-5",
    module: "m1",
    question: "Theo C. Mác và Ph. Ăngghen, đối tượng nghiên cứu của kinh tế chính trị Mác - Lênin là gì?",
    options: [
      "A. Quá trình kỹ thuật công nghệ chế tạo ra của cải vật chất",
      "B. Các quan hệ xã hội của sản xuất và trao đổi trong mối liên hệ biện chứng với lực lượng sản xuất và kiến trúc thượng tầng",
      "C. Hành vi tâm lý chi tiêu vi mô của cá nhân người tiêu dùng",
      "D. Cách thức quản lý tài chính doanh nghiệp tư nhân"
    ],
    correct: 1,
    explanation: "Giáo trình trang 16, 19: Đối tượng nghiên cứu của KTCT Mác - Lênin là các quan hệ xã hội của sản xuất và trao đổi trong mối liên hệ biện chứng với trình độ phát triển của LLSX và kiến trúc thượng tầng tương ứng."
  },
  {
    id: "m1-6",
    module: "m1",
    question: "Theo nghĩa rộng, ai là người khẳng định: \"Kinh tế chính trị là khoa học về những quy luật chi phối sự sản xuất và trao đổi những tư liệu sinh hoạt vật chất trong xã hội loài người\"?",
    options: [
      "A. C. Mác",
      "B. Ph. Ăngghen",
      "C. V.I. Lênin",
      "D. Adam Smith"
    ],
    correct: 1,
    explanation: "Giáo trình trang 17 trích dẫn Ph. Ăngghen (Toàn tập, T.20, tr. 207-208) khi định nghĩa đối tượng nghiên cứu của kinh tế chính trị theo nghĩa rộng nhất."
  },
  {
    id: "m1-7",
    module: "m1",
    question: "Mục đích nghiên cứu ở cấp độ cao nhất của kinh tế chính trị Mác - Lênin là gì?",
    options: [
      "A. Làm giàu nhanh chóng cho các tập đoàn tài phiệt",
      "B. Phát hiện ra các quy luật kinh tế chi phối quan hệ giữa người với người trong sản xuất và trao đổi",
      "C. Đưa ra các công thức đầu cơ chứng khoán và bất động sản",
      "D. Thay thế hoàn toàn khoa học kinh tế vi mô và vĩ mô"
    ],
    correct: 1,
    explanation: "Giáo trình trang 20: Mục đích nghiên cứu ở cấp độ cao nhất là nhằm phát hiện ra các quy luật chi phối quan hệ giữa người với người trong sản xuất và trao đổi."
  },
  {
    id: "m1-8",
    module: "m1",
    question: "Sự khác nhau căn bản giữa \"Quy luật kinh tế\" và \"Chính sách kinh tế\" là gì?",
    options: [
      "A. Quy luật kinh tế mang tính chủ quan; chính sách kinh tế mang tính khách quan",
      "B. Quy luật kinh tế tồn tại khách quan không phụ thuộc ý chí con người; chính sách kinh tế là sản phẩm chủ quan của con người",
      "C. Con người có thể dùng ý chí để thủ tiêu quy luật kinh tế",
      "D. Cả quy luật kinh tế và chính sách kinh tế đều do Nhà nước ban hành bằng văn bản"
    ],
    correct: 1,
    explanation: "Giáo trình trang 21 (Hộp 1.2): Quy luật kinh tế tồn tại khách quan, con người không thể thủ tiêu. Chính sách kinh tế là sản phẩm chủ quan của con người vận dụng quy luật kinh tế."
  },
  {
    id: "m1-9",
    module: "m1",
    question: "Phương pháp nghiên cứu nào được coi là phương pháp chủ yếu, đặc thù của kinh tế chính trị Mác - Lênin?",
    options: [
      "A. Thí nghiệm trong phòng lab khoa học",
      "B. Phương pháp trừu tượng hóa khoa học",
      "C. Phương pháp điều tra tâm lý xã hội học",
      "D. Phương pháp mô phỏng máy tính lượng tử"
    ],
    correct: 1,
    explanation: "Giáo trình trang 23: Phương pháp trừu tượng hóa khoa học được sử dụng như một phương pháp chủ yếu của kinh tế chính trị Mác - Lênin, vì các nghiên cứu này không thể tiến hành trong phòng thí nghiệm."
  },
  {
    id: "m1-10",
    module: "m1",
    question: "Phương pháp trừu tượng hóa khoa học đòi hỏi nhà nghiên cứu phải làm gì?",
    options: [
      "A. Loại bỏ mọi yếu tố bản chất để đi vào hình thức bên ngoài",
      "B. Gạt bỏ những yếu tố ngẫu nhiên, tạm thời, gián tiếp để tách ra những dấu hiệu điển hình, bền vững, ổn định của đối tượng nghiên cứu",
      "C. Trừu tượng hóa vô căn cứ không cần dựa trên thực tiễn sản xuất",
      "D. Tuyệt đối hóa các công thức toán học trừu tượng"
    ],
    correct: 1,
    explanation: "Giáo trình trang 23: Trừu tượng hóa khoa học là phương pháp gạt bỏ khỏi quá trình nghiên cứu những yếu tố ngẫu nhiên, tạm thời, gián tiếp, để nắm được bản chất, khái quát thành phạm trù, quy luật."
  },
  {
    id: "m1-11",
    module: "m1",
    question: "Kinh tế chính trị Mác - Lênin có bao nhiêu chức năng cơ bản?",
    options: [
      "A. 2 chức năng (Nhận thức, Thực tiễn)",
      "B. 3 chức năng (Nhận thức, Thực tiễn, Tư tưởng)",
      "C. 4 chức năng (Nhận thức, Thực tiễn, Tư tưởng, Phương pháp luận)",
      "D. 5 chức năng"
    ],
    correct: 2,
    explanation: "Giáo trình trang 24-27: Kinh tế chính trị Mác - Lênin có 4 chức năng: 1) Chức năng nhận thức; 2) Chức năng thực tiễn; 3) Chức năng tư tưởng; 4) Chức năng phương pháp luận."
  },
  {
    id: "m1-12",
    module: "m1",
    question: "Chức năng nào của KTCT Mác - Lênin cung cấp nền tảng lý luận khoa học cho việc nhận diện sâu sắc nội hàm các phạm trù của các khoa học kinh tế chuyên ngành?",
    options: [
      "A. Chức năng nhận thức",
      "B. Chức năng thực tiễn",
      "C. Chức năng tư tưởng",
      "D. Chức năng phương pháp luận"
    ],
    correct: 3,
    explanation: "Giáo trình trang 27: Chức năng phương pháp luận là nền tảng lý luận khoa học cho việc nhận diện sâu hơn nội hàm khoa học của các khái niệm, phạm trù của các khoa học kinh tế chuyên ngành."
  },

  // =========================================================================
  // CHƯƠNG 2: HÀNG HÓA, THỊ TRƯỜNG VÀ CÁC CHỦ THỂ (12 câu)
  // =========================================================================
  {
    id: "m2-1",
    module: "m2",
    question: "Nền sản xuất hàng hóa ra đời và tồn tại khi có đủ hai điều kiện lịch sử nào?",
    options: [
      "A. Sự xuất hiện của tiền tệ và nhà nước",
      "B. Phân công lao động xã hội và Sự tách biệt về mặt kinh tế của các chủ thể sản xuất",
      "C. Giai cấp công nhân và cách mạng vô sản",
      "D. Khoa học kỹ thuật hiện đại và thương mại quốc tế"
    ],
    correct: 1,
    explanation: "Giáo trình trang 30-31: Nền kinh tế hàng hóa hình thành và phát triển khi có 2 điều kiện: 1) Phân công lao động xã hội; 2) Sự tách biệt về mặt kinh tế của các chủ thể sản xuất."
  },
  {
    id: "m2-2",
    module: "m2",
    question: "Hàng hóa là gì theo định nghĩa của C. Mác?",
    options: [
      "A. Mọi sản phẩm do thiên nhiên ban tặng cho con người",
      "B. Sản phẩm của lao động, có thể thỏa mãn nhu cầu nào đó của con người thông qua trao đổi, mua bán",
      "C. Mọi của cải vật chất được cất giữ trong kho",
      "D. Bất cứ đồ vật nào có giá trị sử dụng cao"
    ],
    correct: 1,
    explanation: "Giáo trình trang 31: Hàng hóa là sản phẩm của lao động, có thể thỏa mãn nhu cầu nào đó của con người thông qua trao đổi, mua bán."
  },
  {
    id: "m2-3",
    module: "m2",
    question: "Hàng hóa có hai thuộc tính cơ bản là gì?",
    options: [
      "A. Giá trị sử dụng và Giá trị trao đổi",
      "B. Giá cả và Giá trị",
      "C. Giá trị sử dụng và Giá trị",
      "D. Công dụng vật phẩm và Lợi nhuận"
    ],
    correct: 2,
    explanation: "Giáo trình trang 32: Hàng hóa có hai thuộc tính là giá trị sử dụng và giá trị. Giá trị trao đổi chỉ là hình thức biểu hiện ra bên ngoài của giá trị."
  },
  {
    id: "m2-4",
    module: "m2",
    question: "Phát hiện quan trọng của C. Mác giúp giải thích vì sao hàng hóa có hai thuộc tính là gì?",
    options: [
      "A. Phát hiện ra vai trò của máy móc hơi nước",
      "B. Phát hiện ra tính hai mặt của lao động sản xuất hàng hóa (lao động cụ thể và lao động trừu tượng)",
      "C. Phát hiện ra quy luật cung - cầu",
      "D. Phát hiện ra các hình thái tiền tệ"
    ],
    correct: 1,
    explanation: "Giáo trình trang 34: Sở dĩ hàng hóa có hai thuộc tính là do lao động của người sản xuất hàng hóa có tính hai mặt: mặt cụ thể tạo ra giá trị sử dụng, mặt trừu tượng tạo ra giá trị."
  },
  {
    id: "m2-5",
    module: "m2",
    question: "Lượng giá trị của một đơn vị hàng hóa được đo lường bằng thước đo nào?",
    options: [
      "A. Thời gian lao động cá biệt của người sản xuất tiên tiến nhất",
      "B. Thời gian lao động xã hội cần thiết",
      "C. Mức giá bán ghi trên hóa đơn",
      "D. Số lượng công cụ sản xuất tiêu hao"
    ],
    correct: 1,
    explanation: "Giáo trình trang 36-37: Lượng giá trị của hàng hóa được đo lường bởi thời gian lao động xã hội cần thiết để sản xuất ra hàng hóa đó."
  },
  {
    id: "m2-6",
    module: "m2",
    question: "Khi năng suất lao động tăng lên thì lượng giá trị trong một đơn vị hàng hóa sẽ biến đổi như thế nào?",
    options: [
      "A. Tăng lên tỷ lệ thuận",
      "B. Giảm xuống",
      "C. Không thay đổi",
      "D. Tăng gấp đôi"
    ],
    correct: 1,
    explanation: "Giáo trình trang 37-38: Năng suất lao động tăng lên sẽ làm giảm thời gian lao động cần thiết trong 1 sản phẩm, do đó làm cho lượng giá trị trong một đơn vị hàng hóa giảm xuống (tỷ lệ nghịch)."
  },
  {
    id: "m2-7",
    module: "m2",
    question: "Khi tăng cường độ lao động, lượng giá trị trong một đơn vị hàng hóa sẽ:",
    options: [
      "A. Tăng lên gấp đôi",
      "B. Giảm xuống một nửa",
      "C. Không đổi (nhưng tổng giá trị hàng hóa làm ra trong một thời gian tăng lên)",
      "D. Biến động ngẫu nhiên"
    ],
    correct: 2,
    explanation: "Giáo trình trang 38: Khi tăng cường độ lao động, tổng số sản phẩm tăng, tổng giá trị tăng, nhưng lượng giá trị hao phí để sản xuất 1 đơn vị hàng hóa không thay đổi."
  },
  {
    id: "m2-8",
    module: "m2",
    question: "Bản chất của tiền tệ là gì theo kinh tế chính trị Mác - Lênin?",
    options: [
      "A. Là quy ước mang tính chủ quan của nhà nước bằng giấy bạc",
      "B. Là một loại hàng hóa đặc biệt, đóng vai trò là vật ngang giá chung cho thế giới hàng hóa",
      "C. Là công cụ tích lũy tài sản vô tận do ngân hàng trung ương sáng tạo",
      "D. Là chứng chỉ nợ thuần túy của các công ty chứng khoán"
    ],
    correct: 1,
    explanation: "Giáo trình trang 42: Tiền là một loại hàng hóa đặc biệt, là kết quả của quá trình phát triển sản xuất và trao đổi hàng hóa, đóng vai trò là vật ngang giá chung cho thế giới hàng hóa."
  },
  {
    id: "m2-9",
    module: "m2",
    question: "Tiền tệ thực hiện bao nhiêu chức năng trong nền kinh tế hàng hóa?",
    options: [
      "A. 3 chức năng",
      "B. 4 chức năng",
      "C. 5 chức năng (Thước đo giá trị, Phương tiện lưu thông, Phương tiện cất trữ, Phương tiện thanh toán, Tiền tệ thế giới)",
      "D. 6 chức năng"
    ],
    correct: 2,
    explanation: "Giáo trình trang 42-44: Tiền tệ có 5 chức năng: 1) Thước đo giá trị; 2) Phương tiện lưu thông; 3) Phương tiện cất trữ; 4) Phương tiện thanh toán; 5) Tiền tệ thế giới."
  },
  {
    id: "m2-10",
    module: "m2",
    question: "Yếu tố nào sau đây có giá cả, có giá trị sử dụng nhưng KHÔNG DO hao phí lao động trực tiếp tạo ra như hàng hóa thông thường?",
    options: [
      "A. Ô tô điện",
      "B. Quyền sử dụng đất",
      "C. Vải may mặc",
      "D. Điện thoại thông minh"
    ],
    correct: 1,
    explanation: "Giáo trình trang 46: Quyền sử dụng đất có giá trị sử dụng, có giá cả nhưng không do hao phí lao động tạo ra theo cách như hàng hóa thông thường (nó là đất đai tự nhiên được định giá quyền sử dụng)."
  },
  {
    id: "m2-11",
    module: "m2",
    question: "Quy luật kinh tế cơ bản của sản xuất và trao đổi hàng hóa là quy luật nào?",
    options: [
      "A. Quy luật lưu thông tiền tệ",
      "B. Quy luật giá trị",
      "C. Quy luật cung - cầu",
      "D. Quy luật cạnh tranh"
    ],
    correct: 1,
    explanation: "Giáo trình trang 59: Quy luật giá trị là quy luật kinh tế cơ bản của sản xuất hàng hóa. Ở đâu có sản xuất và trao đổi hàng hóa thì ở đó có sự hoạt động của quy luật giá trị."
  },
  {
    id: "m2-12",
    module: "m2",
    question: "Các chủ thể chính tham gia thị trường được phân tích trong Chương 2 bao gồm:",
    options: [
      "A. Địa chủ, nông nô, chủ nô và tư sản",
      "B. Người sản xuất, Người tiêu dùng, Các chủ thể trung gian và Nhà nước",
      "C. Ngân hàng thế giới, IMF và WTO",
      "D. Người bán lẻ, người bán buôn và người vận chuyển"
    ],
    correct: 1,
    explanation: "Giáo trình trang 68-71: Bốn chủ thể chính tham gia thị trường gồm: 1) Người sản xuất; 2) Người tiêu dùng; 3) Các chủ thể trung gian trong thị trường; 4) Nhà nước."
  },

  // =========================================================================
  // CHƯƠNG 3: GIÁ TRỊ THẶNG DƯ TRONG NỀN KTTT (12 câu)
  // =========================================================================
  {
    id: "m3-1",
    module: "m3",
    question: "Công thức chung của tư bản là gì?",
    options: [
      "A. H – T – H",
      "B. T – H – T'",
      "C. H – H'",
      "D. T – T"
    ],
    correct: 1,
    explanation: "Giáo trình trang 76: Công thức chung của tư bản là T – H – T' (trong đó T' = T + t, với t > 0 là giá trị thặng dư)."
  },
  {
    id: "m3-2",
    module: "m3",
    question: "Tại sao lưu thông (mua bán trao đổi thông thường) không thể tạo ra giá trị mới xét trên quy mô toàn xã hội?",
    options: [
      "A. Vì trao đổi ngang giá thì tổng giá trị không đổi, trao đổi không ngang giá thì người được lợi bù trừ với người bị thiệt",
      "B. Vì tiền tệ bị mất giá liên tục trong lưu thông",
      "C. Vì các thương nhân không bao giờ bán đúng giá trị",
      "D. Vì nhà nước đánh thuế cao vào hàng hóa lưu thông"
    ],
    correct: 0,
    explanation: "Giáo trình trang 76-77: Mua bán ngang giá không tăng giá trị; mua bán không ngang giá chỉ chuyển dịch tiền từ túi người này sang túi người khác, xét toàn xã hội tổng giá trị không đổi."
  },
  {
    id: "m3-3",
    module: "m3",
    question: "Hàng hóa sức lao động có thuộc tính đặc biệt nào mà không hàng hóa thông thường nào có được?",
    options: [
      "A. Không bao giờ bị hao mòn trong quá trình sử dụng",
      "B. Khi tiêu dùng, nó tạo ra một lượng giá trị mới lớn hơn giá trị của bản thân nó",
      "C. Có thể cất trữ trong kho vô thời hạn",
      "D. Không có giá trị, chỉ có giá trị sử dụng"
    ],
    correct: 1,
    explanation: "Giáo trình trang 78-79: Giá trị sử dụng của sức lao động có đặc tính thần kỳ là khi sử dụng, nó không những bảo tồn giá trị cũ mà còn tạo ra giá trị mới lớn hơn giá trị bản thân nó (sinh ra GTTD)."
  },
  {
    id: "m3-4",
    module: "m3",
    question: "Tư bản bất biến (c) là bộ phận tư bản:",
    options: [
      "A. Tồn tại dưới hình thái tư liệu sản xuất, giá trị được bảo tồn và chuyển nguyên vẹn vào sản phẩm nhờ lao động cụ thể",
      "B. Dùng để mua hàng hóa sức lao động",
      "C. Trực tiếp làm biến đổi và tăng lên về lượng giá trị trong sản xuất",
      "D. Luôn luôn cố định trong két sắt của ngân hàng"
    ],
    correct: 0,
    explanation: "Giáo trình trang 82: Tư bản bất biến (c) tồn tại dưới hình thái TLSX, giá trị được lao động cụ thể của công nhân bảo tồn và chuyển nguyên vẹn vào sản phẩm."
  },
  {
    id: "m3-5",
    module: "m3",
    question: "Bộ phận tư bản nào là nguồn gốc duy nhất sinh ra giá trị thặng dư (m)?",
    options: [
      "A. Tư bản bất biến (c)",
      "B. Tư bản khả biến (v)",
      "C. Tư bản cố định",
      "D. Quỹ khấu hao máy móc"
    ],
    correct: 1,
    explanation: "Giáo trình trang 83: Tư bản khả biến (v) tồn tại dưới hình thái sức lao động, thông qua lao động trừu tượng tạo ra giá trị mới lớn hơn, là nguồn gốc duy nhất sinh ra m."
  },
  {
    id: "m3-6",
    module: "m3",
    question: "Bản chất thực sự của Tiền công trong chủ nghĩa tư bản là gì?",
    options: [
      "A. Giá cả của lao động",
      "B. Giá cả của hàng hóa sức lao động",
      "C. Toàn bộ của cải do công nhân làm ra",
      "D. Lòng hảo tâm của nhà tư bản đối với công nhân"
    ],
    correct: 1,
    explanation: "Giáo trình trang 84: Tiền công là giá cả của hàng hóa sức lao động (chứ không phải giá cả của lao động)."
  },
  {
    id: "m3-7",
    module: "m3",
    question: "Tỷ suất giá trị thặng dư (m') phản ánh điều gì trong nền kinh tế?",
    options: [
      "A. Quy mô giá trị thặng dư bằng tiền nhà tư bản thu được",
      "B. Trình độ bóc lột / khai thác sức lao động làm thuê",
      "C. Tốc độ chu chuyển của tư bản cố định",
      "D. Mức doanh lợi của toàn bộ vốn đầu tư"
    ],
    correct: 1,
    explanation: "Giáo trình trang 90: Tỷ suất giá trị thặng dư phản ánh trình độ khai thác (bóc lột) sức lao động làm thuê: m' = (m / v) * 100%."
  },
  {
    id: "m3-8",
    module: "m3",
    question: "Phương pháp sản xuất giá trị thặng dư tuyệt đối là phương pháp được thực hiện bằng cách:",
    options: [
      "A. Tăng năng suất lao động xã hội trong ngành sản xuất tư liệu sinh hoạt",
      "B. Kéo dài ngày lao động vượt quá thời gian lao động tất yếu hoặc tăng cường độ lao động",
      "C. Áp dụng công nghệ số và robot tự động",
      "D. Hạ thấp giá trị tư liệu sinh hoạt"
    ],
    correct: 1,
    explanation: "Giáo trình trang 90: Giá trị thặng dư tuyệt đối thu được do kéo dài ngày lao động vượt quá thời gian lao động tất yếu, trong khi NSLĐ và thời gian tất yếu không đổi."
  },
  {
    id: "m3-9",
    module: "m3",
    question: "Nguồn gốc duy nhất của tích lũy tư bản là gì?",
    options: [
      "A. Tài nguyên thiên nhiên",
      "B. Sự tiết kiệm tiêu dùng cá nhân của nhà tư bản",
      "C. Giá trị thặng dư (m)",
      "D. Tiền tài trợ của nhà nước"
    ],
    correct: 2,
    explanation: "Giáo trình trang 94: Thực chất, nguồn gốc duy nhất của tích lũy tư bản là giá trị thặng dư."
  },
  {
    id: "m3-10",
    module: "m3",
    question: "Cấu tạo hữu cơ của tư bản được ký hiệu là gì và chịu sự quyết định của yếu tố nào?",
    options: [
      "A. Ký hiệu c/v, là cấu tạo giá trị được quyết định bởi cấu tạo kỹ thuật của tư bản",
      "B. Ký hiệu v/c, quyết định bởi số lượng máy móc",
      "C. Ký hiệu m/v, quyết định bởi ngày lao động",
      "D. Ký hiệu p/k, quyết định bởi chi phí sản xuất"
    ],
    correct: 0,
    explanation: "Giáo trình trang 96: Cấu tạo hữu cơ của tư bản là cấu tạo giá trị được quyết định bởi cấu tạo kỹ thuật và phản ánh sự biến đổi của cấu tạo kỹ thuật, ký hiệu là c/v."
  },
  {
    id: "m3-11",
    module: "m3",
    question: "Chi phí sản xuất tư bản chủ nghĩa (k) về mặt lượng bằng:",
    options: [
      "A. k = c + m",
      "B. k = v + m",
      "C. k = c + v",
      "D. k = c + v + m"
    ],
    correct: 2,
    explanation: "Giáo trình trang 99: Chi phí sản xuất tư bản chủ nghĩa là k = c + v (bù đắp giá cả TLSX và giá cả sức lao động)."
  },
  {
    id: "m3-12",
    module: "m3",
    question: "Khi tỷ suất lợi nhuận bình quân hình thành thì giá trị của hàng hóa chuyển hóa thành:",
    options: [
      "A. Giá cả thị trường",
      "B. Giá cả sản xuất (GCSX = k + p̅)",
      "C. Giá cả độc quyền cao",
      "D. Chi phí lưu thông thuần túy"
    ],
    correct: 1,
    explanation: "Giáo trình trang 105: Khi lợi nhuận chuyển hóa thành lợi nhuận bình quân thì giá trị của hàng hóa chuyển hóa thành giá cả sản xuất: GCSX = k + p̅."
  },

  // =========================================================================
  // CHƯƠNG 4: CẠNH TRANH VÀ ĐỘC QUYỀN TRONG KTTT (10 câu)
  // =========================================================================
  {
    id: "m4-1",
    module: "m4",
    question: "Theo V.I. Lênin, mối quan hệ giữa tự do cạnh tranh và độc quyền là:",
    options: [
      "A. Độc quyền tiêu diệt hoàn toàn cạnh tranh",
      "B. Tự do cạnh tranh đẻ ra tập trung sản xuất và tập trung sản xuất phát triển dẫn tới độc quyền",
      "C. Cạnh tranh và độc quyền không liên quan gì nhau",
      "D. Độc quyền sinh ra cạnh tranh tự do"
    ],
    correct: 1,
    explanation: "Giáo trình trang 112-113: V.I. Lênin khẳng định: 'Tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển tới mức độ nhất định, lại dẫn tới độc quyền'."
  },
  {
    id: "m4-2",
    module: "m4",
    question: "Tổ chức độc quyền trong đó các xí nghiệp thỏa thuận về giá cả, sản lượng nhưng vẫn độc lập cả về sản xuất và lưu thông là:",
    options: [
      "A. Cartel (Các-ten)",
      "B. Syndicate (Xanhđica)",
      "C. Trust (Tờrớt)",
      "D. Consortium (Côngxoócxiom)"
    ],
    correct: 0,
    explanation: "Giáo trình trang 124: Cartel là hình thức các xí nghiệp lớn thỏa thuận về giá cả, sản lượng, thị trường nhưng vẫn giữ độc lập cả về sản xuất và lưu thông hàng hóa."
  },
  {
    id: "m4-3",
    module: "m4",
    question: "Tư bản tài chính là kết quả của sự hợp nhất giữa:",
    options: [
      "A. Tư bản thương nghiệp và tư bản công nghiệp",
      "B. Tư bản ngân hàng của một số ít ngân hàng độc quyền lớn nhất với tư bản của những liên minh độc quyền các nhà công nghiệp",
      "C. Tư bản nhà nước và tư bản tư nhân",
      "D. Tư bản cho vay và tư bản nông nghiệp"
    ],
    correct: 1,
    explanation: "Giáo trình trang 126: V.I. Lênin chỉ rõ: Tư bản tài chính là kết quả của sự hợp nhất giữa tư bản ngân hàng độc quyền lớn nhất với tư bản của liên minh độc quyền các nhà công nghiệp."
  },
  {
    id: "m4-4",
    module: "m4",
    question: "Hệ thống tài phiệt thống trị nền kinh tế chủ yếu thông qua phương thức nào?",
    options: [
      "A. \"Chế độ tham dự\" (công ty mẹ - con - cháu)",
      "B. Trưng thu tài sản trực tiếp",
      "C. Bán đấu giá công khai",
      "D. Quốc hữu hóa không bồi thường"
    ],
    correct: 0,
    explanation: "Giáo trình trang 126-127: Các tài phiệt thực hiện sự thống trị của mình thông qua 'chế độ tham dự' (nắm cổ phiếu khống chế công ty mẹ, mẹ chi phối con, con chi phối cháu)."
  },
  {
    id: "m4-5",
    module: "m4",
    question: "Đặc điểm nào sau đây KHÔNG THUỘC 5 đặc điểm kinh tế cơ bản của độc quyền tư bản chủ nghĩa theo V.I. Lênin?",
    options: [
      "A. Tập trung sản xuất và các tổ chức độc quyền",
      "B. Tư bản tài chính và bọn đầu sỏ tài chính",
      "C. Xuất khẩu tư bản",
      "D. Thủ tiêu hoàn toàn bóc lột sức lao động làm thuê"
    ],
    correct: 3,
    explanation: "Giáo trình trang 123-130: Độc quyền không thủ tiêu bóc lột, mà còn bóc lột tinh vi và gay gắt hơn."
  },
  {
    id: "m4-6",
    module: "m4",
    question: "Bản chất của Độc quyền nhà nước trong chủ nghĩa tư bản là gì?",
    options: [
      "A. Nhà nước của nhân dân lao động làm chủ",
      "B. Sự kết hợp sức mạnh của độc quyền tư nhân với sức mạnh nhà nước phục vụ lợi ích của tư bản độc quyền",
      "C. Xóa bỏ sở hữu tư nhân để xây dựng chủ nghĩa xã hội",
      "D. Nhà nước không can thiệp gì vào nền kinh tế thị trường"
    ],
    correct: 1,
    explanation: "Giáo trình trang 118: Độc quyền nhà nước hình thành nhằm phục vụ lợi ích của các tổ chức độc quyền tư nhân và tiếp tục duy trì, phát triển chủ nghĩa tư bản."
  },
  {
    id: "m4-7",
    module: "m4",
    question: "Tổ chức độc quyền đa ngành gồm hàng trăm xí nghiệp thuộc các ngành khác nhau phân bố ở nhiều nước ra đời trong thời gian gần đây là:",
    options: [
      "A. Concern",
      "B. Conglomerate",
      "C. Cartel",
      "D. Hợp tác xã đa năng"
    ],
    correct: 0,
    explanation: "Giáo trình trang 135: Concern là tổ chức độc quyền đa ngành gồm hàng trăm xí nghiệp có quan hệ với những ngành khác nhau và phân bố ở nhiều nước."
  },
  {
    id: "m4-8",
    module: "m4",
    question: "\"Chiến lược biên giới mềm\" của các cường quốc tư bản ngày nay có thực chất là gì?",
    options: [
      "A. Dùng vũ lực xâm lược chiếm đóng biên giới hành chính",
      "B. Bành trướng biên giới kinh tế rộng hơn biên giới địa lý, ràng buộc lệ thuộc về vốn, công nghệ và chính trị",
      "C. Xóa bỏ hoàn toàn hộ chiếu và thị thực giữa các quốc gia",
      "D. Đóng cửa toàn bộ biên giới quốc tế"
    ],
    correct: 1,
    explanation: "Giáo trình trang 140: Thực hiện 'chiến lược biên giới mềm', ra sức bành trướng 'biên giới kinh tế' rộng hơn biên giới địa lý, chi phối các nước về vốn, công nghệ và chính trị."
  },
  {
    id: "m4-9",
    module: "m4",
    question: "Mâu thuẫn cơ bản của chủ nghĩa tư bản là mâu thuẫn giữa:",
    options: [
      "A. Giai cấp nông dân và giai cấp địa chủ phong kiến",
      "B. Trình độ xã hội hóa ngày càng cao của lực lượng sản xuất với chế độ chiếm hữu tư nhân TBCN về tư liệu sản xuất",
      "C. Kinh tế thương nghiệp và kinh tế nông nghiệp",
      "D. Các tổ chức tôn giáo trong xã hội"
    ],
    correct: 1,
    explanation: "Giáo trình trang 149-150: Mâu thuẫn cơ bản của CNTB là mâu thuẫn giữa trình độ xã hội hóa ngày càng cao của LLSX với QHSX dựa trên chế độ chiếm hữu tư nhân TBCN về TLSX."
  },
  {
    id: "m4-10",
    module: "m4",
    question: "Theo lý luận Mác - Lênin, tại sao chủ nghĩa tư bản không thể tồn tại vĩnh viễn?",
    options: [
      "A. Vì cạn kiệt toàn bộ tài nguyên thiên nhiên của trái đất",
      "B. Vì yêu cầu của quy luật quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất",
      "C. Do các nhà tư bản tự nguyện giải tán doanh nghiệp",
      "D. Do sự phát triển của hệ thống tiền tệ số bitcoin"
    ],
    correct: 1,
    explanation: "Giáo trình trang 150: Đó là do yêu cầu của quy luật quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất quy định; CNTB sẽ bị thay thế bởi hình thái mới tiến bộ hơn."
  },

  // =========================================================================
  // CHƯƠNG 5: KTTT ĐỊNH HƯỚNG XHCN VÀ QUAN HỆ LỢI ÍCH Ở VIỆT NAM (10 câu)
  // =========================================================================
  {
    id: "m5-1",
    module: "m5",
    question: "Kinh tế thị trường định hướng XHCN ở Việt Nam được Đại hội nào của Đảng khẳng định là \"mô hình kinh tế tổng quát\" của thời kỳ quá độ?",
    options: [
      "A. Đại hội VI (1986)",
      "B. Đại hội IX (2001)",
      "C. Đại hội XI (2011)",
      "D. Đại hội XIII (2021)"
    ],
    correct: 1,
    explanation: "Giáo trình trang 155 (Hộp 5.1): Đại hội IX của Đảng khẳng định: Kinh tế thị trường định hướng xã hội chủ nghĩa là mô hình kinh tế tổng quát của thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta."
  },
  {
    id: "m5-2",
    module: "m5",
    question: "Trong nền KTTT định hướng XHCN ở Việt Nam, thành phần kinh tế nào giữ vai trò \"chủ đạo\"?",
    options: [
      "A. Kinh tế tư nhân",
      "B. Kinh tế có vốn đầu tư nước ngoài",
      "C. Kinh tế nhà nước",
      "D. Kinh tế cá thể tiểu chủ"
    ],
    correct: 2,
    explanation: "Giáo trình trang 162-163: Kinh tế nhà nước giữ vai trò chủ đạo, cùng với kinh tế tập thể ngày càng trở thành nền tảng vững chắc của nền kinh tế quốc dân."
  },
  {
    id: "m5-3",
    module: "m5",
    question: "Kinh tế tư nhân ở Việt Nam hiện nay được Đảng ta xác định có vị trí vai trò là:",
    options: [
      "A. Thành phần kinh tế giữ vai trò chủ đạo",
      "B. Một động lực quan trọng của nền kinh tế",
      "C. Thành phần kinh tế tạm thời cần bị xóa bỏ",
      "D. Chỉ được hoạt động trong lĩnh vực buôn bán nhỏ"
    ],
    correct: 1,
    explanation: "Giáo trình trang 162, 174: Kinh tế tư nhân là một động lực quan trọng của nền kinh tế; khuyến khích phát triển thành các tập đoàn tư nhân mạnh."
  },
  {
    id: "m5-4",
    module: "m5",
    question: "Quan hệ phân phối kết quả đầu ra trong nền KTTT định hướng XHCN ở Việt Nam thực hiện CHỦ YẾU theo:",
    options: [
      "A. Bình quân cào bằng",
      "B. Kết quả lao động và hiệu quả kinh tế",
      "C. Mức độ quen biết và địa vị gia đình",
      "D. Nhu cầu tiêu dùng tự do"
    ],
    correct: 1,
    explanation: "Giáo trình trang 165: Phân phối kết quả làm ra (đầu ra) chủ yếu theo kết quả lao động, hiệu quả kinh tế, theo mức đóng góp vốn cùng các nguồn lực khác và qua an sinh xã hội."
  },
  {
    id: "m5-5",
    module: "m5",
    question: "Quan điểm nào sau đây là quan điểm nhất quán của Đảng ta về mối quan hệ giữa tăng trưởng kinh tế và công bằng xã hội?",
    options: [
      "A. Chờ kinh tế phát triển giàu có rồi mới giải quyết công bằng",
      "B. Có thể hy sinh công bằng xã hội để đổi lấy tăng trưởng GDP cao",
      "C. Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách phát triển; không \"hy sinh\" công bằng xã hội để chạy theo tăng trưởng kinh tế đơn thuần",
      "D. Chia đều mọi nguồn lực một cách cào bằng tuyệt đối"
    ],
    correct: 2,
    explanation: "Giáo trình trang 166-167: Thực hiện tiến bộ và công bằng xã hội ngay trong từng chính sách, quy hoạch; không chờ kinh tế phát triển cao mới làm và càng không thể hy sinh công bằng xã hội."
  },
  {
    id: "m5-6",
    module: "m5",
    question: "Nội dung trọng tâm hàng đầu trong hoàn thiện thể chế về sở hữu ở Việt Nam hiện nay là gì?",
    options: [
      "A. Quốc hữu hóa toàn bộ các xí nghiệp tư nhân",
      "B. Thể chế hóa đầy đủ quyền tài sản (sở hữu, sử dụng, định đoạt và hưởng lợi từ tài sản)",
      "C. Xóa bỏ quyền sở hữu trí tuệ",
      "D. Cấm các nhà đầu tư nước ngoài mua cổ phần"
    ],
    correct: 1,
    explanation: "Giáo trình trang 171-172: Nội dung hàng đầu là thể chế hóa đầy đủ quyền tài sản của Nhà nước, tổ chức và cá nhân; bảo đảm công khai minh bạch để quyền tài sản được giao dịch thông suốt."
  },
  {
    id: "m5-7",
    module: "m5",
    question: "Trong các hình thức lợi ích kinh tế, lợi ích nào là cơ sở, nền tảng của các lợi ích khác?",
    options: [
      "A. Lợi ích nhóm",
      "B. Lợi ích cá nhân",
      "C. Lợi ích quốc tế",
      "D. Lợi ích khu vực"
    ],
    correct: 1,
    explanation: "Giáo trình trang 183-184: Trong các hình thức lợi ích kinh tế, lợi ích cá nhân là cơ sở, nền tảng của các lợi ích khác."
  },
  {
    id: "m5-8",
    module: "m5",
    question: "Mô hình liên kết \"4 nhà\" trong nông nghiệp (Nhà nông – Nhà doanh nghiệp – Nhà khoa học – Nhà nước) là ví dụ về loại lợi ích nào?",
    options: [
      "A. Nhóm lợi ích tiêu cực lũng đoạn nhà nước",
      "B. Nhóm lợi ích tích cực, phù hợp với lợi ích quốc gia cần được tôn trọng, tạo điều kiện",
      "C. Độc quyền tư nhân phong kiến",
      "D. Xung đột lợi ích không thể hòa giải"
    ],
    correct: 1,
    explanation: "Giáo trình trang 190: Mô hình liên kết 4 nhà là mô hình 'nhóm lợi ích' tích cực liên kết cùng có lợi, phù hợp với lợi ích đất nước."
  },
  {
    id: "m5-9",
    module: "m5",
    question: "Để ngăn ngừa những quan hệ lợi ích tiêu cực, Nghị quyết Trung ương 4 khóa XII chỉ đạo cần kiên quyết xóa bỏ cơ chế nào?",
    options: [
      "A. Cơ chế thị trường tự do cạnh tranh",
      "B. Cơ chế \"xin - cho\", \"duyệt - cấp\", ngăn chặn \"sân sau\", tham nhũng",
      "C. Cơ chế hợp đồng thương mại",
      "D. Cơ chế tiền lương tối thiểu vùng"
    ],
    correct: 1,
    explanation: "Giáo trình trang 196 (Hộp 5.4): Rà soát hoàn thiện quy định, bảo đảm công khai minh bạch, góp phần xóa bỏ cơ chế 'xin - cho', 'duyệt - cấp'; ngăn chặn đẩy lùi tham nhũng, 'lợi ích nhóm', 'sân sau'."
  },
  {
    id: "m5-10",
    module: "m5",
    question: "Nguyên tắc giải quyết mâu thuẫn giữa các quan hệ lợi ích kinh tế của Nhà nước là gì?",
    options: [
      "A. Cưỡng chế một phía bảo vệ người sử dụng lao động",
      "B. Phải có sự tham gia của các bên liên quan, có nhân nhượng và phải đặt lợi ích đất nước lên trên hết",
      "C. Để mặc thị trường tự phát giải quyết",
      "D. Triệt tiêu hoàn toàn lợi ích của doanh nghiệp"
    ],
    correct: 1,
    explanation: "Giáo trình trang 197: Nguyên tắc giải quyết mâu thuẫn giữa các lợi ích kinh tế là phải có sự tham gia của các bên liên quan, có nhân nhượng và phải đặt lợi ích đất nước lên trên hết."
  },

  // =========================================================================
  // CHƯƠNG 6: CNH, HĐH VÀ HỘI NHẬP KINH TẾ QUỐC TẾ (10 câu)
  // =========================================================================
  {
    id: "m6-1",
    module: "m6",
    question: "Phát minh máy hơi nước của James Watt (1784) đã mở đầu cho cuộc Cách mạng công nghiệp nào?",
    options: [
      "A. Cách mạng công nghiệp lần thứ nhất",
      "B. Cách mạng công nghiệp lần thứ hai",
      "C. Cách mạng công nghiệp lần thứ ba",
      "D. Cách mạng công nghiệp lần thứ tư"
    ],
    correct: 0,
    explanation: "Giáo trình trang 203: Phát minh máy hơi nước của James Watt (1784) là mốc mở đầu quá trình cơ giới hóa sản xuất của cuộc Cách mạng công nghiệp lần thứ nhất."
  },
  {
    id: "m6-2",
    module: "m6",
    question: "Đặc trưng đột phá cốt lõi của Cách mạng công nghiệp lần thứ tư (Industry 4.0) là gì?",
    options: [
      "A. Sử dụng động cơ đốt trong và năng lượng điện",
      "B. Liên kết giữa thế giới thực và ảo, internet kết nối vạn vật (IoT), trí tuệ nhân tạo (AI), dữ liệu lớn (Big Data)",
      "C. Cơ giới hóa ngành dệt sợi thủ công",
      "D. Chế tạo đầu máy xe lửa chạy bằng hơi nước"
    ],
    correct: 1,
    explanation: "Giáo trình trang 205 (Hộp 6.1): CMCN lần thứ tư đặc trưng bởi sự liên kết giữa thế giới thực và ảo, IoT, AI, Big Data, in 3D, công nghệ sinh học."
  },
  {
    id: "m6-3",
    module: "m6",
    question: "Mô hình công nghiệp hóa cổ điển (nước Anh) diễn ra trong khoảng thời gian trung bình bao lâu?",
    options: [
      "A. 10 - 15 năm",
      "B. 20 - 30 năm",
      "C. 60 - 80 năm",
      "D. Trên 200 năm"
    ],
    correct: 2,
    explanation: "Giáo trình trang 218: Quá trình công nghiệp hóa của các nước tư bản cổ điển diễn ra trong thời gian tương đối dài, trung bình 60 - 80 năm."
  },
  {
    id: "m6-4",
    module: "m6",
    question: "Mô hình công nghiệp hóa của Nhật Bản và các nước công nghiệp mới (NICs) thành công trong 20 - 30 năm là nhờ chiến lược nào?",
    options: [
      "A. Chiến lược bế quan tỏa cảng",
      "B. Chiến lược công nghiệp hóa rút ngắn, đi tắt đón đầu, kết hợp nghiên cứu chế tạo với chuyển giao công nghệ",
      "C. Chỉ tập trung khai thác tài nguyên xuất khẩu thô",
      "D. Ưu tiên tuyệt đối phát triển công nghiệp nặng theo mệnh lệnh tập trung"
    ],
    correct: 1,
    explanation: "Giáo trình trang 219-220: Nhật Bản và các nước NICs đã sử dụng chiến lược CNH rút ngắn, kết hợp công nghệ truyền thống và hiện đại, đi tắt đón đầu nên chỉ mất 20 - 30 năm."
  },
  {
    id: "m6-5",
    module: "m6",
    question: "Theo định nghĩa của OECD (1995), nền kinh tế tri thức là nền kinh tế trong đó:",
    options: [
      "A. Lao động cơ bắp chiếm tỷ trọng đa số trong sản phẩm",
      "B. Sự sản sinh ra, phổ cập và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế",
      "C. Chỉ có sự tham gia của các nhà khoa học và viện nghiên cứu",
      "D. Nền kinh tế khép kín không trao đổi quốc tế"
    ],
    correct: 1,
    explanation: "Giáo trình trang 225: Nền kinh tế tri thức là nền kinh tế trong đó sự sản sinh ra, phổ cập và sử dụng tri thức giữ vai trò quyết định nhất đối với sự phát triển kinh tế, tạo của cải, nâng cao chất lượng cuộc sống."
  },
  {
    id: "m6-6",
    module: "m6",
    question: "Tiến trình hội nhập kinh tế quốc tế được chia thành các mức độ cơ bản từ thấp đến cao như thế nào?",
    options: [
      "A. FTA -> PTA -> Thị trường chung -> CU -> Liên minh kinh tế",
      "B. Thỏa thuận thương mại ưu đãi (PTA) -> Khu vực mậu dịch tự do (FTA) -> Liên minh thuế quan (CU) -> Thị trường chung -> Liên minh kinh tế - tiền tệ",
      "C. Thị trường chung -> FTA -> PTA",
      "D. Đóng cửa -> Mở cửa một phần -> Gia nhập WTO"
    ],
    correct: 1,
    explanation: "Giáo trình trang 236-237: Tiến trình từ thấp đến cao: Thỏa thuận thương mại ưu đãi (PTA) -> Khu vực mậu dịch tự do (FTA) -> Liên minh thuế quan (CU) -> Thị trường chung -> Liên minh kinh tế - tiền tệ."
  },
  {
    id: "m6-7",
    module: "m6",
    question: "Việt Nam chính thức trở thành thành viên của Tổ chức Thương mại Thế giới (WTO) vào năm nào?",
    options: [
      "A. Năm 1995",
      "B. Năm 1998",
      "C. Năm 2007",
      "D. Năm 2011"
    ],
    correct: 2,
    explanation: "Giáo trình trang 246 (Hộp 6.4): Năm 2007: Việt Nam chính thức trở thành thành viên của Tổ chức Thương mại thế giới (WTO)."
  },
  {
    id: "m6-8",
    module: "m6",
    question: "Lực lượng nòng cốt trong tiến trình hội nhập kinh tế quốc tế của Việt Nam là ai?",
    options: [
      "A. Cơ quan lập pháp và tư pháp",
      "B. Doanh nghiệp và đội ngũ doanh nhân",
      "C. Các tổ chức tài chính quốc tế",
      "D. Chuyên gia tư vấn nước ngoài"
    ],
    correct: 1,
    explanation: "Giáo trình trang 242: Hội nhập quốc tế toàn diện là sự nghiệp của toàn dân, trong đó doanh nghiệp và đội ngũ doanh nhân sẽ là lực lượng nòng cốt."
  },
  {
    id: "m6-9",
    module: "m6",
    question: "Nền kinh tế độc lập, tự chủ là nền kinh tế:",
    options: [
      "A. Không quan hệ ngoại thương với bất kỳ quốc gia nào",
      "B. Không bị lệ thuộc, phụ thuộc vào nước khác về đường lối, chính sách phát triển; không bị áp đặt khống chế làm tổn hại chủ quyền quốc gia",
      "C. Tự sản xuất được 100% tất cả các loại hàng hóa tiêu dùng",
      "D. Cấm xuất nhập khẩu công nghệ nước ngoài"
    ],
    correct: 1,
    explanation: "Giáo trình trang 250: Nền kinh tế độc lập tự chủ là không bị lệ thuộc vào nước khác, người khác hoặc tổ chức kinh tế nào về đường lối chính sách; không bị dùng kinh tế tài chính áp đặt khống chế."
  },
  {
    id: "m6-10",
    module: "m6",
    question: "Mối quan hệ giữa độc lập, tự chủ và hội nhập quốc tế ở Việt Nam là:",
    options: [
      "A. Mâu thuẫn loại trừ lẫn nhau: muốn độc lập thì phải đóng cửa",
      "B. Mối quan hệ biện chứng: vừa tạo tiền đề cho nhau vừa thống nhất với nhau",
      "C. Hội nhập quốc tế sẽ làm biến mất hoàn toàn độc lập tự chủ",
      "D. Hai phạm trù tách rời độc lập không tác động qua lại"
    ],
    correct: 1,
    explanation: "Giáo trình trang 253: Giữa độc lập, tự chủ và hội nhập quốc tế có mối quan hệ biện chứng; vừa tạo tiền đề cho nhau và phát huy lẫn nhau, vừa thống nhất trong thực hiện mục tiêu cách mạng."
  }
];

if (typeof window !== "undefined") {
  window.FE_REVIEW_MODULES = FE_REVIEW_MODULES;
  window.FE_REVIEW_QUESTIONS = FE_REVIEW_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { FE_REVIEW_MODULES, FE_REVIEW_QUESTIONS };
}

