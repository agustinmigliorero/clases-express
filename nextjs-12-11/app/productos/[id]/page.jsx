async function Pagina({ params }) {
  const { id } = await params;

  async function mostrarProducto() {
    const respuesta = await fetch(`http://localhost:3000/api/productos/${id}`);
    const datos = await respuesta.json();
    return datos;
  }

  const producto = await mostrarProducto();
  console.log(producto);

  return (
    <div>
      <h1 className="text-center text-4xl">
        Titulo del producto: <b>{producto.titulo}</b>
      </h1>
      <h2 className="text-center text-2xl">
        Descripcion del producto: <b>{producto.descripcion}</b>
      </h2>
      <img src={producto.imagen} />
    </div>
  );
}

export default Pagina;
