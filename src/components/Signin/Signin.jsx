import React, { useContext, useState } from "react";

//images

import { Context } from "../ContextFun";
//styles
import "./signin.scss";

function Signin() {
    
  let { openRegister, setOpenRegister } = useContext(Context);

  return (
    <div className="main-container">
      {openRegister && (
        <div className="container">
          <div className="your-account">
            <div className="close">
              <h2 className="close-icon" onClick={() => setOpenRegister(false)}>X</h2>
              <h2>CLOSE</h2>
            </div>
            <div className="heading">
              <h1>Your Account</h1>
              <div className="accounts">
                <h3 className="signin">Sign In</h3>
                <h3 className="signup">Create an Account</h3>
              </div>
            </div>
            <form>
              <input type="email" name="email" />
              <input type="password" name="password" />
              {/* <Link><h4>Forgotten your password?</h4></Link> */}
              <button>LOGIN</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signin;
