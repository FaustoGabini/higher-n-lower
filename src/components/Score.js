import React from "react";
import "../styles/Score.scss";
export default function Score({ score, onVolverAJugar }) {
  return (
    <div className="score">
      <h2>Perdiste!</h2>
      <h4>Puntaje: {score ? score : 0}</h4>
      <a className="button__buy" onClick={onVolverAJugar} href="/">
        Volver a jugar
      </a>
    </div>
  );
}
