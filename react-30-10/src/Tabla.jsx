function Tabla({ encabezados, datos, color = "black" }) {
  return (
    <table
      className="Table_fondo"
      style={{
        border: "2px solid black",
        borderCollapse: "collapse",
        marginTop: "3%",
        color: color,
      }}
    >
      <thead style={{ border: "2px solid black", borderCollapse: "collapse" }}>
        <tr style={{ border: "2px solid black", borderCollapse: "collapse" }}>
          {encabezados.map((encabezado) => {
            return (
              <th
                style={{
                  border: "2px solid black",
                  borderCollapse: "collapse",
                  textAlign: "center",
                  paddingInline: "20px",
                }}
              >
                {encabezado}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody style={{ border: "2px solid black", borderCollapse: "collapse" }}>
        {datos.map((arrColumnas) => {
          return (
            <tr
              style={{ border: "2px solid black", borderCollapse: "collapse" }}
            >
              {arrColumnas.map((columna) => {
                return (
                  <td
                    style={{
                      border: "2px solid black",
                      borderCollapse: "collapse",
                    }}
                  >
                    {columna}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tabla;
