import os
from pdf2image import convert_from_path

PDF_PATH = r"c:\Users\Dell\Downloads\1. Giao trinh Tu tuong Ho Chi Minh.pdf"
IMAGES_DIR = os.path.join(os.path.dirname(__file__), '..', 'data', 'pdf_images')
POPPLER_PATH = r"D:\kì 5\HCM202\poppler\poppler-24.07.0\Library\bin"

def extract_images():
    print("Đang chuyển đổi PDF thành hình ảnh bằng Poppler...")
    os.makedirs(IMAGES_DIR, exist_ok=True)
    
    # Process in batches to save memory
    images = convert_from_path(PDF_PATH, dpi=150, poppler_path=POPPLER_PATH, output_folder=IMAGES_DIR, fmt='png', paths_only=True)
    print(f"Hoàn tất! Tổng cộng {len(images)} ảnh được lưu tại {IMAGES_DIR}")

if __name__ == "__main__":
    extract_images()
