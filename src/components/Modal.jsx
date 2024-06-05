import { createPortal } from "react-dom";
import CloseIcon from "./CloseIcon";
import { useWindowWith } from "../hooks/useWindowWith";

export function Modal({ isOpen, gameStatus, setIsOpen }) {
  const width = useWindowWith();
  const isMobile = width < 430;
  const rulesImage =
    gameStatus === "simple" ? "/image-rules.svg" : "/image-rules-bonus.svg";

  function handleOutsideClick(e) {
    if (isOpen && !e.currentTarget.classList.contains("white")) {
      if (e.target.closest("div") === e.currentTarget) setIsOpen(false);
    }
  }

  return createPortal(
    <div
      className={`overlay ${isOpen ? "open" : ""} ${isMobile ? "white" : ""}`}
      onClick={handleOutsideClick}
    >
      <div className="rules-box">
        {!isMobile ? (
          <div className="title">
            <h2>Rules</h2>
            <CloseIcon setIsOpen={setIsOpen} />
          </div>
        ) : (
          <h2>Rules</h2>
        )}
        <div className="rules-image">
          <img src={rulesImage} alt="Rules" />
        </div>
        {isMobile && <CloseIcon setIsOpen={setIsOpen} />}
      </div>
    </div>,
    document.body
  );
}
