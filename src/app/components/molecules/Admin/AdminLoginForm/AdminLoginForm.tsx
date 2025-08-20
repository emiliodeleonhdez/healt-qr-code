"use client";
import { FormInput } from "../../../atoms/Input/FormInput";
import { Button } from "../../../atoms/Button/Button";
import React from "react";

const AdminLoginForm = () => {
  return (
    <form className="flex flex-col py-4 gap-4">
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
        placeholder="Ingresa tu contraseña"
        handleChange={() => {}}
      />
      <Button variant="danger">
        <p className="font-semibold">Ingresar</p>
      </Button>
    </form>
  );
};

export default AdminLoginForm;
