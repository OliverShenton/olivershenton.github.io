import React from "react";
import "./Skills.css";
import { KEY_SKILLS } from "../../data/skills.data";
import ProgressCircles from "../ProgressCircles/ProgressCircles";

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-inner">
        <div className="skills-items">
          {KEY_SKILLS.skills.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
        <div className="progress-circles">
          <ProgressCircles />
        </div>
      </div>
    </section>
  );
}
