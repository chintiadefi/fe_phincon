import React, { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [caughtPokemons, setCaughtPokemons] = useState([]);

  const catchPokemon = (pokemon) => {
    setCaughtPokemons([...caughtPokemons, pokemon]);
  };

  const releasePokemon = (nickname) => {
    setCaughtPokemons(caughtPokemons.filter(p => p.nickname !== nickname));
  };

  const renamePokemon = (nickname, newNickname) => {
    setCaughtPokemons(caughtPokemons.map(p => p.nickname === nickname ? { ...p, nickname: newNickname } : p));
  };

  return (
    <PokemonContext.Provider value={{ caughtPokemons, catchPokemon, releasePokemon, renamePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
