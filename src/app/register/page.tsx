'use client';
import React from 'react';
import { BasicCard } from '../components/atoms/Card/BasicCard';
import LoginForm from '../components/molecules/RegisterForm/RegisterForm';
import { useRouter } from 'next/navigation';
import { MEDISCAN_PATHS } from '../common';

const CardBodyLoginFullForm: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <LoginForm />
      <div className="flex flex-col items-center gap-2">
        <p>
          ¿Ya tienes cuenta?
          <span
            onClick={() => router.push('')}
            className="font-semibold text-red-500 hover:cursor-pointer hover:text-red-600"
          >
            {' '}
            Inicia sesión aquí
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

const Register: React.FC = () => {
  return (
    <section className="flex justify-center p-2 md:p-8 lg:p-16">
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
