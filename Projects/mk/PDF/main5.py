

from PyPDF2 import PdfReader, PdfWriter

# Asl (parolsiz) PDF fayl
input_pdf = "/home/davronbek/Documents/geometriya 2rus.pdf"
# Yangi (parolli) PDF fayl
output_pdf = "/home/davronbek/Documents/Geometriya 2Rus.pdf"
# So‘raladigan parol
password = "NodirbekParol"

# PDF faylni o‘qish
reader = PdfReader(input_pdf)
writer = PdfWriter()

# Har bir sahifani yangi faylga qo‘shish
for page in reader.pages:
    writer.add_page(page)

# Parol o‘rnatish
writer.encrypt(password)

# Yangi parolli PDF faylni yozish
with open(output_pdf, "wb") as f:
    writer.write(f)

print("✅ Parolli PDF yaratildi:", output_pdf)
