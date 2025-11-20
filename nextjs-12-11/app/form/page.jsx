import Form from "./Form.jsx";

function Pagina() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Crear un nuevo Producto! 📦
      </h1>
      <div className="w-2/5 mx-auto mt-10 border p-8 rounded-lg shadow-lg">
        <Form />
      </div>
    </div>
  );
}

export default Pagina;
