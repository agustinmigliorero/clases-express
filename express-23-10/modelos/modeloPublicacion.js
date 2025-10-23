const mongoose = require("mongoose");

const publicacionSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
      required: true,
    },
  },
  { timestamps: true }
);

const Publicacion = mongoose.model("Publicacion", publicacionSchema);
module.exports = Publicacion;
