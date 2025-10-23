const Publicacion = require("../modelos/modeloPublicacion");
const Usuario = require("../modelos/modeloUsuario");

async function verPublicaciones(req, res) {
  const publicaciones = await Publicacion.find();
  res.json(publicaciones);
}

async function crearPublicacion(req, res) {
  const { titulo, contenido, autor } = req.body;
  const nuevaPublicacion = new Publicacion({ titulo, contenido, autor });
  const usuario = await Usuario.findById(autor);
  if (!usuario) {
    return res.status(404).json({ mensaje: "Usuario no encontrado" });
  }
  usuario.publicaciones.push(nuevaPublicacion._id);
  await usuario.save();
  await nuevaPublicacion.save();
  res.status(201).json(nuevaPublicacion);
}

module.exports = {
  verPublicaciones,
  crearPublicacion,
};
