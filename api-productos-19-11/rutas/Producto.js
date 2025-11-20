const express = require("express");
const router = express.Router();
const {
  crearProducto,
  obtenerProductos,
} = require("../controladores/Producto");

router.post("/", crearProducto);
router.get("/", obtenerProductos);

module.exports = router;
