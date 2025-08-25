import React from 'react';
import User from '../../molecules/Profile/User';
import Banner from '../../molecules/Profile/Banner';
import Alerts from '../../molecules/Profile/Alerts';
import Meds from '../../molecules/Profile/Meds';
import Conditions from '../../molecules/Profile/Conditions';
import Contacts from '../../molecules/Profile/Contacts';

const demoEmergencyContacts = [
  { name: 'María Salgado Díaz', relation: 'Madre', phone: '+52 33 1445 9988' },
  { name: 'Tomás Pérez Ortega', relation: 'Primo', phone: '+52 55 6600 2299' },
];

const Demo = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col items-center gap-2 p-4">
        <User
          fullName="Ileana Pérez Salgado"
          age="24"
          dateOfBirth="09/Diciembre/2001"
          bloodType="A-"
        />
        <Alerts
          allergies={['Nueces', 'Mariscos', 'Polen']}
          additionalInfo={
            'Usa bomba de insulina; portar EpiPen por alergia a nueces'
          }
        />
        <section className="flex w-full max-w-md flex-col gap-2 md:max-w-lg md:flex-row lg:max-w-5xl">
          <section className="flex flex-1 flex-col gap-2">
            <Meds
              meds={['Insulina NPH 10 UI noche', 'Losartán 50 mg diario']}
            />
            <Conditions conditions={['Diabetes tipo 1', 'Hipertensión']} />
          </section>
          <section className="flex-1">
            <Contacts contacts={demoEmergencyContacts} />
          </section>
        </section>
      </div>
    </>
  );
};

export default Demo;
