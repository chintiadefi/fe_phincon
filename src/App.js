import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemonList from './pages/MyPokemonList';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PokemonList />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />}  />
        <Route path="/my-pokemon" element={<MyPokemonList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
