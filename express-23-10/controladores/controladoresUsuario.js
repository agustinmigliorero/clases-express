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

async function eliminarUsuario(req, res) {
  const { id } = req.params;
  const usuarioEliminado = await Usuario.findByIdAndDelete(id);
  res.status(204).json(usuarioEliminado);
}

async function actualizarUsuario(req, res) {
  const { id } = req.params;
  const { nombre, apellido, email } = req.body;
  const usuarioActualizado = await Usuario.findByIdAndUpdate(
    id,
    {
      nombre,
      apellido,
      email,
    },
    { new: true }
  );
  res.json(usuarioActualizado);
}

module.exports = {
  verUsuarios,
  crearUsuario,
  eliminarUsuario,
  actualizarUsuario,
};
