import React, { useState } from "react";
import "./Navbar.css";
import { SiYourtraveldottv } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="menu-mobile" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={click ? "navbar" : "navbar index"}>
        <div className="navbar-container">
          {/*logo and name*/}
          <Link to="/" className="navbar-left">
            Travell
            <SiYourtraveldottv />
          </Link>

          {/*mobile view*/}
          <div className="mobile-view">
            <div className={click ? "mobile active" : "mobile"}>
              <ul className="mobile-list">
                <li>
                  <Link to="/" className="mobile-item">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="mobile-item">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="mobile-item">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/" className="mobile-item">
                    <button className="list-btn">Sign Up</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-right">
            <ul className="navbar-list">
              <li>
                <Link to="/" className="list-item">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="list-item">
                  About
                </Link>
              </li>
              <li>
                <Link className="list-item" to="/">
                  Products
                </Link>
              </li>
              <li>
                <Link className="list-item" to="/">
                  <button className="list-btn">Sign Up</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
