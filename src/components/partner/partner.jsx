import React from "react";
import Partners from "../../img/partner.svg";
import "./partner.css";

const partner = () => {
  return (
    <div className="partner__container">
      <div className="partner__bg"></div>
      <div className="partners">
        <img src={Partners} alt="" />
      </div>
    </div>
  );
};

export default partner;
