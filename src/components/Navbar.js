import React from 'react';

const Navbar = () => (
  <nav className="navBar">
    <div className="navItems">
      <ul className="navLinks">
        <li>MyProfile</li>
        <li>Missions</li>
        <li>Rockets</li>
      </ul>
    </div>
    <div className="logoTitleContainer">
      <h2 className="navTitle">Space Travelers Hub</h2>
      <img src="./img/logo.png" alt="logo" />
    </div>
  </nav>
);

export default Navbar;
