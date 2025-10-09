const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/db-09-10-2025");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Base de datos conectada!");
});

const rutasUsuario = require("./rutas/usuario.js");
app.use("/usuarios", rutasUsuario);

app.get("/", function (req, res) {
  res.send("ESTA ES LA PAGINA DE INICIO!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
