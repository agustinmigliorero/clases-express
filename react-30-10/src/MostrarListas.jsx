import Lista from "./Lista";

function MostrarListas() {
  return (
    <div>
      Lista de animales:
      <Lista cosas={["Perro", "Gato", "Tortuga", "Leon"]}></Lista>
      Lista de lenguajes de programacion:
      <Lista
        color="rgb(255, 100, 150)"
        cosas={["JS", "PhP", "Python", "C", "C++"]}
      ></Lista>
      Lista de amigos:
      <Lista cosas={["Kathy", "Cindy", "Sofia", "Martin"]}></Lista>
    </div>
  );
}

export default MostrarListas;
