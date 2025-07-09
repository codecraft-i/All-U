import { useEffect, useRef } from "react";
import "./Partniors.css";

import { useTranslation } from 'react-i18next';

const partners = [
  {
    name: "University of South Wales",
    img: "/images/PrtsLogo/prts1.png"
  },
  {
    name: "APU",
    img: "/images/PrtsLogo/prts2.svg"
  },
  {
    name: "INTI",
    img: "/images/PrtsLogo/prts3.png"
  },
  {
    name: "UCSI University",
    img: "/images/PrtsLogo/prts4.png"
  },
  {
    name: "Edinburgh Napier University",
    img: "/images/PrtsLogo/prts5.svg"
  },
  {
    name: "Birmingham City University",
    img: "/images/PrtsLogo/prts6.png"
  }
];

export default function Partniors() {
  const carouselRef = useRef(null);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
  
        if (Math.ceil(container.scrollLeft) >= maxScrollLeft) {
          // Boshlanishga qaytadi
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: 200, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
}, []);

  return (
    <div className="prts-container" style={{ margin: "20px 0" }}>
      <h2 className="prts-title" style={{ color: "#eee" }}>{t('our_partners')}</h2>
      <div className="carousel" ref={carouselRef}>
        {partners.map((partner, idx) => (
          <div key={idx} className="partner-box">
            <img src={partner.img} alt={partner.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
