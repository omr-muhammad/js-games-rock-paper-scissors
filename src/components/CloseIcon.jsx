export default function CloseIcon({ setIsOpen }) {
  return (
    <div className="icon">
      <img
        className="close"
        src="/icon-close.svg"
        alt="Close"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
}
