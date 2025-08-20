"use client";
import React from "react";
import AdminLogo from "../../molecules/Admin/AdminLogo/AdminLogo";
import AdminNavLinks from "../../molecules/Admin/AdminNavLinks/AdminNavLinks";
import { Button } from "../../atoms/button/Button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const AdminHeader = () => {
  const router = useRouter();

  return (
    <div className="border-b bg-white flex items-center justify-between px-4 sm:px-16 py-4 top-0 sticky z-50">
      <div
        onClick={() => {
          router.push("/admin/dashboard");
        }}
        className="flex gap-2 items-center p-2 hover:cursor-pointer"
      >
        <AdminLogo />
        <h2 className="font-bold">MediScanId Admin</h2>
      </div>

      <div className="flex-1 flex justify-end">
        <AdminNavLinks />
      </div>
      <div className="hidden lg:block">
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
