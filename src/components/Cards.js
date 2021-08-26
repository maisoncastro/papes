import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import cardPic from "../images/img-5.jpg";
import cardPic2 from "../images/img-6.jpg";
import cardPic3 from "../images/img-7.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Most Popular Wallpapers</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardPic}
              text="Bliss v2"
              label="Landscape"
              path="/services"
            />
            <CardItem
              src={cardPic2}
              text="Gloomy Overview"
              label="Landscape"
              path="/services"
            />
            <CardItem
              src={cardPic3}
              text="Through the blinds"
              label="Landscape"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
