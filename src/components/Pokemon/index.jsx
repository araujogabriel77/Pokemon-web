import React from 'react';

import { Poke } from './styles';

const Pokemon = ({ name, imageUrl }) => {

  return (
    <Poke>
      <img src={imageUrl} alt={name} />
      <span>{name}</span>
    </Poke>
  );
}

export default Pokemon;
