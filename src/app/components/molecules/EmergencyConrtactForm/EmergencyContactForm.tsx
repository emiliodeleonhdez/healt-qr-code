"use client";
import React from "react";
import { X } from "lucide-react";

type EmergencyContactFormProps = {
  formBody: React.ReactNode;
  onRemove: () => void;
};

const EmergencyContactForm: React.FC<EmergencyContactFormProps> = ({
  formBody,
  onRemove,
}) => {
  return (
    <div className="flex items-start flex-wrap gap-2 rounded-2xl border border-gray-200 p-2">
      {formBody}
      <button
        type="button"
        onClick={onRemove}
        className="hover:rounded-full hover:cursor-pointer flex justify-center items-center hover:bg-gray-200 h-6 w-6"
      >
        <X className="h-4 w-4 text-gray-600" />
      </button>
    </div>
  );
};

export default EmergencyContactForm;
