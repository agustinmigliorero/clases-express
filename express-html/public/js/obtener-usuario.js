//capturar el id de la url
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
//obtener el usuario
fetch(`http://localhost:3000/usuarios/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const _id = document.getElementById("_id");
    nombre.innerHTML = data.nombre;
    email.innerHTML = data.email;
    _id.innerHTML = data._id;
  });
