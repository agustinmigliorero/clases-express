const express = require("express");
const router = express.Router();
const {
  crearUsuario,
  verUsuarios,
  mostrarFormulario,
  editarUsuario,
  mostrarFormularioEditar,
} = require("../controladores/controladoresUsuario");

router.post("/", crearUsuario);
router.get("/", verUsuarios);
router.get("/crear", mostrarFormulario);
router.get("/editar/:id", mostrarFormularioEditar);
router.put("/editar/:id", editarUsuario);
module.exports = router;
