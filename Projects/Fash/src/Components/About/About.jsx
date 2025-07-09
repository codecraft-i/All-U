import React from "react";
import "./About.css";
import profileImg from "@assets/Logo.png";

import { useTranslation } from 'react-i18next';
import { div } from "framer-motion/client";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div id="about" style={{ padding: "125px 0 0 0" }}></div>
        <section className="author-section">

        {/* Kontent */}
        <div className="author-container">
          <div className="author-image-wrapper">
            <img src="/logo.png" alt="Logo" className="author-image" />
          </div>
          <div className="author-text">
            {/* <h5 className="author-subtitle">{t('stf_consulting_founder')}</h5> */}
            {/* <h2 className="author-title"></h2> */}
            <p className="author-desc">
              {t('founder_intro')} <br /> <br />
              {t('advice_intro')} <br />
              {t('language_learning_tip_head')} <br />
              {t('language_learning_tip')} <br />
              {t('culture_acceptance_tip_head')} <br />
              {t('culture_acceptance_tip')} <br />
              {t('culture_acceptance_tip_desc_head')} <br />
              {t('culture_acceptance_tip_desc')} <br /> <br />
              {t('discipline_tip')} <br /> <br />
              {t('final_message')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;