import React, { useState } from 'react';

export default function Game({ selectedWeapon }) {
  const [squareValues, setSquareValues] = useState(Array(9).fill(""));
  const [currPlayer, setCurrPlayer] = useState(selectedWeapon);
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const currentMove = (index) => {
    if (squareValues[index] || winner) return;

    let newValues = [...squareValues];
    newValues[index] = currPlayer;
    setSquareValues(newValues);

    if (checkForWinner(newValues)) {
      setWinner(currPlayer);
    } else {
      setCurrPlayer(currPlayer === "X" ? "O" : "X");
    }
  };

  const checkForWinner = (squares) => {
    for (let combination of winningCombinations) {
      let count = 0;

      for (let index of combination) {
        if (squares[index] === currPlayer) {
          count++;
        }
      }

      if (count === 3) {
        return true;
      }
    }
    return false;
  };

  const handleReset = () => {
    setSquareValues(Array(9).fill(""));
    setCurrPlayer(selectedWeapon);
    setWinner(null);
  };

  return (
    <div className="Game">
      <h1>Tic Tac Toe in React.js</h1>
      <h2>{winner ? `Winner: ${winner}` : `It is ${currPlayer} turn!`}</h2>
      <div className="board">
        {squareValues.map((value, index) => (
          <div
            key={index}
            onClick={() => currentMove(index)}
            className={`cell ${index === 1 || index === 4 || index === 7 ? "vertical-border" : ""} ${index >= 3 && index <= 5 ? "horizontal-border" : ""}`}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={handleReset} className="reset-button">Reset Game</button>

      <style jsx>{`
        .Game {
          text-align: center;
        }
        .board {
          display: grid;
          grid-template-columns: repeat(3, 60px);
          grid-template-rows: repeat(3, 60px);
          margin: 20px auto;
          justify-content: center;
        }
        .cell {
          width: 60px;
          height: 60px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          cursor: pointer;
          background-color: lightgray;
        }
        .vertical-border {
          border-left: 3px solid black;
          border-right: 3px solid black;
        }
        .horizontal-border {
          border-top: 3px solid black;
          border-bottom: 3px solid black;
        }
        .reset-button {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
