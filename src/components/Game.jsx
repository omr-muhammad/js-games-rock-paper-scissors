import { useState } from "react";

import Cards from "./Cards";
import WinLose from "./WinLose";

export default function Game({ gameStatus, updateScore }) {
  const [isStart, setIsStart] = useState(false);
  const [playerChoosed, setPlayerChoosed] = useState(null);
  const [comChoose, setComChoose] = useState(null);

  function playAgain() {
    setIsStart(false);
    setPlayerChoosed(null);
    setComChoose(null);
  }

  return (
    <div className={`game ${isStart ? "result" : ""}`}>
      {!isStart ? (
        <Cards
          gameStatus={gameStatus}
          setComChoose={setComChoose}
          setIsStart={setIsStart}
          setPlayerChoosed={setPlayerChoosed}
        />
      ) : (
        <WinLose
          playAgain={playAgain}
          playerChoosed={playerChoosed}
          comChoose={comChoose}
          updateScore={updateScore}
        />
      )}
    </div>
  );
}
