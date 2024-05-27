import React from "react";
import "./Works.css";
import work1 from "../../assets/w1.jpg";
import work2 from "../../assets/w2.jpg";
import work3 from "../../assets/w3.jpg";
import work4 from "../../assets/w4.jpg";
import work5 from "../../assets/w5.jpg";
import work6 from "../../assets/w6.jpg";

export const Works = () => {
  return (
    <div className="works-container">
      <h1>My Recent Works</h1>
      <div className="works-list-container">
        <div className="works-item">
          <img src={work1} alt="Work 1" />
        </div>

        <div className="works-item">
          <img src={work2} alt="Work 2" />
        </div>

        <div className="works-item">
          <img src={work3} alt="Work 3" />
        </div>

        <div className="works-item">
          <img src={work4} alt="Work 4" />
        </div>

        <div className="works-item">
          <img src={work5} alt="Work 5" />
        </div>

        <div className="works-item">
          <img src={work6} alt="Work 6" />
        </div>
      </div>
    </div>
  );
};
