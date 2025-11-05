const express = require("express");
const Router = express.Router();
const { crearUsuario, verUsuarios } = require("../controladores/usuario");

Router.post("/", crearUsuario);
Router.get("/", verUsuarios);

module.exports = Router;
