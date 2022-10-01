import React from "react";
import "./action.css";

const action = () => {
  return (
    <div className="action__container">
      <div className="action__bg"></div>
      <div className="action__bg2"></div>
      <div className="action__text">
        <h2>
          Fast integration, so you can <br /> focus on bigger things
        </h2>
        <p>
          Our template library lets you build the DAO tailored to your product’s
          need.
        </p>
        <div className="button__container">
          <button>
            <a href="#">Start Building 🡪</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default action;
