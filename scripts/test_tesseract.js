const Tesseract = require('tesseract.js');
const path = require('path');

const imgPath = path.join(__dirname, '..', 'data', 'pdf_images', 'page_10.png');

console.log("Đang phân tích OCR trang 10 bằng Tesseract...");

Tesseract.recognize(
  imgPath,
  'vie',
  { logger: m => console.log(m.status, Math.round(m.progress * 100) + '%') }
).then(({ data: { text } }) => {
  console.log("---- KẾT QUẢ ----");
  console.log(text);
}).catch(err => {
  console.error("Lỗi:", err);
});
