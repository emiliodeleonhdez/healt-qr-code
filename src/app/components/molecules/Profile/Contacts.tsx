import { Phone } from 'lucide-react';
import React from 'react';

type Contact = { name: string; relation: string; phone: string };

type ContactsProps = {
  contacts: Contact[];
};

const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <article className="flex h-fit w-full max-w-md flex-col gap-3 rounded-2xl border border-green-300 bg-white p-4 shadow-md md:max-w-lg lg:max-w-5xl">
      <section className="flex gap-2">
        <Phone className="h-6 w-6 text-green-600" />
        <h2 className="text xl font-bold text-green-600">
          Contactos de emergencia
        </h2>
      </section>
      <section className="flex flex-col gap-2">
        {contacts.map((contact, idx) => (
          <div
            key={`${contact.name}-${idx}`}
            className="flex flex-col rounded-lg border border-green-300 bg-green-100 p-2"
          >
            <section className="flex justify-between">
              <h2 className="font-bold text-green-700">{contact.name}</h2>
              {idx === 0 && (
                <span className="rounded-xl bg-green-700 p-1 text-xs font-semibold text-white">
                  Principal
                </span>
              )}
            </section>
            <p>{contact.relation}</p>
            <a
              href={`tel:${contact.phone}`}
              className="w-fit rounded-lg border border-green-300 bg-white p-2 text-xl font-bold text-green-700"
            >
              {contact.phone}
            </a>
          </div>
        ))}
      </section>
    </article>
  );
};

export default Contacts;
