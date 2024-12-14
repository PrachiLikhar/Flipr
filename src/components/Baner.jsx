import React from "react";
import "./Baner.css";

const App = () => {
  return (
    <div className="container">
      <div className="color-bar">
        <div className="yellow-bar"></div>
        <div className="purple-bar"></div>
      </div>
      <div className="content">
        <div className="section">
          <h3>About Us</h3>
          <p>
            We are a community of content writers who share their learnings.
          </p>
          <p>
            Leaders, experts, and learners come together to discuss ideas and
            insights to inspire professional growth.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="section">
          <h3>What We Do</h3>
          <p>Creating valuable content for creatives all around the world.</p>
          <p>
            Be it a blog, article, research paper, or opinion piece, we aim to
            provide well-researched and engaging information to our readers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
