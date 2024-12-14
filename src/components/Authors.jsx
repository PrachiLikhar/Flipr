import React from "react";
import { assets } from "../assets/assets";
import "./Authors.css";

const authors = [
  {
    name: "Floyd Miles",
    designation: "Editor at Wikitimes",
    image: assets.manyellow, // Replace with actual image URLs
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Dianne Russell",
    designation: "Editor at Wikitimes",
    image: assets.fashion,

    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Jenny Wilson",
    designation: "Editor at Wikitimes",
    image: assets.women, // Replace with actual image URLs
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Leslie Alexander",
    designation: "Editor at Wikitimes",
    image: assets.content, // Replace with actual image URLs
    social: {
      image: assets.Negative,
      twitter: "#",
      instagram: "#",
    },
  },
];

const AuthorCard = ({ author }) => (
  <div className="author-card">
    <img src={author.image} alt={author.name} />
    <h3>{author.name}</h3>
    <p>{author.designation}</p>
    <div className="social-links">
      <a href={author.social.facebook}>Facebook</a>
      <a href={author.social.twitter}>Twitter</a>
      <a href={author.social.instagram}>Instagram</a>
    </div>
  </div>
);

const AuthorList = () => (
  <div className="author-list-container">
    <h2>List of Authors</h2>
    <div className="author-list-grid">
      {authors.map((author, index) => (
        <AuthorCard key={index} author={author} />
      ))}
    </div>
  </div>
);

export default AuthorList;
