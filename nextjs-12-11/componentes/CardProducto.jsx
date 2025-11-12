import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CardProducto({ titulo, descripcion, contenido, pieDePagina }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
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
