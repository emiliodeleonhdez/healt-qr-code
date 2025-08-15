"use client";
import React from "react";
import { Button } from "../../atoms/button/Button";
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
      <Button size="md" variant="outline">
        Ver Demo
      </Button>
    </div>
  );
};

export default HeroCallToAction;
