const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, require },
  email: { type: String, require, unique: true },
  edad: { type: Number, require },
});

module.exports = mongoose.model("Usuario", usuarioSchema);
