import React, { useEffect, useRef } from 'react';
import './results.css';

// Translation module
import { useTranslation } from 'react-i18next';

const Results = () => {
  // Tranlations
  const { t, i18n } = useTranslation();

  const stats = [
    { value: "2500+", description: t('study_international') },
    { value: "6+", description: t('std_2') },
    { value: "100%", description: t('std_4') },
  ];

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="stat-card hidden-card"
          >
            <div className="stat-value">{item.value}</div>
            <div className="stat-description">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;