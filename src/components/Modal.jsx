import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "./CloseIcon";

export function Modal({ isOpen, gameStatus, setIsOpen }) {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 400;
  const rulesImage =
    gameStatus === "simple" ? "/image-rules.svg" : "/image-rules-bonus.svg";

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
