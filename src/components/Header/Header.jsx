import React from 'react'
//images
import Logo from "../../images/hotel-logo.png";
//styles
import "./header.scss"

function Header() {
  return (
    <div>
  <header>
        <img src={Logo} alt="" />
        <div className="right">
        <button>Sign up</button>
        <button>Sign in</button>
        </div>
      </header>
        </div>
  )
}

export default Header
