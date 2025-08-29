'use client';
import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { useRouter } from 'next/navigation';
import { MEDISCAN_PATHS } from '../../../../app/common';

const HeroCallToAction = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-2">
      <Button
        onClick={() => router.push(MEDISCAN_PATHS.REGISTER)}
        size="md"
        variant="primary"
      >
        Crear perfil
      </Button>
      <Button
        onClick={() => router.push(MEDISCAN_PATHS.DEMO)}
        size="md"
        variant="outline"
      >
        Ver Demo
      </Button>
    </div>
  );
};

export default HeroCallToAction;
