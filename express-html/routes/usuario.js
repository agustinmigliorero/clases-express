const express = require("express");
const router = express.Router();
const {
  verUsuarios,
  crearUsuario,
  actualizarUsuario,
  obtenerUsuario,
  eliminarUsuario,
} = require("../controllers/usuario.js");
const path = require("path");

router.get("/", verUsuarios);
router.get("/crear", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "form-crear.html"));
});
router.post("/", crearUsuario);
router.put("/:id", actualizarUsuario);
router.get("/:id", obtenerUsuario);
router.delete("/:id", eliminarUsuario);

module.exports = router;
