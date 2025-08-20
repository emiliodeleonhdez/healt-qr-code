"use client";
import React from "react";
import { Button } from "../../atoms/Button/Button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateProfileButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/admin/create-profile")}
      variant="danger"
      icon={<Plus />}
    >
      Crear Perfil Nuevo
    </Button>
  );
};

export default CreateProfileButton;
