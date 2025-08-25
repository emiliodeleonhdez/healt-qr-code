import React from 'react';
import User from '../../molecules/Profile/User';
import Banner from '../../molecules/Profile/Banner';
import Alerts from '../../molecules/Profile/Alerts';
import Meds from '../../molecules/Profile/Meds';
import Conditions from '../../molecules/Profile/Conditions';
import Contacts from '../../molecules/Profile/Contacts';

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
        <Alerts />
        <section className="flex w-full max-w-md flex-col gap-2 md:max-w-lg md:flex-row lg:max-w-5xl">
          <section className="flex flex-1 flex-col gap-2">
            <Meds />
            <Conditions />
          </section>
          <section className="flex-1">
            <Contacts />
          </section>
        </section>
      </div>
    </>
  );
};

export default Demo;
