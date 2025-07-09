import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import "./Header.css";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Logo from "/logo.svg";

export default function Header() {
  const { t } = useTranslation();
  const { lang = "de" } = useParams();

  /* ---------- Menu ma’lumotlari (rasm, nom, havola) ---------- */
  const menuItems = [
    {
      id: "menu1",
      img: "/test/m1.jpeg",
      title: t("menus.salads"),   // Masalan: “Saladlar”
      href: "/menu1",
    },
    {
      id: "menu2",
      img: "/test/m2.jpg",
      title: t("menus.desserts"),   // “Desertlar”
      href: "/menu2",
    },
    {
      id: "menu3",
      img: "/test/m3.jpg",
      title: t("menus.drinks"),     // “Ichimliklar”
      href: "/menu3",
    },
    {
      id: "menu4",
      img: "/test/m2.jpg",
      title: t("menus.specials"),   // “Maxsus taomlar”
      href: "/menu4",
    },
  ];

  /* ---------- Drawer & dropdown holatlari ---------- */
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  /* ---------- Dropdown tashqi bosish ---------- */
  useEffect(() => {
    function outside(e) {
      if (
        dropdownOpen &&
        !triggerRef.current?.contains(e.target) &&
        !dropdownRef.current?.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", outside);
    return () => document.removeEventListener("mousedown", outside);
  }, [dropdownOpen]);

  /* ---------- Blur klassi: IntersectionObserver ---------- */
  useEffect(() => {
    const header = headerRef.current;
    const dropdown = dropdownRef.current;
    const pivot = document.querySelector("[data-header-pivot]");
    if (!pivot) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.classList.remove("header--blur");
          dropdown.classList.remove("header--dp");
        } else {
          header.classList.add("header--blur");
          dropdown.classList.add("header--dp");
        }
      },
      { rootMargin: "-1px 0px 0px 0px" } // 1 px yuqori chet yo‘qolsa yetadi
    );

    io.observe(pivot);
    return () => io.disconnect();
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header__container">
        {/* Logo */}
        <NavLink
          to={`/${lang}`}
          className="logo"
          onClick={() => {
            setDrawerOpen(false);
            setDropdownOpen(false);
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "auto", height: "50px", backgroundSize: "cover" }}
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="nav desktop-nav">
          <NavLink
            to={`/${lang}`}
            className={({ isActive }) =>
              isActive ? "active-link navBaseLink" : "navBaseLink"
            }
          >
            {t("header.home")}
          </NavLink>

          {/* ResMenu + dropdown */}
          <div className="menu-with-dropdown">
            <span
              className="menu-trigger"
              ref={triggerRef}
              onClick={() => setDropdownOpen((o) => !o)}
            >
              {t("header.menus")}
              <FaChevronDown className={`arrow ${dropdownOpen ? "open" : ""}`} />
            </span>

            <div
              ref={dropdownRef}
              className={`dropdown ${dropdownOpen ? "visible" : ""}`}
            >
              <div className="menu-grid">
                {menuItems.map(({ id, img, title, href }) => (
                  <NavLink
                    key={id}
                    to={`/${lang}${href}`}
                    className="menu-item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <img src={img} alt={title} />
                    <span>{title}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink className="navBaseLink" href="#about">
            {t("header.about_us")}
          </NavLink>
          <NavLink className="navBaseLink" href="#chefs">
            {t("header.contact")}
          </NavLink>

          <NavLink href="#booking" className="booking-btn">
            {t("header.booking")}
            <FaArrowRight className="booking-btn__icon" />
          </NavLink>

          <LanguageDropdown />
        </nav>

        {/* Burger */}
        <button className="burger" onClick={() => setDrawerOpen((o) => !o)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile drawer */}
      <nav className={`mobile-nav ${drawerOpen ? "open" : ""}`}>
        <button className="close" onClick={() => setDrawerOpen(false)}>
          <FaTimes />
        </button>

        {["home", "menu", "about", "chefs", "contact"].map((id) => (
          <a key={id} href={`#${id}`} onClick={() => setDrawerOpen(false)}>
            {id}
          </a>
        ))}
      </nav>

      {drawerOpen && (
        <div className="backdrop" onClick={() => setDrawerOpen(false)} />
      )}
    </header>
  );
}