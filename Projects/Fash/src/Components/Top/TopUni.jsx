import React, { useEffect,  } from 'react';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopUni.css';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const games = [
  {
    contry: 'Turkiya',
    title: 'Istanbul Kadir Has Universiteti',
    redirect: '/universities/university/Istanbul Kadir Has Universiteti',
    image: '/images/universities/m2.jpg',
  },
  {
    contry: 'Turkiya',
    title: 'Istanbul Kent Universiteti',
    redirect: '/universities/university/Istanbul Kent Universiteti',
    image: '/images/universities/m1.jpg',
  },
  {
    contry: 'Turkiya',
    title: 'Antalya Bilim Universiteti',
    redirect: '/universities/university/Antalya Bilim Universiteti',
    image: '/images/universities/m3.jpg',
  },
  {
    contry: 'Turkiya',
    title: 'Istanbul Medipol Universiteti',
    redirect: '/universities/university/Istanbul Medipol Universiteti',
    image: '/images/universities/m7.jpg',
  },
  {
    contry: 'Turkiya',
    title: 'Istanbul Topkapi Universiteti',
    redirect: '/universities/university/Istanbul Topkapi Universiteti',
    image: '/images/universities/m12.jpg',
  },
  {
    contry: 'Turkiya',
    title: 'Istanbul Nişantaşı Universiteti',
    redirect: '/universities/university/Istanbul Nişantaşı Universiteti',
    image: '/images/universities/m10.jpg',
  },
];

const TopUni = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/universities");
  };

  // Tranlations
  const { t, i18n } = useTranslation();

  return (
    <section className="game-section" style={{ margin: "70px 0" }}>
      <div className="game-header">
        <div>
          <p className="top-text" style={{ color: "yellowgreen" }}>{t('universities')}</p>
          <h2 style={{ color: "#eee" }}>{t('famous_universities')}</h2>
        </div>
        <button className="view-all" onClick={ handleClick }>{t('all')}</button>
      </div>

      <div className="game-cards">
        {games.map((game, index) => (
          <div className="game-card" data-aos="zoom-in" key={index}>
            <img src={game.image} alt={game.title} />
            <p className="genre">{game.contry}</p>
            <h4>{game.title}</h4>
            <button className={`explore-btn ${index === 3 ? 'blue' : ''}`}
            onClick={() => navigate(game.redirect)}
            >
              {t('about')}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopUni;
