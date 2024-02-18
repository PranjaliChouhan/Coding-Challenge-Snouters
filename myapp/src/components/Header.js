// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <h1>Snouters hotel booking </h1>
      </div>
      <nav className="navbar-nav">
        <HashLink to={"/#home"} className="nav-link">Home</HashLink>
        <Link to={"/registration"} className="nav-link">Registration</Link>
      </nav>
    </header>
  );
};

export default Header;
