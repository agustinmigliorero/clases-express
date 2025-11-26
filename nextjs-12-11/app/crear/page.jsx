import Form from "./Form";

function Pagina() {
  return (
    <div>
      <h1 className="text-center font-bold mb-10 mt-5 text-4xl">
        Crear Producto! 📦
      </h1>
      <div className="w-2/5 mx-auto rounded-lg p-4 border shadow-md">
        <Form />
      </div>
    </div>
  );
}

export default Pagina;
