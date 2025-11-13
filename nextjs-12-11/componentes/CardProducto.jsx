import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function CardProducto({
  titulo,
  descripcion,
  contenido,
  pieDePagina,
  urlImagen = "https://t4.ftcdn.net/jpg/06/71/92/37/360_F_671923740_x0zOL3OIuUAnSF6sr7PuznCI5bQFKhI0.jpg",
}) {
  return (
    <Card>
      <CardHeader>
        <AspectRatio ratio={1 / 1}>
          <img src={urlImagen} alt={titulo} />
        </AspectRatio>
        <CardTitle style={{ fontFamily: "cursive" }}>{titulo}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
      </CardHeader>
      <CardContent>
        <p>{contenido}</p>
      </CardContent>
      <CardFooter>
        <p>{pieDePagina}</p>
      </CardFooter>
    </Card>
  );
}

export default CardProducto;
