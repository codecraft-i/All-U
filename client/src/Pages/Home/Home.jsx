// Components
import Header from '@components/Header/Header/Header';

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import './home.css'

// Translation module
import { useTranslation } from 'react-i18next';

import eduImage from "@assets/HomeAssests/edu.webp";

import Results from "@components/Results/Results"
import TopUni from "@components/Top/TopUni"
import About from "@components/About/About"
import Services from "@components/Services/Services"
import Partniors from "@components/Partniors/Partniors"

import StdResults from "@components/StdResults/StdResults"
import visa1 from "@assets/HomeAssests/visa1.jpg";
import visa2 from "@assets/HomeAssests/visa2.jpg";
import visa3 from "@assets/HomeAssests/visa3.jpg";
import visa4 from "@assets/HomeAssests/visa4.jpg";
import visa5 from "@assets/HomeAssests/visa5.jpg";
import visa6 from "@assets/HomeAssests/visa6.jpg";

import ContactSection from "@components/ContactSection/ContactSection"
import Footer from "@components/Footer/Footer"

import ContactForm from "@components/ContactItems/ContactForm"

import { motion, AnimatePresence } from "framer-motion";

import ImageSlider from '@components/ImageSlider/ImageSlider'
const imageList = [
  "./std3.png",
  "./std2.jpg",
  "./std2.jpg",
];

// Icons
import { IoClose } from "react-icons/io5";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    // Tranlations
    const { t, i18n } = useTranslation();

    // State to toggle Hello box
    const [showHello, setShowHello] = useState(false);

    useEffect(() => {
      AOS.init({
        duration: 800, // animatsiya davomiyligi (ms)
        once: true,    // faqat bir marta ishlasin scrollda
      });
    }, []);
    
    const cards = [visa1, visa2, visa3, visa4, visa5, visa6];

    const heroTexts = [
      t('homeIntro1'),
      t('homeIntro2'),
      t('homeIntro3'),
    ];
    
    const [textIndex, setTextIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % heroTexts.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-container">
            <div className="homeIntroBox">
                <Header />

              <div className="hero-container" data-aos="fade-down">
                <div className="hero-text">
                  <h1>
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={textIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      // className="hero-main-text"
                    >
                      {heroTexts[textIndex]}
                    </motion.h1>
                  </AnimatePresence>
                  </h1>
                  <div className="hero-buttons">
                    <button className="consult-btn" onClick={() => setShowHello(true)}>{t('consultion')}</button>
                    <p>
                      {t('cons_text')}
                    </p>
                  </div>
                </div>
                <div className="hero-image">
                  {/* <img
                    src={ eduImage }
                    alt="Graduation Hat"
                  /> */}
                  <ImageSlider images={imageList} />
                </div>
              </div>

              {/* Hello popup box */}
              {showHello && (
                <div
                  className="hello-popup"
                  onClick={() => setShowHello(false)} // umumiy div bosilsa yopiladi
                >
                  <div onClick={(e) => e.stopPropagation()}>
                    <ContactForm />
                  </div>
                  <div id='cancelCanHomeBtn' onClick={(e) => {
                    e.stopPropagation();
                    setShowHello(false);
                  }}><IoClose /></div>
                </div>
              )}

              <Results />
              <Services />
              <TopUni />
              <About />
              <Partniors />

                <div className="app-container">
                  <h1 className="title" style={{ color: "#eee" }}>{t('spring_2025_semester_results')}</h1>
                  <div className="card-grid">
                    {cards.map((visa, index) => (
                      <StdResults key={index} visa={visa} />
                    ))}
                  </div>
                </div>
              
              <ContactSection />
              <div className='baseContactSendingBox'>
                  <ContactForm />
              </div>
              <Footer />
            </div>
      </div>
    );
};
  
export default Home;