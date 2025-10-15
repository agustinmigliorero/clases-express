const express = require("express");
const router = express.Router();
const {
  crearUsuario,
  verUsuarios,
} = require("../controladores/controladoresUsuario");

router.post("/", crearUsuario);
router.get("/", verUsuarios);

module.exports = router;
