from PyPDF2 import PdfReader, PdfWriter

# Asl PDF faylni ochamiz
reader = PdfReader("/home/davronbek/Documents/mathkingBook1Test.pdf")
writer = PdfWriter()

# 36 dan 41 gacha (Python indekslashda 0 dan boshlanadi, shuning uchun 35 dan 41gacha)
for i in range(0, 35):  # 36-41 sahifalar
    if i < len(reader.pages):
        writer.add_page(reader.pages[i])

# Yangi faylga yozamiz
with open("/home/davronbek/Documents/mathkingBook1.pdf", "wb") as output_file:
    writer.write(output_file)

print("Sahifalar muvaffaqiyatli chiqarildi!")