const express = require("express");
const app = express();
const port = 3000;

const rutasUsuario = require("./rutas/usuario.js");
app.use("/usuarios", rutasUsuario);

app.get("/", function (req, res) {
  res.send("ESTA ES LA PAGINA DE INICIO!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
