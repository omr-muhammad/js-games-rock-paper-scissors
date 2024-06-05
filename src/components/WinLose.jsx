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

export default function WinLose({ playerChoosed, comChoose, playAgain }) {
  const result =
    playerChoosed.id === comChoose?.id
      ? "Draw"
      : odds[playerChoosed.id].win.includes(comChoose?.id)
      ? "YOU WIN"
      : "YOU LOSE";

  const isPlayerWin = odds[playerChoosed.id].win.includes(comChoose?.id);
  const winningShadow =
    "0 0 0 45px rgba(255, 255, 255, 0.1), 0 0 0 90px rgba(255, 255, 255, 0.1), 0 0 0 150px rgba(255, 255, 255, 0.1)";
  return (
    <>
      <Card
        {...playerChoosed}
        shadow={
          isPlayerWin
            ? `${playerChoosed.shadow}, ${winningShadow}`
            : playerChoosed.shadow
        }
      />
      {comChoose && (
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
            !isPlayerWin
              ? `${comChoose.shadow}, ${winningShadow}`
              : comChoose.shadow
          }
        />
      )}
    </>
  );
}
