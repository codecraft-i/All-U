import fitz  # PyMuPDF
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from PIL import Image, ImageOps
import io

# Fayl manzillari
pdf_path = "/home/davronbek/Downloads/Telegram Desktop/geometriya 2new рус.pdf"
logo_path = "/home/davronbek/Downloads/relogo1.png"
output_path = "/home/davronbek/Documents/pf.pdf"

# Logotipni ochamiz, oqlashtiramiz va 180 gradus aylantiramiz
logo_image = Image.open(logo_path).convert("RGBA")
gray_logo = ImageOps.grayscale(logo_image)
rgba_logo = Image.merge("RGBA", (gray_logo, gray_logo, gray_logo, logo_image.getchannel("A")))
cropped_logo = rgba_logo.crop(rgba_logo.getbbox())
rotated_logo = cropped_logo.rotate(180, expand=True)

# Logotipni byte ko‘rinishiga o'tkazamiz
logo_buffer = io.BytesIO()
rotated_logo.save(logo_buffer, format="PNG")
logo_buffer.seek(0)
logo_reader = ImageReader(logo_buffer)

# PDFni ochamiz
doc = fitz.open(pdf_path)

for page_num in range(len(doc)):
    page = doc.load_page(page_num)
    width, height = page.rect.width, page.rect.height

    # Har bir sahifa uchun watermark yaratamiz
    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=(width, height))
    
    c.saveState()
    logo_width = width * 0.35 * 1.5  # Logotip eni 1.5 barobar kattalashtirilgan
    logo_height = rotated_logo.height * (logo_width / rotated_logo.width)  # Bo'yini mos ravishda o'zgartiramiz
    center_x = width / 2
    center_y = height / 2 - logo_height * 0.15  # markazga yaqin joylash

    # Logotipni joylashtirish
    c.translate(center_x, center_y)
    c.setFillAlpha(0.3)  # 30% shaffoflik
    c.drawImage(logo_reader, -logo_width/2, -logo_height/2, width=logo_width, height=logo_height, mask='auto')
    c.restoreState()

    # Telefon raqamlarini joylashtirish
    c.setFont("Helvetica", 10)  # Matn shrifti
    c.setFillColorRGB(0, 0, 0)  # Raqamlar qora rangda
    left_phone_number = "+998939795666"
    right_phone_number = "+998945976655"

    # Koordinatalarni sozlaymiz
    padding_x = 35   # yon tomondan 10px ichkariga
    padding_y = 35   # pastdan 20 o‘rniga 35px — 15px yuqoriga

    # Chap tomonga telefon raqamini joylashtirish
    c.drawString(padding_x, padding_y, left_phone_number)

    # O'ng tomonga telefon raqamini joylashtirish
    right_text_width = c.stringWidth(right_phone_number, "Helvetica", 10)
    c.drawString(width - padding_x - right_text_width, padding_y, right_phone_number)

    c.save()
    packet.seek(0)

    # PDF sahifaga watermarkni va telefon raqamlarini joylaymiz
    watermark_pdf = fitz.open(stream=packet.read(), filetype="pdf")
    page.show_pdf_page(page.rect, watermark_pdf, 0)

# Saqlash
doc.save(output_path, garbage=4, deflate=True)
doc.close()
print(f"✅ Tayyor: {output_path}")
