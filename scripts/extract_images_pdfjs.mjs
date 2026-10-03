import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

// pdfjs-dist import
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PDF_PATH = 'c:\\Users\\Dell\\Downloads\\1. Giao trinh Tu tuong Ho Chi Minh.pdf';
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'pdf_images');

async function testExtract() {
    console.log("Đang tải PDF bằng pdfjs-dist...");
    
    const loadingTask = pdfjsLib.getDocument({
        url: PDF_PATH,
        standardFontDataUrl: path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'standard_fonts') + '/'
    });

    try {
        const pdfDocument = await loadingTask.promise;
        console.log(`PDF tải xong. Tổng số trang: ${pdfDocument.numPages}`);
        
        const pageNum = 10;
        const page = await pdfDocument.getPage(pageNum);
        
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = createCanvas(viewport.width, viewport.height);
        const ctx = canvas.getContext('2d');
        
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        const imgPath = path.join(OUTPUT_DIR, `pdfjs_page_${pageNum}.png`);
        const out = fs.createWriteStream(imgPath);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        
        out.on('finish', () =>  {
            console.log(`Đã xuất thành công: ${imgPath}`);
            const stat = fs.statSync(imgPath);
            console.log(`Kích thước file ảnh: ${stat.size} bytes`);
        });
        
    } catch (err) {
        console.error("Lỗi:", err);
    }
}

testExtract();
