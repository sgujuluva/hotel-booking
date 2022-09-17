import React from 'react';
import {Link} from "react-router-dom";
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
        <div className="heading">
            <h1>Your Account</h1>
            <div className="accounts">
                <h3 className="signin">Sign In</h3>
                <h3 className="signup">Create an Account</h3>
            </div>
        </div>
        <form >
            <input type="email" name="email"  />
            <input type="password" name="password"  />
            <Link><h4>Forgotten your password?</h4></Link>
            <button>LOGIN</button>
        </form>
    </div>
  )
}

export default Signin