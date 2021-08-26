import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import cardPic from "../images/img-5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Most Popular Wallpapers</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardPic}
              text="Check this place out"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
