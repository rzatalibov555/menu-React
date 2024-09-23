import React, { useState } from 'react';
import './Sidebar.css'; // Importing regular CSS

const Sidebar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sidebarContainer">
      
      <button className="burgerButton" onClick={toggleMenu}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>

      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menuList">
          <li><i className="fa fa-home fa-2x" aria-hidden="true"></i><a href="#home">Home</a></li> 
          <li><i className="fa fa-user fa-2x" aria-hidden="true"></i><a href="#profile">Profile</a></li>
          <li><i className="fa fa-chart-line fa-2x" aria-hidden="true"></i><a href="#dashboard">Dashboard</a></li>
          <li><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i><a href="#shop">Shop</a></li>
          <li><i className="fa fa-shopping-bag fa-2x" aria-hidden="true"></i><a href="#shopping">Shopping</a></li>
          <li><i className="fa fa-sign-out-alt fa-2x" aria-hidden="true"></i><a href="#logout">Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;