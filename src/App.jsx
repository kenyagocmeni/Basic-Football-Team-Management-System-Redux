import './App.css'
import React from 'react'
import AddPlayerForm from './components/AddPlayerForm';
import PlayerList from './components/PlayerList';
import MatchList from "./components/MatchList";
import AddMatchForm from './components/AddMatchForm';

function App() {

  return (
    <div>
      <h1>Futbol Kulübü Yönetimi</h1>
      <div>
        <h2>Kadro Yönetimi</h2>
        <AddPlayerForm/>
        <PlayerList/>
      </div>
      <div>
        <h2>Maç Yönetimi</h2>
        <AddMatchForm/>
        <MatchList/>
      </div>
    </div>
  );
};

export default App;