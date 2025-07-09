import { useEffect, useState } from "react";

// React Router Link
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Link } from 'react-scroll';

import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";

import { useTranslation } from 'react-i18next';
import { countryTranslations } from "../../../translations/countryTranslations";

import Logo from "/logo.png";

// Style files
import "./navbar.css";

const languages = [
  { code: "uz", label: "O‘zbek", flag: "https://flagcdn.com/w40/uz.png" },
  { code: "ru", label: "Русский", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  // Language select
  const { t, i18n } = useTranslation();
  
  const handleLanguageChange = (e) => {
      // const selectedLang = e.target.value;
      // i18n.changeLanguage(selectedLang);
      i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    axios.get("https://fashedu.com/site/api/countries/")
      .then(response => setCountries(response.data))
      .catch(error => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryClick = (countryName) => {
    navigate("/universities", { state: { selectedCountry: countryName } });
    setIsMenuOpen(false);
  };


  const location = useLocation();
  const isHiddenPage = location.pathname === "/bachelor" || location.pathname === "/master" || location.pathname === "/languagecourse" || location.pathname === "/vocationaleducation";


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const studyPages = ["/study-turkey", "/study-italy", "/study-china"];
  const isStudyPage = studyPages.includes(location.pathname);


    return (
        <>
        <header className={`header ${isScrolled ? "ScrollHeader" : ""}`}>
        {/* <div className="logo"><NavLink to="/">FASH EDU</NavLink></div> */}
        <div className="logo">
          <NavLink to="/">
            <img src={ Logo } alt="Logo" />
          </NavLink>
        </div>

      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "NavbarActive" : "navItem"}>{t('home')}</NavLink>
        <Link to="about" smooth={true} duration={500} className={isHiddenPage ? "None" : "navItem"}>{t('about_us')}</Link>


        <div className="dropdown">
          <div className="dropdown-hover-area">
            <span className="dropdown-title">
              <span className={`navItem ${isStudyPage ? "NavbarActive" : ""}`}>
                {t("std")}
              </span>
              <span className="arrow">▼</span>
            </span>
            <div className="dropdown-content">
              <button
                className="country-button"
                onClick={() => navigate("/study-turkey")}
              >
                {t("std_turkey")}
              </button>
              <button
                className="country-button"
                onClick={() => navigate("/study-italy")}
              >
                {t("std_italy")}
              </button>
              <button
                className="country-button"
                onClick={() => navigate("/study-china")}
              >
                {t("std_china")}
              </button>
            </div>
          </div>
        </div>


        <div className="dropdown">
          <div className="dropdown-hover-area">
            <span className="dropdown-title">
              <NavLink to="/universities" className={({ isActive }) => isActive ? "NavbarActive" : "navItem"}>{t("universities")}</NavLink>
              <span className="arrow">▼</span>
            </span>
            <div className="dropdown-content">
              {countries.map(country => {
                const translatedName = countryTranslations[country.name]?.[i18n.language] || country.name;
                return (
                  <button
                    key={country.id}
                    onClick={() => handleCountryClick(country.name)}
                    className="country-button"
                  >
                    {translatedName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <Link to="ContactSection" smooth={true} duration={500} className="contact-button-link">
        <FaPhone id="phone-icon" /> { t('contact_us') }
        </Link>

        <div className="custom-select-wrapper">
        <select
          className="custom-select"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>

        <div className="select-flag">
          <img
            src={languages.find((l) => l.code === i18n.language)?.flag}
            alt="flag"
          />
        </div>
    </div>
      </nav>

      {/* Mobile menu icon */}
      <div className="menu-icon" onClick={() => setIsMenuOpen(true)}>
        <FiMenu />
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}><FiX /></button>
          <div className="custom-select-wrapper">
        <select
          className="custom-select"
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>

        <div className="select-flag">
          <img
            src={languages.find((l) => l.code === i18n.language)?.flag}
            alt="flag"
          />
        </div>
    </div>

    <NavLink to="/" className={({ isActive }) => isActive ? "NavbarActive" : "navItem"}>{t('home')}</NavLink>
        <Link to="about" smooth={true} duration={500} className={isHiddenPage ? "None" : "navItem"}>{t('about_us')}</Link>


        <div>
          <h3>{t('std')}</h3>
          <button
                className="country-button"
                onClick={() => navigate("/study-turkey")}
              >
                {t("std_turkey")}
              </button>
              <button
                className="country-button"
                onClick={() => navigate("/study-italy")}
              >
                {t("std_italy")}
              </button>
              <button
                className="country-button"
                onClick={() => navigate("/study-china")}
              >
                {t("std_china")}
          </button>
        </div>

        <div>
          <h3>{t("universities")}</h3>
          {countries.map(country => {
                const translatedName = countryTranslations[country.name]?.[i18n.language] || country.name;
                return (
                  <button
                    key={country.id}
                    onClick={() => handleCountryClick(country.name)}
                    className="country-button"
                  >
                    {translatedName}
                  </button>
                );
            })}
        </div>

        </div>
      )}
    </header>
        </>
    );
};
  
export default Navbar;