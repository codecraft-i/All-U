import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneNumberInput from "./PhoneNumberInput";
import './Contact.css'

import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    language_certificate: null,
  });
  const [certificates, setCertificates] = useState([]);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://stfconsulting.uz/site/api/certificates/")
      .then((res) => setCertificates(res.data))
      .catch((err) => console.error("Certificate load error", err));
  }, []);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handlePhoneChange = (fullPhoneNumber) => {
    setFormData({...formData, phone: fullPhoneNumber});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const csrfToken = document.cookie.split(';').find(c => c.trim().startsWith('csrftoken=')).split('=')[1];
    try {
      const res = await axios.post("https://stfconsulting.uz/site/api/contact/",
      formData,
      {
        headers: {
          'X-CSRFToken': csrfToken,  // CSRF tokenini yuborish
        }
      }
      );
      setResponse(res.data);
    } catch (err) {
      console.error("Server xatosi:", err.response?.data || err.message);
      if (err.response && err.response.status === 429) {
        setError("Too many requests. Try again later.");
      } else if (err.response && err.response.data) {
        // Backenddan xabar ko‘rsatamiz
        const errorMessages = Object.entries(err.response.data)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        setError(errorMessages);
      } else {
        setError("Something went wrong.");
      } }
  };

  // Change Languages
  const { t, i18n } = useTranslation();

  return (
    <div className="sendDataForm">
      <h2 className="sendDataH2Title"style={{ margin: "0 0 15px 0" }} >{t('send_contact')}</h2>

      {response ? (
        <div style={{ background: "#dff0d8", padding: 10, borderRadius: "10px" }}>
          {t("Done")}: {response.name} - {response.phone}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t('name')}
            value={formData.name}
            onChange={handleChange}
            required
            style={{ display: "block", width: "100%", margin: "8px 0" }}
            className="inputSendText"
          />

          {/* Telefon raqam */}
          <PhoneNumberInput
            phone={formData.phone}
            setPhone={handlePhoneChange}
          />

          {/* Sertifikatlar */}
          {certificates.length > 0 ? (
            <div style={{ margin: "10px 0" }}>
              <strong>Sertifikat:</strong>
              {certificates.map((cert) => (
                <label key={cert.id} style={{ display: "block", marginTop: 4 }}>
                  <input
                    type="radio"
                    name="language_certificate"
                    value={cert.id}
                    checked={formData.language_certificate === cert.id}
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        language_certificate: parseInt(e.target.value),
                      })
                    }
                  />
                  {cert.name}
                </label>
              ))}
            </div>
          ) : (
            <div></div>
          )}

          <button type="submit" style={{ padding: "8px 16px" }}>{t('send')}</button>
        </form>
      )}

      {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
    </div>
  );
};

export default ContactForm;
