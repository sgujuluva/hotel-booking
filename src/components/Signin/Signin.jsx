import React from 'react'
//images
import Close from "../../images/close.png";
//styles
import "./signin.scss";
function Signin() {
  return (
    <div className = "your-account">
        <div className="close">
            <img src={Close} alt="" />
            <h2>CLOSE</h2>
        </div>
    </div>
  )
}

export default Signin