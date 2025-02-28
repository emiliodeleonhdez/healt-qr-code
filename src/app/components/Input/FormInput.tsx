import React from "react";

interface FormInputProps {
  labelText: string;
  tailwindOptions: string;
  type: string;
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInputComponent: React.FC<FormInputProps> = ({
  labelText,
  tailwindOptions,
  type,
  name,
  value,
  handleChange,
}) => {
  return (
    <div className="flex flex-col">
      <label>{labelText}:</label>
      <input
        className={tailwindOptions}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export const FormInput = React.memo(FormInputComponent);
