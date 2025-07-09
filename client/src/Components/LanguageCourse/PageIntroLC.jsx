import React from "react";
import "./PageIntroLC.css";
import { FaPassport, FaBriefcase } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const PageIntroLC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bakalavr-container">
      <div className="bakalavr-wrapper">
        <h1 className="bakalavr-title">{t('language_courses')}</h1>
        <p className="bakalavr-description">
          {t('patkurs_popularity')}
        </p>
      </div>
    </div>
  );
};

export default PageIntroLC;