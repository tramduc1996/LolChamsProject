import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">
          LOLChamps
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="/lolChams/highlights"
              >
                HighLights
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="/lolChams/championsList"
              >
                ChampsList
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link js-scroll-trigger"
                to="/lolChams/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
