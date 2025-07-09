import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Header from "@components/Header/Header/Header";

import Footer from "@components/Footer/Footer"

import './universities.css'
import { useTranslation } from 'react-i18next';
import { countryTranslations } from "../../../translations/countryTranslations";

const Universities = () => {
  const { t, i18n } = useTranslation();

  const [universities, setUniversities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // Har safar 8 ta universitet chiqaramiz

  const location = useLocation();

  useEffect(() => {
    axios.get("https://stfconsulting.uz/site/api/countries/")
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => console.error("Error fetching countries:", error));

    axios.get("https://stfconsulting.uz/site/api/universities/")
      .then(response => setUniversities(response.data.data))
      .catch(error => console.error("Error fetching universities:", error));

    if (location.state?.selectedCountry) {
        setSelectedCountries([location.state.selectedCountry]);
    }

    return () => {
      window.history.replaceState({}, document.title);
    };
  }, [location.state]);

  const handleCheckboxChange = (countryName) => {
    setSelectedCountries(prev =>
      prev.includes(countryName)
        ? prev.filter(c => c !== countryName)
        : [...prev, countryName]
    );
  };

  // Universitetlarni filtrlash va tartiblash
  const filteredUniversities = universities
    .filter(uni => selectedCountries.length === 0 || selectedCountries.includes(uni.country.name))
    .sort((a, b) => a.ranking - b.ranking);

  // Faqat `visibleCount` ta universitetni chiqaramiz
  const visibleUniversities = filteredUniversities.slice(0, visibleCount);

  // "Load More" tugmasi bosilganda yana 8 ta universitet qo'shish
  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <>
      <Header />
      <div className="page-container">
        <div className="sidebar">
          <h2 style={{ color: "#eee" }}>{t('states')}</h2>
          {countries.map((country) => {
            const translatedName = countryTranslations[country.name]?.[i18n.language] || country.name;
            
            return (
              <label key={country.id}>
                <input
                  type="checkbox"
                  checked={selectedCountries.includes(country.name)}
                  onChange={() => handleCheckboxChange(country.name)}
                />
                {translatedName}
              </label>
            );
          })}
        </div>

        <div className="uniBox">
          <div className="filter-wrapper">
            <p>{t('found')}: {filteredUniversities.length}</p>
            <div className="badge-container">
              {selectedCountries.map((country) => {
                const translatedName = countryTranslations[country]?.[i18n.language] || country;
                
                return (
                  <div className="badge" key={country}>
                    {translatedName}
                    <button onClick={() => handleCheckboxChange(country)}>×</button>
                  </div>
                );
              })}
            </div>
            {selectedCountries.length > 0 && (
              <button
                className="clear-btn"
                onClick={() => setSelectedCountries([])}
              >
                {t('clear_all')}
              </button>
            )}
          </div>

          {filteredUniversities.length === 0 ? (
            <p>No universities found for selected country.</p>
          ) : (
            <>
              <div className="uni-grid">
                {visibleUniversities.map((uni) => (
                  <div className="uni-card" key={uni.id}>
                    {uni.short_info.length > 0 && (
                      <div className="short-info">
                        {uni.short_info.map((info) => (
                          <div
                            key={info.id}
                            className="short-info-item"
                            style={{
                              backgroundColor: info.bgColor,
                              color: info.fontColor,
                            }}
                          >
                            {info.name}
                          </div>
                        ))}
                      </div>
                    )}
                    <img src={uni.image} alt={uni.name} className="uni-img" />
                    <h3 className="uni-name">{uni.name}</h3>
                    <p className="uni-ranking">{t('ranking')}: {uni.ranking}</p>
                    <Link to={`/universities/university/${encodeURIComponent(uni.name)}`} className="uni-link">
                      {t('more_details')}
                    </Link>
                  </div>
                ))}
              </div>

              {visibleCount < filteredUniversities.length && (
                <div className="load-more-container">
                  <button onClick={loadMore} className="load-more-button">
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Universities;
