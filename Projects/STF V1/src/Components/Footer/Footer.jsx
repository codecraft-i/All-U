import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import Logo from '@assets/Logo.png'

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <div className="logo-container">
            <div className="logo-bg">
              <img src={Logo} alt="logo" className="logo-img" />
            </div>
            <span className="logo-text">STF CONSULTING</span>
          </div>
          <p className="social-title">{t('social_media')}:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/stf_consultinguz/" target="_blank" style={{ color: "#00aaff" }}><img src="/Icons/instagram.png" alt="Instagram" /></a>
            <a href="https://t.me/stf_consulting" target="_blank" style={{ color: "#00aaff" }}><img src="/Icons/telegram.png" alt="Telegram" /></a>
            <a href="https://www.facebook.com/sarvar.toshmamatov.1/" target="_blank" style={{ color: "#00aaff", background: "#eee", width: "auto", height: "24px", backgroundSize: "cover", borderRadius: "5px" }}><img src="/Icons/facebook.png" alt="Facebook" /></a>
          </div>
        </div>

        {/* Middle section */}
        <div className="footer-middle">
          <Link to="about" smooth={true} duration={500}>{t('about_us')}</Link>
          <NavLink to="/universities">{t('universities')}</NavLink>
          <NavLink to="/bachelor">{t('bachelor')}</NavLink>
          <NavLink to="/master">{t('master')}</NavLink>
          <NavLink to="/languagecourse">{t('language_course')}</NavLink>
          <NavLink to="/vocationaleducation">{t('vocational_education')}</NavLink>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <p className="contact-title">{t('contact_us')}</p>
          <p>+998 (93) 854-80-80</p>
          <p>Mustaqillik Street 1/1 Kritiy 2-qavat 531-ofis, <br /> Buxoro, Bukhoro, Uzbekistan 200100</p>
        </div>
      </div>
    </footer>
  );
}
