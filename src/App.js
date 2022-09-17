//react lib
import {Routes, Route} from "react-router-dom";
//components
import Header from "./components/Header/Header";

//styles
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
      <h1>Hello</h1>
      <p>Hello</p>
      <div className="box"></div>
      <button>Reserve</button>
    </div>
  );
}

export default App;
