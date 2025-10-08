const express = require("express");
const router = express.Router();
const {
  verUsuarios,
  registroUsuarios,
  verUsuario,
} = require("../controladores/usuario.js");

router.get("/", verUsuarios);
router.get("/registro", registroUsuarios);
router.get("/:nombre", verUsuario);

module.exports = router;
