import React from "react";
//images
import Logo from "../../images/hotel-logo.png";
//styles
import "./header.scss";

function Header() {
  return (
    <header>
        <div className="left">
        <img src={Logo} alt="" />
        </div>
    <div className="middle">
        <h1>An SA </h1>
        <h3>Grand Luxury hotels</h3>
    </div>
      <div className="right">
       <button>Sign in</button>
      </div>
    </header>
  );
}

export default Header;
