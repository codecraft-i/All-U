import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

import { TfiLayoutLineSolid } from "react-icons/tfi";

/* — Slayder rasmlari — */
const slides = [
  '/test/m1.jpeg',
  '/test/m2.jpg',
  '/test/m3.jpg',
];

export default function HeroSection() {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);

  /* Avtoslayder — 4 s */
  useEffect(() => {
    const timer = setInterval(() => next(), 4000);
    return () => clearInterval(timer);
  }, [idx]);

  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);

  return (
    <section className="hero">
      {/* Chap vertikal menyu */}
      <div className="hero__side hero__side--left">
        <TfiLayoutLineSolid /><TfiLayoutLineSolid />&nbsp;YT&nbsp;★&nbsp;IN&nbsp;★&nbsp;FB&nbsp;<TfiLayoutLineSolid /><TfiLayoutLineSolid />
      </div>

      {/* O‘ng vertikal “Booking” */}
      <div className="hero__side hero__side--right">
        <TfiLayoutLineSolid /><TfiLayoutLineSolid />&nbsp;Booking&nbsp;·&nbsp;+88&nbsp;123&nbsp;123456&nbsp;<TfiLayoutLineSolid /><TfiLayoutLineSolid />
      </div>

      {/* Sarlavha va taglayn */}
      <h1 className="hero__title">{t('intro.int_head')}</h1>
      <p className="hero__tagline">
        {t('intro.int_n1')} – <span className="hero__accent">{t('intro.int_n2')}</span>
      </p>

      {/* Slayder */}
      <div className="hero__slider">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`hero__slide ${i === idx ? 'is-active' : ''}`}
          />
        ))}
        <button className="hero__nav hero__nav--prev" onClick={prev}>‹</button>
        <button className="hero__nav hero__nav--next" onClick={next}>›</button>
      </div>

      {/* Pastki info satri */}
      <div className="hero__info">
        <span>VISIT&nbsp;US · Restaurant&nbsp;St, Delicious&nbsp;City, London&nbsp;9578, UK</span>
        <span>WE ARE OPEN · Daily · 8 am – 10 pm</span>
      </div>
    </section>
  );
}