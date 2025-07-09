import React, { useState } from "react";
import "./tabs.css";

export default function Tabs({ university }) {
  const [activeTab, setActiveTab] = useState("PROGRAMMES");

  const renderContent = () => {
    switch (activeTab) {
      case "PROGRAMMES":
        return (
          <div className="tab-content">
            <img src="/Packs/pic3.png" className="tab-img" />
            <div>
              {university.programme_set.map((program, i) => (
                <div key={i}>
                  <h3 className="tab-title">{program.title}</h3>
                  <ul>
                    {program.programmesdata_set.map((data, j) => (
                      <li key={j}>{data.context}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case "SCHOLARSHIPS":
        return (
          <div className="tab-content">
            <img src="/Packs/pic2.png" class="tab-img" />
            <div>
              {university.scholarship_set.map((scholarship, i) => (
                <div key={i}>
                  <h3 className="tab-title">{scholarship.title}</h3>
                  <ul>
                    {scholarship.programmesdata_set.map((data, j) => (
                      <li key={j}>{data.context}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case "REQUIREMENTS":
        return (
          <div className="tab-content">
            <img src="/Packs/pic1.png" alt="requirements" className="tab-img" />
            <div>
              {university.requirement_set.map((requirement, i) => (
                <div key={i}>
                  <h3 className="tab-title">{requirement.title}</h3>
                  <ul>
                    {requirement.requirementsdata_set.map((data, j) => (
                      <li key={j}>{data.context}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabs-container">
      <div className="tab-buttons">
        {["PROGRAMMES", "SCHOLARSHIPS", "REQUIREMENTS"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
}
