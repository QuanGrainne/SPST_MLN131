import pymupdf
import json
import os
import sys

PDF_PATH = r"c:\Users\Dell\Downloads\1. Giao trinh Tu tuong Ho Chi Minh.pdf"
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'hcm-curriculum.json')

def extract_pdf():
    print("Dang doc file PDF bang PyMuPDF...")
    if not os.path.exists(PDF_PATH):
        print(f"Khong tim thay file PDF tai: {PDF_PATH}")
        sys.exit(1)
        
    try:
        doc = pymupdf.open(PDF_PATH)
        result = []
        actual_page_num = 1
        
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            text = page.get_text("text").strip()
            
            if len(text) > 10:  # Bỏ qua các trang trống
                result.append({
                    "page_num": actual_page_num,
                    "content": text
                })
                actual_page_num += 1
                
        print(f"Đã trích xuất {len(result)} trang có nội dung.")
        
        if len(result) > 0:
            with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
                json.dump(result, f, ensure_ascii=False, indent=2)
            print(f"Đã lưu thành công vào: {OUTPUT_PATH}")
            # In thử trang đầu
            print("--- Trích xuất thử trang đầu tiên ---")
            print(result[0]['content'][:500])
        else:
            print("Không trích xuất được text nào. Có thể file PDF là ảnh scan, cần dùng OCR.")
            
    except Exception as e:
        print(f"Lỗi khi đọc PDF: {e}")

if __name__ == "__main__":
    extract_pdf()
