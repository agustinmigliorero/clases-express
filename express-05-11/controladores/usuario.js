const Usuario = require("../modelos/usuario");

async function crearUsuario(req, res) {
  try {
    const { nombre, apellido, email } = req.body;
    const nuevoUsuario = new Usuario({ nombre, apellido, email });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear el usuario", error });
  }
}

async function verUsuarios(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los usuarios", error });
  }
}

module.exports = {
  crearUsuario,
  verUsuarios,
};
