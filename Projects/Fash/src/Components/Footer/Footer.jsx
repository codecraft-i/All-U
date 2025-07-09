import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <div className="logo-container">
            <div className="logo-bg" style={{ background: "#fff" }}>
              <img src="/logo.png" alt="logo" className="logo-img" style={{ width: "100px", height: "auto", backgroundSize: "cover" }} />
            </div>
            {/* <span className="logo-text"></span> */}
          </div>
          <p className="social-title">{t('social_media')}:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/farrukh.ashuralievv?igsh=OGNobHExZGVqMjIx&utm_source=qr" target="_blank" style={{ color: "#00aaff" }}><img src="/Icons/instagram.png" alt="Instagram" /></a>
            <a href="https://t.me/turkiyada_talim_fashedu" target="_blank" style={{ color: "#00aaff" }}><img src="/Icons/telegram.png" alt="Telegram" /></a>
            <a href="https://wa.me/905557317070" target="_blank" style={{ color: "#00aaff" }}><img src="/Icons/whatsapp.png" alt="Telegram" /></a>
          </div>
        </div>

        {/* Middle section */}
        <div className="footer-middle">
          <Link to="about" smooth={true} duration={500}>{t('about_us')}</Link>
          <Link to="results" smooth={true} duration={500}>{t('results')}</Link>
          <Link to="thoughts" smooth={true} duration={500}>{t('thoughts')}</Link>
          <Link to="ContactSection" smooth={true} duration={500}>{t('contact_us')}</Link>
          <NavLink to="/universities">{t('universities')}</NavLink>
        </div>

        {/* Middle section */}
        <div className="footer-middle">
          <h3 style={{ marginBottom: "5px" }}>{t('std')}</h3>
          <NavLink to="/study-turkey">{t('std_turkey')}</NavLink>
          <NavLink to="/study-italy">{t('std_italy')}</NavLink>
          <NavLink to="/study-china">{t('std_china')}</NavLink>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <h3 style={{ marginBottom: "5px"}}>
            <Link to="ContactSection" smooth={true} duration={500}>{t('contact_us')}</Link>
          </h3>
          <p>+(998) 77-305-66-00</p>
          <p>+(90) 555-731-70-70</p>
        </div>
      </div>
    </footer>
  );
}
