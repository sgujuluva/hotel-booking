import React,{createContext, useState} from 'react'
export let Context = createContext();

function ContextFun(props) {
  let [openRegister,setOpenRegister] = useState(false);

  return (
    <Context.Provider value={{openRegister,setOpenRegister}}>{props.children}</Context.Provider>
  )
}

export default ContextFun