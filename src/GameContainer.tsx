import React from 'react';

const GameContainer = () => {

  const webAlert = (message:any) => {
    alert(message);
  }

  return (
    <div className="flex-container">
      <div className="game-button">
        <button onClick={() => webAlert("Debug: updateDatabase(sessionID, gameID, player, \"rock\")")}>Rock</button>
      </div>
      <div className="game-button">
        <button onClick={() => webAlert("Debug: updateDatabase(sessionID, gameID, player, \"paper\")")}>Paper</button>
      </div>
      <div className="game-button">
        <button onClick={() => webAlert("Debug: updateDatabase(sessionID, gameID, player, \"scissors\")")}>Scissors</button>
      </div>
    </div>
  )
};

export default GameContainer;