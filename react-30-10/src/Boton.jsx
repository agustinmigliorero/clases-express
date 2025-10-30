function Boton({
  fontSize = "16px",
  texto = "Default",
  color = "rgb(255, 100, 150)",
  colorFondo = "black",
}) {
  return (
    <button
      style={{ fontSize: fontSize, color: color, backgroundColor: colorFondo }}
    >
      {texto}
    </button>
  );
}

export default Boton;
