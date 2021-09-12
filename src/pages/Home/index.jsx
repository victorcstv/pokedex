import React, { useEffect } from 'react';
import './style.css'
import api from '../../services/api';
import logo from '../../assets/pokeball.png'

const Home = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={logo}/>
        <h2>pokedex</h2>
      </div>
      


    </div>
  );
}

export default Home;