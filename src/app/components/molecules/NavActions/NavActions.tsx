import React from "react";
import { Button } from "../../atoms/Button/Button";

const NavActions = () => {
  return (
    <div className="flex p-2 gap-2 items-center">
      <Button variant="outline">Iniciar sesión</Button>
      <Button variant="primary">Comenzar ahora</Button>

    </div>
  );
};

export default NavActions;
