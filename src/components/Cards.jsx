import Card from "./Card";

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
    background: "linear-gradient(var(--liz-grad))",
    shadow: "0 7px 0 0 var(--liz-shadow)",
  },
  {
    id: "spock",
    url: "/icon-spock.svg",
    background: "linear-gradient(var(--cayn-grad))",
    shadow: "0 7px 0 0 var(--cayn-shadow)",
  },
];

export default function Cards({
  gameStatus,
  setIsStart,
  setPlayerChoosed,
  setComChoose,
}) {
  const cards = gameStatus === "simple" ? fullGame.slice(0, 3) : fullGame;
  const backgroundImg =
    gameStatus === "simple" ? "/bg-triangle.svg" : "/bg-pentagon.svg";

  function handleSelection(index) {
    setPlayerChoosed(fullGame[index]);

    setTimeout(() => {
      const random = Math.floor(
        Math.random() * (gameStatus === "simple" ? 3 : 5)
      );
      setComChoose(fullGame[random]);
    }, 3000);
  }

  return (
    <>
      <img
        className="bg-img"
        src={backgroundImg}
        alt={backgroundImg.slice(4, -4)}
      />

      {cards.map((card, i) => (
        <Card
          key={card.url}
          {...card}
          index={i}
          gameStatus={gameStatus}
          handleSelection={handleSelection}
          setIsStart={setIsStart}
        />
      ))}
    </>
  );
}
