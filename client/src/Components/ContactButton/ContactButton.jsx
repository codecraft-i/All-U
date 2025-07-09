import { useState } from "react";
import { FaPhone, FaTimes } from "react-icons/fa";
import "./ContactButton.css";

const ContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-container1122">
      <div className="contact-wrapper1122">
        {open && (
          <div className="contact-list1122">
            <a href="https://t.me/stf_consulting" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://www.instagram.com/stf_consultinguz/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="tel:+998938548080">+(998) 93-854-8080</a>
          </div>
        )}
        <button className="contact-toggle1122" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaPhone />}
        </button>
      </div>
    </div>
  );
};

export default ContactButton;