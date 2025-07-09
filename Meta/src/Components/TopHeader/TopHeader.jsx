import React from 'react';
import './TopHeader.css';
import { FaPhoneAlt, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

export default function TopHeader() {
  return (
    <header className="top-header">
      <div className="inner">

        {/* Telefon */}
        <a href="tel:+32493910884" className="item">
          <FaPhoneAlt className="icon" />
          <span style={{ color: "var(--primary-pg)" }}>+32 493 91 08 84</span>
        </a>

        {/* E-mail */}
        <a href="mailto:bazaar.antwerpen@gmail.com" className="item">
          <FaPaperPlane className="icon" />
          <span style={{ color: "var(--primary-pg)" }}>bazaar.antwerpen@gmail.com</span>
        </a>

        {/* Manzil / Доставка */}
        <a href="#" className="item">
          <FaMapMarkerAlt className="icon" />
          <span style={{ color: "var(--primary-pg)" }}>Доставка&nbsp;махаллинский&nbsp;сход&nbsp;гра…</span>
        </a>

      </div>
    </header>
  );
}