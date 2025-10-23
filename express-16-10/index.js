const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/db-15-10-2025");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Base de datos conectada a MongoDB");
});

//cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept, Origin, Authorization"
  );
  next();
});
//cors

app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

const rutasUsuario = require("./rutas/rutasUsuario");
app.use("/usuarios", rutasUsuario);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
