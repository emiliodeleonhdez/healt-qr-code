import { Calendar, Droplets, User2 } from "lucide-react";
import React from "react";

const User = () => {
  return (
    <article
      className="flex flex-col rounded-2xl border border-red-300 bg-white shadow-md py-4 
  w-full max-w-md md:max-w-lg lg:max-w-2xl"
    >
      <section className="flex flex-col bg-red-200 p-4">
        <section className="flex gap-2 text-red-600">
          <User2 />
          <h2 className="font-bold text-lg">John Smith</h2>
        </section>
        <div className="date_info flex gap-2  text-red-600 font-bold">
          <span>Edad 40 años</span>
          <span>Nacido el 14/Marzo/1985</span>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-evenly gap-2 p-4">
        <div className=" flex-1 flex flex-col items-center gap-2 bg-red-100 rounded-2xl p-4">
          <Droplets className="h-8 w-8 text-red-600" />
          <h2 className="uppercase text-wrap">Tipo de sangre</h2>
          <h2 className="font-bold text-2xl text-red-600">O+</h2>
        </div>
        <div className="flex-1 flex flex-col items-center gap-2 bg-blue-100 rounded-2xl p-4">
          <Calendar className="h-8 w-8 text-blue-600" />
          <h2 className="uppercase text-center text-wrap">
            Perfil Actualizado
          </h2>
          <h2 className="font-bold text-2xl text-gray-600">14/03/2022</h2>
        </div>
      </section>
    </article>
  );
};

export default User;
