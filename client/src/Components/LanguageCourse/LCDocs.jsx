import React, { useRef } from 'react';
import './LCDocs.css';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';

const LCDocs = () => {
  const { t } = useTranslation();
  const docsListRef = useRef(null);

  const handleDownload = () => {
    const element = docsListRef.current;

    // Vaqtincha colorni olib tashlash
    const originalColor = element.style.color;
    element.style.color = 'black'; // Yangi rangni o'rnatamiz

    html2canvas(element).then((canvas) => {
      // Canvasni tasvirga aylantiramiz
      const imageUrl = canvas.toDataURL('image/png');
      
      // Yangi <a> elementini yaratamiz
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'doclist.png'; // Rasmni yuklab olish uchun nom
      link.click();

      // Rangni original holatiga qaytarish
      element.style.color = originalColor;
    });
  };

  const documents = [
    t('passport'),
    t('photo'),
    t('certificate_translation'),
    t('bank_statement'),
    t('language_certificate_LC'),
    t('birth_certificate_copy'),
    t('parents_passport_copy'),
    t('parents_income_documents'),
    t('study_plan'),
    t('single_certificate'),
  ];

  return (
    <div className="docs-container">
      <div className='h2-title-listDocs'>
        <h2 style={{ color: "#eee" }}>{t('language_course_visa_documents')}</h2>
      </div>
      <div className="docs-wrapper" ref={docsListRef}> {/* useRef yordamida ref qo'shildi */}
        {documents.map((doc, index) => (
          <div className="doc-item" key={index}>
            <div className="doc-badge">{index + 1}</div>
            <p className="doc-text">{doc}</p>
          </div>
        ))}
      </div>

      <div className="download-btn-wrapper">
        <button className="download-btn" onClick={handleDownload}>
          <span>📥</span> {t('download_document_list')}
        </button>
      </div>
    </div>
  );
};

export default LCDocs;