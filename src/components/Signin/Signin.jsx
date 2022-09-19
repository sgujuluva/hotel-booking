import React, { useContext, useState } from "react";
//icons
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
//images

import { Context } from "../ContextFun";
//styles
import "./signin.scss";

function Signin() {
    
  let { openRegister, setOpenRegister } = useContext(Context);
  let [count,setCount] = useState(0)
  return (
    <div className="main-container">
      {openRegister && (
        <div className="container">
          <div className="your-account">
            <div onClick={() => setOpenRegister(false)} className="close">
              {/* <img src={Close} alt="" /> */}
              <h2 className="IX" >X</h2>
              {/* <h2>CLOSE</h2> */}
            </div>
            <div className="heading">
              <h1>Your Account</h1>
              <div className="accounts">
                <h3 onClick={()=>setCount(0)} className={count === 0 && "underline"}>Sign In</h3>
                <h3 onClick={()=>setCount(1)} className={count === 1 && "underline"}>Create an Account</h3>
              </div>
              {count === 0 && (
                 <form>
                 <input placeholder="E-Mail..." type="email" name="email" />
                 <input placeholder="Password..." type="password" name="password" />
                 {/* <Link><h4>Forgotten your password?</h4></Link> */}
                 <button>LOGIN</button>
               </form>
              )}
              {count === 1 && (
                <form>
                  <input placeholder="Username..." type="text" name="username" id="" />
                 <input placeholder="E-Mail..." type="email" name="email" />
                 <input placeholder="Password..." type="password" name="password" />
                 {/* <Link><h4>Forgotten your password?</h4></Link> */}
              <button>SIGN UP</button>
               </form>
              )}
            </div>
           
          </div>
        </div>
      )}
      </div>
  );
}

export default Signin
