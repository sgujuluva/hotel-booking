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
  
      <div className="right">
       <button>Register</button>
      </div>
    </header>
  );
}

export default Header;
