import React,{useState} from 'react'
import { data } from "../../data.js"
import ReactStars from "react-rating-stars-component";
import "./topRooms.scss"
import { Link } from 'react-router-dom';
function TopRooms() {
    let [dataState, setDataState] = useState(data)
    let filterTopStars = dataState.filter(item => item.rate === 5)
    let filterKingRooms = dataState.filter(item => item.title === "king")
   
    return (
      <div className='topRooms'>
            <h1>Top Rooms 5 Stars</h1>
           <div className='topContainer'>
                {filterTopStars.map((item, i) => (
                     <div className='card' key={i}>
                       <a className='a-img'> <img src={item.img} alt="" /></a>
                        <h3>{item.title[0].toUpperCase() + item.title.slice(1)} Room</h3>
                        <h4><ReactStars count={item.rate} size={24} color="#ffc400" /></h4>
                        <Link className='link-btn' to={`/single/${item.id}`}><button>Explore</button></Link>
                     </div>
                ))}
            </div>
            
            <h1>Top King Rooms</h1>
           <div className='topContainer'>
                {filterKingRooms.map((item, i) => (
                     <div className='card' key={i}>
                       <a className='a-img'> <img src={item.img} alt="" /></a>
                        <h3>{item.title[0].toUpperCase() + item.title.slice(1)} Room</h3>
                        <h4><ReactStars  count={5} value={item.rate} size={24} color="gray" /></h4>
                        <Link className='link-btn' to={`/single/${item.id}`}><button>Explore</button></Link>

                     </div>
                ))}
           </div>
    </div>
  )
}

export default TopRooms