import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [playersDetails, updatePlayersDetails] = useState([]);
  const [text, setText] = useState();

  const addName = () => {
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
    <div className="grid">
      {playersDetails.map((player, index) => (
        <div>
          {player.name}: {player.score}
          <button onClick={() => udpateScore(index, 1)}>Add Score</button>
        </div>
      ))}
      <div>
        <input
          onChange={(event) => {
            const { value } = event.target;
            setText(value);
          }}
          value={text}
        />
        <button onClick={addName}>Add Name</button>
      </div>
    </div>
  );
};

export default App;
