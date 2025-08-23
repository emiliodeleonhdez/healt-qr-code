'use client';
import React, { useState } from 'react';
import { FormInput } from '../../atoms/Input/FormInput';
import { Button } from '../../atoms/Button/Button';
import { Plus, Save } from 'lucide-react';
import EmergencyContactForm from '../EmergencyConrtactForm/EmergencyContactForm';

type Contact = {
  id: number;
  emergencyContactName: string;
  emergencyContactNameRelationship: string;
  emergencyContactPhone: string;
};

type BasicForm = {
  fullName: string;
  dateOfBirth: string;
  bloodType: string;
  allergiesInput: string;
  currentTreatmentInput: string;
  existingInput: string;
  allergies: string[];
  currentTreatment: string[];
  existing: string[];
  additionalInfo: string;
  insurance: string;
};

const ContactInformation: React.FC<{
  value: Omit<Contact, 'id'>;
  onChange: (partial: Partial<Omit<Contact, 'id'>>) => void;
}> = ({ value, onChange }) => {
  return (
    <section className="flex flex-1 flex-col gap-2 md:flex-row">
      <FormInput
        labelText="Nombre"
        placeholder="Nombre de contacto"
        type="text"
        name="emergencyContactName"
        value={value.emergencyContactName}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange({ emergencyContactName: e.target.value })
        }
      />
      <FormInput
        labelText="Relación"
        placeholder="ej., Pareja, Hermano(a)"
        type="text"
        name="emergencyContactNameRelationship"
        value={value.emergencyContactNameRelationship}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange({ emergencyContactNameRelationship: e.target.value })
        }
      />
      <FormInput
        labelText="Teléfono"
        placeholder="Número Teléfonico"
        type="text"
        name="emergencyContactPhone"
        value={value.emergencyContactPhone}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange({ emergencyContactPhone: e.target.value })
        }
      />
    </section>
  );
};

