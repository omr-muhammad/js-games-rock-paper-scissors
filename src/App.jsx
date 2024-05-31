import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const [gameStatus, setGameStatus] = useState("simple");

  return (
    <>
      <Header gameStatus={gameStatus} />
      <main style={{ flexGrow: 1 }}></main>
      <Footer />
    </>
  );
}
