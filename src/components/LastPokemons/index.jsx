import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Pokemon from '../Pokemon';

import { PokeList } from './styles';

const LastPokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const limit = 6; //Limite de pokemons a serem requisitados


  useEffect(() => {
    api.get(`/pokemon?limit=${limit}`).then(response => {
      const pokemonsData = response.data.results.map((pokemon, index) => ({
        //Aqui o id serve para a usar como key e para requisitar a imagem
        id: index,
        name: pokemon.name,
        avatar: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`,
      }));

      setPokemons(pokemonsData);
    });
  }, []);


  return (
    <PokeList>
      <h1>Últimos pokemons</h1>
      <div className="pokemon-wrapper">
        {pokemons.map(pokemon => (
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            imageUrl={pokemon.avatar}
          />
        ))}

      </div>
    </PokeList>
  );
}

export default LastPokemons;
