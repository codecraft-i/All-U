import React from "react";
import "./PageIntroMaster.css";
// import { FaPassport, FaBriefcase } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { TbLanguage } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

const PageIntroMaster = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bakalavr-container">
      <div className="bakalavr-wrapper">
        <h1 className="bakalavr-title">{t('master')}</h1>
        <p className="bakalavr-description">
          {t('masters_degree_info')}
        </p>  

        <div><h2 style={{ color: "#eee", margin: "0 0 10px 0" }}>{t('language_requirements')}</h2></div>
        <div className="card-container">
          <div className="info-card">
            <IoLanguage className="card-icon" />
            {/* <h2 className="card-title">Viza olish (D-2 talaba vizasi)</h2> */}
            <ul>
              <li>{t('topik')}</li>
              <li>{t('topik_requirement')}</li>
            </ul>
          </div>

          <div className="info-card">
            <TbLanguage className="card-icon" />
            {/* <h2 className="card-title">O‘qish paytida ishlash imkoniyati</h2> */}
            <ul>
              <li>{t('ielts_toefl')}</li>
              <li>{t('ielts_requirement')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIntroMaster;