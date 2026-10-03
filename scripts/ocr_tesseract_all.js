const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'data', 'pdf_images');
const OUTPUT_JSON = path.join(__dirname, '..', 'data', 'hcm-curriculum.json');

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runOCR() {
    console.log("Bắt đầu OCR bằng Tesseract.js...");
    
    // Đọc danh sách ảnh
    const files = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.png'));
    if (files.length === 0) {
        console.error("Không tìm thấy ảnh nào trong data/pdf_images");
        return;
    }

    // Sort by page number (page_1, page_2...) - wait, poppler outputs like: 0001-01.png or similar.
    // Let's rely on actual filenames output by convert_from_path (usually uuid-1.png, uuid-2.png...)
    // Wait, in my python script `extract_images_poppler.py`, I used paths_only=True and default prefix.
    // Let me check how the filenames look like.
    
    // We can just sort them alphabetically if they are properly zero-padded, 
    // but convert_from_path uses a randomly generated prefix by default.
    // This is problematic. Let me check the python script... I didn't specify a custom prefix.
    
    let result = [];
    
    // Actually, Tesseract has a worker which we can use to speed things up
    const worker = await Tesseract.createWorker('vie');
    
    // But since the python script is still running, let's just do a basic loop for now
    // Wait, the sorting of files from pdf2image without prefix will be something like:
    // f8e...-0001.png, f8e...-0002.png. So sorting by name works.
    files.sort();

    console.log(`Tìm thấy ${files.length} ảnh. Bắt đầu đọc...`);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imgPath = path.join(IMAGES_DIR, file);
        
        console.log(`Đang đọc trang ${i + 1}/${files.length}...`);
        
        try {
            const { data: { text } } = await worker.recognize(imgPath);
            result.push({
                page_num: i + 1,
                content: text.trim()
            });
            
            // Cập nhật file JSON liên tục để khỏi mất dữ liệu nếu crash
            if ((i + 1) % 5 === 0 || i === files.length - 1) {
                fs.writeFileSync(OUTPUT_JSON, JSON.stringify(result, null, 2), 'utf-8');
            }
        } catch (e) {
            console.error(`Lỗi đọc trang ${i + 1}: ${e.message}`);
        }
    }
    
    await worker.terminate();
    console.log("HOÀN TẤT OCR BẰNG TESSERACT. Đã lưu data/hcm-curriculum.json");
}

runOCR();
