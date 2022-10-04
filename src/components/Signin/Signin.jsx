import React, { useContext, useEffect, useState } from "react";
//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
//images

import { Context } from "../ContextFun";
import axios from "axios";
//styles
import "./signin.scss";

function Signin() {
  let { openRegister, setOpenRegister } = useContext(Context);
  //state to switch between login and create account
  let [count, setCount] = useState(0);
  //state to toggle visible and invisible for password
  let [visible, setVisible] = useState(false);

  let [signUp, setSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });
  let [signIn , setSignIn] = useState({
    email:"",
    password:""
  })
  let [users, setUsers] = useState([]);

  let handleChangeSignUp = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };
  let handleSubmitSignUp = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/user/create", signUp);
    alert("Sign up is successfully done")
    setSignUp({
      username: "",
      email: "",
      password: "",
    });
  };
  let getUser = async () => {
    let res = await fetch("http://localhost:4000/user/get");
    let json = await res.json();
    return json;
  };

  useEffect(() => {
    getUser().then((result) => setUsers(result));
  });

  let handleChangeSignIn = (e) => {
    setSignIn({...signIn,[e.target.name]:e.target.value})
  }
  let handleSubmitSignIn  = (e) => {
    e.preventDefault()
    if(users.some(item => item.email === signUp.email && item.password === signUp.password))  
  }

  return (
    <div className="main-container">
      {openRegister && (
        <div className="container">
          <div className="your-account">
            <div onClick={() => setOpenRegister(false)} className="close">
              <h2 className="IX">X</h2>
            </div>
            <div className="heading">
              <h1>Your Account</h1>
              <div className="accounts">
                <h3
                  onClick={() => setCount(0)}
                  className={count === 0 && "underline"}
                >
                  Sign In
                </h3>
                <h3
                  onClick={() => setCount(1)}
                  className={count === 1 && "underline"}
                >
                  Create an Account
                </h3>
              </div>
              {count === 0 && (
                <form>
                  <input placeholder="E-Mail..." type="email" name="email" />
                  <div className="password">
                    <input
                      placeholder="Password..."
                      type={visible ? "password" : "text"}
                      name="password"
                    />
                    <span onClick={() => setVisible(!visible)}>
                      {!visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                  </div>
                  {/* <Link><h4>Forgotten your password?</h4></Link> */}
                  <button>LOGIN</button>
                </form>
              )}
              {/* ============================================================================== */}
              {count === 1 && (
                <form onSubmit={handleSubmitSignUp}>
                  <input
                    onChange={handleChangeSignUp}
                    placeholder="Username..."
                    type="text"
                    name="username"
                    id=""
                    value={signUp.username}
                  />
                  <input
                    onChange={handleChangeSignUp}
                    placeholder="E-Mail..."
                    type="email"
                    name="email"
                    value={signUp.email}
                  />
                  <div className="password">
                    <input
                      onChange={handleChangeSignUp}
                      placeholder="Password..."
                      type={visible ? "password" : "text"}
                      name="password"
                      value={signUp.password}
                    />
                    <span onClick={() => setVisible(!visible)}>
                      {" "}
                      {!visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                    </span>
                  </div>
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

export default Signin;
