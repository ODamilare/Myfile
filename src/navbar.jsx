// Navbar.js
import React, { useState } from 'react';
import './navbar.css'; // Importing CSS for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };
  const [exchangeDropdown, setExchangeDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);

  const toggleExchangeDropdown = () => setExchangeDropdown(!exchangeDropdown);
  const toggleProductsDropdown = () => setProductsDropdown(!productsDropdown);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href='https://lcfe.ng/'>
          <img
            src="https://lcfe.ng/assets/images/logo.png"
            alt="company logo"
            className="logo"
            
          />
        </a>
      </div>

      <ul className="navbar-links">
        <li className="dropdown" onMouseEnter={toggleExchangeDropdown} onMouseLeave={toggleExchangeDropdown}>
          <a href="https://lcfe.ng//theexchange.php">THE EXCHANGE</a>
          {exchangeDropdown && (
            <ul className="dropdown-menu">
              <li><a href="https://lcfe.ng//theexchange.php">OVERVIEW</a></li>
              <li><a href="https://lcfe.ng//theexchange.php">MILESTONES</a></li>
              <li><a href="https://lcfe.ng//board.php">BOARD OF DIRECTORS </a></li>
              <li><a href="https://lcfe.ng//executive.php">EXCECUTIVE MANAGEMENT</a></li>
            </ul>
          )}
        </li>

        <li className="dropdown" onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
          <a href="/https://lcfe.ng//products.php">PRODUCTS</a>
          {productsDropdown && (
            <ul className="dropdown-menu-2">
              <li><a href="https://lcfe.ng//products.php">AGRICULTURE</a></li>
              <li><a href="https://lcfe.ng//solid.php">SOLID MINERALS</a></li>
              <li><a href="https://lcfe.ng//oil.php">OIL & GAS </a></li>
              <li><a href="https://lcfe.ng//currency.php">CURRENCIES</a></li>
              <li><a href="https://lcfe.ng//commodity.php">COMMODITY-BACKED DEBT INSTRUMENT</a></li>
            </ul>
          )}
        </li>

        <li><a href="https://lcfe.ng//members.php">MEMBERS</a></li>
        <li><a href="https://lcfe.ng//market-data.php">MARKET DATA</a></li>
        <li><a href="https://portal.lcfe.ng/">FGN IMPORT & EXPORT REGISTRATION PORTAL</a></li>
      </ul>
     
     
     
      <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`menu ${menuOpen ? 'show' : ''}`}>
            <ul className="">
            <li className="dropdown" onMouseEnter={toggleExchangeDropdown} onMouseLeave={toggleExchangeDropdown}>
          <a href="/">THE EXCHANGE</a>
          {exchangeDropdown && (
            <ul className="dropdown-menu">
              <li><a href="https://lcfe.ng//theexchange.php">OVERVIEW</a></li>
              <li><a href="https://lcfe.ng//theexchange.php">MILESTONES</a></li>
              <li><a href="https://lcfe.ng//board.php">BOARD OF DIRECTORS </a></li>
              <li><a href="https://lcfe.ng//executive.php">EXCECUTIVE MANAGEMENT</a></li>
            </ul>
          )}
        </li>

            <li className="dropdown" onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
          <a href="/">PRODUCTS</a>
          {productsDropdown && (
            <ul className="dropdown-menu-2">
              <li><a href="https://lcfe.ng//products.php">AGRICULTURE</a></li>
              <li><a href="https://lcfe.ng//solid.php">SOLID MINERALS</a></li>
              <li><a href="https://lcfe.ng//oil.php">OIL & GAS </a></li>
              <li><a href="https://lcfe.ng//currency.php">CURRENCIES</a></li>
              <li><a href="https://lcfe.ng//commodity.php">COMMODITY-BACKED DEBT INSTRUMENT</a></li>
            </ul>
          )}
        </li>

               
        <li><a href="https://lcfe.ng//members.php">MEMBERS</a></li>
        <li><a href="https://lcfe.ng//market-data.php">MARKET DATA</a></li>
        <li><a href="https://portal.lcfe.ng/">FGN IMPORT & EXPORT REGISTRATION PORTAL</a></li>
        </ul>
            </div>
    </nav>
    
  );
};


export default Navbar;



