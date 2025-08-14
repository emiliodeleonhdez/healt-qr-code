"use client";

import { API_COLLECTION, apiPrefix, clientUrl } from "@/app/common";
import Button from "@/app/components/atoms/Button/Button";
import { FormInput } from "@/app/components/atoms/Input/FormInput";
import AxiosClient from "@/app/services/axiosClient";
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

  const addAllergy = () => {
    setFormData({
      ...formData,
      allergies: [...formData.allergies, ""],
    });
  };

  const addCondition = () => {
    setFormData({
      ...formData,
      preExistingConditions: [...formData.preExistingConditions, ""],
    });
  };

  const addMedication = () => {
    setFormData({
      ...formData,
      currentTreatment: [...formData.currentTreatment, ""],
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

  const handleAllergyChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormData((prev) => {
      const newAllergies = [...prev.allergies];
      newAllergies[index] = value;
      return { ...prev, allergies: newAllergies };
    });
  };

  const handleConditionChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormData((prev) => {
      const newConditions = [...prev.preExistingConditions];
      newConditions[index] = value;
      return { ...prev, preExistingConditions: newConditions };
    });
  };

  const handleTreatmentChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormData((prev) => {
      const newMed = [...prev.currentTreatment];
      newMed[index] = value;
      return { ...prev, currentTreatment: newMed };
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const api = new AxiosClient();
    try {
      const createUserResponse = api.post(
        `${clientUrl}${apiPrefix}${API_COLLECTION.users}`,
        formData
      );
      console.log("createUserResponse", createUserResponse);
    } catch (error) {
      throw new Error("Error creating user", { cause: error });
    }
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
        <FormInput
          labelText="Poliza de Seguro Médico"
          type="text"
          name="medicalInsurancePolicy"
          value={formData.medicalInsurancePolicy}
          handleChange={handleChange}
          tailwindOptions="border border-2"
        />
        <div>
          <h3 className="font-bold">Tratamiento</h3>
          <div className="border-solid border-2 w-full my-2"></div>
          {formData.currentTreatment.map((medication, index) => (
            <div key={index}>
              <FormInput
                labelText="Medicamento"
                type="text"
                name="currentTreatment"
                value={medication}
                tailwindOptions="border border-2"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleTreatmentChange(index, e)
                }
              />
              <div className="border-solid border-2 w-full my-2"></div>
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Button
              tailwindOptions="rounded-full p-4 bg-green-500 text-white w-[50px] h-[50px] flex justify-center items-center"
              type="submit"
              onClick={addMedication}
            >
              +
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Enfermedades</h3>
          <div className="border-solid border-2 w-full my-2"></div>
          {formData.preExistingConditions.map((condition, index) => (
            <div key={index}>
              <FormInput
                labelText="Enfermedad"
                type="text"
                name="preExistingConditions"
                value={condition}
                tailwindOptions="border border-2"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleConditionChange(index, e)
                }
              />
              <div className="border-solid border-2 w-full my-2"></div>
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Button
              tailwindOptions="rounded-full p-4 bg-green-500 text-white w-[50px] h-[50px] flex justify-center items-center"
              type="submit"
              onClick={addCondition}
            >
              +
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Alergias</h3>
          <div className="border-solid border-2 w-full my-2"></div>
          {formData.allergies.map((allergy, index) => (
            <div key={index}>
              <FormInput
                labelText="Alergia"
                type="text"
                name="allergies"
                value={allergy}
                tailwindOptions="border border-2"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleAllergyChange(index, e)
                }
              />
              <div className="border-solid border-2 w-full my-2"></div>
            </div>
          ))}
          <div className="flex justify-center items-center">
            <Button
              tailwindOptions="rounded-full p-4 bg-green-500 text-white w-[50px] h-[50px] flex justify-center items-center"
              type="submit"
              onClick={addAllergy}
            >
              +
            </Button>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contactos de Emergencia</h3>
          <div className="border-solid border-2 w-full my-2"></div>
          {formData.emergencyContacts.map((contact, index) => (
            <div key={index}>
              <>
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
              </>
              <div className="border-solid border-2 w-full my-2"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Button
            tailwindOptions="rounded-full p-4 bg-rose-500 text-white w-[50px] h-[50px] flex justify-center items-center"
            type="submit"
            onClick={addEmergencyContact}
          >
            +
          </Button>
        </div>

        <Button
          tailwindOptions="rounded-full p-4 bg-orange-700 text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </form>
    </section>
  );
};

export default MedicalForm;
