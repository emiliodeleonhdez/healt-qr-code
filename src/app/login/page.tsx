'use client';
import React from 'react';
import { BasicCard } from '../components/atoms/Card/BasicCard';
import LoginForm from '../components/molecules/LoginForm/LoginForm';
import { useRouter } from 'next/navigation';
import { MEDISCAN_PATHS } from '../common';

const CardBodyRegisterFullForm: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <LoginForm />
      <div className="flex flex-col items-center gap-2">
        <p>
          ¿No tienes cuenta aún?
          <span
            onClick={() => router.push(MEDISCAN_PATHS.REGISTER)}
            className="font-semibold text-red-500 hover:cursor-pointer hover:text-red-600"
          >
            {' '}
            Crea una aquí
          </span>
        </p>
        <p
          onClick={() => router.push(MEDISCAN_PATHS.DEMO)}
          className="hover:cursor-pointer hover:text-gray-800"
        >
          Ver demo
        </p>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  return (
    <section className="flex justify-center p-2 md:p-8 lg:p-16">
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
