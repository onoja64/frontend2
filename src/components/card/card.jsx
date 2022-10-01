import React from "react";
import Circles from "../../img/circle.svg";
import Card from "../../img/card.svg";
import "./card.css";
const card = () => {
  return (
    <div className="card__container">
      <div className="card">
        <img src={Card} alt="" />
      </div>
      <div className="card__cards">
        <div className="card__left">
          <h2>Build Amazing things together</h2>
          <p>
            Fringe helped 100+ projects to raise and distribute over $70M,
            structure teams, and drive their products towardss a market success
          </p>
          <button>
            <a href="#">About Us 🡪</a>
          </button>
        </div>
        <div className="card__right">
          <img src={Circles} alt="" />
        </div>
      </div>
      <div className="card__right2">
        <img src={Circles} alt="" />
      </div>
    </div>
  );
};

export default card;
