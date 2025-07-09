import React from 'react';
import './ItalyGrant.css';
import {
  FaUniversity,
  FaMoneyBillWave,
  FaGlobe,
  FaCity,
  FaBriefcase,
  FaPlaneDeparture,
  FaGraduationCap,
  FaListUl
} from 'react-icons/fa';

import Header from '@components/Header/Header/Header';
import Footer from '@components/Footer/Footer';
import ContactSection from '@components/ContactSection/ContactSection';
import ContactForm from '@components/ContactItems/ContactForm';

const sections = [
  {
    icon: <FaMoneyBillWave className="icon" />,
    title: '1. 100% Grant va Yillik Stipendiya',
    items: [
      'Grantlar: Talabalar uchun to‘liq grantlar, ya’ni kontrakt to‘lovlaridan ozod bo‘lish imkoniyati.',
      'Stipendiyalar: Har yili 6,000 € dan 7,800 € gacha moliyaviy yordam.'
    ]
  },
  {
    icon: <FaGlobe className="icon" />,
    title: '2. Dunyo Tan Oladigan Diplomlar',
    items: [
      'Top 1000 talikka kirgan universitetlar.',
      'Italiya diplomlari xalqaro miqyosda tan olinadi.'
    ]
  },
  {
    icon: <FaPlaneDeparture className="icon" />,
    title: '3. Yevropa Bo‘ylab Sayohat Imkoniyati',
    items: [
      'Shengen vizasi bilan butun Yevropani sayohat qilish imkoniyati.',
      'Ta’lim va madaniy tajribani uyg‘unlashtirish.'
    ]
  },
  {
    icon: <FaCity className="icon" />,
    title: '4. Eng Yaxshi Shaharlarda O‘qish',
    items: [
      'Milan – Moda va biznes markazi.',
      'Florence – San’at va madaniyat yuragi.',
      'Rome, Naples, Padua, Trieste – Tarix, ilm-fan va go‘zallik uyg‘unligi.'
    ]
  },
  {
    icon: <FaBriefcase className="icon" />,
    title: '5. Ishlash Imkoniyati',
    items: [
      'Haftasiga 20 soat ishlash huquqi.',
      'Yozgi ta’tilda to‘liq ish va professional amaliyot imkoniyatlari.'
    ]
  },
  {
    icon: <FaGraduationCap className="icon" />,
    title: '6. Xohlagan Yo‘nalishda O‘qish',
    items: [
      'Siz tanlagan yo‘nalishga mos universitetlarga hujjat topshirish imkoniyati.'
    ]
  },
  {
    icon: <FaUniversity className="icon" />,
    title: '7. Grant Beruvchi Universitetlar (QS 2024–2025)',
    items: [
      'Sapienza University of Rome – 134 o‘rinda',
      'University of Padua – 219 o‘rinda',
      'University of Milan – 276 o‘rinda',
      'University of Florence – 358 o‘rinda',
      'Tor Vergata, Trieste, Messina va boshqa universitetlar.'
    ]
  },
  {
    icon: <FaListUl className="icon" />,
    title: '8. Nega Italiyani Tanlash Kerak?',
    items: [
      '100% grant va 7,800 € gacha stipendiya.',
      'Yevropa bo‘ylab sayohat.',
      'Xalqaro tan olingan diplom.',
      'Karyera va mustaqil hayot uchun mustahkam poydevor.'
    ]
  }
];

const ItalyGrant = () => {
  return (
    <>
      <Header />
      <div className="italy-grant-container">
        <h1 className='sys-h1-it-text'>Italiyada 100% Grant va 7,800 € gacha Stipendiya Imkoniyati!</h1>
        <p className="intro">
          Italiyada oliy ta’lim olishni orzu qilasizmi? Endi bu orzuingizni ro‘yobga chiqarish vaqti keldi! Italiya davlat universitetlari sizga quyidagi imkoniyatlarni taqdim etadi:
        </p>

        <div className="cards">
          {sections.map((section, index) => (
            <div className="card fade-in" key={index}>
              <div className="card-header">
                {section.icon}
                <h2>{section.title}</h2>
              </div>
              <ul>
                {section.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="conclusion fade-in">
          <p><strong>Italiyada ta’lim olish – bu sizning kelajagingiz uchun katta qadam!</strong></p>
          <p>Har bir universitet bilan tanishish, hujjat topshirish va batafsil ma’lumot olish uchun biz bilan bog‘laning.</p>
        </div>
      </div>
      <ContactSection />
      <div className='baseContactSendingBox'>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default ItalyGrant;
