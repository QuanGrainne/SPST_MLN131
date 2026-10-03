const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("Thiếu GEMINI_API_KEY trong file .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-3.7-flash" });

const IMAGES_DIR = path.join(__dirname, '..', 'data', 'pdf_images');
const OUTPUT_JSON = path.join(__dirname, '..', 'data', 'hcm-curriculum.json');

function fileToGenerativePart(filePath, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(filePath)).toString("base64"),
            mimeType
        },
    };
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function extractText() {
    let result = [];
    
    // Đọc danh sách ảnh thực tế từ thư mục
    let files = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.png'));
    files.sort(); // Tên file có dạng uuid-001.png nên sort sẽ đúng thứ tự

    if (fs.existsSync(OUTPUT_JSON)) {
        try {
            const oldData = JSON.parse(fs.readFileSync(OUTPUT_JSON));
            if (Array.isArray(oldData) && oldData.length > 0) {
                result = oldData;
                console.log(`Đã tìm thấy file cũ với ${result.length} trang. Tiếp tục từ trang ${result.length + 1}...`);
            }
        } catch (e) {}
    }

    const totalPages = files.length;
    const batchSize = 4;
    
    for (let i = result.length; i < totalPages; i += batchSize) {
        let currentBatch = [];
        let prompt = "Bạn là công cụ OCR tiếng Việt chuyên nghiệp. Hãy trích xuất toàn bộ văn bản trong các hình ảnh trang sách sau. Trả về kết quả dưới dạng JSON array: [{ \"page_num\": number, \"content\": \"text...\" }]. CHỈ TRẢ VỀ JSON, không thêm bất kỳ text nào khác (không markdown ```json). Nội dung phải giữ nguyên chính tả, dấu câu tiếng Việt.";
        
        let batchParts = [prompt];
        
        for (let j = 0; j < batchSize && (i + j) < totalPages; j++) {
            let pageNum = i + j + 1;
            let imgPath = path.join(IMAGES_DIR, files[i + j]);
            if (fs.existsSync(imgPath)) {
                batchParts.push(fileToGenerativePart(imgPath, "image/png"));
                currentBatch.push(pageNum);
            }
        }
        
        if (currentBatch.length === 0) break;
        
        console.log(`Đang xử lý trang ${currentBatch[0]} đến ${currentBatch[currentBatch.length - 1]}...`);
        
        let retryCount = 0;
        let success = false;
        while (!success && retryCount < 3) {
            try {
                const response = await model.generateContent(batchParts);
                const text = response.response.text();
                
                // Parse JSON
                let jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
                let parsed = JSON.parse(jsonStr);
                
                if (Array.isArray(parsed)) {
                    // Cập nhật đúng số trang
                    for (let k = 0; k < parsed.length; k++) {
                        if (currentBatch[k]) {
                            parsed[k].page_num = currentBatch[k];
                        }
                        result.push(parsed[k]);
                    }
                }
                
                success = true;
                fs.writeFileSync(OUTPUT_JSON, JSON.stringify(result, null, 2));
                console.log(` => Đã lưu tới trang ${result[result.length - 1].page_num}`);
                
                // Sleep để tránh Rate Limit (15 RPM -> 4s mỗi request)
                await delay(5000); 
                
            } catch (error) {
                console.error(`Lỗi ở batch trang ${currentBatch[0]}: ${error.message}`);
                retryCount++;
                console.log(`Đang thử lại (${retryCount}/3)... đợi 10s`);
                await delay(10000);
            }
        }
    }
    
    console.log("HOÀN TẤT OCR!");
}

extractText();
