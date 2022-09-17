//react lib
import {Routes, Route} from "react-router-dom";
//components
import Home from "../src/components/Home";
import HotelList from "../src/components/HotelList";
import SingleHotel from "./components/SingleHotel";

import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<HotelList/>}/>
      <Route path="/hotels/:id" element={<SingleHotel/>}/>
     </Routes>
    </div>
  );
}

export default App;
