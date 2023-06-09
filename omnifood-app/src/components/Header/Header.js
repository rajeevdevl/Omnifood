import { HashLink } from "react-router-hash-link";
import Logo from "../../content/img/omnifood-logo.png";
import "./Header.css";
import { MenuOutline, CloseOutline } from "react-ionicons";
import { useState } from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={Logo} className="logo" alt="Omnifood logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a href="#" className="main-nav-link">
              How it works
            </a>
          </li>

          <li>
            <a href="#" className="main-nav-link">
              Meals
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="main-nav-link nav-cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button className="btnMobileNav">
        <MenuOutline
          height="4.8rem"
          width="4.8rem"
          color={"#333"}
          name="menu-outline"
          className="icon-mobile-menu icon-mobile"
        />
        <CloseOutline
          height="4.8rem"
          width="4.8rem"
          color={"#333"}
          name="close-outline"
          className="icon-mobile-close icon-mobile"
        />
      </button>
    </header>
  );
};

export default Header;
