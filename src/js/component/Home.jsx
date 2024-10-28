import React, { useState } from 'react';

const Home = ({ startGame }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [weapon, setWeapon] = useState(null);

  const handleWeaponClick = (weaponChoice) => {
    setWeapon(weaponChoice);
  };

  const handleStartGame = () => {
    if (player1 && player2 && weapon) {
      startGame(weapon); 
    } else {
      alert('You must enter both player names and choose a weapon.');
    }
  };

  return (
    <div style={styles.homeScreen}>
      <h1>Tic Tac Toe in React.js</h1>
      <h2>Pick A Weapon</h2>
      <div style={styles.weaponSelection}>
        <div style={styles.inputGroup}>
          <label>Player 1:</label>
          <input
            type="text"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
            placeholder="Player 1 username"
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Player 2:</label>
          <input
            type="text"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
            placeholder="Player 2 username"
          />
        </div>
        <div style={styles.weapons}>
          <div
            style={{
              ...styles.weapon,
              ...(weapon === 'X' ? styles.selectedWeapon : {}),
            }}
            onClick={() => handleWeaponClick('X')}
          >
            X
          </div>
          <div
            style={{
              ...styles.weapon,
              ...(weapon === 'O' ? styles.selectedWeapon : {}),
            }}
            onClick={() => handleWeaponClick('O')}
          >
            O
          </div>
        </div>
        <button style={styles.button} onClick={handleStartGame}>
          Start Game
        </button>
      </div>
    </div>
  ); 
};

const styles = {
  homeScreen: {
    textAlign: 'center',
    backgroundColor: '#3b3b3b',
    color: 'white',
    padding: '50px',
    borderRadius: '8px',
    width: '400px',
    margin: 'auto',
  },
  weaponSelection: {
    marginTop: '20px',
  },
  inputGroup: {
    margin: '10px 0',
  },
  weapons: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
  },
  weapon: {
    fontSize: '24px',
    cursor: 'pointer',
    padding: '10px',
    border: '1px solid #fff',
    borderRadius: '5px',
    width: '50px',
    textAlign: 'center',
  },
  selectedWeapon: {
    backgroundColor: '#444',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#5a5a5a',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
};

export default Home;
