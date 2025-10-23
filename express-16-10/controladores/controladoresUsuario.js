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

    // res.render("usuarios/index", { usuarios: usuarios });
    res.json(usuarios);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener los usuarios", error });
  }
}

async function editarUsuario(req, res) {
  const { id } = req.params;
  const { nombre, email, edad } = req.body;
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      id,
      { nombre, email, edad },
      { new: true }
    );
    if (!usuarioActualizado) {
      return res.status(404).send({ mensaje: "Usuario no encontrado" });
    }
    res.send(usuarioActualizado);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al actualizar el usuario", error });
  }
}

async function mostrarFormularioEditar(req, res) {
  const { id } = req.params;

  const usuarioAActualizar = await Usuario.findById(id);

  res.render("usuarios/editar", { id: id, usuario: usuarioAActualizar });
}

module.exports = {
  crearUsuario,
  verUsuarios,
  mostrarFormulario,
  editarUsuario,
  mostrarFormularioEditar,
};
