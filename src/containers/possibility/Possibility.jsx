import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt__possibility section__padding" id="possibility">
      <div className="gpt__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The trainers are beyond your imagination
        </h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,{" "}
        </p>
        <h4>Request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
