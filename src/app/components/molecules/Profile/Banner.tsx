import { Shield } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-red-600 w-full flex flex-col justify-center items-center text-white p-2">
      <Shield className="h-8 w-8 m-4" />
      <h2 className="uppercase font-bold text-xl">
        Perfil Médico de Emergenica
      </h2>
      <p className="mb-2">Para personal de emergencias y personal médico</p>
    </div>
  );
};

export default Banner;
