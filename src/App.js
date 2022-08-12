//react lib
import {Routes, Route} from "react-router-dom";
//components
import Home from "../src/components/Home";
//styles
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="/hotels" element={<HotelList/>}>
      </Route>
     </Routes>
    </div>
  );
}

export default App;
