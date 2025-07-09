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

import Bachelor from './Pages/Studies/Bachelor';
import LanguageCourse from './Pages/Studies/LanguageCourse';
import Master from './Pages/Studies/Master';
import VocationalEducation from './Pages/Studies/VocationalEducation';

import ContactButton from "@components/ContactButton/ContactButton"


function App() {
  return (
    <>
      <ContactButton />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/university/:university_name" element={<University />} />

          <Route path="/bachelor" element={<Bachelor />} />
          <Route path="/languagecourse" element={<LanguageCourse />} />
          <Route path="/master" element={<Master />} />
          <Route path="/vocationaleducation" element={<VocationalEducation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
