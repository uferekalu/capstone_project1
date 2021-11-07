import React from "react";
import "./Navbar.css";
import square from "../images/squared_menu.png";
import user from "../images/user.png";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>SIDE Huzzle</h2>
      </div>
      <ul className="navbar__links">
        <li>
          Gmail
        </li>
        <li>
          Images
        </li>
        <li>
          <img
            src={square}
            alt="side huzzle logo"
          />
        </li>
        <li>
          <img
            src={user}
            alt="side huzzle logo"
          />
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
