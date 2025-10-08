const express = require("express");
const router = express.Router();
const {
  verUsuarios,
  registroUsuarios,
} = require("../controladores/usuario.js");

router.get("/", verUsuarios);
router.get("/registro", registroUsuarios);

module.exports = router;
