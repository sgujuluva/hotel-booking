//react lib
import { Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Header from "./components/Header/Header";
import Rooms from "./components/Rooms/Rooms";
import Single from "./components/Single/Single";


//styles
import "./App.css";

function App() {
  return (
    <div className="App">
     <Header/>    
     <Routes>
      <Route path="/" element = { <Home/>  }/>
      <Route path="/rooms" element = { <Rooms/>  }/>
      <Route path="/single/:id" element = { <Single/>  }/>
     </Routes>

     
    </div>
  );
}

export default App;