const CreateProfileForm = () => {
  const [form, setForm] = useState<BasicForm>({
    fullName: '',
    dateOfBirth: '',
    bloodType: 'Desconocido',
    allergiesInput: '',
    currentTreatmentInput: '',
    existingInput: '',
    allergies: [],
    currentTreatment: [],
    existing: [],
    additionalInfo: '',
    insurance: '',
  });

  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleBasicChange =
    (key: keyof BasicForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const pushToList = (inputKey: keyof BasicForm, listKey: keyof BasicForm) => {
    setForm((prev) => {
      const val = String(prev[inputKey] ?? '').trim();
      if (!val) return prev;
      return {
        ...prev,
        [listKey]: [...(prev[listKey] as string[]), val],
        [inputKey]: '',
      };
    });
  };

  const removeFromList = (listKey: keyof BasicForm, index: number) => {
    setForm((prev) => {
      const list = [...(prev[listKey] as string[])];
      list.splice(index, 1);
      return { ...prev, [listKey]: list };
    });
  };

  const addContact = () => {
    setContacts((prev) => [
      ...prev,
      {
        id: Date.now(),
        emergencyContactName: '',
        emergencyContactNameRelationship: '',
        emergencyContactPhone: '',
      },
    ]);
  };

  const removeContact = (id: number) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const updateContact = (id: number, partial: Partial<Omit<Contact, 'id'>>) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...partial } : c))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: string[] = [];
    if (!form.fullName.trim())
      errors.push('El nombre completo es obligatorio.');
    if (contacts.length === 0)
      errors.push('Agrega al menos un contacto de emergencia.');
    contacts.forEach((c, i) => {
      if (!c.emergencyContactName.trim())
        errors.push(`Contacto ${i + 1}: falta el nombre.`);
      if (!c.emergencyContactPhone.trim())
        errors.push(`Contacto ${i + 1}: falta el teléfono.`);
    });

    if (errors.length) {
      alert(errors.join('\n'));
      return;
    }

    const payload = {
      fullName: form.fullName.trim(),
      dateOfBirth: form.dateOfBirth || null,
      bloodType: form.bloodType || 'Desconocido',
      allergies: form.allergies,
      currentTreatment: form.currentTreatment,
      existingConditions: form.existing,
      additionalInfo: form.additionalInfo.trim(),
      emergencyContacts: contacts.map(({ ...rest }) => rest),
    };

    try {
      console.log('Submitting payload:', payload);
      alert('Perfil creado correctamente.');
    } catch (err) {
      console.error('Ocurrió un error al enviar el formulario' + err);
    }
  };

  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 p-8 shadow-md">
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Crea tu perfil Médico</h2>
        <p className="text-gray-600">
          Proporciona tu información médica de emergencia para los equipos de
          primeros auxilios
        </p>
      </section>

      <form onSubmit={handleSubmit}>
        {/* Información básica */}
        <section className="basic_info">
          <h2 className="py-2 text-lg font-bold">Información Básica</h2>
          <section className="flex flex-wrap gap-2">
            <FormInput
              labelText="Nombre Completo *"
              placeholder="Ingresa tu nombre completo"
              type="text"
              name="fullName"
              value={form.fullName}
              handleChange={handleBasicChange('fullName')}
            />
            <FormInput
              labelText="Fecha de nacimiento"
              placeholder="mm/dd/yyyy"
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              handleChange={handleBasicChange('dateOfBirth')}
            />
          </section>
          <p>Tipo de Sangre</p>
          <select
            name="bloodType"
            value={form.bloodType}
            onChange={handleBasicChange('bloodType')}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          >
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="Desconocido">Desconocido</option>
          </select>
        </section>

        {/* Información médica */}
        <section className="py-2">
          <h2 className="text-lg font-bold">Información Médica</h2>
          <FormInput
            labelText="Seguro Médico"
            placeholder="ej. IMSS, ISSTE, GNP"
            type="text"
            name="insurance"
            value={form.insurance}
            handleChange={handleBasicChange('insurance')}
          />

          {/* Alergias */}
          <div className="flex items-end gap-2">
            <FormInput
              labelText="Alergias"
              placeholder="Añadir una alergia"
              type="text"
              name="allergies"
              value={form.allergiesInput}
              handleChange={handleBasicChange('allergiesInput')}
            />
            <Button
              icon={<Plus className="h4 w-4 text-white" />}
              type="button"
              onClick={() => pushToList('allergiesInput', 'allergies')}
            >
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>
          {form.allergies.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {form.allergies.map((a, idx) => (
                <span
                  key={`${a}-${idx}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm"
                >
                  {a}
                  <button
                    type="button"
                    aria-label={`Quitar ${a}`}
                    className="leading-none"
                    onClick={() => removeFromList('allergies', idx)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Tratamiento actual */}
          <div className="flex items-end gap-2">
            <FormInput
              labelText="Tratamiento actual"
              placeholder="Añadir un medicamento"
              type="text"
              name="currentTreatment"
              value={form.currentTreatmentInput}
              handleChange={handleBasicChange('currentTreatmentInput')}
            />
            <Button
              icon={<Plus className="h4 w-4 text-white" />}
              type="button"
              onClick={() =>
                pushToList('currentTreatmentInput', 'currentTreatment')
              }
            >
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>
          {form.currentTreatment.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {form.currentTreatment.map((m, idx) => (
                <span
                  key={`${m}-${idx}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm"
                >
                  {m}
                  <button
                    type="button"
                    aria-label={`Quitar ${m}`}
                    className="leading-none"
                    onClick={() => removeFromList('currentTreatment', idx)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Enfermedades existentes */}
          <div className="flex items-end gap-2">
            <FormInput
              labelText="Enfermedades existentes"
              placeholder="Añadir enfermedad"
              type="text"
              name="existing"
              value={form.existingInput}
              handleChange={handleBasicChange('existingInput')}
            />
            <Button
              icon={<Plus className="h-4 w-4 text-white" />}
              type="button"
              onClick={() => pushToList('existingInput', 'existing')}
            >
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>
          {form.existing.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {form.existing.map((d, idx) => (
                <span
                  key={`${d}-${idx}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm"
                >
                  {d}
                  <button
                    type="button"
                    aria-label={`Quitar ${d}`}
                    className="leading-none"
                    onClick={() => removeFromList('existing', idx)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </section>

        <section className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">Contactos de Emergencia *</h2>
            <Button
              variant="secondary"
              icon={<Plus className="h-4 w-4 text-gray-800" />}
              onClick={addContact}
              type="button"
            >
              <span className="hidden md:block">Añadir</span>
            </Button>
          </div>

          {contacts.map((c) => (
            <EmergencyContactForm
              key={c.id}
              formBody={
                <ContactInformation
                  value={{
                    emergencyContactName: c.emergencyContactName,
                    emergencyContactNameRelationship:
                      c.emergencyContactNameRelationship,
                    emergencyContactPhone: c.emergencyContactPhone,
                  }}
                  onChange={(partial) => updateContact(c.id, partial)}
                />
              }
              onRemove={() => removeContact(c.id)}
            />
          ))}
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="font-semibold">Información adicional</h2>
          <textarea
            placeholder="Información médica que pueda ayudar en una emergencia"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 shadow-inner focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            name="additionalInfo"
            id=""
            value={form.additionalInfo}
            onChange={handleBasicChange('additionalInfo')}
          ></textarea>
        </section>

        <section className="flex flex-col gap-2 py-4 md:flex-row">
          <Button
            className="flex-0 md:flex-1"
            variant="primary"
            icon={<Save className="h-4 w-4 text-white" />}
          >
            Create Profile
          </Button>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              setForm({
                fullName: '',
                dateOfBirth: '',
                bloodType: 'Desconocido',
                allergiesInput: '',
                currentTreatmentInput: '',
                existingInput: '',
                allergies: [],
                currentTreatment: [],
                existing: [],
                additionalInfo: '',
                insurance: '',
              });
              setContacts([]);
            }}
          >
            Cancelar
          </Button>
        </section>
      </form>
    </section>
  );
};

export default CreateProfileForm;
