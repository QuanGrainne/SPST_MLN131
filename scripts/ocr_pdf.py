import pypdfium2 as pdfium
import json
import os
import easyocr
from pathlib import Path
import time
import numpy as np

def extract_pdf():
    pdf_path = r"c:\Users\Dell\Downloads\1. Giao trinh Tu tuong Ho Chi Minh.pdf"
    out_path = Path(r"d:\kì 5\HCM202\data\hcm-curriculum.json")
    
    out_path.parent.mkdir(parents=True, exist_ok=True)
    
    print("Loading EasyOCR model...")
    reader = easyocr.Reader(['vi'])
    
    print(f"Loading PDF: {pdf_path}")
    pdf = pdfium.PdfDocument(pdf_path)
    total_pages = len(pdf)
    print(f"Total pages: {total_pages}")
    
    results = []
    start_time = time.time()
    
    for i in range(total_pages):
        try:
            page = pdf[i]
            bitmap = page.render(scale=2)
            np_img = bitmap.to_numpy()
            
            ocr_res = reader.readtext(np_img)
            
            text_lines = []
            if ocr_res:
                for bbox, text, prob in ocr_res:
                    text_lines.append(text)
            
            page_text = "\n".join(text_lines)
            
            results.append({
                "page_num": i + 1,
                "content": page_text
            })
            
            if (i+1) % 5 == 0:
                print(f"Processed {i+1}/{total_pages} pages...")
                
        except Exception as e:
            print(f"Error on page {i+1}: {e}")
            results.append({
                "page_num": i + 1,
                "content": ""
            })
    
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
        
    print(f"\nDone! Saved to {out_path}")
    print(f"Time taken: {time.time() - start_time:.2f} seconds")

if __name__ == "__main__":
    extract_pdf()
