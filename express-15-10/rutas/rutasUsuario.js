const express = require("express");
const router = express.Router();
const {
  crearUsuario,
  verUsuarios,
  mostrarFormulario,
} = require("../controladores/controladoresUsuario");

router.post("/", crearUsuario);
router.get("/", verUsuarios);
router.get("/crear", mostrarFormulario);

module.exports = router;
