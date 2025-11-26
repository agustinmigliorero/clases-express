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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
function CardProducto({
  id,
  titulo,
  descripcion,
  contenido,
  pieDePagina,
  urlImagen = "https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg",
}) {
  return (
    <Card className="p-0">
      <img src={urlImagen} alt={titulo} className="rounded-lg" />
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <p>{contenido}</p>
      </CardContent>
      <CardFooter>
        <p>
          <b className="text-green-500">${pieDePagina}</b>
        </p>
        <b></b>
        <Button variant="link" className="ml-auto">
          <Link href={`/productos/${id}`}>Ver mas</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardProducto;
