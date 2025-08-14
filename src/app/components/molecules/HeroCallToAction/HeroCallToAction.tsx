import React from "react";
import { Button } from "../../atoms/Button/Button";

const HeroCallToAction = () => {
  return (
    <div className="flex gap-2 justify-center">
      <Button size="md" variant="primary">Crear perfil</Button>
      <Button size="md" variant="outline">Ver Demo</Button>
    </div>
  );
};

export default HeroCallToAction;
