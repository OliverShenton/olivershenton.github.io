import React, { useState } from "react";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ image, title, description, skills, technologies, source }) {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      <div className="project-card">
        <div className="front">
          <img src={image} alt={`${title} Thumbnail`} />
          <h3>{title}</h3>
          <button onClick={handleOpenPopup}>View</button>
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={handleClosePopup}>
              &times;
            </button>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
              <strong>Skills:</strong> {skills.join(", ")}
            </p>
            <p>
              <strong>Technologies:</strong> {technologies.join(", ")}
            </p>
            <button
              className="source-code-btn"
              onClick={() => window.open(source, "_blank")}
              title="Github">
              <FaGithub style={{ fontSize: "16px" }} />
              Source Code
            </button>
          </div>
        </div>
      )}
    </>
  );
}
