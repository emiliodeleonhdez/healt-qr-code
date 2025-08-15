import DashboardCards from "@/app/components/molecules/Admin/DashboardCards/DashboardCards";
import CreateProfileButton from "@/app/components/molecules/CreateProfileButton/CreateProfileButton";
import React from "react";

const page = () => {
  return (
    <section className="p-16">
      <section className="flex justify-between items-center">
        <div className="p-2">
          <h2 className="font-bold text-xl md:text-3xl">Dashboard</h2>
          <p className="text-gray-600">
            Visión general del sistema de placas médicas
          </p>
        </div>
        <CreateProfileButton />
      </section>
      <DashboardCards />
    </section>
  );
};

export default page;
