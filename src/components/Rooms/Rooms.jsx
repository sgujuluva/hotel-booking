import React, { useContext, useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { data } from "../../data.js"
import { Context } from '../ContextFun.jsx';
//styles
import "./rooms.scss";

function Rooms() {
  const { selectDate, setSelectDate } = useContext(Context);

  // single from 1.10 to 5.10

  // selectDate 1.10 to 5.10

let [reservedText,setReservedText] = useState(``)

  let [dataState, setDataState] = useState(data)
  let reserved = dataState.filter(item => !item.from >= selectDate.from && !item.to <= selectDate.to)
  console.log(reserved);
  let handleReserved = () => {
    dataState.map(item => {
      if (selectDate.from < item.from) {
        setReservedText(`This Room is available till ${item.from}`)
      } else if (selectDate.from > item.from) {
        setReservedText(`This Room is available till ${item.to}`)        
      } else if (selectDate.to < item.to) {
        setReservedText(`This Room is Reserved till ${item.to}`)                
      } else if (selectDate.to > item.to) {
        setReservedText(`This Room is Available from ${item.to}`)                
      } else {
        setReservedText(`This Room is Available `)                        
      }
    })
  }
  
  useEffect(() => {
    handleReserved()
},[])



  return (
    <div className='rooms'>
      
   <h1>Rooms</h1>
           <div className='roomsContainer'>
                {dataState.map((item, i) => (
                     <div className='rooms-card' key={i}>
                       <a className='anchor-img'> <img src={item.img} alt="" /></a>
                        <h3>{item.title[0].toUpperCase() + item.title.slice(1)} Room</h3>
                    <h4><ReactStars count={item.rate} size={24} color="#ffc400" /></h4>
                    <h5>{ reservedText}</h5>
                        <Link  to = {`/single/${item.id}`}><button>Explore</button></Link>
                     </div>
                ))}
            </div>
        </div>
  )
}

export default Rooms