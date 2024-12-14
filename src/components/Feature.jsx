import React from "react";
import { assets } from "../assets/assets";
import "./Feature.css"; // Custom CSS for styling

const App = () => {
  return (
    <div className="container">
      <div className="featured-post">
        <h2>Featured Post</h2>
        <div className="post">
          <img
            src={assets.white} // Replace with actual image URL
            alt="Featured"
            className="featured-image"
          />
          <div className="post-content">
            <p className="post-author">By John Doe | May 15, 2023</p>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h3>
            <p>
              Sed quis malesuada lorem. Ut nec neque euismod, euismod urna eu,
              accumsan justo.
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
      <div className="all-posts">
        <h2>All Posts</h2>
        <ul>
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className={index === 1 ? "highlighted" : ""}>
              <p className="post-author">By Admin | April 2023</p>
              <h4>
                8 Figma design systems that you can download for free today.
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
