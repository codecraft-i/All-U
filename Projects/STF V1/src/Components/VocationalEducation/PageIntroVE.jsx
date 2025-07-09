import React from "react";
import "./PageIntroVE.css";
import { FaPassport, FaBriefcase } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const PageIntroVE = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bakalavr-container">
      <div className="bakalavr-wrapper">
        <h1 className="bakalavr-title">{t('vocational_education')}</h1>
        <p className="bakalavr-description">
          {t('vocational_training_visa')}
        </p>
      </div>
    </div>
  );
};

export default PageIntroVE;