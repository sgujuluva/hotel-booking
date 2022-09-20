import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import { data } from "../../data.js"
//styles
import "./rooms.scss";

function Rooms() {
    let [dataState, setDataState] = useState(data)
  return (
    <div className='rooms'>
   <h1>Rooms</h1>
           <div className='roomsContainer'>
                {dataState.map((item, i) => (
                     <div className='rooms-card' key={i}>
                       <a> <img src={item.img} alt="" /></a>
                        <h3>{item.title[0].toUpperCase() + item.title.slice(1)} Room</h3>
                        <h4><ReactStars count={item.rate} size={24} color="#ffc400" /></h4>
                        <button>Explore</button>
                     </div>
                ))}
            </div>
        </div>
  )
}

export default Rooms