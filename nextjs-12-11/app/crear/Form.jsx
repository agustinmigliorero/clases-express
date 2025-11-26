"use client";
import { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

function Form() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  async function enviarFormulario(e) {
    e.preventDefault();
    const respuesta = await fetch("http://localhost:3000/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo,
        descripcion,
        contenido,
        precio,
        imagen,
      }),
    });

    if (respuesta.ok) {
      redirect("/");
    }
  }

  return (
    <FieldSet>
      <FieldLegend>Crear Producto</FieldLegend>
      <FieldDescription>
        Este formulario es para crear un nuevo producto.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="titulo">Titulo</FieldLabel>
          <Input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            id="titulo"
            autoComplete="off"
            placeholder="Titulo del producto"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="descripcion">Descripcion</FieldLabel>
          <Input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            id="descripcion"
            autoComplete="off"
            placeholder="Descripcion del producto"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contenido">Contenido</FieldLabel>
          <Input
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            id="contenido"
            autoComplete="off"
            placeholder="Contenido del producto"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="precio">Precio</FieldLabel>
          <Input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            id="precio"
            autoComplete="off"
            placeholder="Precio del producto"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="imagen">Imagen</FieldLabel>
          <Input
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            id="imagen"
            autoComplete="off"
            placeholder="Imagen del producto"
          />
        </Field>
      </FieldGroup>
      <Button onClick={enviarFormulario} variant="default">
        Enviar
      </Button>
    </FieldSet>
  );
}

export default Form;
