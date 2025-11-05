import Boton from "./Boton";

/*
Boton
Hola
Boton
*/

function App() {
  return (
    <div>
      <Boton color="green" colorFondo="white" tamanioLetra="12px">
        <b>Hola!</b> <i>Esto no es negrita</i>
      </Boton>
      <h1>Hola!</h1>
      <Boton color="pink" colorFondo="green" tamanioLetra="24px">
        Chau!
      </Boton>
      <Boton color="blue" colorFondo="gray" tamanioLetra="32px">
        PRUEBA!
      </Boton>
    </div>
  );
}

export default App;
