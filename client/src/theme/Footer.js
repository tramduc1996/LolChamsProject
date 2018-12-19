import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div
        className="footer-copyright text-center py-4"
        style={{
          width: "100%",
          backgroundColor: "rgba(22, 82, 162, 0.85)",
          position: "sticky",
          left: "0",
          bottom: "0",
          color: "white"
        }}
      >
        © 2018 Copyright:
        <Link className="text-white" to="/">
          {" "}
          MDBootstrap.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
