import React from "react";

const ExperienceCard = ({ title, date, location, details }) => {
  return (
    <div className="experience-card">
      <div className="experience-head">
        <p>
          <strong>{date}</strong>
        </p>
        <h3>{title}</h3>
      </div>
      <p>{Array.isArray(location) ? location.join(", ") : location}</p>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
