import { FileText } from "lucide-react";
import React from "react";

const Conditions = () => {
  return (
    <article
      className="flex flex-col gap-2 rounded-2xl border border-violet-300 bg-white shadow-md p-4 
  w-full max-w-md md:max-w-lg lg:max-w-2xl"
    >
      <section className="flex gap-2">
        <FileText className="h-6 w-6 text-violet-600" />
        <h2 className="font-bold text-violet-600 text xl">
          Enfermedades Existentes
        </h2>
      </section>
      <section className="flex flex-wrap gap-2">
        <p className="p-2 rounded-xl border border-violet-300">Diabetes</p>
        <p className="p-2 rounded-xl border border-violet-300">Hipertensión</p>
      </section>
    </article>
  );
};

export default Conditions;
