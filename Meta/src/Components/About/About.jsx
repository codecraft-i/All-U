// About.jsx
import { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
  /* ——— Statistik raqamlar ——— */
  const stats = [
    { id: 1, value: 5, label: "Yillik tajriba" },
    { id: 2, value: 100, label: "Turli xil taomlar" },
    { id: 3, value: 50, label: "Tadbirlar" },
    { id: 4, value: 2000, label: "Mamnun mijozlar" },
  ];

  /* ——— Animatsiya uchun holatlar ——— */
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-grid">
          {/* ——— Surat ——— */}
          <div className={`about-image fade-in ${visible ? "in-view" : ""}`}>
            <picture>
              <source srcSet="/about.jpg" type="image/webp" />
              <img
                src="/about.jpg"
                alt="Restoranimiz interyeri"
                loading="lazy"
                width="560"     // ⬅️ kichikroq en x balandlik
                height="372"
              />
            </picture>
          </div>

          {/* ——— Matn ——— */}
          <div className={`about-content fade-in ${visible ? "in-view" : ""}`}>
            <h2>Restoranimiz haqida</h2>
            <p>
              Restoranimiz mehmonlarga betakror milliy taomlar va ajoyib
              atmosferani taklif etadi. Har bir taomda madaniyatimiz va
              an’analarimizning haqiqiy ta’mini his qilishingiz mumkin. O‘zbekona
              mehmondo‘stlik va yuqori darajadagi xizmat ko‘rsatish bizning
              asosiy qadriyatlarimizdir.
            </p>
            <p>
              Sizni restoranimizga tashrif buyurib, milliy oshxonamizning
              chinakam mazali taomlarini tatib ko‘rishga taklif qilamiz. Doimo
              siz uchun xizmatdamiz!
            </p>
          </div>
        </div>

        {/* ——— Statistika sarlavhasi —— */}
        <h3
          className={`stats-heading fade-in ${visible ? "in-view" : ""}`}
          aria-level={3}
        >
          Restoranimiz natijalari
        </h3>

        {/* ——— Statistika ——— */}
        <ul className="stats-grid" aria-label="Restoran statistikasi">
          {stats.map(({ id, value, label }) => (
            <li
              key={id}
              className={`stat-item fade-in ${visible ? "in-view" : ""}`}
            >
              <StatCounter target={value} isActive={visible} />
              <span className="stat-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ——— Ichki komponent: raqamni bosqichma-bosqich sanaydi ——— */
function StatCounter({ target, isActive }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const totalDuration = 1000; // 1 s ichida yakunlash
    const intervalMs = 20;      // har 20 ms yangilanish
    const steps = Math.floor(totalDuration / intervalMs);
    const increment = Math.ceil(target / steps);

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(current);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isActive, target]);

  return (
    <span className="stat-number">{count.toLocaleString("de-DE")}</span>
  );
}