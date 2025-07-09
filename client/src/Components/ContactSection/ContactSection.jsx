import React from "react";
import "./ContactSection.css";

import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="contact-section" id="ContactSection" style={{ margin: "10px 0 35px 0" }}>
      <h2 className="title" style={{ color: "#eee" }}>{t('get_in_touch')}</h2>

      <div className="contact-container">
        {/* Map */}
        <div className="map-box" style={{ borderRadius: "25px" }}>
          <iframe
            title="Google Map"
            className="map"
            src="https://www.google.com/maps?q=39.767431,64.431624&hl=es;z=16&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Head Office */}
        <div className="office" style={{ borderRadius: "15px" }}>
          <h3>{t('head_office')}</h3>
          <p>Mustaqillik Street 1/1 Kritiy 2-qavat 531-ofis, Buxoro, Bukhoro, Uzbekistan 200100</p>
          <p>
            <strong>{t('phone')}:</strong>{" "}
            <a href="tel:+998938548080">+998 (93) 854-80-80</a>
          </p>
          <p>
            <strong>{t('telegram_channel')}:</strong>{" "}
            <a href="https://t.me/stf_consulting">STF CONSULTING</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;