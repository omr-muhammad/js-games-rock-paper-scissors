import { useState } from "react";
import Card from "./Card";
import WinLose from "./WinLose";

const fullGame = [
  {
    id: "paper",
    url: "/icon-paper.svg",
    background: "linear-gradient(var(--paper-grad))",
    shadow: "0 7px 0 0 var(--paper-shadow)",
  },
  {
    id: "scissors",
    url: "/icon-scissors.svg",
    background: "linear-gradient(var(--scissors-grad))",
    shadow: "0 7px 0 0 var(--scissors-shadow)",
  },
  {
    id: "rock",
    url: "/icon-rock.svg",
    background: "linear-gradient(var(--rock-grad))",
    shadow: "0 7px 0 0 var(--rock-shadow)",
  },
  {
    id: "lizard",
    url: "/icon-lizard.svg",
    background: "linear-gradient(var(--paper-grad))",
    shadow: "0 7px 0 0 var(--paper-shadow)",
  },
  {
    id: "spock",
    url: "/icon-spock.svg",
    background: "linear-gradient(var(--cayn-grad))",
    shadow: "0 7px 0 0 var(--cayn-shadow)",
  },
];

export default function Cards({ gameStatus }) {
  const [isStart, setIsStart] = useState(false);
  const [playerChoosed, setPlayerChoosed] = useState(null);
  const [comChoose, setComChoose] = useState(null);
  const cards = gameStatus === "simple" ? fullGame.slice(0, 3) : fullGame;
  const backgroundImg =
    gameStatus === "simple" ? "/bg-triangle.svg" : "/bg-pentagon.svg";

  function handlePlayerChoosed(index) {
    setPlayerChoosed(fullGame[index]);
  }

  function getComputerChoose() {
    setTimeout(() => {
      const random = Math.floor(
        Math.random() * (gameStatus === "simple" ? 3 : 5)
      );
      setComChoose(fullGame[random]);
    }, 3000);
  }

  function playAgain() {
    setIsStart(false);
    setPlayerChoosed(null);
    setComChoose(null);
  }

  return (
    <div className={`game ${isStart ? "flex" : ""}`}>
      {!isStart ? (
        <>
          <img
            className="bg-img"
            src={backgroundImg}
            alt={backgroundImg.slice(4, -3)}
          />

          {cards.map((card, i) => (
            <Card
              key={card.url}
              {...card}
              index={i}
              gameStatus={gameStatus}
              handlePlayerChoosed={handlePlayerChoosed}
              setIsStart={setIsStart}
              getComputerChoose={getComputerChoose}
            />
          ))}
        </>
      ) : (
        <WinLose
          // key={playerChoosed}
          playAgain={playAgain}
          playerChoosed={playerChoosed}
          comChoose={comChoose}
        />
      )}
    </div>
  );
}
