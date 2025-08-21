import { AlertTriangle } from "lucide-react";
import React from "react";

const Alerts = () => {
  return (
    <article
      className="flex flex-col gap-2 rounded-2xl border border-yellow-300 bg-yellow-50 shadow-md p-4 
  w-full max-w-md md:max-w-lg lg:max-w-2xl"
    >
      <div className="flex gap-2">
        <AlertTriangle className="h-6 w-6 text-amber-700" />
        <h2 className="uppercase font-bold text-lg text-amber-700">
          Alertas Criticas
        </h2>
      </div>
      <section className="flex flex-col gap-2">
        <p className="uppercase font-semibold">Alergias:</p>
        <p>Penicilina, mariscos, latex</p>
        <p className="uppercase font-semibold">Información adicional:</p>
        <p>Antecedentes de alergias graves. Mantener EpiPen cerca.</p>
      </section>
    </article>
  );
};

export default Alerts;
