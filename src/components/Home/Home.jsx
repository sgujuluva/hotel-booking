import React from 'react'
//components
import Header from '../Header/Header'
import Signin from '../Signin/Signin';
//styles
import "./home.scss";

function Home() {
  return (
    <div className="home-page">
         <Header />
         <div className="banner"></div>
       {/*  <Signin/> */}
        </div>
  )
}

export default Home