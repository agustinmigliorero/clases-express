const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.send("ESTA ES LA TABLA DE LOS USUARIOS!");
});

router.get("/registro", function (req, res) {
  res.send("ESTE ES EL FORMULARIO DE REGISTRO!");
});

module.exports = router;
