import React, { useState } from 'react';
import Home from './Home';
import Game from './Game';

const App = () => {
  const [showGame, setShowGame] = useState(false);
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  const startGame = (weapon) => {
    console.log('Game started with weapon:', weapon); 
    setSelectedWeapon(weapon);
    setShowGame(true);
  };

  return (
    <div>
      {showGame ? (
        <Game selectedWeapon={selectedWeapon} />
      ) : (
        <Home startGame={startGame} /> 
      )}
    </div>
  );
};

export default App;
