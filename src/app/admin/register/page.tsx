"use client";

import Button from "@/app/components/Button/Button";
import { FormInput } from "@/app/components/Input/FormInput";
import React, { useEffect, useState } from "react";

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    phoneNumber: "",
    bloodType: "",
    allergies: [""],
    preExistingConditions: [""],
    currentTreatment: [""],
    emergencyContacts: [{ name: "", relation: "", phone: "" }],
    medicalInsurancePolicy: "",
  });
  useEffect(() => {
    console.log("This is form data", formData);
  });
  const addEmergencyContact = () => {
    setFormData({
      ...formData,
      emergencyContacts: [
        ...formData.emergencyContacts,
        { name: "", relation: "", phone: "" },
      ],
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleContactChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newContacts = [...prev.emergencyContacts];
      newContacts[index] = { ...newContacts[index], [name]: value };
      return { ...prev, emergencyContacts: newContacts };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="p-4">
      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-center font-bold text-orange-700 text-2xl">
          Nuevo Usuario
        </h2>
        <FormInput
          labelText="Nombre"
          tailwindOptions="border border-2"
          type="text"
          name="name"
          value={formData.name}
          handleChange={handleChange}
        />

        <FormInput
          labelText="Apellido"
          type="text"
          name="lastName"
          value={formData.lastName}
          handleChange={handleChange}
          tailwindOptions="border border-2"
        />

        <FormInput
          labelText="Fecha de Nacimiento"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          handleChange={handleChange}
          tailwindOptions="border border-2"
        />

        <FormInput
          labelText="Teléfono"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          handleChange={handleChange}
          tailwindOptions="border border-2"
        />

        <div className="flex flex-col">
          <label>Tipo de Sangre:</label>
          <select
            name="bloodType"
            value={formData.bloodType}
            onChange={handleSelectChange}
            className="border border-2"
          >
            <option value="">Selecciona...</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>
        <div>
          <h3 className="font-bold">Contactos de Emergencia</h3>
          <div className="border-solid border-2 w-full my-2"></div>
          {formData.emergencyContacts.map((contact, index) => (
            <>
              <div key={index}>
                <FormInput
                  labelText="Nombre"
                  type="text"
                  name="name"
                  value={contact.name}
                  tailwindOptions="border border-2"
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleContactChange(index, e)
                  }
                />
                <FormInput
                  labelText="Relación"
                  type="text"
                  name="relation"
                  value={contact.relation}
                  tailwindOptions="border border-2"
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleContactChange(index, e)
                  }
                />
                <FormInput
                  labelText="Teléfono"
                  type="tel"
                  name="phone"
                  value={contact.phone}
                  tailwindOptions="border border-2"
                  handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleContactChange(index, e)
                  }
                />
              </div>
              <div className="border-solid border-2 w-full my-2"></div>
            </>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button
            tailwindOptions="rounded-full p-4 bg-rose-500 text-white w-[50px] h-[50px] flex justify-center items-center"
            type="submit"
            onClick={addEmergencyContact}
            children="+"
          />
        </div>
        <FormInput
          labelText="Poliza de Seguro Médico"
          type="text"
          name="medicalInsurancePolicy"
          value={formData.medicalInsurancePolicy}
          handleChange={handleChange}
          tailwindOptions="border border-2"
        />
        <Button
          tailwindOptions="rounded-full p-4 bg-orange-700 text-white"
          type="submit"
          children="Enviar"
        />
      </form>
    </section>
  );
};

export default MedicalForm;
