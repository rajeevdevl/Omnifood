import { useRef } from "react";
import Logo from "../../content/img/omnifood-logo.png";
import "./Header.css";
import { MenuOutline, CloseOutline } from "react-ionicons";
import { BrowserRouter } from "react-router";
import { Link } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [navopen, setNavOpen] = useState("");

  // const inputEl = useRef(null);

  const btnShow = () => {
    setNavOpen("nav-open");
  };

  const hideNav = () => {
    setNavOpen("");
  };

  // useEffect(() => {});

  return (
    <header className={`${navopen} header`}>
      <Link to="/">
        <img src={Logo} className="logo" alt="Omnifood logo" />
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link to="/meals" className="main-nav-link">
              Meals
            </Link>
          </li>
          <li>
            <Link to="/howitworks" className="main-nav-link">
              How it works
            </Link>
          </li>

          {/* <li>
            <Link to="/testimonial" className="main-nav-link">
              Testimonials
            </Link>
          </li> */}
          <li>
            <Link to="/pricing" className="main-nav-link">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/ctaform" className="main-nav-link nav-cta">
              Try for free
            </Link>
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
          onClick={btnShow}
        />
        <CloseOutline
          height="4.8rem"
          width="4.8rem"
          color={"#333"}
          name="close-outline"
          className="icon-mobile-close icon-mobile"
          onClick={hideNav}
        />
      </button>
    </header>
  );
};

export default Header;
