import React from "react";
import "../main.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="nav-logo">Blogger</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
      </ul>
    </div>
  );
}
