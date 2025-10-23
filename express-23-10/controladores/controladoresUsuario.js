const Usuario = require("../modelos/modeloUsuario.js");

async function verUsuarios(req, res) {
  const usuarios = await Usuario.find();
  res.json(usuarios);
}

async function crearUsuario(req, res) {
  const { nombre, apellido, email } = req.body;
  const nuevoUsuario = new Usuario({ nombre, apellido, email });
  await nuevoUsuario.save();
  res.status(201).json(nuevoUsuario);
}

module.exports = {
  verUsuarios,
  crearUsuario,
};
