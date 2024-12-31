import React from "react";
import "./NavBar.css";

export default function NavBar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offset = 260;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Target element not found: ${targetId}`);
    }
  };

  return (
    <nav className="nav-navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleScroll(e, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => handleScroll(e, "#skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => handleScroll(e, "#experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
