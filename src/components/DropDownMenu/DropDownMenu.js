import React, { useState, useEffect, useRef } from "react";
import "./DropDownMenu.css";

export default function DropDownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleNav = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenuOnItemClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMenuOpen &&
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

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

      closeMenuOnItemClick();
    } else {
      console.error(`Target element not found: ${targetId}`);
    }
  };

  return (
    <div>
      <button
        id="menu-toggle"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
        onClick={toggleNav}
        ref={buttonRef}
        className={isMenuOpen ? "active" : ""}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        id="header-nav"
        className={`header-nav ${isMenuOpen ? "active" : ""}`}
        ref={navMenuRef}
        aria-hidden={!isMenuOpen}>
        <ul>
          <li>
            <a href="#" onClick={(e) => handleScroll(e, "#home")}>
              Home
            </a>
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
    </div>
  );
}
