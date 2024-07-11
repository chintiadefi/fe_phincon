import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemons } from '../../services/api';
import PokemonCard from '../../components/PokemonCard';
import styles from './index.module.css';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then(response => {
      setPokemons(response.data.results);
    });
  }, []);

  return (
  <div className={styles.container}>
    {pokemons.map((pokemon, index) => (
      <Link className={styles.link} key={index} to={`/pokemon/${index + 1}`}>
        <PokemonCard name={pokemon.name} id={index + 1} />
      </Link>
    ))}
  </div>
  );
}

export default PokemonList;
