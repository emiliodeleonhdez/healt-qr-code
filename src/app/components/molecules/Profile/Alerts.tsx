import { AlertTriangle } from 'lucide-react';
import React from 'react';

type AlertsProps = {
  allergies: string[];
  additionalInfo: string;
};

const Alerts: React.FC<AlertsProps> = ({ allergies, additionalInfo }) => {
  return (
    <article className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-yellow-300 bg-yellow-50 p-4 shadow-md md:max-w-lg lg:max-w-5xl">
      <div className="flex gap-2">
        <AlertTriangle className="h-6 w-6 text-amber-700" />
        <h2 className="text-lg font-bold uppercase text-amber-700">
          Alertas Criticas
        </h2>
      </div>
      <section className="flex flex-col gap-2">
        <p className="font-semibold uppercase">Alergias:</p>
        <section className="flex gap-2">
          {allergies.length === 0 ? 'No reportado' : allergies.join(', ')}
        </section>
        <p className="font-semibold uppercase">Información adicional:</p>
        <p>{additionalInfo}</p>
      </section>
    </article>
  );
};

export default Alerts;
