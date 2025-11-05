function Boton({ color, colorFondo, children, tamanioLetra }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: colorFondo,
        fontSize: tamanioLetra,
      }}
    >
      {children}
    </button>
  );
}

export default Boton;
