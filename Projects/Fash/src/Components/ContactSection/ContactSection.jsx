import React from "react";
import "./ContactSection.css";
import { FaPhoneAlt, FaTelegramPlane, FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

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
            src="https://www.google.com/maps?q=41.3559722,69.3098333&hl=uz&z=15&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Head Office */}
        <div className="office" style={{ borderRadius: "15px" }}>
          <h3><FaMapMarkerAlt style={{ color: "#2c3e50", marginRight: "8px" }} /> {t('head_office')}</h3>
          <p style={{ marginTop: "8px" }}>
            Toshkent shahri, Yunusobod tumani, Otchopar-2 MFY, Yangi shaxar ko‘chasi, 3-a-uy <br />
            <strong>Mo’ljal:</strong> HT-MALL qarshisida joylashgan.
          </p>

          <p>
            <FaPhoneAlt style={{ color: "#27ae60", marginRight: "8px" }} />
            <a href="tel:+998773056600">+(998) 77-305-66-00</a> <br />
            <span style={{ marginLeft: "25px" }}>
              <a href="tel:+905557317070">+(90) 555-731-70-70</a>
            </span>
          </p>

          <p>
            <FaTelegramPlane style={{ color: "#0088cc", marginRight: "8px" }} />
            <a target="_blank" href="https://t.me/fashedu_admin">Fash Edu Telegram Admin</a>
          </p>

          <p>
            <FaWhatsapp style={{ color: "#25D366", marginRight: "8px" }} />
            <a target="_blank" href="https://wa.me/905557317070">Fash Edu WhatsApp Admin</a>
          </p>

          <p>
            <FaInstagram style={{ color: "#e4405f", marginRight: "8px" }} />
            <a target="_blank" href="https://www.instagram.com/farrukh.ashuralievv?igsh=OGNobHExZGVqMjIx&utm_source=qr">farrukh.ashuralievv</a><br />
            <span style={{ marginLeft: "24px" }}>
              <a target="_blank" href="https://www.instagram.com/farrukh_ashuralievv?igsh=cGh2a25zcXB4bnRj&utm_source=qr">farrukh_ashuralievv</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;