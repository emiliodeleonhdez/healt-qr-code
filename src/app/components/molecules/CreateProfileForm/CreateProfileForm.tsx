"use client";
import React, { useState } from "react";
import { FormInput } from "../../atoms/Input/FormInput";
import { Button } from "../../atoms/button/Button";
import { Plus } from "lucide-react";
import EmergencyContactForm from "../EmergencyConrtactForm/EmergencyContactForm";

const ContactInformation: React.FC = () => {
  return (
    <>
      <FormInput
        labelText="Nombre"
        placeholder="Nombre de contacto"
        type="text"
        name="emergencyContactName"
        value=""
        handleChange={() => {}}
      />
      <FormInput
        labelText="Relación"
        placeholder="ej., Pareja, Hermano(a)"
        type="text"
        name="emergencyContactNameRelationship"
        value=""
        handleChange={() => {}}
      />
      <FormInput
        labelText="Teléfono"
        placeholder="Número Teléfonico"
        type="text"
        name="emergencyContactPhone"
        value=""
        handleChange={() => {}}
      />
    </>
  );
};

const CreateProfileForm = () => {
  const [contacts, setContacts] = useState<number[]>([]);

  const addContact = () => {
    setContacts((prev) => [...prev, Date.now()]);
  };

  const removeContact = (id: number) => {
    setContacts((prev) => prev.filter((c) => c !== id));
  };

  return (
    <section className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 shadow-md">
      <section className="flex flex-col gap-2">
        <h2 className="font-bold text-xl">Crea tu perfil Médico</h2>
        <p className="text-gray-600">
          Proporciona tu información médica de emergencia para los equipos de
          primeros auxilios
        </p>
      </section>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Información básica */}
        <section className="basic_info">
          <h2 className="font-bold text-lg py-2">Información Básica</h2>
          <section className="flex gap-2 flex-wrap">
            <FormInput
              labelText="Nombre Completo *"
              placeholder="Ingresa tu nombre completo"
              type="text"
              name="fullName"
              value=""
              handleChange={() => {}}
            />
            <FormInput
              labelText="Fecha de nacimiento"
              placeholder="mm/dd/yyyy"
              type="date"
              name="dateOfBirth"
              value=""
              handleChange={() => {}}
            />
          </section>
          <p>Blood Type</p>
        </section>

        {/* Información médica */}
        <section className="py-2">
          <h2 className="font-bold text-lg">Información Médica</h2>
          <div className="flex gap-2 items-end">
            <FormInput
              labelText="Alergias"
              placeholder="Añadir una alergia"
              type="text"
              name="allergies"
              value=""
              handleChange={() => {}}
            />
            <Button icon={<Plus className="h4 w-4 text-white" />}>
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>
          <div className="flex gap-2 items-end">
            <FormInput
              labelText="Tratamiento actual"
              placeholder="Añadir un medicamento"
              type="text"
              name="currentTreatment"
              value=""
              handleChange={() => {}}
            />
            <Button icon={<Plus className="h4 w-4 text-white" />}>
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>
          <div className="flex gap-2 items-end">
            <FormInput
              labelText="Enfermedades existentes"
              placeholder="Añadir enfermedad"
              type="text"
              name="existing"
              value=""
              handleChange={() => {}}
            />
            <Button icon={<Plus className="h-4 w-4 text-white" />}>
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="font-bold text-lg">Contactos de Emergencia *</h2>
            <Button
              variant="secondary"
              icon={<Plus className="h-4 w-4 text-gray-800" />}
              onClick={addContact}
            >
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>

          {contacts.map((id) => (
            <EmergencyContactForm
              key={id}
              formBody={<ContactInformation />}
              onRemove={() => removeContact(id)}
            />
          ))}
        </section>
      </form>
    </section>
  );
};

export default CreateProfileForm;
