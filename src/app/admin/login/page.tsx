import { BasicCard } from "@/app/components/atoms/card/BasicCard";
import AdminLoginForm from "@/app/components/molecules/Admin/AdminLoginForm/AdminLoginForm";
import AdminLogo from "@/app/components/molecules/Admin/AdminLogo/AdminLogo";
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
        topIcon={<AdminLogo />}
        topIconAlignment="center"
      />
    </section>
  );
};

export default AdminLoginPage;
