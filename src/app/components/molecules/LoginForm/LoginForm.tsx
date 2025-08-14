"use client";
import React from "react";
import { FormInput } from "../../atoms/Input/FormInput";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <FormInput
        labelText="Nombre Completo"
        type="text"
        name="fullName"
        value={""}
        placeholder="Ingresa tu nombre completo"
        tailwindOptions="" // o agrega extras aquí
        handleChange={() => {}}
      />
            <FormInput
        labelText="Correo Electrónico"
        type="email"
        name="email"
        value={""}
        placeholder="Ingresa tu correo electrónico"
        tailwindOptions="" // o agrega extras aquí
        handleChange={() => {}}
      />
            <FormInput
        labelText="Contraseña"
        type="password"
        name="password"
        value={""}
        placeholder="Crea una contraseña (min. 6 caracteres)"
        tailwindOptions="" // o agrega extras aquí
        handleChange={() => {}}
      />
            <FormInput
        labelText="Confirmar contraseña"
        type="password"
        name="password"
        value={""}
        placeholder="Confirmar contraseña"
        tailwindOptions="" // o agrega extras aquí
        handleChange={() => {}}
      />
    </form>
  );
};

export default LoginForm;
