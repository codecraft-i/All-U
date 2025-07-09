import { Routes, Route, Navigate, useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Home from './Pages/Base/Home/Home';
import NotFound from './Pages/Base/NotFound/NotFound'

// Til kodlarini massivda saqlaymiz
const SUPPORTED_LANGS = ['de','en','uz', 'ru'];

function LocaleWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const location = useLocation();

  // URL dagi lang o‘zgarganda i18n tilini almashtiramiz
  useEffect(() => {
    if (SUPPORTED_LANGS.includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      i18n.changeLanguage('de');
    }
  }, [lang, i18n]);

  // Til almashuvchisi: hozirgi path’ni olib, lang qismni almashtiradi
  const switchLang = (newLang) => {
    // /de/about → /en/about
    const parts = location.pathname.split('/');
    parts[1] = newLang;
    return parts.join('/');
  };

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* “/” ga kelinsa → default tilga yo‘naltiramiz */}
      <Route path="/" element={<Navigate to="/de" replace />} />

      {/* :lang/* — hamma til-foo marshrutlarini shu yerda tutamiz */}
      <Route path=":lang/*" element={<LocaleWrapper />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}