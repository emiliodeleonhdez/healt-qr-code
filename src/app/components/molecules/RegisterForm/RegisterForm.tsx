"use client";
import React from "react";
import { FormInput } from "../../atoms/Input/FormInput";
import { Button } from "../../atoms/Button/Button";

const RegisterForm = () => {
  return (
    <form className="flex flex-col py-4 gap-4">
      <FormInput
        labelText="Nombre Completo"
        type="text"
        name="fullName"
        value={""}
        placeholder="Ingresa tu nombre completo"
        handleChange={() => {}}
      />
      <FormInput
        labelText="Correo Electrónico"
        type="email"
        name="email"
        value={""}
        placeholder="Ingresa tu correo electrónico"
        handleChange={() => {}}
      />
      <FormInput
        labelText="Contraseña"
        type="password"
        name="password"
        value={""}
        placeholder="Crea una contraseña (min. 6 caracteres)"
        handleChange={() => {}}
      />
      <FormInput
        labelText="Confirmar contraseña"
        type="password"
        name="password"
        value={""}
        placeholder="Confirmar contraseña"
        handleChange={() => {}}
      />
      <Button>
        <p className="font-semibold">Crear cuenta</p>
      </Button>
    </form>
  );
};

export default RegisterForm;
