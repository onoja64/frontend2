import React from "react";
import Open from "../../img/open.svg";
import Project from "../../img/project.svg";
import Investment from "../../img/investment.svg";
import Social from "../../img/social.svg";
import "./hero.css";
import Border from "../../img/border.svg";
import MultiBorder from "../../img/multiborder.svg";

const hero = () => {
  return (
    <div className="hero__frame">
      <div className="hero__border">
        <img src={Border} alt="" />
        <div className="border__line"></div>
      </div>
      <div className="hero__circle"></div>
      <div className="hero__circle2"></div>
      <div className="hero__container">
        <div className="hero__title">
          <h1>
            The Best Idea <br /> Don't Wait
          </h1>
        </div>
        <div className="hero__details">
          <div className="hero__img">
            <a href="#">
              <img src={Open} alt="" />
            </a>
          </div>
          <div className="hero__text">
            <p>
              Bring open economy and community-driven collaboration to your
              product with our easy-to-integrate solution.
            </p>
          </div>
        </div>
      </div>

      <div className="hero__cards">
        <div className="multi__border">
          <img src={MultiBorder} alt="" />
        </div>
        <div className="hero__card">
          <div className="hero__project">
            <div className="project__img">
              <img src={Project} alt="" />
            </div>
            <div className="project__text">
              <h3>Project</h3>
              <p>
                Creat awareness early, find a team of enthusiasts to start
                building
              </p>
            </div>
          </div>
          <div className="hero__investment">
            <div className="investment__img">
              <img src={Investment} alt="" />
            </div>
            <div className="investment__text">
              <img src={Investment} alt="" />
              <h3>Investment</h3>
              <p>
                Get vote on your project and find investment easier than ever
              </p>
            </div>
          </div>
          <div className="hero__social">
            <div className="social__img">
              <img src={Social} alt="" />
            </div>
            <div className="social__text">
              <img src={Social} alt="" />
              <h3>Social</h3>
              <p>
                Learn from each other, and get best mentorship where you need
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
