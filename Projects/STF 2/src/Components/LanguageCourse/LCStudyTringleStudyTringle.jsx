import React from "react";
import "./LCStudyTringleStudyTringle.css";
import { FaRegClock } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { FaBorderTopLeft } from "react-icons/fa6";
import { FaCalendarWeek } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const LCStudyTringleStudyTringle = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="mag-container">
      <div className="mag-wrapper">

        <div className="mag-card-group">
          <div className="mag-card">
            <FaRegClock className="mag-icon" />
            <p>{t('study_duration_planned')}</p>
          </div>

          <div className="mag-card">
            <FaPassport className="mag-icon" />
            <p>{t('visa_duration')}</p>
          </div>

          <div className="mag-card">
            <FaBorderTopLeft className="mag-icon" />
            <p>{t('age_limit')}</p>
          </div>

          <div className="mag-card">
            <FaCalendarWeek className="mag-icon" />
            <p>{t('classes_per_week')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LCStudyTringleStudyTringle;