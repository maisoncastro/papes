import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import imgCover from "../images/img-4.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={imgCover} alt="" />
      <h1>papes</h1>
      <p>Personal Selection of wallpapers across the internet</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Browse All
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Random
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
