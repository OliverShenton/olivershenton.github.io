import React from "react";
import "./Hero.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="left-column">
          <h1>Hi, I'm Oliver Shenton</h1>
          <h2>Web Developer </h2>
          <p>
            Proficient in both front-end and back-end technologies to create responsive websites,
            delivering a seamless experience.
          </p>
          <div className="hero-icons">
            <a
              className="icon"
              href="https://www.linkedin.com/in/olivershenton/"
              target="_blank"
              title="LinkedIn"
              alt="LinkedIn Icon">
              <FaLinkedin />
            </a>
            <a
              className="icon"
              href="https://github.com/OliverShenton"
              target="_blank"
              title="GitHub"
              alt="GitHub Icon">
              <FaGithub />
            </a>
            <a
              className="icon"
              href="mailto:olivermshenton@outlook.com"
              target="_blank"
              title="Email"
              alt="Email Icon">
              <MdEmail />
            </a>
          </div>
        </div>
        <div className="right-column">
          <p></p>
        </div>
      </div>
    </section>
  );
}
