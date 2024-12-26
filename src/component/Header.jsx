import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;