"use client";
import React from "react";
import { X } from "lucide-react";

type EmergencyContactFormProps = {
  formBody: React.ReactNode;
};

const EmergencyContactForm: React.FC<EmergencyContactFormProps> = ({
  formBody,
}) => {
  return (
    <form>
      <div className="flex items-center flex-wrap gap-2 rounded-2xl border border-gray-200 p-2">
        {formBody}
        <div className="hover:rounded-full hover:cursor-pointer flex justify-center items-center hover:bg-gray-200 h-6 w-6">
          <X className="h-4 w-4 text-gray-600" />
        </div>
      </div>
    </form>
  );
};

export default EmergencyContactForm;
