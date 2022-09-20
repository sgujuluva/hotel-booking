import React, { useState } from 'react'
import {useParams} from "react-router-dom"
import { data } from '../../data';
//styles
import "./single.scss";

function Single() {
    const {id} = useParams();
  const [dataState, setDataState] = useState(data);
const roomFound = dataState.find(item => item.id == id)
console.log(roomFound)
  return (
    <div className='single'>
        <div className="single-container" >
<img src={roomFound.img} alt="" />
<h1>{roomFound.title[0].toUpperCase() + roomFound.title.slice(1)}</h1>

        </div>
 
        </div>
  )
}

export default Single