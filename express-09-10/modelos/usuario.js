const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
  nombre: String,
  apellido: String,
  edad: Number,
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;
