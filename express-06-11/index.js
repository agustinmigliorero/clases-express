const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db-06-11");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(cors({ origin: "*" }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const rutasUsuario = require("./rutas/Usuario.js");
app.use("/usuarios", rutasUsuario);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
