import { Pill } from "lucide-react";
import React from "react";

const Meds = () => {
  return (
    <article
      className="flex flex-col gap-2 rounded-2xl border border-blue-300 bg-white shadow-md p-4 
  w-full max-w-md md:max-w-lg lg:max-w-2xl"
    >
      <section className="flex gap-2">
        <Pill className="h-6 w-6 text-blue-600" />
        <h2 className="font-bold text-blue-600 text xl">Tratamiento actual</h2>
      </section>
      <section className="flex flex-col gap-2">
        <div className="rounded-xl border-l-4 border-blue-600 p-4 bg-blue-50">
          <p>Lisinopril 10mg diario</p>
        </div>
        <div className="rounded-xl border-l-4 border-blue-600 p-4 bg-blue-50">
          <p>Metformina 500mg dos veces al día</p>
        </div>
      </section>
    </article>
  );
};

export default Meds;
