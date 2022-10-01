import React from "react";
import "./about.css";
import VideoThumbnail from "../../img/video.svg";
import Frame from "../../img/aboutframe.svg";
import Lorem from "../../img/lorem.svg";

const about = () => {
  return (
    <div className="about__container">
      <div className="about__bg"></div>
      <div className="about__bg2"></div>
      <h2>Why Us ?</h2>
      <p>
        Become community-driven to coordinate your effort, make best decisions
        and raise money.
      </p>
      <div className="about__video">
        <img src={VideoThumbnail} alt="" />
      </div>

      <div className="about__work">
        <h2>How We Work</h2>
        <p>
          Great things are born when there’s seamless collaboration and
          transparancy
        </p>

        <div className="about__cards">
          <div className="left__card">
            <h4>Know your resource</h4>
            <p>
              Steer away from uncontrolled spendings by giving budget visibility
              to anyone on the board,
            </p>

            <div className="left__card2">
              <h7>Vote for Initiatives</h7>
              <h8>
                Planing a pilot ? See what the rest of your team and board
                member think of it by using proposal inisiatives.
              </h8>
            </div>
          </div>
          <div className="right__card">
            <div className="card__frame">
              <img src={Frame} alt="" />
            </div>
            <div className="lorem">
              <div className="lorem__container">
                <div className="lorem__title">
                  <img src={Lorem} alt="" />
                  <h3>Lorem Ipsum</h3>
                </div>
                <div className="lorem__text">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>

                <div className="lorem__amount">
                  <h6>Lorem</h6>
                  <h3>$100,000.00</h3>
                </div>

                <div className="lorem__details">
                  <div className="lorem__member">
                    <h6>Member</h6>
                    <h3>100</h3>
                  </div>
                  <div className="lorem__share">
                    <h6>Share</h6>
                    <h3>100</h3>
                  </div>
                  <div className="lorem__loot">
                    <h6>Loot</h6>
                    <h3>100</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
