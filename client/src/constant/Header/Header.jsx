import React, { useEffect } from "react";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    function scrollHeader() {
      const header = document.getElementById("header");
      if (this.scrollY >= 50) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader);
    let currentUrl = window.location.href;

    if (currentUrl.includes("hotels")) {
      const header = document.getElementById("header");
      header.classList.add("scroll-header");
    }
  });

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          Rentroomo <i className="bx bxs-home-alt-2"></i>
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                <i className="bx bx-home-alt-2"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bx bx-building-house"></i>
                <span>Properties</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bx bx-award"></i>
                <span>About</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                <i className="bx bx-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="button nav__button">
          Login
        </a>
        <a href="#" className="button nav__button">
          Post Property
        </a>
      </nav>
    </header>
  );
};

export default Header;
