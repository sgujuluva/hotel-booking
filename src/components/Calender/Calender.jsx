import React from 'react'
import { useContext } from 'react'
import { Context } from '../ContextFun'
import {useNavigate} from "react-router-dom"


function Calender() {

const navigate = useNavigate();

    const {selectDate, setSelectDate} = useContext(Context);

    const handleChange = (e) => {
        setSelectDate({...selectDate, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
e.preventDefault();
navigate("/rooms");
    }


  return (
    <div className='calender'>
    <div className="calender-container">
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder='Enter the Start Date...' type="date" name="from" id="" />
            <input onChange={handleChange} placeholder='Enter the End Date...' type="date" name="to" id="" />
        <button>Show</button>
        </form>
    </div>
        </div>
  )
}

export default Calender 