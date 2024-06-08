import { useEffect, useState } from "react";

import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

export default function App() {
  const [gameStatus, setGameStatus] = useState("simple");
  const [score, setScore] = useState(Number(localStorage.getItem("score")));

  function updateScore(operator) {
    if (score + operator === 6) {
      console.log("You Lose \nPlay Again");
    } else if (score + operator === 9) {
      console.log("You Win \nPlay Again");
    }

    setScore((prev) => prev + operator);
  }

  useEffect(() => {
    localStorage.setItem("score", "7");
  }, []);

  useEffect(() => {
    localStorage.setItem("score", String(score));
  }, [score]);

  return (
    <div className="game-container">
      <Header gameStatus={gameStatus} score={score} />
      <main>
        <Game gameStatus={gameStatus} updateScore={updateScore} />
      </main>
      <Footer
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
        setScore={setScore}
      />
    </div>
  );
}
