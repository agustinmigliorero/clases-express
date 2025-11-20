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
  return (
    <FieldSet>
      <FieldLegend>Crear Producto</FieldLegend>
      <FieldDescription>Esto es para crear un producto</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="titulo">Titulo</FieldLabel>
          <Input id="titulo" autoComplete="off" placeholder="Producto 1" />
        </Field>
        <Field>
          <FieldLabel htmlFor="descripcion">Descripcion</FieldLabel>
          <Input id="descripcion" autoComplete="off" />
        </Field>
        <Field>
          <FieldLabel htmlFor="contenido">Contenido</FieldLabel>
          <Input id="contenido" autoComplete="off" />
        </Field>
        <Field>
          <FieldLabel htmlFor="precio">Precio</FieldLabel>
          <Input id="precio" type="number" autoComplete="off" />
        </Field>
        <Field>
          <FieldLabel htmlFor="imagen">Imagen</FieldLabel>
          <Input id="imagen" autoComplete="off" />
        </Field>
      </FieldGroup>
      <Button variant="">Enviar</Button>
    </FieldSet>
  );
}

export default Form;
