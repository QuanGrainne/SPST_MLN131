const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

const PDF_PATH = 'c:\\Users\\Dell\\Downloads\\1. Giao trinh Tu tuong Ho Chi Minh.pdf';
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'hcm-curriculum.json');

async function extractPagesProperly() {
    console.log('Đang đọc file PDF...');
    if (!fs.existsSync(PDF_PATH)) {
        console.error('Không tìm thấy file PDF tại:', PDF_PATH);
        process.exit(1);
    }
    const dataBuffer = fs.readFileSync(PDF_PATH);
    
    try {
        let data = await pdf(dataBuffer);
        
        let pagesText = data.text.split('\n\n');
        let result = [];
        let actualPageNum = 1;
        
        for (let i = 0; i < pagesText.length; i++) {
            let pText = pagesText[i].trim();
            if (pText.length > 10) { // Bỏ qua trang trống
                result.push({
                    page_num: actualPageNum++,
                    content: pText
                });
            }
        }
        
        console.log(`Đã trích xuất ${result.length} trang có nội dung.`);
        if (result.length > 0) {
            fs.writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 2), 'utf-8');
            console.log('Đã lưu thành công vào:', OUTPUT_PATH);
        } else {
            console.log('Không trích xuất được text nào. Thử in ra 1 đoạn text:');
            console.log(data.text.substring(0, 500));
        }

    } catch (e) {
        console.error('Lỗi khi đọc PDF:', e);
    }
}

extractPagesProperly();
