import React, { useEffect,  } from 'react';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './TopUni.css';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const games = [
  {
    contry: 'Seul',
    title: 'Seoul National University (SNU)',
    redirect: '/universities/university/Seoul National University (SNU)',
    image: '/images/UniversitiesPic/Seoul National University (SNU).jpg',
  },
  {
    contry: 'Daejeon',
    title: 'Korea Advanced Institute of Science and Technology (KAIST)',
    redirect: '/universities/university/Korea Advanced Institute of Science and Technology (KAIST)',
    image: '/images/UniversitiesPic/Korea Advanced Institute of Science and Technology (KAIST).jpg',
  },
  {
    contry: 'Seul',
    title: 'Yonsei University',
    redirect: '/universities/university/Yonsei University',
    image: '/images/UniversitiesPic/Yonsei University.jpg',
  },
  {
    contry: 'Seul',
    title: 'Korea University',
    redirect: '/universities/university/Korea University',
    image: '/images/UniversitiesPic/Korea University.png',
  },
  {
    contry: 'Seul and Suvon',
    title: 'Sungkyunkwan University (SKKU)',
    redirect: '/universities/university/Sungkyunkwan University (SKKU)',
    image: '/images/UniversitiesPic/Sungkyunkwan University (SKKU).PNG',
  },
  {
    contry: 'Seul',
    title: 'Kyung Hee University',
    redirect: '/universities/university/Kyung Hee University',
    image: '/images/UniversitiesPic/Kyung Hee University.jpg',
  }
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
          <p className="top-text">{t('universities')}</p>
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
