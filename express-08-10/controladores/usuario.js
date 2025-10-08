function verUsuarios(req, res) {
  res.send("ESTA ES LA TABLA DE VER USUARIOS");
}

function registroUsuarios(req, res) {
  res.send("ESTE ES EL FORMULARIO DE REGISTRO!");
}

module.exports = { verUsuarios, registroUsuarios };
