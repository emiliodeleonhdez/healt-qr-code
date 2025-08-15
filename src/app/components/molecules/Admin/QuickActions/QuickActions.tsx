import QuickAction from "@/app/components/atoms/QuickAction/QuickAction";
import { Box, Eye, UserPlus } from "lucide-react";
import React from "react";

const QuickActions = () => {
  return (
    <article className="rounded-2xl border bg-white p-8 shadow-md">
      <div className="p-2 py-4 flex flex-col items-center md:items-start">
        <h2 className="font-bold text-lg md:text-2xl">Acciones rápidas</h2>
        <p className="text-gray-600">Acciones comunes administrativas</p>
      </div>
      <section className="flex flex-col md:flex-row flex-wrap items-center gap-2 py-4">
        <QuickAction
          icon={<UserPlus className="w-6 h-4 text-red-600 font-bold" />}
          title="Crear un perfil nuevo"
        />
        <QuickAction
          icon={<Eye className="w-6 h-4 text-blue-600 font-bold" />}
          title="Ver perfiles"
        />
        <QuickAction
          icon={<Box className="w-6 h-4 text-green-600 font-bold" />}
          title="Administrar ordenes"
        />
      </section>
    </article>
  );
};

export default QuickActions;
