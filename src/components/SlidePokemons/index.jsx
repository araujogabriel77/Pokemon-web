import React from 'react';

const SlidePokemons = ({ name, imageUrl }) => {
  return (
    <>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
    </>
  );
}

export default SlidePokemons;
