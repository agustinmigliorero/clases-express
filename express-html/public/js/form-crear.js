const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  console.log(nombre.value, email.value);
  e.preventDefault();
  fetch("http://localhost:3000/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre: nombre.value, email: email.value }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = "http://localhost:3000/";
    });
});
