const Usuario = require("../modelos/modeloUsuario");

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
    let str = "";
    for (let i = 0; i < usuarios.length; i++) {
      str += `Nombre: ${usuarios[i].nombre}, Email: ${usuarios[i].email}, Edad: ${usuarios[i].edad}\n`;
    }
    res.status(200).send(str);
  } catch (error) {
    res.status(500).send({ mensaje: "Error al obtener los usuarios", error });
  }
}

module.exports = { crearUsuario, verUsuarios };
