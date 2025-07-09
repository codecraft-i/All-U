import React from "react";
import "./PageIntroBachelor.css";
import { FaPassport, FaBriefcase } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

const PageIntroBachelor = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bakalavr-container">
      <div className="bakalavr-wrapper">
        <h1 className="bakalavr-title" style={{ textTransform: "uppercase" }}>{t('bachelor')}</h1>
        <p className="bakalavr-description">
          {t('bachelor_study_info')}
        </p>

        <div className="card-container">
          <div className="info-card">
            <FaPassport className="card-icon" />
            <h2 className="card-title">{t('visa_obtainment')}</h2>
            <ul>
              <li>{t('submit_documents')}</li>
              <li>{t('application_review_time')}</li>
            </ul>
          </div>

          <div className="info-card">
            <FaBriefcase className="card-icon" />
            <h2 className="card-title">{t('work_during_study')}</h2>
            <ul>
              <li>{t('work_permission')}</li>
              <li>{t('post_study_work')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIntroBachelor;