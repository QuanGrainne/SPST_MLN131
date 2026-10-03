const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const fs = require('fs');

async function testVisionOCR() {
    const imgPath = path.join(__dirname, '..', 'data', 'pdf_images', '804ebc33-0285-4d25-b7a4-581ac84a958b-011.png');
    const base64Image = fs.readFileSync(imgPath).toString('base64');
    
    const payload = {
        model: "nvidia/nemotron-nano-12b-v2-vl:free",
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: "Trích xuất toàn bộ văn bản tiếng Việt trong hình ảnh này. Trả về văn bản nguyên gốc, không giải thích." },
                    { type: "image_url", image_url: { url: `data:image/png;base64,${base64Image}` } }
                ]
            }
        ],
        temperature: 0
    };

    try {
        console.log("Đang gọi OpenRouter Vision API...");
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        
        const data = await response.json();
        console.log(data);
        if (data.choices && data.choices.length > 0) {
            console.log("--- KẾT QUẢ OCR ---");
            console.log(data.choices[0].message.content);
        } else {
            console.log("Không có kết quả.");
        }
    } catch (e) {
        console.error(e);
    }
}

testVisionOCR();
