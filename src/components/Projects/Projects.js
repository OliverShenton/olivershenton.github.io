import React from "react";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { PROJECT_CARDS } from "../../data/project.data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-inner">
        {PROJECT_CARDS.map((card, index) => (
          <ProjectCard
            key={index}
            image={card.img}
            title={card.name}
            description={card.description}
            skills={card.skills}
            technologies={card.technologies}
            source={card.source}
          />
        ))}
      </div>
    </section>
  );
}
