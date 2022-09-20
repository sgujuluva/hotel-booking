import React,{createContext, useState} from 'react'
export let Context = createContext();

function ContextFun(props) {
  //regisrtation state
  let [openRegister,setOpenRegister] = useState(false);
//input date
const [selectDate, setSelectDate] = useState({from:"", to :""})

  return (
    <Context.Provider value={{openRegister,setOpenRegister,selectDate, setSelectDate}}>{props.children}</Context.Provider>
  )
}

export default ContextFun