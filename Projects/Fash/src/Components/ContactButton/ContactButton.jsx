import { useState, useRef, useEffect } from "react";
import {
  FaPhone,
  FaTimes,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import "./ContactButton.css";

/* 🔢 Telefon raqamlar va sotsial tarmoqlar ro‘yxati */
const phones = [
  { href: "tel:+998773056600", label: "+(998) 77 305 66 00" },
  { href: "tel:+905557317070", label: "+(90) 555 731 70 70" },
];

const socials = [
  {
    href: "https://t.me/fashedu_admin",
    label: "Telegram",
    icon: <FaTelegramPlane className="telegram" />,
  },
  {
    href: "https://wa.me/905557317070",
    label: "WhatsApp",
    icon: <FaWhatsapp className="whatsapp" />,
  },
  {
    href: "https://www.instagram.com/farrukh.ashuralievv?igsh=OGNobHExZGVqMjIx&utm_source=qr",
    label: "Instagram",
    icon: <FaInstagram className="instagram" />,
  },
];

const ContactButton = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  /* 🔒 Tashqariga bosilganda yopish */
  useEffect(() => {
    const handleClick = (e) =>
      wrapperRef.current && !wrapperRef.current.contains(e.target) && setOpen(false);
    if (open) window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="contact-container1122" ref={wrapperRef}>
      {open && (
        <div className="contact-panel" role="menu" aria-label="Aloqa ma’lumotlari">
          {/* 📞 Telefonlar */}
          <ul className="contact-list">
            {phones.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="contact-link" role="menuitem">
                  <FaPhone className="phone-icon" /> {label}
                </a>
              </li>
            ))}
          </ul>

          <hr className="divider" />

          {/* 🌐 Sotsial tarmoqlar */}
          <ul className="social-list">
            {socials.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔘 Trigger tugma */}
      <button
        className={`contact-toggle1122 ${open ? "active" : ""}`}
        aria-label={open ? "Menyuni yopish" : "Bizga qo‘ng‘iroq qilish"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaPhone />}
      </button>
    </div>
  );
};

export default ContactButton;