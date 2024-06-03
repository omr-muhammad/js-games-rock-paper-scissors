export default function Card({ url, background, shadow, gameStatus }) {
  const imageName = url.slice(6, -4);

  return (
    <div
      className={`card-grad ${imageName} ${gameStatus}`}
      style={{ background, boxShadow: shadow }}
    >
      <div className="card">
        <img src={url} alt={url.slice(6, -4)} />
      </div>
    </div>
  );
}
