import DetalleProducto from "./DetalleProducto";

async function Pagina({ params }) {
  const { id } = await params;

  async function mostrarProductos() {
    const respuesta = await fetch("http://localhost:3000/api/productos/" + id);
    const datos = await respuesta.json();
    return datos;
  }

  const producto = await mostrarProductos();

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-10">
        Producto: {producto.titulo}
      </h1>
      <div className="w-3/7 mx-auto">
        <DetalleProducto
          titulo={producto.titulo}
          descripcion={producto.descripcion}
          contenido={producto.contenido}
          pieDePagina={producto.precio}
          urlImagen={producto.imagen}
        />
      </div>
    </div>
  );
}

export default Pagina;
