import React, { useContext, useState } from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import PokemonCard from '../../components/PokemonCard';
import Modal from '../../components/Modal';
import styles from './index.module.css';

const MyPokemonList = () => {
  const { caughtPokemons, releasePokemon, renamePokemon } = useContext(PokemonContext);

  const [modalRename, setModalRename] = useState(false);
  const [nickname, setNickname] = useState("");
  const [newNickname, setNewNickname] = useState("");

  const handleRelease = (nickname) => {
    releasePokemon(nickname);
  };

  const handleRename = (nickname) => {
    setNickname(nickname);
    setNewNickname(nickname);
    setModalRename(true);
  };

  const submitRename = () => {
    if (newNickname) {
      renamePokemon(nickname, newNickname);
      setModalRename(false);
      setNewNickname("");
    }
  };

  return (
    caughtPokemons.length > 0 ?
    <>
      {
        modalRename &&
        <Modal title="Enter new nickname:" setModal={setModalRename}>
          <input className={styles['input-name']} type="text" id="nickname" name="nickname" value={newNickname} onChange={(e) => setNewNickname(e.target.value)} /><br />
          <div className={styles.submit}>
            <button className={styles.button} onClick={submitRename}>Save</button>
          </div>
        </Modal>
      }
      <div className={styles.container}>
        {caughtPokemons.map(pokemon => (
          <div key={pokemon.nickname} >
            <PokemonCard nickname={pokemon.nickname} name={pokemon.name} image={pokemon.sprites.front_default} />
            <div className={styles['container-btn']}>
              <button className={styles.button} onClick={() => handleRename(pokemon.nickname)}>Rename</button>
              <button className={styles.button} onClick={() => handleRelease(pokemon.nickname)}>Release</button>
            </div>
          </div>
        ))}
      </div>
    </>
    :
    <div className={styles['empty-container']}>
      <h2>You don't have a Pokemon yet</h2>
    </div>
  );
}

export default MyPokemonList;
