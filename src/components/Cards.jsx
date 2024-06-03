import Card from "./Card";

const fullGame = [
  {
    url: "/icon-paper.svg",
    background: "linear-gradient(var(--paper-grad))",
    shadow: "0 7px 0 0 var(--paper-shadow)",
  },
  {
    url: "/icon-scissors.svg",
    background: "linear-gradient(var(--scissors-grad))",
    shadow: "0 7px 0 0 var(--scissors-shadow)",
  },
  {
    url: "/icon-rock.svg",
    background: "linear-gradient(var(--rock-grad))",
    shadow: "0 7px 0 0 var(--rock-shadow)",
  },
  {
    url: "/icon-lizard.svg",
    background: "linear-gradient(var(--paper-grad))",
    shadow: "0 7px 0 0 var(--paper-shadow)",
  },
  {
    url: "/icon-spock.svg",
    background: "linear-gradient(var(--cayn-grad))",
    shadow: "0 7px 0 0 var(--cayn-shadow)",
  },
];

export default function Cards({ gameStatus }) {
  const cards = gameStatus === "simple" ? fullGame.slice(0, 3) : fullGame;
  const backgroundImg =
    gameStatus === "simple" ? "/bg-triangle.svg" : "/bg-pentagon.svg";
  return (
    <div className="game">
      <img
        className="bg-img"
        src={backgroundImg}
        alt={backgroundImg.slice(4, -3)}
      />
      {cards.map((card) => (
        <Card key={card.url} {...card} gameStatus={gameStatus} />
      ))}
    </div>
  );
}
