import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

export default function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="logo">
          <h2>Oliver Shenton</h2>
        </div>
        <div className="nav">
          <NavBar />
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
}
