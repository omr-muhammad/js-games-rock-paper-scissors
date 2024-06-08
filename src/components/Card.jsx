export default function Card({
  url,
  background,
  shadow,
  gameStatus,
  id,
  handleSelection,
  index,
  setIsStart,
  winClass,
}) {
  function handleClick() {
    if (!handleSelection) return;

    handleSelection?.(index);
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
