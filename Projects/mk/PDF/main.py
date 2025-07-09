from PyPDF2 import PdfReader, PdfWriter

# Fayllarni yuklash
original_reader = PdfReader("/home/davronbek/Documents/pf.pdf")
insert_reader = PdfReader("/home/davronbek/Documents/Picsart_25-05-22_05-29-18-416.pdf")
writer = PdfWriter()

# insert.pdf dan 1-sahifani qo'shish
writer.add_page(insert_reader.pages[0])

# original.pdf dan 2-sahifadan boshlab qolgan sahifalarni qo'shish
for page in original_reader.pages[1:]:
    writer.add_page(page)

# Natijaviy PDF ni saqlash
with open("/home/davronbek/Documents/geometriya 2rus.pdf", "wb") as output_file:
    writer.write(output_file)

print("PDF fayl yaratildi: output.pdf")