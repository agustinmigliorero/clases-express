const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/db-15-10-2025");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexión:"));
db.once("open", () => {
  console.log("Conectado a la base de datos");
});

app.use(express.json());

app.get("/", (req, res) => {
  let nombres = ["Agustin", "Juan", "Pedro", "Maria"];
  res.render("index");
});

const rutasUsuario = require("./rutas/rutasUsuario");
app.use("/usuarios", rutasUsuario);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
