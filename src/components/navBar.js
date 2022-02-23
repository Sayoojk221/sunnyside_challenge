import React from "react";

function Navabr({setOpen}) {
  return (
    <div className="navbar">
      <nav>
        <h1>sunnyside</h1>
        <ul className="navlinks">
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#gallery">gallery</a>
          </li>
          <li >
            <a href="#" id="contactBtn">contact</a>
          </li>
        </ul>
        <a href="#" id='menu' onClick={()=>setOpen(true)}><img src="/images/icons8-menu.svg" /></a>
      </nav>
      
    </div>
  );
}

export default Navabr;
