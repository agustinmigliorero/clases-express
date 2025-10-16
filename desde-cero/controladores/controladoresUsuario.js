const Usuario = require("../modelos/modeloUsuario");

async function verUsuarios(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.render("usuarios/index", { usuarios });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
}

async function crearUsuario(req, res) {
  try {
    const { nombre, email, edad } = req.body;
    const nuevoUsuario = new Usuario({ nombre, email, edad });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
}

function mostrarFormulario(req, res) {
  res.render("usuarios/form", { nombre: "hola" });
}

module.exports = { verUsuarios, crearUsuario, mostrarFormulario };
