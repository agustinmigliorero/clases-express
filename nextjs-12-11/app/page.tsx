import Boton from "../componentes/Boton";
import CardProducto from "../componentes/CardProducto.jsx";

const productos = [
  {
    titulo: "Computadora",
    descripcion: "Tiene muchas cosas",
    contenido: "RE BUENAS COSAS 😎🛒",
    pieDePagina: "COMPRALA",
  },
  {
    titulo: "Celular",
    descripcion: "Tiene una pantalla",
    contenido: "RE BUENAS COSAS 📱🛒",
    pieDePagina: "COMPRALO",
  },
  {
    titulo: "Tablet",
    descripcion: "Es portable",
    contenido: "RE BUENAS COSAS 📲🛒",
    pieDePagina: "COMPRALA",
  },
];

function Pagina() {
  return (
    <div>
      <Boton></Boton>
      <div className="flex items-center justify-center text-center p-4 gap-10 ">
        {productos.map((producto, index) => {
          return (
            <div key={index}>
              <CardProducto
                titulo={producto.titulo}
                contenido={producto.contenido}
                descripcion={producto.descripcion}
                pieDePagina={producto.pieDePagina}
              ></CardProducto>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pagina;
