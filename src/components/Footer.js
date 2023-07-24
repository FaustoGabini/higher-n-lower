import React from "react";
import "../styles/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <hr />{" "}
      <p>
        Hecho por <a href="https://twitter.com/FaustoGabini">@faustogabini</a>
      </p>
      <p>
        Esta web no es oficial ni tiene relación alguna con Mercado Libre. Toda
        la información consultada y expuesta aquí es pública y esta disponible
        en las APIS de Mercado Libre.
      </p>
    </div>
  );
}
