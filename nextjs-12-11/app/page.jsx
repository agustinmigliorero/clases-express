import CardProducto from "../componentes/CardProducto.jsx";

async function Pagina() {
  async function mostrarProductos() {
    const respuesta = await fetch("http://localhost:3000/api/productos");
    const datos = await respuesta.json();
    return datos;
  }

  const productos = await mostrarProductos();

  return (
    <div>
      {productos.map((producto) => {
        return <p>{producto.titulo}</p>;
      })}
    </div>
  );
}

export default Pagina;
