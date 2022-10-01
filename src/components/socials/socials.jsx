import React from "react";
import "./socials.css";
import Discord from "../../img/discord.svg";
import Substack from "../../img/substack.svg";
import Github from "../../img/github.svg";

const socials = () => {
  return (
    <div className="socials__container">
      <div className="socials__text">
        <h2>
          We strive to help ambitious teams benefit from open economy and
          seamless cooperation
        </h2>
        <p>We are is created and being manage promarily with DAO structure.</p>
      </div>

      <div className="socials__cards">
        <div className="socials__discord">
          <div className="discord__img">
            <img src={Discord} alt="" />
          </div>
          <div className="discord__text">
            <h3>Discord</h3>
            <p>Find DAAO best practices, help others, maake connections</p>
            <button className="button__secondary">
              <a href="/" alt="" target="_blank">
                Learn More 🡪
              </a>
            </button>
          </div>
        </div>

        <div className="socials__substack">
          <div className="substack__img">
            <img src={Substack} alt="" />
          </div>
          <div className="substack__text">
            <h3>Substack</h3>
            <p>Get the lasst info on what’s popping in the DAO wold.</p>
            <button className="button__secondary">
              <a href="/" alt="" target="_blank">
                Learn More 🡪
              </a>
            </button>
          </div>
        </div>

        <div className="socials__github">
          <div className="github__img">
            <img src={Github} alt="" />
          </div>

          <div className="github__text">
            <h3>Github</h3>
            <p>Find DAAO best practices, help others, maake connections</p>
            <button className="button__secondary">
              <a href="/" alt="" target="_blank">
                Learn More 🡪
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default socials;
