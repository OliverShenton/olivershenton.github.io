import React from "react";
import "./Section.css";

export default function Section({ title, content, style }) {
  return (
    <section>
      <div className="section-inner" style={style}>
        <h2>{title}</h2>
        <hr />
        <div className="content">{content}</div>
      </div>
    </section>
  );
}
