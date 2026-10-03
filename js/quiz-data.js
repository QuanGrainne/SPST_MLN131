// Philosophy Quiz Data - HCM202 (4 Stats Only, Balanced Bonus/Penalty)
// Questions about Dialectical Materialism for Development Map Game
// Stats: quantity, knowledge, softSkills, creativity, mentalHealth
// Bonus max: +6, Penalty max: -3

const QUIZ_QUESTIONS = [
    // === QUY LUẬT LƯỢNG - CHẤT (8 câu) ===
    {
        id: 'q1',
        category: 'luong-chat',
        question: 'Quy luật Lượng-Chất trong triết học duy vật biện chứng nói về điều gì?',
        options: [
            'Tích lũy về lượng đến một ngưỡng nhất định sẽ dẫn đến bước nhảy về chất',
            'Chất lượng quan trọng hơn số lượng trong mọi trường hợp',
            'Lượng và chất là hai yếu tố hoàn toàn độc lập không liên quan'
        ],
        correct: 0,
        explanation: 'Quy luật Lượng-Chất chỉ ra rằng sự tích lũy về lượng đến một điểm nút (ngưỡng) nhất định sẽ tạo ra bước nhảy về chất - một sự biến đổi căn bản.',
        bonus: { quantity: 6, knowledge: 3 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q2',
        category: 'luong-chat',
        question: 'Trong quá trình học tập, nếu bạn chỉ học nhiều giờ nhưng không hiểu bài, bạn đã vi phạm nguyên tắc nào?',
        options: [
            'Chỉ tích lũy lượng mà không chú ý đến chất',
            'Tích lũy đủ cả lượng và chất',
            'Không có vấn đề gì, học nhiều là tốt'
        ],
        correct: 0,
        explanation: 'Học nhiều giờ (lượng) nhưng không hiểu (chất thấp) là vi phạm quy luật Lượng-Chất. Cần cân bằng giữa thời gian học và chất lượng tiếp thu.',
        bonus: { quantity: 5, knowledge: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q3',
        category: 'luong-chat',
        question: '"Điểm nút" trong quy luật Lượng-Chất là gì?',
        options: [
            'Ngưỡng mà tại đó sự tích lũy lượng chuyển thành bước nhảy chất',
            'Điểm kết thúc của quá trình học tập',
            'Mức điểm tối thiểu để đạt môn học'
        ],
        correct: 0,
        explanation: 'Điểm nút là ngưỡng quan trọng - khi tích lũy lượng đạt đến đây, sẽ xảy ra bước nhảy về chất (chuyển biến căn bản).',
        bonus: { quantity: 4, creativity: 3 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q4',
        category: 'luong-chat',
        question: 'Ví dụ nào sau đây thể hiện đúng quy luật Lượng-Chất?',
        options: [
            'Học tích lũy kiến thức từng ngày → Hiểu sâu về một lĩnh vực',
            'Đọc sách càng nhiều càng tốt không cần suy nghĩ',
            'Chỉ cần chất lượng, không cần số lượng'
        ],
        correct: 0,
        explanation: 'Tích lũy kiến thức đều đặn (lượng) sẽ dẫn đến hiểu biết sâu sắc (chất) - đây là ví dụ điển hình của quy luật Lượng-Chất.',
        bonus: { quantity: 5, knowledge: 3 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q5',
        category: 'luong-chat',
        question: 'Tại sao không thể "nhảy cóc" - bỏ qua giai đoạn tích lũy lượng?',
        options: [
            'Vì bước nhảy chất chỉ xảy ra khi đã tích lũy đủ lượng',
            'Vì luôn có thể đạt được mọi thứ ngay lập tức',
            'Vì lượng không quan trọng'
        ],
        correct: 0,
        explanation: 'Không thể bỏ qua tích lũy lượng vì bước nhảy chất là kết quả tất yếu của sự tích lũy về lượng. Không có lượng thì không có chất.',
        bonus: { quantity: 6, knowledge: 3, creativity: 2 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q6',
        category: 'luong-chat',
        question: 'Sinh viên A học đều 2 giờ/ngày trong 3 tháng và hiểu sâu. Sinh viên B học dồn 180 giờ trong 1 tuần cuối. Ai áp dụng đúng quy luật Lượng-Chất?',
        options: [
            'Sinh viên A - tích lũy đều đặn tạo biến đổi chất bền vững',
            'Sinh viên B - học nhiều giờ hơn nên tốt hơn',
            'Cả hai đều đúng'
        ],
        correct: 0,
        explanation: 'Sinh viên A tích lũy đều đặn (lượng) qua thời gian dài, tạo nên sự thay đổi chất bền vững. Sinh viên B chỉ tích lũy lượng mà thiếu quá trình chuyển hóa chất.',
        bonus: { quantity: 6, knowledge: 4, mentalHealth: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q7',
        category: 'luong-chat',
        question: 'Bước nhảy từ "Sinh viên năm 1" thành "Sinh viên có kỹ năng" trong game là ví dụ về điều gì?',
        options: [
            'Bước nhảy về chất sau khi tích lũy đủ lượng',
            'Sự thay đổi ngẫu nhiên',
            'Chỉ là thay đổi tên gọi'
        ],
        correct: 0,
        explanation: 'Đây là bước nhảy về chất - một sự biến đổi căn bản về trình độ sau khi tích lũy đủ lượng (kiến thức, kỹ năng).',
        bonus: { quantity: 5, creativity: 4 },
        penalty: { quantity: -2 }
    },
    {
        id: 'q8',
        category: 'luong-chat',
        question: 'Trong game, tại sao phải kéo thả nhiều lần (tích lũy lượng) mới có transformation (biến đổi chất)?',
        options: [
            'Để thể hiện quy luật Lượng-Chất: tích lũy lượng → biến đổi chất',
            'Để game khó hơn',
            'Không có lý do đặc biệt'
        ],
        correct: 0,
        explanation: 'Game mô phỏng quy luật Lượng-Chất: mỗi hành động là tích lũy lượng, và khi đạt ngưỡng sẽ xảy ra transformation (bước nhảy chất).',
        bonus: { quantity: 6, knowledge: 5, creativity: 3 },
        penalty: { quantity: -2 }
    },

    // === QUY LUẬT MÂU THUẪN (7 câu) ===
    {
        id: 'q9',
        category: 'mau-thuan',
        question: 'Mâu thuẫn trong triết học biện chứng là gì?',
        options: [
            'Sự đấu tranh và thống nhất giữa các mặt đối lập trong cùng sự vật',
            'Sự xung đột không thể giải quyết',
            'Sự khác biệt đơn thuần giữa hai sự vật'
        ],
        correct: 0,
        explanation: 'Mâu thuẫn biện chứng là sự thống nhất và đấu tranh giữa các mặt đối lập trong cùng một sự vật, là nguồn gốc và động lực phát triển.',
        bonus: { quantity: 5, knowledge: 4, creativity: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q10',
        category: 'mau-thuan',
        question: 'Trong game, "Học tập" (+tri thức, -tinh thần) và "Nghỉ ngơi" (+tinh thần, -lượng) thể hiện điều gì?',
        options: [
            'Mâu thuẫn cần được cân bằng để phát triển toàn diện',
            'Hai hành động không liên quan',
            'Chỉ nên chọn một trong hai'
        ],
        correct: 0,
        explanation: 'Đây là mâu thuẫn điển hình: học tập vs nghỉ ngơi. Cần cân bằng cả hai để phát triển bền vững, không thể chỉ tập trung vào một mặt.',
        bonus: { quantity: 6, mentalHealth: 4, creativity: 3 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q11',
        category: 'mau-thuan',
        question: 'Tại sao mâu thuẫn là động lực phát triển?',
        options: [
            'Vì sự đấu tranh giữa các mặt đối lập tạo ra sự vận động và phát triển',
            'Vì mâu thuẫn luôn tạo ra xung đột',
            'Vì mâu thuẫn không quan trọng'
        ],
        correct: 0,
        explanation: 'Mâu thuẫn là động lực phát triển vì sự đấu tranh giữa các mặt đối lập thúc đẩy sự vật vận động, thay đổi và phát triển.',
        bonus: { quantity: 5, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q12',
        category: 'mau-thuan',
        question: 'Khi stats "Tinh thần" xuống thấp trong game, bạn nên làm gì theo quy luật mâu thuẫn?',
        options: [
            'Cân bằng lại bằng "Nghỉ ngơi" hoặc "Giao tiếp" để giải quyết mâu thuẫn',
            'Tiếp tục "Học tập" để tăng lượng',
            'Bỏ qua, không cần quan tâm'
        ],
        correct: 0,
        explanation: 'Khi tinh thần thấp, cần giải quyết mâu thuẫn bằng cách nghỉ ngơi hoặc giao tiếp để cân bằng lại. Đây là cách giải quyết mâu thuẫn hợp lý.',
        bonus: { mentalHealth: 6, creativity: 3 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q13',
        category: 'mau-thuan',
        question: 'Element "Áp lực" (+lượng, -tinh thần) thể hiện mâu thuẫn gì?',
        options: [
            'Mâu thuẫn giữa động lực phát triển và sức khỏe tinh thần',
            'Không có mâu thuẫn',
            'Chỉ có tác động tiêu cực'
        ],
        correct: 0,
        explanation: 'Áp lực vừa là động lực (tăng lượng) vừa gây stress (giảm tinh thần) - đây là mâu thuẫn điển hình cần được quản lý hợp lý.',
        bonus: { quantity: 5, knowledge: 4, mentalHealth: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q14',
        category: 'mau-thuan',
        question: 'Làm sao để giải quyết mâu thuẫn giữa "Học nhiều" và "Sức khỏe tinh thần"?',
        options: [
            'Cân bằng giữa học tập và nghỉ ngơi, không cực đoan',
            'Chỉ tập trung học thôi',
            'Chỉ nghỉ ngơi, bỏ học'
        ],
        correct: 0,
        explanation: 'Giải quyết mâu thuẫn bằngcách cân bằng, không đi cực đoan. Vừa học vừa nghỉ hợp lý là cách tốt nhất.',
        bonus: { quantity: 6, mentalHealth: 5, creativity: 3 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q15',
        category: 'mau-thuan',
        question: 'Trong các elements của game, cặp nào thể hiện mâu thuẫn rõ nhất?',
        options: [
            'Học tập (tăng tri thức, giảm tinh thần) vs Nghỉ ngơi (tăng tinh thần, không tăng lượng)',
            'Thời gian vs Sáng tạo',
            'Làm thêm vs Tình nguyện'
        ],
        correct: 0,
        explanation: 'Cặp Học tập - Nghỉ ngơi thể hiện mâu thuẫn điển hình: một bên tích lũy kiến thức nhưng mệt mỏi, một bên phục hồi tinh thần nhưng không tiến bộ.',
        bonus: { quantity: 5, creativity: 4 },
        penalty: { quantity: -2 }
    },

    // === QUY LUẬT PHỦ ĐỊNH CỦA PHỦ ĐỊNH (5 câu) ===
    {
        id: 'q16',
        category: 'phu-dinh',
        question: 'Quy luật Phủ định của Phủ định nói về điều gì?',
        options: [
            'Sự phát triển theo hình xoáy ốc: phủ định nhưng kế thừa cái cũ ở mức cao hơn',
            'Phủ định hoàn toàn, loại bỏ hết cái cũ',
            'Quay lại trạng thái ban đầu giống hệt'
        ],
        correct: 0,
        explanation: 'Phủ định biện chứng là phủ định nhưng có kế thừa, phát triển theo hình xoáy ốc lên cao hơn, không phải quay lại điểm xuất phát cũ.',
        bonus: { quantity: 6, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q17',
        category: 'phu-dinh',
        question: 'Khi bạn từ "Sinh viên năm 1" → "Sinh viên có kỹ năng" → "Thực tập sinh" → "Có việc làm", đây là ví dụ về quy luật nào?',
        options: [
            'Phủ định của Phủ định - phát triển xoáy ốc lên cao',
            'Chỉ là thay đổi tuần tự',
            'Không liên quan đến quy luật nào'
        ],
        correct: 0,
        explanation: 'Đây là phát triển theo hình xoáy ốc: mỗi giai đoạn phủ định giai đoạn trước nhưng kế thừa và nâng lên mức cao hơn.',
        bonus: { quantity: 6, knowledge: 4, creativity: 5 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q18',
        category: 'phu-dinh',
        question: 'Tại sao sau khi "phủ định" (transformation), bạn không quay lại trạng thái ban đầu giống hệt?',
        options: [
            'Vì phủ định biện chứng là kế thừa và phát triển lên cao hơn',
            'Vì có thể quay lại giống hệt',
            'Vì không có sự thay đổi thực sự'
        ],
        correct: 0,
        explanation: 'Phủ định biện chứng không phải quay vòng tròn mà là xoáy ốc: kế thừa những gì tốt của cũ và phát triển lên mức cao hơn.',
        bonus: { quantity: 5, creativity: 5 },
        penalty: { creativity: -2 }
    },
    {
        id: 'q19',
        category: 'phu-dinh',
        question: 'Sự khác nhau giữa "phủ định siêu hình" và "phủ định biện chứng" là gì?',
        options: [
            'Phủ định siêu hình loại bỏ hoàn toàn, phủ định biện chứng kế thừa và phát triển',
            'Không có sự khác biệt',
            'Cả hai đều loại bỏ hoàn toàn cái cũ'
        ],
        correct: 0,
        explanation: 'Phủ định siêu hình phủ nhận tuyệt đối. Phủ định biện chứng phủ nhận nhưng kế thừa cái hợp lý và phát triển lên.',
        bonus: { quantity: 6, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q20',
        category: 'phu-dinh',
        question: 'Trong quá trình học, bạn học sai → nhận ra lỗi → học đúng cách. Đây là ví dụ về quy luật gì?',
        options: [
            'Phủ định của Phủ định - phủ nhận cách cũ nhưng tiếp thu kinh nghiệm',
            'Chỉ là sửa lỗi đơn thuần',
            'Không liên quan'
        ],
        correct: 0,
        explanation: 'Đây là phủ định biện chứng: phủ nhận cách học sai (phủ định lần 1), nhưng tiếp thu kinh nghiệm để học đúng hơn (phủ định lần 2, kế thừa kinh nghiệm).',
        bonus: { quantity: 5, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },

    // === ỨNG DỤNG THỰC TẾ (10 câu) ===
    {
        id: 'q21',
        category: 'ung-dung',
        question: 'Bạn muốn giỏi lập trình. Theo quy luật Lượng-Chất, bạn nên làm gì?',
        options: [
            'Luyện tập code đều đặn mỗi ngày, tích lũy kinh nghiệm dần dần',
            'Chỉ đọc lý thuyết không cần thực hành',
            'Học dồn vào cuối tuần'
        ],
        correct: 0,
        explanation: 'Tích lũy đều đặn (lượng) qua thực hành hàng ngày sẽ dẫn đến thành thạo (chất). Đây là áp dụng quy luật Lượng-Chất.',
        bonus: { quantity: 5, knowledge: 4, creativity: 3 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q22',
        category: 'ung-dung',
        question: 'Bạn vừa muốn điểm cao, vừa muốn tham gia nhiều hoạt động CLB. Đây là mâu thuẫn gì?',
        options: [
            'Mâu thuẫn giữa học tập và hoạt động xã hội, cần cân bằng',
            'Không có mâu thuẫn, có thể làm cả hai dễ dàng',
            'Phải chọn một, không thể cả hai'
        ],
        correct: 0,
        explanation: 'Đây là mâu thuẫn điển hình của sinh viên. Cần quản lý thời gian hợp lý để cân bằng cả học tập và phát triển kỹ năng mềm.',
        bonus: { quantity: 4, softSkills: 4, mentalHealth: 3 },
        penalty: { softSkills: -2 }
    },
    {
        id: 'q23',
        category: 'ung-dung',
        question: 'Trong game, khi nào bạn nên sử dụng element "Áp lực"?',
        options: [
            'Khi cần boost lượng nhanh, nhưng phải cẩn thận với tinh thần',
            'Sử dụng liên tục để tăng lượng tối đa',
            'Không bao giờ nên dùng'
        ],
        correct: 0,
        explanation: 'Áp lực có thể tăng lượng nhanh nhưng giảm tinh thần. Cần dùng có chọn lọc và cân bằng với các elements phục hồi tinh thần.',
        bonus: { quantity: 5, mentalHealth: 3, creativity: 3 },
        penalty: { mentalHealth: -2 }
    },
    {
        id: 'q24',
        category: 'ung-dung',
        question: 'Element "Giao tiếp" (+kỹ năng mềm, +tinh thần) quan trọng như thế nào theo triết học?',
        options: [
            'Rất quan trọng - con người phát triển trong quan hệ xã hội',
            'Không quan trọng, chỉ cần học giỏi',
            'Chỉ là tùy chọn phụ'
        ],
        correct: 0,
        explanation: 'Theo triết học Mác, bản chất con người là tổng hòa các quan hệ xã hội. Giao tiếp phát triển kỹ năng mềm và tinh thần - không thể thiếu.',
        bonus: { softSkills: 5, mentalHealth: 5, creativity: 3 },
        penalty: { softSkills: -2 }
    },
    {
        id: 'q25',
        category: 'ung-dung',
        question: 'Tại sao cần có element "Nghỉ ngơi" trong game dù nó không tăng Lượng?',
        options: [
            'Vì cần cân bằng mâu thuẫn, phục hồi tinh thần để phát triển bền vững',
            'Vì game cần có nhiều lựa chọn',
            'Không cần thiết, nên bỏ đi'
        ],
        correct: 0,
        explanation: 'Nghỉ ngơi giải quyết mâu thuẫn giữa phấn đấu và sức khỏe. Dù không tăng lượng trực tiếp nhưng cần thiết cho phát triển bền vững.',
        bonus: { mentalHealth: 6 },
        penalty: { mentalHealth: -3 }
    },
    {
        id: 'q26',
        category: 'ung-dung',
        question: 'Trong thực tế, "thi trượt một môn" (event tiêu cực) có thể có mặt tích cực gì theo quy luật Phủ định?',
        options: [
            'Nhận ra lỗi sai, học cách học đúng hơn - phủ định để phát triển',
            'Hoàn toàn tiêu cực, không có gì tích cực',
            'Không liên quan đến quy luật'
        ],
        correct: 0,
        explanation: 'Theo phủ định biện chứng, thất bại có thể là bài học giúp phủ định cách học cũ và tìm cách học hiệu quả hơn.',
        bonus: { quantity: 5, knowledge: 5, creativity: 4 },
        penalty: { knowledge: -2 }
    },
    {
        id: 'q27',
        category: 'ung-dung',
        question: 'Element "Tình nguyện" (+kỹ năng mềm, +tinh thần) thể hiện quan điểm triết học nào?',
        options: [
            'Con người phát triển toàn diện khi cống hiến cho cộng đồng',
            'Chỉ là hoạt động tốt nhưng không liên quan triết',
            'Lãng phí thời gian'
        ],
        correct: 0,
        explanation: 'Tình nguyện thể hiện quan điểm phát triển toàn diện: vừa rèn kỹ năng, vừa tốt cho tinh thần, vừa cống hiến xã hội.',
        bonus: { softSkills: 5, mentalHealth: 5 },
        penalty: { softSkills: -2 }
    },
    {
        id: 'q28',
        category: 'ung-dung',
        question: 'Khi bạn làm nhiều project cùng lúc, bạn đang áp dụng nguyên lý nào?',
        options: [
            'Cân bằng mâu thuẫn: đa dạng hóa kinh nghiệm vừa phát triển kỹ năng đa dạng',
            'Tham lam, làm nhiều thứ cùng lúc là sai',
            'Chỉ nên tập trung một việc duy nhất'
        ],
        correct: 0,
        explanation: 'Làm nhiều project đa dạng giúp phát triển toàn diện nhiều kỹ năng, thể hiện nguyên lý cân bằng và phát triển đa chiều.',
        bonus: { creativity: 5, softSkills: 4 },
        penalty: { creativity: -2 }
    },
    {
        id: 'q29',
        category: 'ung-dung',
        question: 'Element "Thể thao" (+tinh thần) quan trọng như thế nào trong phát triển toàn diện?',
        options: [
            'Rất quan trọng - cơ thể khỏe là nền tảng cho mọi hoạt động',
            'Không cần thiết, chỉ cần học',
            'Chỉ dành cho vận động viên'
        ],
        correct: 0,
        explanation: 'Thể chất và tinh thần có mối liên hệ biện chứng. Cơ thể khỏe là nền tảng cho học tập và làm việc hiệu quả.',
        bonus: { mentalHealth: 6, quantity: 3 },
        penalty: { mentalHealth: -2 }
    },
    {
        id: 'q30',
        category: 'ung-dung',
        question: 'Trong game, tại sao cần đa dạng hóa các elements thay vì chỉ spam một loại?',
        options: [
            'Vì phát triển toàn diện cần cân bằng nhiều mặt, tránh phát triển lệch lạc',
            'Vì game bắt buộc',
            'Không có lý do đặc biệt'
        ],
        correct: 0,
        explanation: 'Theo quan điểm phát triển toàn diện, cần cân bằng tri thức, kỹ năng, sức khỏe... Spam một loại dẫn đến phát triển lệch lạc.',
        bonus: { quantity: 5, knowledge: 4, creativity: 4, softSkills: 3 },
        penalty: { quantity: -2 }
    }
];

// Export for use in game
if (typeof window !== 'undefined') {
    window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}

// =============================================
// MODULE 1 — VẬT CHẤT & VẬN ĐỘNG
// Kiểm tra hình thành (Formative Quizzes)
// sourceRef: Giáo trình Triết học Mác-Lênin 2021, Chương 2
// =============================================

const FORMATIVE_QUIZZES_M1 = {
    "M1-FQ1": {
        title: "Kiểm tra hình thành: Cơ sở thực tiễn",
        lessonId: "M1-L2",
        module: "M1",
        passingScore: 70,
        questions: [
            {
                id: "M1-FQ1-1",
                module: "M1",
                lessonId: "M1-L1",
                text: "Mâu thuẫn cơ bản nhất của xã hội Việt Nam cuối thế kỷ XIX, đầu thế kỷ XX là gì?",
                options: [
                    { id: "a", text: "Giữa giai cấp công nhân và giai cấp tư sản" },
                    { id: "b", text: "Giữa toàn thể nhân dân Việt Nam với thực dân Pháp xâm lược" },
                    { id: "c", text: "Giữa nông dân và địa chủ phong kiến" }
                ],
                correctOptionId: "b",
                rationale: "Mâu thuẫn bao trùm và cơ bản nhất là mâu thuẫn giữa toàn thể nhân dân Việt Nam với chủ nghĩa đế quốc Pháp và tay sai."
            },
            {
                id: "M1-FQ1-2",
                module: "M1",
                lessonId: "M1-L1",
                text: "Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước cuối TK XIX, đầu TK XX là gì?",
                options: [
                    { id: "a", text: "Sự non yếu của giai cấp tư sản và thiếu một đường lối cứu nước đúng đắn" },
                    { id: "b", text: "Nhân dân không có tinh thần yêu nước" },
                    { id: "c", text: "Thực dân Pháp có vũ khí quá hiện đại" }
                ],
                correctOptionId: "a",
                rationale: "Thiếu một giai cấp tiên tiến lãnh đạo và một đường lối khoa học, triệt để là nguyên nhân chính dẫn đến sự thất bại."
            },
            {
                id: "M1-FQ1-3",
                module: "M1",
                lessonId: "M1-L1",
                text: "Sự kiện quốc tế nào mở ra thời đại mới, ảnh hưởng quyết định đến con đường cứu nước của Hồ Chí Minh?",
                options: [
                    { id: "a", text: "Cách mạng Tân Hợi (1911)" },
                    { id: "b", text: "Cách mạng Tháng Mười Nga (1917)" },
                    { id: "c", text: "Chiến tranh thế giới thứ nhất kết thúc" }
                ],
                correctOptionId: "b",
                rationale: "Cách mạng Tháng Mười Nga đã đánh đổ giai cấp tư sản, mở ra thời đại quá độ lên chủ nghĩa xã hội trên phạm vi toàn thế giới."
            }
        ]
    },
    "M1-FQ2": {
        title: "Kiểm tra hình thành: Cơ sở lý luận & Nhân tố chủ quan",
        lessonId: "M1-L4",
        module: "M1",
        passingScore: 70,
        questions: [
            {
                id: "M1-FQ2-1",
                module: "M1",
                lessonId: "M1-L2",
                text: "Nền tảng lý luận nào đóng vai trò quyết định bước phát triển về chất trong tư tưởng Hồ Chí Minh?",
                options: [
                    { id: "a", text: "Chủ nghĩa yêu nước truyền thống" },
                    { id: "b", text: "Chủ nghĩa Mác - Lênin" },
                    { id: "c", text: "Tinh hoa văn hóa phương Đông và phương Tây" }
                ],
                correctOptionId: "b",
                rationale: "Chủ nghĩa Mác-Lênin cung cấp thế giới quan và phương pháp luận khoa học, là tiền đề lý luận quan trọng nhất quyết định bản chất tư tưởng HCM."
            },
            {
                id: "M1-FQ2-2",
                module: "M1",
                lessonId: "M1-L2",
                text: "Giá trị xuyên suốt trong truyền thống dân tộc Việt Nam được Hồ Chí Minh kế thừa là gì?",
                options: [
                    { id: "a", text: "Chủ nghĩa yêu nước" },
                    { id: "b", text: "Tinh thần hiếu học" },
                    { id: "c", text: "Truyền thống tôn sư trọng đạo" }
                ],
                correctOptionId: "a",
                rationale: "Chủ nghĩa yêu nước là động lực, là sức mạnh giúp dân tộc tồn tại và phát triển, là điểm xuất phát của Hồ Chí Minh."
            },
            {
                id: "M1-FQ2-3",
                module: "M1",
                lessonId: "M1-L3",
                text: "Đặc điểm nổi bật trong nhân tố chủ quan của Hồ Chí Minh là gì?",
                options: [
                    { id: "a", text: "Chỉ tiếp thu rập khuôn các tư tưởng nước ngoài" },
                    { id: "b", text: "Tư duy độc lập, tự chủ, sáng tạo và bản lĩnh kiên cường" },
                    { id: "c", text: "Trông chờ vào sự giúp đỡ của quốc tế" }
                ],
                correctOptionId: "b",
                rationale: "Hồ Chí Minh luôn suy nghĩ độc lập, không giáo điều, vận dụng sáng tạo lý luận vào hoàn cảnh thực tiễn của Việt Nam."
            }
        ]
    },
    "M1-FQ3": {
        title: "Kiểm tra hình thành: Quá trình hình thành & Ý nghĩa",
        lessonId: "M1-L6",
        module: "M1",
        passingScore: 70,
        questions: [
            {
                id: "M1-FQ3-1",
                module: "M1",
                lessonId: "M1-L4",
                text: "Sự kiện nào đánh dấu bước ngoặt Hồ Chí Minh chuyển từ lập trường yêu nước sang lập trường cộng sản?",
                options: [
                    { id: "a", text: "Ra đi tìm đường cứu nước (1911)" },
                    { id: "b", text: "Gửi Yêu sách 8 điểm tới Hội nghị Versailles (1919)" },
                    { id: "c", text: "Bỏ phiếu tán thành Quốc tế III và tham gia sáng lập Đảng CS Pháp (12/1920)" }
                ],
                correctOptionId: "c",
                rationale: "Tháng 12/1920 tại Đại hội Tours, Người đã chọn con đường cách mạng vô sản, trở thành người cộng sản Việt Nam đầu tiên."
            },
            {
                id: "M1-FQ3-2",
                module: "M1",
                lessonId: "M1-L5",
                text: "Tác phẩm nào đánh dấu sự hình thành cơ bản tư tưởng Hồ Chí Minh về con đường cách mạng Việt Nam?",
                options: [
                    { id: "a", text: "Bản án chế độ thực dân Pháp" },
                    { id: "b", text: "Đường Cách mệnh và Cương lĩnh chính trị đầu tiên (1930)" },
                    { id: "c", text: "Tuyên ngôn độc lập" }
                ],
                correctOptionId: "b",
                rationale: "Đường cách mệnh (1927) và Cương lĩnh chính trị đầu tiên (1930) đã hệ thống hóa đường lối cách mạng giải phóng dân tộc."
            },
            {
                id: "M1-FQ3-3",
                module: "M1",
                lessonId: "M1-L6",
                text: "Giá trị của Tư tưởng Hồ Chí Minh đối với cách mạng Việt Nam là gì?",
                options: [
                    { id: "a", text: "Là tài sản tinh thần vô giá, nền tảng tư tưởng và kim chỉ nam cho hành động" },
                    { id: "b", text: "Chỉ có giá trị trong giai đoạn đấu tranh giành độc lập" },
                    { id: "c", text: "Chỉ có ý nghĩa về mặt lịch sử" }
                ],
                correctOptionId: "a",
                rationale: "Đảng ta khẳng định tư tưởng HCM cùng với CN Mác-Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng và cách mạng Việt Nam."
            }
        ]
    }
};

const MODULE_QUIZ_M1 = {
    id: "M1-FINAL",
    title: "Kiểm tra Module 1: Cơ sở hình thành Tư tưởng HCM",
    module: "M1",
    passingScore: 75,
    achievement: "hcm-explorer",
    xp: 10,
    questions: [
        {
            id: "M1-Q1",
            module: "M1",
            text: "Trong các cơ sở hình thành tư tưởng Hồ Chí Minh, cơ sở nào là tiền đề lý luận quan trọng nhất?",
            options: [
                { id: "a", text: "Chủ nghĩa Mác - Lênin" },
                { id: "b", text: "Tinh hoa văn hóa nhân loại" },
                { id: "c", text: "Giá trị truyền thống dân tộc" }
            ],
            correctOptionId: "a",
            rationale: "Chủ nghĩa Mác - Lênin là cơ sở lý luận quyết định bước phát triển mới về chất trong tư tưởng Hồ Chí Minh."
        },
        {
            id: "M1-Q2",
            module: "M1",
            text: "Cuối TK XIX đầu TK XX, xã hội Việt Nam có tính chất gì?",
            options: [
                { id: "a", text: "Phong kiến độc lập" },
                { id: "b", text: "Thuộc địa nửa phong kiến" },
                { id: "c", text: "Tư bản chủ nghĩa" }
            ],
            correctOptionId: "b",
            rationale: "Việt Nam từ một nước phong kiến độc lập đã trở thành nước thuộc địa nửa phong kiến (thực dân phong kiến)."
        },
        {
            id: "M1-Q3",
            module: "M1",
            text: "Sự kiện nào trên thế giới năm 1917 đã ảnh hưởng sâu sắc đến Nguyễn Ái Quốc?",
            options: [
                { id: "a", text: "Cách mạng Tân Hợi" },
                { id: "b", text: "Cách mạng Tháng Mười Nga" },
                { id: "c", text: "Chiến tranh thế giới I kết thúc" }
            ],
            correctOptionId: "b",
            rationale: "Cách mạng Tháng Mười Nga thắng lợi mở ra con đường giải phóng cho các dân tộc bị áp bức."
        },
        {
            id: "M1-Q4",
            module: "M1",
            text: "Hồ Chí Minh đã tiếp thu yếu tố nào từ tư tưởng của Nho giáo?",
            options: [
                { id: "a", text: "Tư tưởng phân chia giai cấp" },
                { id: "b", text: "Triết lý về sự vô ngã" },
                { id: "c", text: "Sự tu dưỡng đạo đức cá nhân" }
            ],
            correctOptionId: "c",
            rationale: "Người viết: 'Học thuyết của Khổng Tử có ưu điểm là sự tu dưỡng đạo đức cá nhân'."
        },
        {
            id: "M1-Q5",
            module: "M1",
            text: "Hồ Chí Minh đánh giá cao tư tưởng nào của Cách mạng Pháp và Mỹ?",
            options: [
                { id: "a", text: "Quyền tư hữu tài sản" },
                { id: "b", text: "Quyền độc lập, tự do, dân chủ, bình đẳng" },
                { id: "c", text: "Mô hình tổ chức nhà nước tư bản" }
            ],
            correctOptionId: "b",
            rationale: "Hồ Chí Minh trích dẫn lý tưởng Tự do - Bình đẳng - Bác ái của Pháp và Quyền mưu cầu hạnh phúc của Mỹ."
        },
        {
            id: "M1-Q6",
            module: "M1",
            text: "Tháng 7/1920, Hồ Chí Minh đọc tác phẩm nào của Lênin?",
            options: [
                { id: "a", text: "Tuyên ngôn của Đảng Cộng sản" },
                { id: "b", text: "Nhà nước và Cách mạng" },
                { id: "c", text: "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa" }
            ],
            correctOptionId: "c",
            rationale: "Bản sơ thảo này đã giúp Người tìm ra con đường cứu nước đúng đắn."
        },
        {
            id: "M1-Q7",
            module: "M1",
            text: "Nhân tố chủ quan nào giúp Hồ Chí Minh vượt lên trên các nhà yêu nước đương thời?",
            options: [
                { id: "a", text: "Có nhiều tiền bạc" },
                { id: "b", text: "Bản lĩnh tư duy độc lập, sáng tạo, thực tiễn phong phú" },
                { id: "c", text: "Được sinh ra ở thành phố lớn" }
            ],
            correctOptionId: "b",
            rationale: "Hồ Chí Minh không rập khuôn mà luôn xuất phát từ thực tiễn Việt Nam với tư duy sáng tạo."
        },
        {
            id: "M1-Q8",
            module: "M1",
            text: "Giai đoạn 1911-1920 đánh dấu bước phát triển nào trong tư tưởng Hồ Chí Minh?",
            options: [
                { id: "a", text: "Hình thành tư tưởng yêu nước" },
                { id: "b", text: "Dần dần hình thành tư tưởng giải phóng dân tộc theo con đường vô sản" },
                { id: "c", text: "Hoàn thiện tư tưởng về Chủ nghĩa xã hội" }
            ],
            correctOptionId: "b",
            rationale: "Từ một người yêu nước, qua quá trình tìm tòi Người đã trở thành người cộng sản (cuối 1920)."
        },
        {
            id: "M1-Q9",
            module: "M1",
            text: "Tác phẩm nào xuất bản năm 1927 là sự chuẩn bị về lý luận cho việc thành lập Đảng?",
            options: [
                { id: "a", text: "Bản án chế độ thực dân Pháp" },
                { id: "b", text: "Đường Cách mệnh" },
                { id: "c", text: "Nhật ký trong tù" }
            ],
            correctOptionId: "b",
            rationale: "Đường Cách mệnh là tác phẩm cốt lõi chuẩn bị lý luận cách mạng cho việc thành lập Đảng."
        },
        {
            id: "M1-Q10",
            module: "M1",
            text: "Giai đoạn 1930-1941 là thời kỳ Hồ Chí Minh:",
            options: [
                { id: "a", text: "Bắt đầu ra đi tìm đường cứu nước" },
                { id: "b", text: "Vượt qua thử thách, giữ vững đường lối cách mạng đúng đắn" },
                { id: "c", text: "Lãnh đạo cách mạng cả nước xây dựng CNXH" }
            ],
            correctOptionId: "b",
            rationale: "Giai đoạn này Người bị hiểu lầm nhưng vẫn kiên định đường lối độc lập dân tộc."
        },
        {
            id: "M1-Q11",
            module: "M1",
            text: "Đại hội nào của Đảng đã khẳng định: 'Đảng lấy chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh làm nền tảng tư tưởng'?",
            options: [
                { id: "a", text: "Đại hội VI (1986)" },
                { id: "b", text: "Đại hội VII (1991)" },
                { id: "c", text: "Đại hội XII (2016)" }
            ],
            correctOptionId: "b",
            rationale: "Đại hội VII (1991) là cột mốc lớn khi Đảng chính thức nêu cao tư tưởng Hồ Chí Minh làm nền tảng tư tưởng."
        },
        {
            id: "M1-Q12",
            module: "M1",
            text: "Tư tưởng Hồ Chí Minh có ý nghĩa gì đối với cách mạng Việt Nam?",
            options: [
                { id: "a", text: "Soi đường cho cách mạng giành thắng lợi, là tài sản tinh thần vô giá" },
                { id: "b", text: "Chỉ là một giai đoạn lịch sử đã qua" },
                { id: "c", text: "Không còn phù hợp trong thời đại hội nhập" }
            ],
            correctOptionId: "a",
            rationale: "Tư tưởng HCM là kim chỉ nam cho hành động, soi đường cho công cuộc đổi mới."
        }
    ]
};
