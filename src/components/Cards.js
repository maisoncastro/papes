import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import cardPic from "../images/img-1.jpg";
import cardPic2 from "../images/img-2.jpg";
import cardPic3 from "../images/img-3.jpg";
import cardPic4 from "../images/img-4.jpg";
import cardPic5 from "../images/img-5.jpg";
import cardPic6 from "../images/img-6.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Featured Papes</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardPic}
              text="Pastel Desert"
              label="Nature"
              path="/services"
            />
            <CardItem
              src={cardPic2}
              text="Contemplation"
              label="Nature"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardPic3}
              text="Brustialist Structures"
              label="Architecture"
              path="/services"
            />
            <CardItem
              src={cardPic5}
              text="Bliss Scenery"
              label="Nature"
              path="/products"
            />
            <CardItem
              src={cardPic6}
              text="Gloomy Urbanization"
              label="Cityscape"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
