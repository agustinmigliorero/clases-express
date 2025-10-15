const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/db-15-10-2025");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Base de datos conectada a MongoDB");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const rutasUsuario = require("./rutas/rutasUsuario");
app.use("/usuarios", rutasUsuario);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
