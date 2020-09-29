import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import SlidePokemons from '../SlidePokemons';

import { PokeSlider } from './styles';

const PokemonSlider = () => {
  return (
    <PokeSlider>
      <input type="radio" name="poke" id="p1" defaultChecked />
      <input type="radio" name="poke" id="p2" />
      <input type="radio" name="poke" id="p3" />
      <input type="radio" name="poke" id="p4" />

      <div className="imgContainer" id="poke01">
        <SlidePokemons name="Pikachu" imageUrl="https://pokeres.bastionbot.org/images/pokemon/25.png" />
        <label htmlFor="p4" className="previous"><FaArrowLeft size={28} /></label>
        <label htmlFor="p2" className="next"><FaArrowRight size={28} /></label>
      </div>

      <div className="imgContainer" id="poke02">
        <SlidePokemons name="Ivysaur" imageUrl="https://pokeres.bastionbot.org/images/pokemon/2.png" />
        <label htmlFor="p1" className="previous"><FaArrowLeft size={28} /></label>
        <label htmlFor="p3" className="next"><FaArrowRight size={28} /></label>
      </div>

      <div className="imgContainer" id="poke03">
        <SlidePokemons name="Bulbasaur" imageUrl="https://pokeres.bastionbot.org/images/pokemon/1.png" />
        <label htmlFor="p2" className="previous"><FaArrowLeft size={28} /></label>
        <label htmlFor="p4" className="next"><FaArrowRight size={28} /></label>
      </div>

      <div className="imgContainer" id="poke04">
        <SlidePokemons name="Charizard" imageUrl="https://pokeres.bastionbot.org/images/pokemon/6.png" />
        <label htmlFor="p3" className="previous"><FaArrowLeft size={28} /></label>
        <label htmlFor="p1" className="next"><FaArrowRight size={28} /></label>
      </div>

      <div className="nav">
        <label className="dots" id="dot1" htmlFor="p1"></label>
        <label className="dots" id="dot2" htmlFor="p2"></label>
        <label className="dots" id="dot3" htmlFor="p3"></label>
        <label className="dots" id="dot4" htmlFor="p4"></label>
      </div>
    </PokeSlider>
  );
}

export default PokemonSlider;
