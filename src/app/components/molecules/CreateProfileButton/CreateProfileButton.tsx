import React from "react";
import { Button } from "../../atoms/button/Button";
import { Plus } from "lucide-react";

const CreateProfileButton = () => {
  return (
    <Button variant="danger" icon={<Plus />}>
      Crear Perfil Nuevo
    </Button>
  );
};

export default CreateProfileButton;
