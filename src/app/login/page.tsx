import React from "react";
import { BasicCard } from "../components/atoms/Card/BasicCard";
import LoginForm from "../components/molecules/LoginForm/LoginForm";

const CardBodyLoginFullForm: React.FC = () => {
  return (
    <div>
      <LoginForm />
      <div className="flex flex-col items-center gap-2">
        <p>
          ¿Ya tienes cuenta?
          <span className="text-red-500 hover:text-red-600 font-semibold">
            {" "}
            Inicia sesión aquí
          </span>
        </p>
        <p className="hover:text-gray-800">Ver demo</p>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  return (
    <section className="p-16 flex justify-center">
      <BasicCard
        size="lg"
        className="p-8"
        cardHeader="Crea Tu Cuenta"
        cardSubHeader="Crea tu perfil médico de emergencia en minutos"
        cardBody={<CardBodyLoginFullForm />}
      />
    </section>
  );
};

export default Login;
