const express = require("express");
const router = express.Router();
const {
  verUsuarios,
  crearUsuario,
} = require("../controladores/controladoresUsuario.js");

router.get("/", verUsuarios);
router.post("/", crearUsuario);

module.exports = router;
