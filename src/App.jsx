import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

export default function App() {
  const [gameStatus, setGameStatus] = useState("simple");

  return (
    <>
      <Header gameStatus={gameStatus} />
      <main>
        <Cards gameStatus={gameStatus} />
      </main>
      <Footer gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </>
  );
}
