import pymupdf
import os
import sys

PDF_PATH = r"c:\Users\Dell\Downloads\1. Giao trinh Tu tuong Ho Chi Minh.pdf"
IMAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'data', 'pdf_images')

def extract_images():
    print("Dang chuyen doi PDF thanh hinh anh...")
    if not os.path.exists(PDF_PATH):
        print(f"Khong tim thay file PDF: {PDF_PATH}")
        sys.exit(1)
        
    os.makedirs(IMAGES_DIR, exist_ok=True)
    
    try:
        doc = pymupdf.open(PDF_PATH)
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            pix = page.get_pixmap(dpi=150) # DPI vua du cho OCR
            img_path = os.path.join(IMAGES_DIR, f"page_{page_num + 1}.png")
            pix.save(img_path)
            if (page_num + 1) % 10 == 0:
                print(f"Da xu ly {page_num + 1}/{len(doc)} trang...")
                
        print(f"Hoan tat! Tong cong {len(doc)} anh duoc luu tai {IMAGES_DIR}")
    except Exception as e:
        print(f"Loi: {e}")

if __name__ == "__main__":
    extract_images()
