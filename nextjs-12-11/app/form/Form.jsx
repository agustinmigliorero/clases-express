"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

import { useState } from "react";

function Form() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");

  async function handleSubmit(e) {
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
  }

  return (
    <FieldSet>
      <FieldLegend>Crear Producto</FieldLegend>
      <FieldDescription>Esto es para crear un producto</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="titulo">Titulo</FieldLabel>
          <Input
            value={titulo}
            id="titulo"
            onChange={(e) => setTitulo(e.target.value)}
            autoComplete="off"
            placeholder="Producto 1"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="descripcion">Descripcion</FieldLabel>
          <Input
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
            id="descripcion"
            autoComplete="off"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="contenido">Contenido</FieldLabel>
          <Input
            onChange={(e) => setContenido(e.target.value)}
            value={contenido}
            id="contenido"
            autoComplete="off"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="precio">Precio</FieldLabel>
          <Input
            onChange={(e) => setPrecio(e.target.value)}
            value={precio}
            id="precio"
            type="number"
            autoComplete="off"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="imagen">Imagen</FieldLabel>
          <Input
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
            id="imagen"
            autoComplete="off"
          />
        </Field>
      </FieldGroup>
      <Button onClick={handleSubmit} variant="">
        Enviar
      </Button>
    </FieldSet>
  );
}

export default Form;
