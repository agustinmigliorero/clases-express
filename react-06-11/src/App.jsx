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
    <ul>
      {usuarios.map((usuario) => {
        return (
          <li>
            {usuario.nombre} | {usuario.apellido} | {usuario.email}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
