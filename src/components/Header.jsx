export default function Header({ gameStatus, score = 0 }) {
  const logo = gameStatus === "simple" ? "/logo.svg" : "/logo-bonus.svg";

  return (
    <header>
      <div className="image">
        <img src={logo} alt="Logo" />
      </div>

      <div className="score-box">
        <h4>score</h4>
        <p>{score}</p>
      </div>
    </header>
  );
}
