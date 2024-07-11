import React from 'react';
import styles from './index.module.css';

const PokemonCard = ({ name, nickname, id, image }) => {
  return (
    <div className={styles['pokemon-card']}>
      <div className={styles.image}>
        <img src={image ?? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      </div>
      <div className={styles['container-name']}>
        {nickname}
      </div>
      <div className={styles['container-name']}>
        {nickname ? `(${name})` : name}
      </div>
    </div>
  );
}

export default PokemonCard;
