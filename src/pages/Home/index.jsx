import React from 'react';


import Header from '../../components/Header'
import Slider from '../../components/Slider'
import LastPokemons from '../../components/LastPokemons'
import PokemonSlider from '../../components/PokemonSlider'
import Main from '../../components/Main'
import Footer from '../../components/Footer'


const Home = () => {

  return (
    <>
      <Header />

      <Slider />

      <LastPokemons />

      <PokemonSlider />

      <Main />

      <Footer />
    </>
  )
}

export default Home;
