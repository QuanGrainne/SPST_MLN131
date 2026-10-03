const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

const PDF_PATH = 'c:\\Users\\Dell\\Downloads\\1. Giao trinh Tu tuong Ho Chi Minh.pdf';
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'pdf_images');

async function testExtract() {
    console.log("Đang tải PDF bằng pdfjs-dist...");
    
    // SomePDFs require CMap for fonts
    const CMAP_URL = path.join(__dirname, '..', 'node_modules', 'pdfjs-dist', 'cmaps') + '/';
    const CMAP_PACKED = true;

    const loadingTask = pdfjsLib.getDocument({
        url: PDF_PATH,
        cMapUrl: CMAP_URL,
        cMapPacked: CMAP_PACKED,
    });

    try {
        const pdfDocument = await loadingTask.promise;
        console.log(`PDF tải xong. Tổng số trang: ${pdfDocument.numPages}`);
        
        // Test trang 10
        const pageNum = 10;
        const page = await pdfDocument.getPage(pageNum);
        
        const viewport = page.getViewport({ scale: 2.0 }); // Scale x2 cho rõ nét
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
