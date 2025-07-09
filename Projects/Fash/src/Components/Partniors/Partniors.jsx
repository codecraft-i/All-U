import { useEffect, useRef } from "react";
import "./Partniors.css";

import { useTranslation } from 'react-i18next';

const partners = [
  {
    name: "",
    img: "/images/PrtsLogo/lo1.png"
  },
  {
    name: "",
    img: "/images/PrtsLogo/lo2.png"
  },
  {
    name: "",
    img: "/images/PrtsLogo/lo3.jpg"
  },
  {
    name: "",
    img: "/images/PrtsLogo/Medipol-university-logo.png"
  },
  {
    name: "",
    img: "/images/PrtsLogo/lo5.png"
  },
  {
    name: "",
    img: "/images/PrtsLogo/lo6.png"
  },
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
            <img src={partner.img} alt={partner.name} style={{ borderRadius: "10px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
