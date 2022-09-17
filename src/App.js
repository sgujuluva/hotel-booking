//react lib
import { Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";


//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home/>  
      <Signin/>    
     
    </div>
  );
}

export default App;
