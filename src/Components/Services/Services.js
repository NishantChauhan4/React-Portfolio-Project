import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        <div className="services-description-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vestibulum eros nec neque semper sodales. Cras mollis magna vitae
            lacinia lobortis. In non auctor turpis. Integer ultrices eget turpis
            vel egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse vestibulum eros nec neque semper sodales. Cras mollis
            magna vitae lacinia lobortis. In non auctor turpis. Integer ultrices
            eget turpis vel egestas.
          </p>
          <button>Hire Me</button>
        </div>
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-description">
              <h3>Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vestibulum eros nec neque semper sodales. Cras
                mollis magna vitae lacinia lobortis. In non auctor turpis.
                Integer ultrices eget turpis vel egestas.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-description">
              <h3>Desktop Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vestibulum eros nec neque semper sodales. Cras
                mollis magna vitae lacinia lobortis. In non auctor turpis.
                Integer ultrices eget turpis vel egestas.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-description">
              <h3>U/X Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vestibulum eros nec neque semper sodales. Cras
                mollis magna vitae lacinia lobortis. In non auctor turpis.
                Integer ultrices eget turpis vel egestas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
