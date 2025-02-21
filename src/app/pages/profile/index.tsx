"use client";
import Card from "@/app/components/Card/Card";
import MultipleItemsCard from "@/app/components/Card/MultipleItemsCard";
import ProfilePic from "@/app/components/ProfilePic/ProfilePic";
import useGetUserById from "@/app/hooks/useGetUserById";
import { EmergencyContact } from "@/app/interfaces";
import React from "react";

const Profile: React.FC = () => {
  const { user, loading, error } = useGetUserById("67b6c41023840c3b3b1635ae");

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full">
      {!loading && user && (
        <ProfilePic name={`${user.name} ${user.lastName}`} />
      )}
      <section className="info w-full flex flex-col justify-center items-center gap-4 py-8">
        {user && (
          <>
            <Card
              cardTitle="Paciente"
              description={[
                user.name,
                `Tipo de sangre: ${user.bloodType}`,
                `Teléfono: ${user.phoneNumber}`,
                `Alergias: ${
                  user.allergies.length > 0 ? user.allergies : "No registrado"
                }`,
              ]}
            />
            <Card
              cardTitle="Enfermedades"
              description={
                user.preExistingConditions.length > 0
                  ? user.preExistingConditions
                  : "No registrado"
              }
            />
            <Card
              cardTitle="Seguro Médico"
              description={user.medicalInsurancePolicy}
            />
            <Card cardTitle="Tratamiento" description={user.currentTreatment} />
            {user.emergencyContacts.map((contact: EmergencyContact, key) => {
              return (
                <MultipleItemsCard
                  key={key}
                  cardTitle="Contacto de emergencia"
                  description={contact}
                />
              );
            })}
          </>
        )}
      </section>
    </section>
  );
};

export default Profile;
