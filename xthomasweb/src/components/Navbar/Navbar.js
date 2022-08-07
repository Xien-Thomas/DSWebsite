import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
// fontawesome.library.add(faCoffee);

import "./Navbar.css";
import { Button } from "../Buttons/Buttons";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener("resize", showButton);
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Xien
            {/* <img src={logo} alt="website logo" /> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </li>
          </ul>
          {button && <Link to="/blog"><Button buttonStyle="btn--outline" >Blog</Button></Link>}
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  