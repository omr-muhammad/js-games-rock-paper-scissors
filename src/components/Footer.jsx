export default function Footer({ gameStatus, setGameStatus }) {
  return (
    <footer>
      <div className="toggler">
        <span onClick={() => setGameStatus("simple")}>Simple</span>

        <div className="switch-box">
          <div className={`switcher ${gameStatus}`}></div>
        </div>

        <span onClick={() => setGameStatus("advanced")}>Advanced</span>
      </div>

      <button className="btn">Rules</button>
    </footer>
  );
}
