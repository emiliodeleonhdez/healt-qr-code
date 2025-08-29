import { Heart } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Heart className="h-6 w-6 text-red-500" />
          <span className="text-xl font-bold">mediscanid.info</span>
        </div>
        <p className="text-gray-400">
          Acceso inmediato a tu información médica vital para los equipos de
          emergencia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
