"use client";

import React from "react";

export const INPUT_BASE_CLASSES =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500";

interface FormInputProps {
  labelText: string;
  tailwindOptions?: string;
  type: string;
  name: string;
  value: string;
  placeholder?: string;
  autoComplete?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const FormInputComponent: React.FC<FormInputProps> = ({
  labelText,
  tailwindOptions,
  type,
  name,
  value,
  placeholder,
  autoComplete,
  handleChange,
  className = "",
}) => {
  const id = name;

  return (
    <div className="flex flex-col gap-1 flex-1">
      <label htmlFor={id} className="text-sm font-semibold text-gray-700">
        {labelText}
      </label>
      <input
        id={id}
        className={`${INPUT_BASE_CLASSES} ${tailwindOptions || ""} ${className}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={handleChange}
      />
    </div>
  );
};

export const FormInput = React.memo(FormInputComponent);
