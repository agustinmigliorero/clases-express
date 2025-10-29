import { useState } from "react";

function Boton({
  texto = "AAA",
  color = "rgb(255, 100, 150)",
  colorFondo = "black",
  cantidad,
  clickBoton,
}) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: colorFondo,
        borderRadius: "10px",
      }}
      onClick={clickBoton}
    >
      Cantidad: {cantidad}
    </button>
  );
}

export default Boton;
