import React from "react";

function Navabr() {
  return (
    <div className="navbar">
      <nav>
        <h1>sunnyside</h1>
        <ul className="navlinks">
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li >
            <a href="#" id="contactBtn">contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navabr;
