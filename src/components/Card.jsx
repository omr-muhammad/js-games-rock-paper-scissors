export default function Card({
  url,
  background,
  shadow,
  gameStatus,
  id,
  handlePlayerChoosed,
  index,
  setIsStart,
  getComputerChoose,
  winClass,
}) {
  function handleClick() {
    if (!handlePlayerChoosed) return;

    getComputerChoose?.();
    handlePlayerChoosed?.(index);
    setIsStart?.(true);
  }

  return (
    <div
      className={`card-grad ${id} ${gameStatus || ""} ${winClass || ""}`}
      style={{ background, boxShadow: shadow }}
      onClick={handleClick}
    >
      <div className="card">
        <img src={url} alt={`${id} icon`} />
      </div>
    </div>
  );
}
