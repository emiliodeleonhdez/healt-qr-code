import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { useRouter } from 'next/navigation';
import { MEDISCAN_PATHS } from '../../../../app/common';

const HeroBanner = () => {
  const router = useRouter();

  return (
    <section className="bg-red-500 py-16 text-white">
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <h3 className="mb-4 text-3xl font-bold">
          ¿Estás listo para crear tu perfil médico?
        </h3>
        <p className="mb-8 text-xl opacity-90">
          Con MediScanId, tu información médica siempre está lista para cuando
          más la necesitas.
        </p>
        <Button
          onClick={() => router.push(MEDISCAN_PATHS.REGISTER)}
          size="md"
          variant="outline"
        >
          Comienza ahora
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
