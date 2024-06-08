import { useState } from "react";
import { Modal } from "./Modal";

export default function Footer({ gameStatus, setGameStatus, setScore }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    gameStatus === "simple"
      ? setGameStatus("advanced")
      : setGameStatus("simple");

    // Reset Score
    setScore(7);
  }

  return (
    <footer>
      <div className="toggler">
        <span onClick={handleToggle}>Simple</span>

        <div className="switch-box">
          <div className={`switcher ${gameStatus}`}></div>
        </div>

        <span onClick={handleToggle}>Advanced</span>
      </div>

      <button className="btn" onClick={() => setIsOpen(true)}>
        Rules
      </button>
      <Modal gameStatus={gameStatus} setIsOpen={setIsOpen} isOpen={isOpen} />
    </footer>
  );
}
