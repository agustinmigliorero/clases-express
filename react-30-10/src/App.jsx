import MostrarListas from "./MostrarListas";
import MostrarTablas from "./MostrarTablas";
import Boton from "./Boton";

function App() {
  return (
    <div>
      <Boton
        funcion={function () {
          alert("Hola!");
        }}
        texto="Hola =)"
        color="blue"
        colorFondo="white"
      ></Boton>
      {/* <MostrarTablas></MostrarTablas> */}
      {/* <MostrarListas></MostrarListas> */}
    </div>
  );
}

export default App;
