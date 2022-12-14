import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
//images
import Logo from "../../images/hotel-logo.png";
import { Context } from "../ContextFun";
import Signin from "../Signin/Signin";
//styles
import "./header.scss";

function Header() {
  //function to go to sign in page
  let { openRegister, setOpenRegister } = useContext(Context);
  console.log(openRegister);

  return (
    <header>
      <div className="left">
       <Link to={"/"}> <img src={Logo} alt="" /></Link>
      </div>

      <div className="right">
        <button onClick={() => setOpenRegister(true)}>Register</button>
      </div>
    </header>
  );
}

export default Header;
