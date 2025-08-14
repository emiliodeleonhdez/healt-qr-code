import React from "react";
import { BasicCard } from "../components/atoms/Card/BasicCard";
import LoginForm from "../components/molecules/LoginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <section className="p-16 flex justify-center">
      <BasicCard
        size="lg"
        className="p-8"
        cardHeader="Crea Tu Cuenta"
        cardSubHeader="Crea tu perfil médico de emergencia en minutos"
        cardBody={<LoginForm/>}
      />
    </section>
  );
};

export default Login;
