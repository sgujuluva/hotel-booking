import React from 'react'
import Footer from '../Footer/Footer';

//components
import Header from '../Header/Header'
import Signin from '../Signin/Signin';
import TopRooms from '../Top-rooms/TopRooms';
//styles
import "./home.scss";

function Home() {
  return (
    <div className="home-page">
         <Header />
         <div className="banner"></div>        
      <TopRooms />
      <Footer/>
        </div>
  )
}

export default Home