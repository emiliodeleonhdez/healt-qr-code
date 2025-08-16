"use client";
import React from "react";
import { FormInput } from "../../atoms/Input/FormInput";
import { Button } from "../../atoms/button/Button";
import { Plus, X } from "lucide-react";
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
  return (
    <section className=" flex flex-col gap-4 p-8 rounded-2xl border border-gray-200 shadow-md">
      <section className="flex flex-col gap-2">
        <h2 className="font-bold text-xl">Crea tu perfil Médico</h2>
        <p className="text-gray-600">
          Proporciona tu información médica de emergencia para los equipos de
          primeros auxilios
        </p>
      </section>
      <form>
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
        <section className="py-2">
          <h2 className="font-bold text-lg">Información Médica</h2>
          <div className="flex gap-2 items-end justify-between">
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
              labelText="Tratamiento acutal"
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
            >
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>
          <EmergencyContactForm formBody={<ContactInformation />} />
        </section>
      </form>
    </section>
  );
};

export default CreateProfileForm;
