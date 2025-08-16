import DashboardCards from "@/app/components/molecules/Admin/DashboardCards/DashboardCards";
import QuickActions from "@/app/components/molecules/Admin/QuickActions/QuickActions";
import CreateProfileButton from "@/app/components/molecules/CreateProfileButton/CreateProfileButton";
import React from "react";

const page = () => {
  return (
    <section className="p-16">
      <section className="flex flex-col jutify-center md:flex-row md:justify-between items-center">
        <div className="p-2 flex flex-col items-center md:items-start gap-2">
          <h2 className="font-bold text-xl md:text-3xl">Dashboard</h2>
          <p className="text-gray-600  text-center md:text-left">
            Visión general del sistema de placas médicas
          </p>
        </div>
        <div className="py-4 md:p-0">
          <CreateProfileButton />
        </div>
      </section>
      <DashboardCards />
      <QuickActions />
    </section>
  );
};

export default page;
