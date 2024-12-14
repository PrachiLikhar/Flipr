// Import necessary modules
import React from "react";
import "./HeroSection.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Finsweet</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <button className="subscribe-button">Subscribe</button>
      </nav>

      {/* Main Content */}
      <header className="header">
        <div className="header-content">
          <span className="tag">POSTED ON STARTUP</span>
          <h1 className="title">
            Step-by-step guide to choosing
            <br></br> great font pairs
          </h1>
          <p className="author">By James West &middot; May 23, 2024</p>
          <p className="description">
            Just like color or maintenance, typography sets the tone for a
            digital product. Read more to discover tips that never go wrong.
          </p>
          <button className="read-more-button">Read More</button>
        </div>
      </header>
    </div>
  );
};

export default App;
