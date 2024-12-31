import React, { useEffect } from "react";
import "./ProgressCircles.css";
import { PROGRESS_CIRCLES } from "../../data/skills.data";

export default function ProgressCircles() {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach((circle) => {
      const handleMouseEnter = () => {
        circle.classList.add("bouncing");
      };

      const handleAnimationEnd = () => {
        circle.classList.remove("bouncing");
      };

      circle.addEventListener("mouseenter", handleMouseEnter);
      circle.addEventListener("animationend", handleAnimationEnd);

      return () => {
        circle.removeEventListener("mouseenter", handleMouseEnter);
        circle.removeEventListener("animationend", handleAnimationEnd);
      };
    });
  }, []);

  return (
    <div className="progress-circles-container">
      {PROGRESS_CIRCLES.map((skill, index) => (
        <div key={index} className="progress-circle">
          <div className="circle" style={{ "--percentage": skill.value }}>
            <span>{skill.value}%</span>
          </div>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
