import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function App() {
  const [gameStatus, setGameStatus] = useState("simple");

  return (
    <>
      <Header gameStatus={gameStatus} />
      <main>
        <Card />
      </main>
      <Footer gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </>
  );
}
