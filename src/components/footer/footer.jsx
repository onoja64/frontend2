import React from "react";
import Discord from "../../img/footerdiscord.svg";
import Substack from "../../img/footersubstack.svg";
import Github from "../../img/footergithub.svg";
import Twitter from "../../img/twitter.svg";
import Border from "../../img/footerborder.svg";
import "./footer.css";

const footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="left__footer">
          <h2>Logo</h2>
          <p>Build by the amaazing community at Here</p>
        </div>
        <div className="right__footer">
          <ul>
            <li>
              <a href="">Platform</a>
            </li>
            <li>
              <a href="">Token</a>
            </li>

            <li>
              <a href="">Marketplace</a>
            </li>

            <li>
              <a href="">Docs</a>
            </li>

            <li>
              <a href="">Community</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Branding</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <div className="footer__socials">
            <img src={Discord} alt="" />

            <img src={Substack} alt="" />

            <img src={Github} alt="" />

            <img src={Twitter} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="github__img">
          <img src={Border} alt="" />
        </div>
        <p> © 2022 Copyright. All rights reserved.</p>
      </div>
    </div>
  );
};

export default footer;
