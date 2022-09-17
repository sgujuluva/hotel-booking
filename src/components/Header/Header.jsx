import React from "react";
//images
import Logo from "../../images/hotel-logo.png";
//styles
import "./header.scss";

function Header() {
//function to go to sign in page
  const handleRegister = () => {

  }

  return (
    <header>
        <div className="left">
        <img src={Logo} alt="" />
        </div>
  
      <div className="right">
       <button onClick = {handleRegister}>Register</button>
      </div>
    </header>
  );
}

export default Header;
