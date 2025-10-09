const Usuario = require("../modelos/usuario.js");

function verUsuarios(req, res) {
  res.send("ESTA ES LA TABLA DE VER USUARIOS");
}

function registroUsuarios(req, res) {
  const usuarioNuevo = new Usuario({
    nombre: "Martin",
    apellido: "Yannibelli",
    edad: 48,
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
