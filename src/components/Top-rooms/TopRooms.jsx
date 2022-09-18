import React,{useState} from 'react'
import { data } from "../../data.js"
import ReactStars from "react-rating-stars-component";
import "./topRooms.scss"
function TopRooms() {
    let [dataState, setDataState] = useState(data)
    let filterTopStars = dataState.filter(item => item.rate === 5)
    let filterKingRooms = dataState.filter(item => item.title === "king")
    let [count, setCount] = useState("")
    console.log(count);
    return (
      <div className='topRooms'>
            <h1>Top Rooms 5 Stars</h1>
           <div className='topContainer'>
                {filterTopStars.map((item, i) => (
                     <div className='card' key={i}>
                       <a> <img src={item.img} alt="" /></a>
                        <h3>{item.title[0].toUpperCase() + item.title.slice(1)} Room</h3>
                        <h4><ReactStars count={item.rate} size={24} color="#ffc400" /></h4>
                        <button>Explore</button>
                     </div>
                ))}
            </div>
            
            <h1>Top King Rooms</h1>
           <div className='topContainer'>
                {filterKingRooms.map((item, i) => (
                     <div className='card' key={i}>
                       <a> <img src={item.img} alt="" /></a>
                        <h3>{item.title[0].toUpperCase() + item.title.slice(1)} Room</h3>
                        <h4><ReactStars onChange={setCount} count={5} value={item.rate} size={24} color="gray" /></h4>
                        <button>Explore</button>

                     </div>
                ))}
           </div>
    </div>
  )
}

export default TopRooms