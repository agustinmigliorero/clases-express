function verUsuarios(req, res) {
  res.send("ESTA ES LA TABLA DE VER USUARIOS");
}

function registroUsuarios(req, res) {
  res.send("ESTE ES EL FORMULARIO DE REGISTRO!");
}

function verUsuario(req, res) {
  const nombre = req.params.nombre;
  res.send("Hola!, " + nombre);
}

module.exports = { verUsuarios, registroUsuarios, verUsuario };
