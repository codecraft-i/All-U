import React from "react";
import "./MasterStudyTringle.css";
import { FaRegClock, FaSuitcase, FaBuilding } from "react-icons/fa";

import { useTranslation } from 'react-i18next';

const MasterStudyTringle = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="mag-container">
      <div className="mag-wrapper">
        <h2 className="mag-title" style={{ color: "#eee" }}>{t('work_and_opportunities_during_and_after_masters')}</h2>

        <div className="mag-card-group">
          <div className="mag-card">
            <FaRegClock className="mag-icon" />
            <p>{t('work_right_with_d2_visa')}</p>
          </div>

          <div className="mag-card">
            <FaSuitcase className="mag-icon" />
            <p>{t('work_after_study_with_d10_e7_visa')}</p>
          </div>

          <div className="mag-card">
            <FaBuilding className="mag-icon" />
            <p>{t('job_opportunities_for_masters_graduates')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterStudyTringle;