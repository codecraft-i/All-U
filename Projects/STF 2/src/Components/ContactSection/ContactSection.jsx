import React from "react";
import "./ContactSection.css";
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

import { useTranslation } from 'react-i18next';
import { FaFacebook } from "react-icons/fa6";

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
          <h3><FaMapMarkerAlt style={{ color: "#2c3e50", marginRight: "8px" }} /> {t('head_office')}</h3>
          <p style={{ marginTop: "8px" }}>
            Mustaqillik Street 1/1 Kritiy 2-qavat 531-ofis, Buxoro, Bukhoro, Uzbekistan 200100<br />
            {/* <strong>Mo’ljal:</strong> HT-MALL qarshisida joylashgan. */}
          </p>

          <p>
            <FaPhoneAlt style={{ color: "#27ae60", marginRight: "8px" }} />
            <a href="tel:+998938548080">+(998) 93-854-8080</a> <br />
            <span style={{ marginLeft: "25px" }}>
              <a href="tel:+998978620880">+(998) 97-862-0880</a>
            </span>
          </p>

          <p>
            <FaTelegramPlane style={{ color: "#0088cc", marginRight: "8px" }} />
            <a target="_blank" href="https://t.me/stf_consulting">STF Consulting Telegram Admin</a>
          </p>

          <p>
            <FaInstagram style={{ color: "#e4405f", marginRight: "8px" }} />
            <a target="_blank" href="https://www.instagram.com/stf_consultinguz/">stf_consultinguz</a><br />
          </p>

          <p>
            <FaFacebook style={{ color: "#1877F2", marginRight: "8px" }} />
            <a target="_blank" href="https://www.facebook.com/sarvar.toshmamatov.1/">sarvar.toshmamatov.1</a><br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;