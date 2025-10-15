fetch("http://localhost:3000/usuarios")
  .then((response) => response.json())
  .then((data) => {
    const usuarios = document.getElementById("usuarios");
    data.forEach((usuario) => {
      const li = document.createElement("li");
      li.innerHTML = `${usuario.nombre} - ${usuario.email}`;
      usuarios.appendChild(li);
    });
  });
