const express = require("express");
const router = express.Router();
const {
  verPublicaciones,
  crearPublicacion,
} = require("../controladores/controladoresPublicacion");

router.get("/", verPublicaciones);
router.post("/", crearPublicacion);

module.exports = router;
