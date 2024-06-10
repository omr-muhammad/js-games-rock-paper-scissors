import { useEffect, useState } from "react";

import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

export default function App() {
  const [gameStatus, setGameStatus] = useState("simple");
  const [score, setScore] = useState(7);

  function updateScore(operator) {
    setScore((prev) => prev + operator);

    if (score + operator === 0) {
      setTimeout(() => {
        confirm("Sorry You Lose 😢 \nDo You Want To Play Again");
        setScore(7);
        location.reload();
      }, 0);
    } else if (score + operator === 13) {
      setTimeout(() => {
        confirm("Congratulations!! You Won 🎉 \nDo You Want To Play Again");
        setScore(7);
        location.reload();
      }, 0);
    }
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
