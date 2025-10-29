const express = require("express");
const mongoose = require("mongoose");
const rutasUsuario = require("./rutas/rutasUsuario");
const rutasPublicacion = require("./rutas/rutasPublicacion");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/db-23-10-2025");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Conectado a la base de datos MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/usuarios", rutasUsuario);
app.use("/publicaciones", rutasPublicacion);

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`);
});
