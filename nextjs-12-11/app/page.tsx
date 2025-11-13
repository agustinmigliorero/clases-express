import CardProducto from "../componentes/CardProducto.jsx";

let productos = [
  {
    titulo: "Auriculares Inalámbricos ProSound X200",
    descripcion:
      "Auriculares Bluetooth con cancelación activa de ruido y estuche de carga rápida.",
    contenido:
      "Incluye auriculares, estuche de carga USB-C, manual y juegos de almohadillas.",
    pieDePagina: "Garantía oficial de 12 meses. Envíos a todo el país.",
    imageUrl: "https://http2.mlstatic.com/D_655345-MLA96133497547_102025-C.jpg",
  },
  {
    titulo: "Zapatillas Urban Runner 3.0",
    descripcion:
      "Zapatillas livianas para uso diario, con suela antideslizante y tejido respirable.",
    contenido:
      "Material: Mesh premium, suela de goma EVA, cordones reforzados.",
    pieDePagina: "Cambios gratis dentro de los 30 días.",
    imageUrl:
      "https://www.digitalsport.com.ar/files/products/5d49e8a324ef5-480904-1200x1200.jpg",
  },
  {
    titulo: "Smartwatch FitLife S5",
    descripcion:
      "Reloj inteligente con monitoreo cardíaco, contador de pasos y notificaciones del celular.",
    contenido:
      "Correa de silicona, cable de carga magnético, batería de alta duración.",
    pieDePagina: "Compatible con Android y iOS.",
    imageUrl:
      "https://istarmax.com/wp-content/uploads/2022/01/s5-black-1024x1024.jpg",
  },
  {
    titulo: "Cafetera Espresso Barista Mini",
    descripcion:
      "Cafetera compacta para espresso y capuchino, sistema de presión de 15 bares.",
    contenido: "Incluye vaporizador, portafiltro, taza medidora y manual.",
    pieDePagina: "2 años de garantía del fabricante.",
  },
  {
    titulo: "Mochila Traveler 25L",
    descripcion:
      "Mochila resistente al agua con múltiples compartimentos y espacio para notebook de 15.6”.",
    contenido:
      "Poliéster premium, cierre reforzado, bolsillos laterales y acolchado ergonómico.",
    pieDePagina: "Ideal para viajes, oficina o universidad.",
  },
  {
    titulo: "Lámpara LED DecoWood",
    descripcion: "Lámpara de mesa estilo nórdico con luz cálida regulable.",
    contenido: "Base de madera natural, pantalla de lino, cable de 1.5m.",
    pieDePagina: "Bajo consumo energético. Envío seguro.",
  },
  {
    titulo: "Silla Ergonómica FlowSeat",
    descripcion:
      "Silla de oficina con soporte lumbar, altura regulable y malla respirable.",
    contenido: "Estructura metálica, ruedas silent-block, respaldo reclinable.",
    pieDePagina: "Soporta hasta 120 kg. Ensamblado sencillo.",
  },
  {
    titulo: "Teclado Mecánico RedSwitch Pro",
    descripcion:
      "Teclado mecánico retroiluminado con switches rojos silenciosos.",
    contenido:
      "Cable USB-C desmontable, keycaps ABS, varias configuraciones de luz.",
    pieDePagina: "Ideal para gaming y programación.",
  },
  {
    titulo: "Set de Ollas ChefMaster 8 piezas",
    descripcion:
      "Set de cocina antiadherente de alta calidad, apto para todo tipo de cocina.",
    contenido: "Incluye 3 ollas, 2 sartenes y tapas de vidrio templado.",
    pieDePagina: "Libre de PFOA. Envíos a todo el país.",
  },
  {
    titulo: "Perfume Noir Intense 100ml",
    descripcion:
      "Fragancia masculina amaderada con notas especiadas y cítricas.",
    contenido: "Presentación de 100 ml con atomizador reforzado.",
    pieDePagina: "Producto original. Stock limitado.",
  },
];

function Pagina() {
  return (
    <div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-4/5 mx-auto my-16">
        {productos.map((producto, index) => {
          return (
            <CardProducto
              key={index}
              titulo={producto.titulo}
              contenido={producto.contenido}
              descripcion={producto.descripcion}
              pieDePagina={producto.pieDePagina}
              urlImagen={producto.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pagina;
