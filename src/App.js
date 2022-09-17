//react lib
import {Routes, Route} from "react-router-dom";
//components
import Logo from "./images/hotel-logo.png"
//styles
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={Logo} alt="" />
        <div className="right">
        <button>Sign up</button>
        <button>Sign in</button>
        </div>
      </header>
      <h1>Hello</h1>
      <p>Hello</p>
      <div className="box"></div>
      <button>Reserve</button>
    </div>
  );
}

export default App;
