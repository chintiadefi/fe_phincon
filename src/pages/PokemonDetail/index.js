import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../services/api';
import { PokemonContext } from '../../contexts/PokemonContext';
import Alert from '../../components/Alert';
import Modal from '../../components/Modal';
import styles from './index.module.css';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [alert, setAlert] = useState(false);
  const [modalAddName, setModalAddName] = useState(false);
  const [nickname, setNickname] = useState("");
  const { catchPokemon } = useContext(PokemonContext);

  useEffect(() => {
    getPokemonDetails(id).then(response => {
      setPokemon(response.data);
    });
  }, [id]);

  const handleCatch = () => {
    if (Math.random() < 0.5) {
      setModalAddName(true);
    } else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  };

  const submitNickname = () => {
    if (nickname) {
      catchPokemon({ ...pokemon, nickname });
      setModalAddName(false);
      setNickname("");
    }
  };

  if (!pokemon) return <div className={styles.spinner}></div>;

  return (
    <>
      {alert && 
        <Alert alert={alert} setAlert={setAlert} />
      }
      {
        modalAddName &&
        <Modal title="You caught the Pokemon! Give it a nickname:" setModal={setModalAddName}>
          <input className={styles['input-name']} type="text" id="nickname" name="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} /><br />
          <div className={styles.submit}>
            <button className={styles.button} onClick={submitNickname}>Save</button>
          </div>
        </Modal>
      }
      <div className={styles.container}>
        <div className={styles['pokemon-detail']}>
          <div className={styles['container-img']}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div className={styles['container-title']}>
            <h1>{pokemon.name}</h1>
          </div>
          <div className={styles['container-detail']}>
            <p><b>Types:</b> {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p><b>Moves:</b> {pokemon.moves.map(move => move.move.name).join(', ')}</p>
          </div>
          <button className={styles.button} onClick={handleCatch}>Catch</button>
        </div>
      </div>
    </>
  );
}

export default PokemonDetail;
