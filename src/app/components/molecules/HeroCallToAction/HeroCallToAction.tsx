"use client";
import React from "react";
import { Button } from "../../atoms/Button/Button";
import { useRouter } from "next/navigation";

const HeroCallToAction = () => {
  const router = useRouter();
  return (
    <div className="flex gap-2 justify-center">
      <Button
        onClick={() => router.push("/register")}
        size="md"
        variant="primary"
      >
        Crear perfil
      </Button>
      <Button onClick={() => router.push("/demo")} size="md" variant="outline">
        Ver Demo
      </Button>
    </div>
  );
};

export default HeroCallToAction;
