import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import SlidePokemons from '../SlidePokemons';

import pokeballImg from '../../assets/pokeball.svg';
import pikachuImg from '../../assets/pikachu.svg';

import { MainContent } from './styles';

const Main = () => {
  const pokemonNames = ['pikachu', 'ivysaur', 'bulbasaur', 'charizard'];
  const [pokemons, setPokemons] = useState([]);

  async function getPokemons() {

    try {
      //Array de promessas para os pokemons definidos
      const promises = pokemonNames.map(pokemon => api.get(`/pokemon/${pokemon}`));

      //Resolvendo todas as promessas
      const response = await Promise.all(promises);

      const pokemonData = response.map((response) => ({
        //Aqui o id serve para a usar como key e para requisitar a imagem
        id: response.data.id,
        name: response.data.name,
        avatar: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png`,
      }));

      setPokemons(pokemonData);

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <MainContent>
      <div className="pokemons-list">
        {
          pokemons.map(pokemon => (
            <div key={pokemon.id} className="poke-wrap">
              <SlidePokemons
                name={pokemon.name}
                imageUrl={pokemon.avatar} />
            </div>
          ))
        }
      </div>

      <div className="text-content">
        <h1>Teste frontend</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, a lacus, aliquam mattis est enim, molestie diam. Consequat blandit nec, venenatis dignissim suspendisse in facilisi molestie duis.
        Tempor sed quis phasellus arcu, posuere.
        Elementum ut tellus nisi, nunc ac etiam ut lectus porta.
        Et morbi enim vestibulum sodales sed ullamcorper dapibus accumsan.
        Faucibus pharetra, et at orci, vel blandit odio. Volutpat urna fusce quisque libero pellentesque in.
        Augue tempor vitae ullamcorper bibendum.
          </p> <br />
        <p>Quis facilisi nulla id est natoque sed ut consectetur. Id eleifend eros ullamcorper et. Diam, ultrices pellentesque urna, integer a lectus. Sit sollicitudin ac egestas amet netus. Elit vitae dolor cursus cursus. </p>

        <button>Call to action</button>
      </div>
      <img src={pokeballImg} alt="Pokeball" id="pokeball" />
      <img src={pikachuImg} alt="Pikachu" id="pikachu" />
    </MainContent>
  )
}

export default Main;
