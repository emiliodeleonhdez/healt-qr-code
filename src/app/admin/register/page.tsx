"use client";

import React, { useState } from "react";

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

  // Manejo de campos simples
  const handleChange = (e: {
    target: { name: string; value: string | [] };
  }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  type ArrayFieldName =
    | "allergies"
    | "preExistingConditions"
    | "currentTreatment";

  // Manejo de campos que son arrays (alergias, condiciones, tratamientos)
  const handleArrayChange = (
    index: number,
    arrayName: ArrayFieldName,
    value: string
  ) => {
    const newArray = [...formData[arrayName]];
    newArray[index] = value;
    setFormData({
      ...formData,
      [arrayName]: newArray,
    });
  };

  const addArrayField = (arrayName: ArrayFieldName) => {
    setFormData({
      ...formData,
      [arrayName]: [...formData[arrayName], ""],
    });
  };

  // Manejo de contactos de emergencia (array de objetos)
  const handleContactChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newContacts = [...formData.emergencyContacts];
    newContacts[index] = {
      ...newContacts[index],
      [e.target.name]: e.target.value,
    };
    setFormData({
      ...formData,
      emergencyContacts: newContacts,
    });
  };

  const addEmergencyContact = () => {
    setFormData({
      ...formData,
      emergencyContacts: [
        ...formData.emergencyContacts,
        { name: "", relation: "", phone: "" },
      ],
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Aquí podrías enviar la información a una API o realizar otra acción.
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Información Personal</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Fecha de Nacimiento:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tipo de Sangre:</label>
        <select
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
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

      <h3>Alergias</h3>
      {formData.allergies.map((allergy, index) => (
        <div key={index}>
          <input
            type="text"
            value={allergy}
            onChange={(e) =>
              handleArrayChange(index, "allergies", e.target.value)
            }
          />
        </div>
      ))}
      <button type="button" onClick={() => addArrayField("allergies")}>
        Agregar Alergia
      </button>

      <h3>Condiciones Preexistentes</h3>
      {formData.preExistingConditions.map((condition, index) => (
        <div key={index}>
          <input
            type="text"
            value={condition}
            onChange={(e) =>
              handleArrayChange(index, "preExistingConditions", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addArrayField("preExistingConditions")}
      >
        Agregar Condición
      </button>

      <h3>Tratamiento Actual</h3>
      {formData.currentTreatment.map((treatment, index) => (
        <div key={index}>
          <input
            type="text"
            value={treatment}
            onChange={(e) =>
              handleArrayChange(index, "currentTreatment", e.target.value)
            }
          />
        </div>
      ))}
      <button type="button" onClick={() => addArrayField("currentTreatment")}>
        Agregar Tratamiento
      </button>

      <h3>Contactos de Emergencia</h3>
      {formData.emergencyContacts.map((contact, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={(e) => handleContactChange(index, e)}
            />
          </div>
          <div>
            <label>Relación:</label>
            <input
              type="text"
              name="relation"
              value={contact.relation}
              onChange={(e) => handleContactChange(index, e)}
            />
          </div>
          <div>
            <label>Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={contact.phone}
              onChange={(e) => handleContactChange(index, e)}
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={addEmergencyContact}>
        Agregar Contacto
      </button>

      <div>
        <label>Seguro Médico:</label>
        <input
          type="text"
          name="medicalInsurancePolicy"
          value={formData.medicalInsurancePolicy}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default MedicalForm;
