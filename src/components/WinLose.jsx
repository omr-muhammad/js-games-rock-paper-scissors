import { useEffect } from "react";
import { useWindowWith } from "../hooks/useWindowWith";
import Card from "./Card";

const odds = {
  rock: {
    win: ["scissors", "lizard"],
  },
  paper: {
    win: ["rock", "spock"],
  },
  scissors: {
    win: ["paper", "lizard"],
  },
  lizard: {
    win: ["paper", "spock"],
  },
  spock: {
    win: ["rock", "scissors"],
  },
};

export default function WinLose({
  playerChoosed,
  comChoose,
  playAgain,
  updateScore,
}) {
  const width = useWindowWith();
  const lt780 = width < 780;
  const result =
    playerChoosed.id === comChoose?.id
      ? "Draw"
      : odds[playerChoosed?.id].win.includes(comChoose?.id)
      ? "YOU WIN"
      : "YOU LOSE";

  const winningShadow =
    "0 0 0 45px rgba(255, 255, 255, 0.1), 0 0 0 90px rgba(255, 255, 255, 0.1), 0 0 0 150px rgba(255, 255, 255, 0.1)";

  useEffect(() => {
    if (comChoose?.id) {
      if (result === "YOU WIN") {
        updateScore(1);
      } else if (result === "YOU LOSE") {
        updateScore(-1);
      }
    }
  }, [comChoose?.id]);

  return (
    <>
      <div className="win-lose">
        <Card
          {...playerChoosed}
          shadow={
            result === "YOU WIN"
              ? `${playerChoosed.shadow}, ${winningShadow}`
              : playerChoosed.shadow
          }
        />
        {!lt780 && comChoose && (
          <div>
            <h3 className="result-title">{result}</h3>
            <button className="play-again" onClick={playAgain}>
              play again
            </button>
          </div>
        )}
        {!comChoose ? (
          <div className="placeholder"></div>
        ) : (
          <Card
            {...comChoose}
            shadow={
              result === "YOU LOSE"
                ? `${comChoose.shadow}, ${winningShadow}`
                : comChoose.shadow
            }
          />
        )}
      </div>
      {lt780 && comChoose && (
        <div>
          <h3 className="result-title">{result}</h3>
          <button className="play-again" onClick={playAgain}>
            play again
          </button>
        </div>
      )}
    </>
  );
}
