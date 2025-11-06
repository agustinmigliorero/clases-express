const Usuario = require("../modelos/Usuario");

// Controlador para crear un nuevo usuario
async function crearUsuario(req, res) {
  try {
    const { nombre, apellido, email } = req.body;
    const nuevoUsuario = new Usuario({ nombre, apellido, email });
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
}

async function obtenerUsuarios(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
}

module.exports = {
  crearUsuario,
  obtenerUsuarios,
};
