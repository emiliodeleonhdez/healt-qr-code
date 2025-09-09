import {
  formatHumanDate,
  splitNameAndGetInitials,
} from '../../../common/utils';
import React from 'react';

type UserProps = {
  fullName: string;
  age: string;
  dateOfBirth: string;
  bloodType: string;
  insurance: string;
};

const User: React.FC<UserProps> = ({
  fullName,
  age,
  dateOfBirth,
  bloodType,
  insurance,
}) => {
  return (
    <article className="flex w-full max-w-md flex-col items-center justify-center rounded-2xl border border-red-300 bg-white py-4 shadow-md md:max-w-lg lg:max-w-5xl">
      {/* Componenttt */}
      <div className="flex items-center justify-center">
        <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-red-500 p-2 text-xl font-bold text-white">
          {splitNameAndGetInitials(fullName)}
        </div>
      </div>
      <h2 className="p-2 text-lg font-bold text-red-500">{fullName}</h2>
      {/* Information goes here */}
      <section className="flex flex-col items-stretch justify-center divide-y divide-gray-300/60 rounded-lg bg-white/40 text-center lg:flex-row lg:divide-x lg:divide-y-0">
        <div className="w-full px-4 py-3 md:flex-1 md:py-2">
          <p className="whitespace-nowrap text-[11px] tracking-wide text-gray-500">
            Tipo de sangre
          </p>
          <p className="font-bold leading-tight text-red-500">{bloodType}</p>
        </div>

        <div className="w-full px-4 py-3 md:flex-1 md:py-2">
          <p className="whitespace-nowrap text-[11px] tracking-wide text-gray-500">
            Edad
          </p>
          <p className="font-bold tabular-nums leading-tight">{age} años</p>
        </div>

        <div className="w-full px-4 py-3 md:flex-1 md:py-2">
          <p className="whitespace-nowrap text-[11px] tracking-wide text-gray-500">
            Fecha de nacimiento
          </p>
          <p className="whitespace-nowrap font-bold leading-tight">
            {formatHumanDate(dateOfBirth)}
          </p>
        </div>

        <div className="w-full px-4 py-3 md:flex-1 md:py-2">
          <p className="whitespace-nowrap text-[11px] tracking-wide text-gray-500">
            Servicio Médico
          </p>
          <p className="whitespace-nowrap font-bold leading-tight">
            {insurance}
          </p>
        </div>
      </section>
    </article>
  );
};

export default User;
