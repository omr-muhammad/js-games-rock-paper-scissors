import { useState } from "react";
import { Modal } from "./Modal";

export default function Footer({ gameStatus, setGameStatus }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer>
      <div className="toggler">
        <span onClick={() => setGameStatus("simple")}>Simple</span>

        <div className="switch-box">
          <div className={`switcher ${gameStatus}`}></div>
        </div>

        <span onClick={() => setGameStatus("advanced")}>Advanced</span>
      </div>

      <button className="btn" onClick={() => setIsOpen(true)}>
        Rules
      </button>
      <Modal gameStatus={gameStatus} setIsOpen={setIsOpen} isOpen={isOpen} />
    </footer>
  );
}
