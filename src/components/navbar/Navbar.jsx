import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Logo </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
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
          </ul>
          <button className="button__primary n-button">
            <a href="#">Connect Wallet</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
