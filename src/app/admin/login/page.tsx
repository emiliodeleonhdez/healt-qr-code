import { BasicCard } from "@/app/components/atoms/Card/BasicCard";
import AdminLoginForm from "@/app/components/molecules/Admin/AdminLoginForm/AdminLoginForm";
import { Shield } from "lucide-react";
import React from "react";

const AdminLoginPage: React.FC = () => {
  return (
    <section className="p-2 md:p-8 lg:p-16 flex justify-center">
      <BasicCard
        headerAlignment="center"
        size="lg"
        className="p-8"
        cardHeader="Admin Login"
        cardSubHeader="Accede al panel de administración de placas médicas"
        cardBody={<AdminLoginForm />}
        topIcon={
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
        }
      />
    </section>
  );
};

export default AdminLoginPage;
