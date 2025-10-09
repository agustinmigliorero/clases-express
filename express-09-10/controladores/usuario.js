const Usuario = require("../modelos/usuario.js");

async function verUsuarios(req, res) {
  const usuarios = await Usuario.find();

  let filas = "";

  for (let i = 0; i < usuarios.length; i++) {
    filas += `<li>${usuarios[i].nombre} ${usuarios[i].apellido}</li>`;
  }

  res.send(`
    <h1>Usuarios!</h1>
    <ul>${filas}</ul>
    `);
}

function registroUsuarios(req, res) {
  const usuarioNuevo = new Usuario({
    nombre: "Claudia",
    apellido: "Rodriguez",
    edad: 20,
  });

  usuarioNuevo.save();

  res.send(
    `Registraste el usuario: ${usuarioNuevo.nombre} ${usuarioNuevo.apellido} ${usuarioNuevo.edad} `
  );
}

function verUsuario(req, res) {
  const nombre = req.params.nombre;
  res.send("Hola!, " + nombre);
}

module.exports = { verUsuarios, registroUsuarios, verUsuario };
