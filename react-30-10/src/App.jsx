import Boton from "./Boton";
import Tabla from "./Tabla";
import { useState } from "react";

let encabezados = ["Nombre", "Apellido", "Edad"];
let encabezados2 = ["Institucion", "Alumnos"];

let personas = [
  ["Sofia", "Bogliano", 18],
  ["Agustin", "Migliorero", 27],
  ["Kathy", "Reina", 21],
  ["Martin", "Yannibelli", 75],
];

let escuelas = [
  ["CFL401", 400],
  ["Nacional", 1000],
  ["SAFA", 700],
];

function App() {
  const [tablaPersonas, setTablaPersonas] = useState(false);
  const [tablaEscuelas, setTablaEscuelas] = useState(false);
  return (
    <div>
      <h1>Hola</h1>
      <Boton
        funcion={function () {
          setTablaPersonas(!tablaPersonas);
        }}
        texto="Mostrar tabla personas"
      ></Boton>
      <Boton
        funcion={function () {
          setTablaEscuelas(!tablaEscuelas);
        }}
        texto="Mostrar tabla escuelas"
      ></Boton>
      {tablaPersonas ? (
        <Tabla encabezados={encabezados} datos={personas}></Tabla>
      ) : (
        ""
      )}
      {tablaEscuelas ? (
        <Tabla encabezados={encabezados2} datos={escuelas}></Tabla>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
