import Boton from "./Boton";
import Tabla from "./Tabla";

let encabezados = ["Nombre", "Apellido", "Edad"];
let encabezados2 = ["Institucion", "Alumnos"];

let personas = [
  ["Sofia", "Bogliano", 18],
  ["Agustin", "Migliorero", 27],
  ["Kathy", "Reina", 21],
  ["Martin", "Yannibelli", 45],
];

let escuelas = [
  ["CFL401", 400],
  ["Nacional", 1000],
  ["SAFA", 700],
];

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <Tabla encabezados={encabezados} datos={personas}></Tabla>
      <Tabla encabezados={encabezados2} datos={escuelas}></Tabla>
    </div>
  );
}

export default App;
