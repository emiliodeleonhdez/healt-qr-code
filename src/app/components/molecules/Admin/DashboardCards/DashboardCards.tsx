import DashboardCard from "@/app/components/atoms/card/DashboardCard";
import { Box, Clock, NewspaperIcon, User } from "lucide-react";
import React from "react";

const cardsData = [
  {
    title: "Total de perfiles",
    count: "2",
    icon: (
      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
        <User className="h-6 w-6 text-red-600" />
      </div>
    ),
    description: "Número de perfiles creados",
    disabled: false,
  },
  {
    title: "Total de ordenes",
    count: "100",
    icon: (
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
        <Box className="h-6 w-6 text-blue-600" />
      </div>
    ),
    description: "Número de placas ordenadas",
    disabled: false,
  },
  {
    title: "Ordenes pendientes",
    count: "0",
    icon: (
      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
        <Clock className="h-6 w-6 text-yellow-600" />
      </div>
    ),
    description: "Número de ordenes pendientes",
    disabled: true,
  },
  {
    title: "Perfiles recientes",
    count: "0",
    icon: (
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
        <NewspaperIcon className="h-6 w-6 text-green-600" />
      </div>
    ),
    description: "Número de perfiles creados recientemente",
    disabled: true,
  },
] as const;

const DashboardCards = () => {
  return (
    <section className="flex flex-col md:flex-row gap-6 flex-wrap py-8">
      {cardsData.map((card, index) => (
        <DashboardCard
          key={index}
          title={card.title}
          count={card.count}
          icon={card.icon}
          description={card.description}
          disabled={card.disabled}
        />
      ))}
    </section>
  );
};

export default DashboardCards;
