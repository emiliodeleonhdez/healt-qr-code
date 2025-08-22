import { Pill } from 'lucide-react';
import React from 'react';

const Meds = () => {
  return (
    <article className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-blue-300 bg-white p-4 shadow-md md:max-w-lg lg:max-w-5xl">
      <section className="flex gap-2">
        <Pill className="h-6 w-6 text-blue-600" />
        <h2 className="text xl font-bold text-blue-600">Tratamiento actual</h2>
      </section>
      <section className="flex flex-col gap-2">
        <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-4">
          <p>Lisinopril 10mg diario</p>
        </div>
        <div className="rounded-xl border-l-4 border-blue-600 bg-blue-50 p-4">
          <p>Metformina 500mg dos veces al día</p>
        </div>
      </section>
    </article>
  );
};

export default Meds;
