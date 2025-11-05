const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors({ origin: "*" }));

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/clase-05-11");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Conectado a la base de datos!");
});

const usuarioRouter = require("./rutas/usuario");
app.use("/usuarios", usuarioRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
