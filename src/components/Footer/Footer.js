import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">
        <p>
          &copy; <span>{currentYear}</span> Oliver Shenton's CV - Created by Oliver Shenton
        </p>
        <p>Last updated: 31 December 2024</p>
        <div>
          <a
            href="https://www.linkedin.com/in/olivershenton"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn Profile">
            LinkedIn
          </a>
          |
          <a
            href="https://github.com/olivershenton"
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile">
            GitHub
          </a>
          |
          <a href="mailto:olivermshenton@outlook.com" aria-label="Email Oliver Shenton">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
