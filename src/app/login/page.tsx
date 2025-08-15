"use client";
import React from "react";
import { BasicCard } from "../components/atoms/card/BasicCard";
import LoginForm from "../components/molecules/LoginForm/LoginForm";
import { useRouter } from "next/navigation";

const CardBodyRegisterFullForm: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <LoginForm />
      <div className="flex flex-col items-center gap-2">
        <p>
          ¿No tienes cuenta aún?
          <span
            onClick={() => router.push("/register")}
            className="text-red-500 hover:text-red-600 font-semibold hover:cursor-pointer"
          >
            {" "}
            Crea una aquí
          </span>
        </p>
        <p className="hover:text-gray-800 hover:cursor-pointer">Ver demo</p>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  return (
    <section className="p-2 md:p-8 lg:p-16 flex justify-center">
      <BasicCard
        headerAlignment="center"
        size="lg"
        className="p-8"
        cardHeader="¡Bienvenido de vuelta!"
        cardSubHeader="Inicia sesión para acceder a tu perfil médico y código QR"
        cardBody={<CardBodyRegisterFullForm />}
      />
    </section>
  );
};

export default Login;
