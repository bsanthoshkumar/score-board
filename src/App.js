import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [playersDetails, updatePlayersDetails] = useState([]);
  const [text, setText] = useState();

  const addName = () => {
    if (text === "") return;
    updatePlayersDetails([...playersDetails, { name: text, score: 0 }]);
    setText("");
  };

  const udpateScore = (playerId, score) => {
    const updatedPlayerDetails = playersDetails.map((player, index) =>
      index === playerId ? { ...player, score: player.score + score } : player
    );
    updatePlayersDetails(updatedPlayerDetails);
  };

  return (
    <div className="App">
      <h1>Score Board</h1>
      <div className="grid">
        <div className="row">
          <input
            onChange={(event) => {
              const { value } = event.target;
              setText(value);
            }}
            value={text}
            maxLength="20"
          />
          <button onClick={addName}>Add Name</button>
        </div>
        {playersDetails.map((player, index) => (
          <div className="row">
            <span>
              {player.name}: {player.score}
            </span>
            <button onClick={() => udpateScore(index, 1)}>Add Score</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
