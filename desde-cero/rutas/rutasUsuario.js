const express = require("express");
const router = express.Router();
const {
  verUsuarios,
  crearUsuario,
  mostrarFormulario,
} = require("../controladores/controladoresUsuario");

router.get("/", verUsuarios);
router.get("/crear", mostrarFormulario);
router.post("/", crearUsuario);

module.exports = router;
