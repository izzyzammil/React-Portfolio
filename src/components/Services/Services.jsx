import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./my-resume.pdf";

const Services = () => {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur,
          at?
          <br />
          Lorem ipsum dolor sit amet.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading="Design"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing."
          />
        </div>

        <div style={{ left: "-4rem", top: "12rem" }}>
          <Card
            emoji={Glasses}
            heading="Developer"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing."
          />
        </div>

        <div style={{ left: "12rem", top: "19rem" }}>
          <Card
            emoji={Humble}
            heading="UI / UX"
            detail="Lorem ipsum dolor, sit amet consectetur adipisicing."
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
