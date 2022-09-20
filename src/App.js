//react lib
import { Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Header from "./components/Header/Header";
import Rooms from "./components/Rooms/Rooms";


//styles
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header/>    
     <Routes>
      <Route path="/" element = { <Home/>  }/>
      <Route path="/rooms" element = { <Rooms/>  }/>
     </Routes>

     
    </div>
  );
}

export default App;
