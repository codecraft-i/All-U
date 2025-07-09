from pdf2docx import Converter

pdf_file = '/home/davronbek/Documents/BooksP/kitob 1.pdf'
docx_file = '/home/davronbek/Documents/BooksP/output.docx'

cv = Converter(pdf_file)
cv.convert(docx_file, start=0, end=None)
cv.close()