// File: Experience.js
import React, { useState } from "react";
import "./Experience.css";
import { EXPERIENCE } from "../../data/experience.data";
import { EDUCATION } from "../../data/education.data";
import Page1 from "../../assets/page-1.png";
import Page2 from "../../assets/page-2.png";

export default function Experience() {
  const pages = [Page1, Page2];
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div id="experience">
      <div className="experience-inner">
        <div className="left-column-experience">
          {EXPERIENCE.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-head">
                <p className="date">{item.date}</p>
                <h3 className="title">{item.title}</h3>
              </div>
              <p className="location">{item.location}</p>
            </div>
          ))}
        </div>
        <div className="right-column-experience">
          {EDUCATION.map((item, index) => (
            <div key={index} className="experience-item">
              <div className="experience-head">
                <p className="date">{item.date}</p>
                <h3 className="title">{item.title}</h3>
              </div>
              <p className="location">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="experience-inner">
        <div className="cv-container">
          <img className="cv-image" src={pages[currentPage]} alt={`Page ${currentPage + 1}`} />
          <div className="pagination">
            {currentPage > 0 && (
              <button className="pagination-button prev-button" onClick={handlePrevious}>
                &lt; Previous |
              </button>
            )}
            <span className="page-number">
              {currentPage + 1} / {pages.length}
            </span>
            {currentPage < pages.length - 1 && (
              <button className="pagination-button next-button" onClick={handleNext}>
                | Next &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
