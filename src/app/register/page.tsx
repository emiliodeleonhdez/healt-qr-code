"use client";
import React from "react";
import { BasicCard } from "../components/atoms/Card/BasicCard";
import LoginForm from "../components/molecules/RegisterForm/RegisterForm";
import { useRouter } from "next/navigation";

const CardBodyLoginFullForm: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <LoginForm />
      <div className="flex flex-col items-center gap-2">
        <p>
          ¿Ya tienes cuenta?
          <span
            onClick={() => router.push("/login")}
            className="text-red-500 hover:text-red-600 font-semibold hover:cursor-pointer"
          >
            {" "}
            Inicia sesión aquí
          </span>
        </p>
        <p
          onClick={() => router.push("/demo")}
          className="hover:text-gray-800 hover:cursor-pointer"
        >
          Ver demo
        </p>
      </div>
    </div>
  );
};

const Register: React.FC = () => {
  return (
    <section className="p-2 md:p-8 lg:p-16 flex justify-center">
      <BasicCard
        headerAlignment="center"
        size="lg"
        className="p-8"
        cardHeader="Crea tu cuenta"
        cardSubHeader="Crea tu perfil médico de emergencia en minutos"
        cardBody={<CardBodyLoginFullForm />}
      />
    </section>
  );
};

export default Register;
