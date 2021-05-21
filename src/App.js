import React, { useState } from "react";
import "./App.css";
import { NAME, SCORE, RANGE, ENTER } from "./constants";
import { cloneDeep } from "lodash";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [text, setText] = useState();

  const updatePlayerDetails = (property, value, playerId) => {
    let updatedPlayers = cloneDeep(players);
    switch (property) {
      case NAME:
        updatedPlayers.push({ name: value, score: 0, range: 1 });
        setText("");
        break;
      case SCORE:
        updatedPlayers[playerId].score += updatedPlayers[playerId].range;
        break;
      case RANGE:
        updatedPlayers[playerId].range = value && parseInt(value);
        break;
      default:
        break;
    }

    setPlayers(updatedPlayers);
  };

  return (
    <div className="App">
      <h1>Score Board</h1>
      <div className="grid">
        <div className="row">
          <input
            onChange={(event) => setText(event.target.value)}
            onKeyPress={({ code }) =>
              code === ENTER && updatePlayerDetails(NAME, text)
            }
            value={text}
            maxLength="25"
            placeholder="Enter Name"
          />
          <button onClick={() => updatePlayerDetails(NAME, text)}>
            Add Name
          </button>
        </div>
        {players.map((player, index) => (
          <div className="row">
            <span>
              {player.name}: {player.score}
            </span>
            <div>
              <input
                type="number"
                onChange={(event) =>
                  updatePlayerDetails(RANGE, event.target.value, index)
                }
                value={player.range}
                className="input-range"
                maxLength="3"
              />
              <button
                onClick={() => updatePlayerDetails(SCORE, player.range, index)}
                className="score-btn"
              >
                Add Score
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
