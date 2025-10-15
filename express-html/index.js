const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

//mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/test-15-10-25");

const db = mongoose.connection;
db.on("error", (error) => {
  console.log("Error connecting to MongoDB", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(express.static("views"));
app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

const usuarioRoutes = require("./routes/usuario.js");
app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
