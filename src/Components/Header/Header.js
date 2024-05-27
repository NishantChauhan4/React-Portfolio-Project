import React from "react";
import "./Header.css";
import Typical from "react-typical";
import profileImg2 from "../../assets/profileImg2.jpg";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hi I am</h1>
        <h2 className="fullname">Nishant Chauhan</h2>
        <h2>
          i am a {""}
          <Typical
            steps={[
              "Fullstack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,
              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          vestibulum eros nec neque semper sodales. Cras mollis magna vitae
          lacinia lobortis. In non auctor turpis. Integer ultrices eget turpis
          vel egestas.
        </p>

        <div className="header-payment-container">
          <button>Hire me</button>

          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>

      <div className="profile-img-container">
        <img src={profileImg2} alt="Profile Image" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};
