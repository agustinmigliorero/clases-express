const Producto = require("../modelos/Producto");

async function crearProducto(req, res) {
  try {
    const { titulo, descripcion, contenido, precio, imagen } = req.body;

    const nuevoProducto = new Producto({
      titulo,
      descripcion,
      contenido,
      precio,
      imagen,
    });

    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Error al crear el producto", error: error.message });
  }
}

async function obtenerProductos(req, res) {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener los productos",
      error: error.message,
    });
  }
}

async function obtenerProductoPorId(req, res) {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener el producto",
      error: error.message,
    });
  }
}

module.exports = {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
};
