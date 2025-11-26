const express = require("express");
const router = express.Router();
const {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
} = require("../controladores/Producto");

router.post("/", crearProducto);
router.get("/", obtenerProductos);
router.get("/:id", obtenerProductoPorId);

module.exports = router;
