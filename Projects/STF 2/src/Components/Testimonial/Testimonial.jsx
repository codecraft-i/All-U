import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    name: "Islomjon Karimov",
    text: 'STF CONSULTING menga orzu qilgan universitetga kirishda katta yordam berdi. Ularning aniq va samarali tavsiyalari har bir bosqichda menga dalda bo‘ldi. Ular bilan ishlaganim o‘zimga bo‘lgan ishonchni mustahkamladi!',
    image: "/Students/std01.png",
  },
  {
    name: "Mohinur Usmonova",
    text: 'Men faqat maslahat olaman deb o‘ylagandim, lekin STF CONSULTING yordamida kutganimdan ham yaxshiroq universitetga o‘qishga kirdim. Bu jamoa haqiqiy professionallar!',
    image: "/Students/std02.png",
  },
  {
    name: "Diyorbek Saidov",
    text: 'Dastlab nimadan boshlashni bilmasdim va juda ko‘p savollarim bor edi. STF CONSULTING jamoasi ilk suhbatdayoq menga aniq yo‘l-yo‘riq berishdi va barcha hujjatlarni to‘g‘ri tayyorlashdi. Juda minnatdorman!',
    image: "/Students/std01.png",
  },
  {
    name: "Dilnoza To‘lqinova",
    text: 'Men bir nechta kompaniyalarni solishtirib chiqdim, ammo STF CONSULTING eng professional va jiddiy yondashuvni taklif qildi. Har bir mijozga individual e’tibor qaratishadi. Ular bilan ishlash to‘g‘ri tanlov bo‘ldi.',
    image: "/Students/std02.png",
  },
  {
    name: "Abrorxon Qudratov",
    text: 'STF CONSULTING faqat universitet tanlashda emas, balki IELTS kabi til imtihonlariga tayyorgarlikda ham katta ko‘mak berdi. Ularning har bir maslahatlari juda foydali bo‘ldi. Ular xizmatidan chin dildan mamnunman.',
    image: "/Students/std01.png",
  },
];

const Testimonial = () => {
  const { t, i18n } = useTranslation();

        const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

  return (
    <div className="slider-wrapper" id="thoughts">
      <h2 className="slider-title" style={{ textTransform: "uppercase" }}>{t('students')}</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="slide-item" key={index}>
            <div className="testimonial-box">
              <img src={item.image} alt={item.name} className="testimonial-photo" />
              <div className="testimonial-text">
                <h3 className="testimonial-name">{item.name}</h3>
                <p className="testimonial-message">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;