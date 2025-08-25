import { Calendar, Droplets, User2 } from 'lucide-react';
import React from 'react';

type UserProps = {
  fullName: string;
  age: string;
  dateOfBirth: string;
  bloodType: string;
};

const User: React.FC<UserProps> = ({
  fullName,
  age,
  dateOfBirth,
  bloodType,
}) => {
  return (
    <article className="flex w-full max-w-md flex-col rounded-2xl border border-red-300 bg-white py-4 shadow-md md:max-w-lg lg:max-w-5xl">
      <section className="flex flex-col bg-red-200 p-4">
        <section className="flex gap-2 text-red-600">
          <User2 />
          <h2 className="text-lg font-bold">{fullName}</h2>
        </section>
        <div className="date_info flex gap-2 font-bold text-red-600">
          <span>Edad {age} años</span>
          <span>- {dateOfBirth}</span>
        </div>
        <section className="flex gap-2 font-bold text-red-600">
          <span>Servicio Médico</span>
          <span>-</span>
          <span>IMSS: 123456</span>
        </section>
      </section>
      <section className="flex flex-col justify-evenly gap-2 p-4 md:flex-row">
        <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl bg-red-100 p-4">
          <Droplets className="h-8 w-8 text-red-600" />
          <h2 className="text-wrap uppercase">Tipo de sangre</h2>
          <h2 className="text-2xl font-bold text-red-600">{bloodType}</h2>
        </div>
        <div className="flex flex-1 flex-col items-center gap-2 rounded-2xl bg-blue-100 p-4">
          <Calendar className="h-8 w-8 text-blue-600" />
          <h2 className="text-wrap text-center uppercase">
            Perfil Actualizado
          </h2>
          <h2 className="text-2xl font-bold text-gray-600">14/03/2022</h2>
        </div>
      </section>
    </article>
  );
};

export default User;
