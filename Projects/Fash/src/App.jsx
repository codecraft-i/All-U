import 'react';

// Routers liblaries
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Style files
// Base App CSS
import './App.css'

// Pages
import Home from './Pages/Home/Home';
import Universities from './Pages/Internal/Uni/Universities';
import University from './Pages/Internal/Uni/University';

import ContactButton from "@components/ContactButton/ContactButton"

import ChinaGrant from "./Pages/Internal/Std/ChinaGrant/ChinaGrant";
import ItalyGrant from "./Pages/Internal/Std/ItalyGrant/ItalyGrant";
import TurkeyUniversities from "./Pages/Internal/Std/TurkeyUniversities/TurkeyUniversities";

function App() {
  return (
    <>
      <ContactButton />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/university/:university_name" element={<University />} />

          <Route path="/study-china" element={<ChinaGrant />} />
          <Route path="/study-italy" element={<ItalyGrant />} />
          <Route path="/study-turkey" element={<TurkeyUniversities />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
