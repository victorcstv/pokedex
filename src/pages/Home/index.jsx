import React, { useEffect, useState } from 'react';
import './style.css'
import api from '../../services/api';
import logo from '../../assets/pokeball.png';


const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const listPokemons = async () => {
    const data = [];

    for(let i = 1; i <= 150; i++){
      data.push(await api.get(`/pokemon/${i}`));
    }
    
    setPokemons(data);
  }
  useEffect(() => {

    listPokemons();
  }, [])
    
  return (
    <div className="container">

      <div className="header">
        <img src={logo} alt="pokeball"/>
        <h2>pokedex</h2>
      </div>
      
      <div className="content">
        <ul className="pokemons">
          {
            pokemons.length > 0 ?
            pokemons.map((pokemon) => (
              <li className={`card ${pokemon.data.types[0].type.name}`} key={pokemon.data.id}>
                <img className="image" src={pokemon.data.sprites.front_default} alt="pokemon"/>
                <h2 className="title">{pokemon.data.id}. {pokemon.data.name}</h2>
                <h3 className="description">{pokemon.data.types[0].type.name} {pokemon.data.types.length > 1 ? ` | ${pokemon.data.types[1].type.name}` : null}</h3>
              </li>
            ))
            :
            null
          }
        </ul>
      </div>
    </div>
  );
}

export default Home;