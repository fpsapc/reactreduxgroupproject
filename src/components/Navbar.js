import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <div className="navItems">
      <ul className="navLinks">
        <li>MyProfile</li>
        <li><Link to="missions">Missions</Link></li>
        <li><Link to="rockets">Rockets</Link></li>
        <li><Link to="dragons">Dragons</Link></li>
      </ul>
    </div>
    <div className="logoTitleContainer">
      <h2 className="navTitle">Space Travelers Hub</h2>
      <img src="./img/logo.png" alt="logo" />
    </div>
  </nav>
);

export default Navbar;
