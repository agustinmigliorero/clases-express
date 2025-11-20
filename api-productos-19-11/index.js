const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://127.0.0.1:27017/db_productos_25");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(cors({ origin: "*" }));
app.use(express.json());

const productoRoutes = require("./rutas/Producto");
app.use("/api/productos", productoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
