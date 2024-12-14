import React from "react";
import "./Category.css"; // CSS file for styling

const categories = [
  {
    title: "Business",
    description: "Learn tips to scale up business efficiently.",
    icon: "path/to/business-icon.svg", // Replace with actual path
  },
  {
    title: "Startup",
    description: "Learn how to kick start a startup.",
    icon: "path/to/startup-icon.svg", // Replace with actual path
    highlighted: true,
  },
  {
    title: "Economy",
    description: "Understand economic trends and analysis.",
    icon: "path/to/economy-icon.svg", // Replace with actual path
  },
  {
    title: "Technology",
    description: "Discover innovative tech solutions.",
    icon: "path/to/technology-icon.svg", // Replace with actual path
  },
];

const Category = () => {
  return (
    <div className="category-container">
      <h2>Choose A Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-card ${
              category.highlighted ? "highlighted" : ""
            }`}
          >
            <img src={category.icon} alt={`${category.title} icon`} />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
