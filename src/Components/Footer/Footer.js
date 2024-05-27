import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="footer-copyright">
        <p>© 2024 Nishant Chauhan. All Rights Reserved</p>
      </div>

      <ul className="footer-social-media">
        <li>
          <a>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </li>

        <li>
          <a>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>

        <li>
          <a>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>

        <li>
          <a>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>

        <li>
          <a>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
