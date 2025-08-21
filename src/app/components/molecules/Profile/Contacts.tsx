import { Phone } from "lucide-react";
import React from "react";

const Contacts = () => {
  return (
    <article
      className="flex flex-col gap-2 rounded-2xl border border-gree-300 bg-white shadow-md p-4 
  w-full max-w-md md:max-w-lg lg:max-w-2xl"
    >
      <section className="flex gap-2">
        <Phone className="h-6 w-6 text-green-600" />
        <h2 className="font-bold text-green-600 text xl">
          Contactos de emergencia
        </h2>
      </section>
      <section className="flex flex-col gap-2">
        <div className="flex flex-col rounded-lg bg-green-100">g</div>
      </section>
    </article>
  );
};

export default Contacts;
