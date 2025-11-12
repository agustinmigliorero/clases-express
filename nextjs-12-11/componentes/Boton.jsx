"use client";
import { use, useState } from "react";

function Boton() {
  const [contador, setContador] = useState(0);

  function clickBoton() {
    setContador(contador + 1);
  }

  return <button onClick={clickBoton}>Clicks: {contador}</button>;
}

export default Boton;
