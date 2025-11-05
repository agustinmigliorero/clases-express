import { useState, useEffect } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  async function traerUsuarios() {
    const respuesta = await fetch("http://localhost:3000/usuarios");
    const datos = await respuesta.json();
    setUsuarios(datos);
  }

  useEffect(() => {
    traerUsuarios();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario._id}>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
