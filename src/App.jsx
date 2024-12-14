import React from "react";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import Baner from "./components/Baner";
import Category from "./components/Category";
import AboutSection from "./components/AboutSection";
import Authors from "./components/Authors";
const App = () => {
  return (
    <div>
      <HeroSection />
      <Feature />
      <Baner />
      <Category />
      <AboutSection />
      <Authors />
    </div>
  );
};

export default App;
