import { use, useState } from "react";

function Boton({
  fontSize = "16px",
  texto = "Default",
  color = "rgb(255, 100, 150)",
  colorFondo = "black",
  funcion,
}) {
  return (
    <button
      style={{ fontSize: fontSize, color: color, backgroundColor: colorFondo }}
      onClick={funcion}
    >
      {texto}
    </button>
  );
}

export default Boton;
