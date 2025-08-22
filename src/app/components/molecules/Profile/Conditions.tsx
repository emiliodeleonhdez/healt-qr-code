import { FileText } from 'lucide-react';
import React from 'react';

const Conditions = () => {
  return (
    <article className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-violet-300 bg-white p-4 shadow-md md:max-w-lg lg:max-w-5xl">
      <section className="flex gap-2">
        <FileText className="h-6 w-6 text-violet-600" />
        <h2 className="text xl font-bold text-violet-600">
          Enfermedades Existentes
        </h2>
      </section>
      <section className="flex flex-wrap gap-2">
        <p className="rounded-xl border border-violet-300 p-2">Diabetes</p>
        <p className="rounded-xl border border-violet-300 p-2">Hipertensión</p>
      </section>
    </article>
  );
};

export default Conditions;
