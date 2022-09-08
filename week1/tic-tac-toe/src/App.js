import {useState} from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(true);

  const handleClick = () => {
    setSquares(["","","","","","","","",""]);
    setPlayer(true);
  };

  return (
    <div className="App">
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square 
            setSquares={setSquares}
            setPlayer={setPlayer}
            index={index}
            squareValue={val}
            squares={squares}
            player={player}
            />
          )
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
