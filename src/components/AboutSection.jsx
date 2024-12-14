import React from "react";
import { assets } from "../assets/assets";
import "./AboutSection.css"; // CSS file for styling

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-image">
        <img
          src={assets.closeup} // Replace with your actual image path
          alt="Group of people sitting"
        />
      </div>
      <div className="about-content">
        <h4>What We Started</h4>
        <h2>It started out as a simple idea and evolved into our passion</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <button className="discover-button">Discover our story</button>
      </div>
    </div>
  );
};

export default AboutSection;
