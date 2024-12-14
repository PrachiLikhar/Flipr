import React from "react";
import "./Company.css";

// Example logo paths (replace with actual paths)
import Logo1 from "./assets/logo1.png";
import Logo2 from "./assets/logo2.png";
import Logo3 from "./assets/logo3.png";
import Logo4 from "./assets/logo4.png";
import Logo5 from "./assets/logo5.png";
import Logo6 from "./assets/logo6.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
const index=0;

const FeaturedIn = () => {
  return (
    <div className="featured-in-section">
      <div className="featured-in-title">
        <p>We are</p>
        <h3>Featured in</h3>
      </div>
      <div className="featured-in-logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={Logo ${index + 1}} />
        ))}
      </div>
    </div>
  );
};

export default Company;
