"use client";
import React from "react";
import AdminLogo from "../../molecules/Admin/AdminLogo/AdminLogo";
import AdminNavLinks from "../../molecules/Admin/AdminNavLinks/AdminNavLinks";
import { Button } from "../../atoms/button/Button";
import { LogOut } from "lucide-react";

const AdminHeader = () => {
  return (
    <div className="border-b bg-white/80 backdrop-blur-sm flex items-center justify-between p-4">
      <div className="flex gap-2 items-center p-2">
        <AdminLogo />
        <h2 className="font-bold">MediScnaId Admin</h2>
      </div>
      <AdminNavLinks />
      <div className="logout_section">
        <Button
          icon={<LogOut className="h-6 w-6 text-gray-600" />}
          variant="secondary"
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
