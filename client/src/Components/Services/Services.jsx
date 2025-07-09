// src/components/InfoCards.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import { useTranslation } from 'react-i18next';

const Services = () => {
  // Tranlations
  const { t, i18n } = useTranslation();
  
  const cards = [
    { id: 1, title: t('bachelor_education_in_korea'), link: "/bachelor" },
    { id: 2, title: t('master_education_in_korea'), link: "/master" },
    { id: 3, title: t('language_courses'), link: "/languagecourse" },
    { id: 4, title: t('professional_education'), link: "/vocationaleducation" },
  ];
  
  return (
    <>
      <div id="title-services" style={{ margin: "0 0 20px 0", color: "#eee" }}><h1>{t('our_services')}</h1></div>
      <div className="cards-container" data-aos="fade-down">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h2 className="baseCardTitle" id="baseCardTitle" style={{ color: "#eee !important" }}>{card.title}</h2>
            <Link to={card.link} className="card-button" style={ card.id === 3 || card.id === 2 ? {background: "#1c4d9a"} : undefined }>
              {t('more_information')}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
