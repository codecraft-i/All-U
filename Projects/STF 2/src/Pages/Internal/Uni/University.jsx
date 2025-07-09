import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "@components/Header/Header/Header";
import Tabs from "@components/Tabs/Tabs"

import ContactForm from "@components/ContactItems/ContactForm"
import Footer from "@components/Footer/Footer"

import './university.css'

const University = () => {
  const { university_name } = useParams();
  const [university, setUniversity] = useState(null);

  useEffect(() => {
    axios.get("https://stfconsulting.uz/site/api/universities/")
      .then(response => {
        const foundUniversity = response.data.data.find(uni => uni.name === university_name);
        setUniversity(foundUniversity);
      })
      .catch(error => console.error("Error fetching university details:", error));
  }, [university_name]);

  if (!university) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
      <Header />
      <div className="p-4 max-w-3xl mx-auto" style={{ margin: "15px 0 0 0" }}>
        <div className="uniItemMainBox" style={{ backgroundImage: `url(${university.image})` }}>
        <div className="uniMainName"><h1>{university.name}</h1></div>
        <div className="overlay">
          <div className="content-wrapper">
            <div className="video-section">
              {university.yt_video_link && (
                <div className="mt-4">
                  <h2 className="text-xl font-bold mb-2" style={{ color: "#eee", marginBottom: "10px" }}>Campus Tour</h2>
                  <iframe
                    width="100%"
                    height="315"
                    src={university.yt_video_link.replace("youtu.be/", "www.youtube.com/embed/")}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            <div className="description-section">
              <p className="text-lg-uni mt-4"><span><strong>Country:</strong> {university.country.name}</span></p>
              <p className="text-lg-uni mt-4-mg"><span><strong>Ranking:</strong> {university.ranking}</span></p>
              <p className="main-description">
                <p className="mt-2">{university.description}</p>
              </p>
              <p className="extra-description">
                {university.extra_paragraphs && university.extra_paragraphs.length > 0 && (
                  <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Additional Information</h2>
                    {university.extra_paragraphs.map((paragraph, index) => (
                      <p key={index} className="mb-2">{paragraph.text}</p>
                    ))}
                  </div>
                )}

                {university.why_choose.length > 0 && (
                  <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Why Choose {university.name}?</h2>
                    <ol className="list-decimal ml-6">
                      {university.why_choose.map((reason, index) => (
                        <li key={index} className="mb-2">
                          <strong>{reason.title}:</strong> <br /> {reason.text}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </p>
            </div>
          </div>
          <div className="mt-4">
          <a href={university.details_url} target="_blank" rel="noopener noreferrer" className="more-details-link">
            More Details
          </a>
        </div>
        </div>
        </div>

        <Tabs university={university} />
      </div>

      <div className='baseContactSendingBox'>
            <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default University;
