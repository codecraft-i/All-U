// components/StdResults/StdResults.jsx
import React, { useState } from "react";
import bg from "@assets/HomeAssests/bgResults.jpeg";
import "./StdResults.css";

import { useTranslation } from 'react-i18next';

function StdResults({ visa }) {
  const [showModal, setShowModal] = useState(false);

  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className="visa-card"
        style={{ backgroundImage: `url(${bg})` }}
        onClick={() => setShowModal(true)}
      >
        <div className="visa-title">{t('visa_congratulations')}</div>
        <img src={visa} alt="Visa Document" className="visa-image" />
        <div className="visa-footer" style={{ textTransform: "uppercase" }}>TELEX VIZA</div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={visa} alt="Visa Full View" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default StdResults;
