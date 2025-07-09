import React from 'react';
import './ChinaGrant.css';
import { FaUniversity, FaMoneyBillWave, FaBed, FaGlobe, FaCity, FaBriefcase, FaLanguage } from 'react-icons/fa';

// Components
import Header from '@components/Header/Header/Header';
import Footer from '@components/Footer/Footer';

import ContactSection from "@components/ContactSection/ContactSection"
import ContactForm from "@components/ContactItems/ContactForm"

const sections = [
  {
    icon: <FaMoneyBillWave className="icon" />, 
    title: '1. 100% Grant va Stipendiyalar',
    items: [
      'Grantlar: Talabalar o‘qish kontrakti bo‘yicha to‘lovlardan to‘liq ozod qilinadi.',
      'Stipendiyalar: Talabalar oylik stipendiyalar bilan ta’minlanadi, bu esa yashash va kundalik xarajatlaringizni qoplashda yordam beradi.'
    ]
  },
  {
    icon: <FaBed className="icon" />,
    title: '2. Arzon va Qulay Yotoqxona',
    items: [
      'Universitetlar talabalar uchun qulay va arzon narxlardagi yotoqxonalar bilan ta’minlaydi.',
      'Xavfsiz va zamonaviy sharoitlar bilan ta’minlangan yotoqxona joylari yashash xarajatlaringizni ancha kamaytiradi.'
    ]
  },
  {
    icon: <FaGlobe className="icon" />,
    title: '3. Xalqaro Tan Olinadigan Diplom',
    items: [
      'Xitoydagi davlat universitetlarining diplomlari dunyoning ko‘plab mamlakatlarida tan olinadi.',
      'Bu sizga xalqaro miqyosda o‘qishni davom ettirish yoki karyera qurish imkoniyatini beradi.'
    ]
  },
  {
    icon: <FaCity className="icon" />,
    title: '4. Zamonaviy Shaharlarda O‘qish',
    items: [
      'Pekin (Beijing) – Xitoy poytaxti, ilm-fan va siyosiy markaz.',
      'Shanxay – Jahon moliya va innovatsiya markazi.',
      'Guangzhou – Savdo va texnologiya shahri.',
      'Harbin, Chengdu, Wuhan – Talabalar uchun faol va arzon hayot tarzi, yirik ilmiy markazlar.'
    ]
  },
  {
    icon: <FaBriefcase className="icon" />,
    title: '5. Ishlash Imkoniyati',
    items: [
      'Ba’zi universitetlarda talabalar uchun amaliyot yoki yarim stavkali ish imkoniyatlari mavjud.',
      'Bu tajriba orttirish va qo‘shimcha daromad topish imkonini beradi.'
    ]
  },
  {
    icon: <FaLanguage className="icon" />,
    title: '6. Xitoy Tili va Madaniy Muhit',
    items: [
      'Siz nafaqat ta’lim olasiz, balki Xitoy tilini o‘rganasiz va boy tarixiy-madaniy muhitda yashaysiz.',
      'Bu esa sizga yangi dunyoqarash, ko‘nikmalar va mustaqillik beradi.'
    ]
  }
];

const ChinaGrant = () => {
  return (
    <>
    <Header />
    <div className="china-grant-container">
      <h1 className='sys-h1-ch-text'>Xitoyda 100% Grant va Stipendiya Imkoniyati!</h1>
      <p className="intro">
        Xitoyda oliy ta’lim olishni xohlaysizmi? Endi siz ham Osiyodagi eng tez rivojlanayotgan davlatlardan birida, nufuzli universitetlarda grant asosida o‘qish imkoniyatiga egasiz!
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
        <p><strong>Xitoyda o‘qish – bu sifatli ta’lim, xalqaro imkoniyatlar va qulay yashashning mukammal uyg‘unligidir!</strong></p>
        <p>Batafsil ma’lumot olish, universitetlar bilan tanishish va hujjat topshirish uchun biz bilan bog‘laning!</p>
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

export default ChinaGrant;