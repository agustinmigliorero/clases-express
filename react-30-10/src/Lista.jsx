function Lista({ cosas, color = "blue" }) {
  return (
    <ul style={{ color: color, fontFamily: "sans-serif", fontSize: "24px" }}>
      {cosas.map((cosa) => {
        return <li>{cosa}</li>;
      })}
    </ul>
  );
}

export default Lista;
