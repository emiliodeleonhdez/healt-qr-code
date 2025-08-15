"use client";
import React from "react";
import Logo from "../../molecules/Logo/Logo";
import NavActions from "../../molecules/NavActions/NavActions";
import AdminLogo from "../../molecules/Admin/AdminLogo/AdminLogo";

const AdminHeader = () => {
  return (
    <div className="border-b bg-white/80 backdrop-blur-sm flex items-center justify-between p-4">
      <div className="flex gap-2 items-center p-2">
        <AdminLogo />
        <h2 className="font-bold">MediScnaId Admin</h2>
      </div>
    </div>
  );
};

export default AdminHeader;
