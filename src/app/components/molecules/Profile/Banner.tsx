import { Shield } from 'lucide-react';
import React from 'react';

const Banner = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-red-600 p-2 text-white">
      <Shield className="m-4 h-8 w-8" />
      <h2 className="text-xl font-bold uppercase">
        Perfil Médico de Emergencia
      </h2>
      <p className="mb-2">Para personal de emergencias y personal médico</p>
    </div>
  );
};

export default Banner;
