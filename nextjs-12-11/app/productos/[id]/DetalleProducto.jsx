import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function DetalleProducto({
  id,
  titulo,
  descripcion,
  contenido,
  pieDePagina,
  urlImagen = "https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg",
}) {
  return (
    <Card>
      <CardHeader>
        <img
          src={urlImagen}
          alt={titulo}
          className="rounded-lg object-cover w-full h-96"
        />
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{contenido}</p>
      </CardContent>
      <CardFooter>
        <p>
          <b className="text-green-500">${pieDePagina}</b>
        </p>
      </CardFooter>
      <CardFooter>
        <Button className="w-1/1">Comprar</Button>
      </CardFooter>
    </Card>
  );
}

export default DetalleProducto;
