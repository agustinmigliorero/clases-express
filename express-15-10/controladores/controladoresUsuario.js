const Usuario = require("../modelos/modeloUsuario");

function mostrarFormulario(req, res) {
  res.render("usuarios/form");
}

async function crearUsuario(req, res) {
  const { nombre, email, edad } = req.body;
  const nuevoUsuario = new Usuario({ nombre, email, edad });
  try {
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).send(usuarioGuardado);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al crear el usuario", error });
  }
}

async function verUsuarios(req, res) {
  try {
    const usuarios = await Usuario.find();

    res.render("usuarios/index", { usuarios: usuarios });
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener los usuarios", error });
  }
}

module.exports = { crearUsuario, verUsuarios, mostrarFormulario };
