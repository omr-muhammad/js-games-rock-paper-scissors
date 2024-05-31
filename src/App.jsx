import { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [gameStatus, setGameStatus] = useState("simple");

  return (
    <>
      <Header gameStatus={gameStatus} />
    </>
  );
}
