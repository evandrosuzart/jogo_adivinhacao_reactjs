import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalite] = useState(150);

  const [numeroPalpites, setnumeroPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);
  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setPalite(150);
    setnumeroPalpites(1);
  };

  //Entrada, Rodando, Fim
  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a Jogar!</button>;
  }

  const menor = () => {
    setnumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalite(proxPalpite);
  };

  const maior = () => {
    setnumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numeroPalpites} tentativas!
        </p>
        <button onClick={iniciarJogo}>Recomeçar</button>
      </div>
    );
  }
  // de 0 a 300

  //palpites que a maquina deu
  return (
    <div className="App">
      <p>O seu numero é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Evandro" />, rootElement);
