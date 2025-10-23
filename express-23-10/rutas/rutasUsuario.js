const express = require("express");
const router = express.Router();
const {
  verUsuarios,
  crearUsuario,
  eliminarUsuario,
  actualizarUsuario,
} = require("../controladores/controladoresUsuario");

router.get("/", verUsuarios);
router.post("/", crearUsuario);
router.delete("/:id", eliminarUsuario);
router.put("/:id", actualizarUsuario);

module.exports = router;
