import Boton from "./Boton";
import { useState } from "react";
function App() {
  const [cantidad, setCantidad] = useState(0);

  function clickBoton() {
    setCantidad(cantidad + 1);
  }

  return (
    <div>
      <h1>Chau!</h1>
      <h1>Hola!</h1>
      <Boton
        texto="Cantidad: "
        cantidad={cantidad}
        clickBoton={clickBoton}
      ></Boton>
      <Boton texto="Cantidad: " cantidad={cantidad}></Boton>
      <Boton texto="Cantidad: " cantidad={cantidad}></Boton>
      <Boton texto="Cantidad: " cantidad={cantidad}></Boton>
    </div>
  );
}

export default App;
