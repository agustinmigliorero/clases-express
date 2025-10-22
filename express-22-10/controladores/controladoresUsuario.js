const verUsuarios = (req, res) => {
  res.render("usuarios");
};

function crearUsuario(req, res) {
  res.send("USUARIO CREADO!");
}

module.exports = { verUsuarios, crearUsuario };
