"use client";
import { Shield } from "lucide-react";
import React from "react";

const AdminLogo = () => {
  return (
    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
      <Shield className="h-6 w-6 text-red-600" />
    </div>
  );
};

export default AdminLogo;
