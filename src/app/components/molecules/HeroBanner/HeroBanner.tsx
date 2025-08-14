import React from "react";
import { Button } from "../../atoms/Button/Button";

const HeroBanner = () => {
  return (
    <section className="bg-red-500 text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h3 className="text-3xl font-bold mb-4">
          ¿Estás listo para crear tu perfil médico?
        </h3>
        <p className="text-xl mb-8 opacity-90">
          Con MediScanId, tu información médica siempre está lista para cuando
          más la necesitas.
        </p>
        <Button size="md" variant="outline">
          Comienza ahora
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
