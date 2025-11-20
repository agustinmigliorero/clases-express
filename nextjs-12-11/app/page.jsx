import CardProducto from "../componentes/CardProducto.jsx";

async function Pagina() {
  async function mostrarProductos() {
    const respuesta = await fetch("http://localhost:3000/api/productos");
    const datos = await respuesta.json();
    return datos;
  }

  const productos = await mostrarProductos();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {productos.map((producto) => {
        return (
          <CardProducto
            key={producto.id}
            titulo={producto.titulo}
            contenido={producto.contenido}
            descripcion={producto.descripcion}
            pieDePagina={producto.precio}
            urlImagen={producto.imagen}
          />
        );
      })}
    </div>
  );
}

export default Pagina;
