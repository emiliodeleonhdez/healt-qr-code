import CreateProfileForm from "@/app/components/molecules/CreateProfileForm/CreateProfileForm";
import React from "react";

const CreateProfile: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-8 md:p-16 ">
      <section className="flex flex-col items-start gap-2 py-8 md:py-16">
        <h2 className="font-bold text-2xl">Ingresa tu información Médica</h2>
        <p>
          Esto se usará para generar códigos QR para la impresión manual de
          placas
        </p>
      </section>
      <CreateProfileForm />
    </div>
  );
};

export default CreateProfile;
