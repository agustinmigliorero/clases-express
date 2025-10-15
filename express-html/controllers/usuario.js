const Usuario = require("../models/usuario.js");

const verUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

const crearUsuario = async (req, res) => {
  const { nombre, email } = req.body;
  console.log(nombre, email);
  const usuario = new Usuario({ nombre, email });
  await usuario.save();
  res.json(usuario);
};

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  const usuario = await Usuario.findByIdAndUpdate(id, { nombre, email });
  res.json(usuario);
};

const obtenerUsuario = async (req, res) => {
  const { id } = req.params;
  const usuario = await Usuario.findById(id);
  res.json(usuario);
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  await Usuario.findByIdAndDelete(id);
  res.json({ message: "Usuario eliminado" });
};

module.exports = {
  verUsuarios,
  crearUsuario,
  actualizarUsuario,
  obtenerUsuario,
  eliminarUsuario,
};
