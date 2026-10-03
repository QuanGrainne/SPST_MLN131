const fs = require('fs');
const path = require('path');

const OUTPUT_JSON = path.join(__dirname, '..', 'data', 'hcm-curriculum.json');

// Mô phỏng lại hàm tìm kiếm từ server.js
function removeVietnameseTones(str) {
  if (!str) return '';
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function findRelevantPages(question, pages) {
  const stopWords = ["la", "va", "cua", "cac", "nhung", "thi", "ma", "theo", "trong", "ngoai", "voi", "nay", "kia", "de", "cho", "o", "mot", "nhu", "cung"];
  const normalizedQuestion = removeVietnameseTones(question.toLowerCase());
  const rawKeywords = normalizedQuestion.split(/[^a-z0-9]+/);
  const keywords = rawKeywords.filter(k => k.length > 0 && !stopWords.includes(k));
  
  if (keywords.length === 0) return pages.slice(0, 5);

  const scoredPages = pages.map(page => {
    let score = 0;
    const contentLower = removeVietnameseTones((page.content || '').toLowerCase());
    if (contentLower.includes(normalizedQuestion)) score += 10; 
    for (const kw of keywords) {
      if (contentLower.includes(kw)) score += 1;
    }
    for (let i = 0; i < keywords.length - 1; i++) {
        const bigram = keywords[i] + ' ' + keywords[i+1];
        if (contentLower.includes(bigram)) score += 3;
    }
    return { ...page, score };
  });

  scoredPages.sort((a, b) => b.score - a.score);
  return scoredPages.filter(p => p.score > 0).slice(0, 10);
}

// 10 test cases bao phủ các chương khác nhau (giả sử theo khung chương trình)
const testCases = [
  "Khái niệm Tư tưởng Hồ Chí Minh là gì?", // C1
  "Cơ sở thực tiễn hình thành tư tưởng Hồ Chí Minh", // C1
  "Vấn đề dân tộc và cách mạng giải phóng dân tộc", // C2
  "Độc lập dân tộc gắn liền với chủ nghĩa xã hội", // C3
  "Đảng Cộng sản Việt Nam là nhân tố quyết định", // C4
  "Nhà nước của nhân dân, do nhân dân, vì nhân dân", // C4
  "Đại đoàn kết dân tộc và đoàn kết quốc tế", // C5
  "Xây dựng văn hóa và con người mới", // C6
  "Đạo đức cách mạng, cần kiệm liêm chính", // C6
  "Tư tưởng Hồ Chí Minh về thanh niên và thế hệ trẻ" // Mở rộng
];

function runTests() {
    if (!fs.existsSync(OUTPUT_JSON)) {
        console.error("Không tìm thấy file hcm-curriculum.json. OCR chưa xong?");
        return;
    }

    const pages = JSON.parse(fs.readFileSync(OUTPUT_JSON, 'utf8'));
    console.log(`Đã load ${pages.length} trang giáo trình.`);
    
    console.log("\n============= KẾT QUẢ TEST RAG =============");
    testCases.forEach((question, index) => {
        const relevantPages = findRelevantPages(question, pages);
        const pageNumbers = relevantPages.map(p => p.page_num);
        console.log(`Test ${index + 1}: ${question}`);
        console.log(` -> Các trang tìm thấy: [ ${pageNumbers.join(', ')} ]`);
        if (pageNumbers.length === 0) {
            console.log(` -> ❌ THẤT BẠI: Không tìm thấy trang nào!`);
        } else {
            console.log(` -> ✅ THÀNH CÔNG (Top Score: ${relevantPages[0].score})`);
        }
        console.log("-------------------------------------------");
    });
}

runTests();
