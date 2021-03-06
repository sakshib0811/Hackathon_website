import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
// import { Link } from 'react-router-dom';
import { FaEthereum } from "react-icons/fa";
function Nav() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const navigate = useNavigate();

  const submitLink = () => {
    navigate("/", { replace: true });
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <h1 onClick={submitLink}>
          <FaEthereum /> ETH Bangalore
        </h1>
      </a>
      <ul className={active}>
        <li className="nav__item" onClick={submitLink}>
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Prizes
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Partners
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Speakers
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Venue
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
