import React from "react";
import FeatureCard from "../../atoms/Card/FeatureCard";
import { Shield, Smartphone, Users } from "lucide-react";

const features = [
  {
    cardHeader: <Shield className="h-12 w-12 text-red-500 mb-4" />,
    cardSubHeader: "Acceso Inmediato",
    cardBody:
      "Los equipos de emergencia escanean tu código QR y acceden al instante a tu información médica.",
  },
  {
    cardHeader: <Smartphone className="h-12 w-12 text-red-500 mb-4" />,
    cardSubHeader: "Siempre disponible",
    cardBody:
      "Funciona en cualquier smartphone, sin necesidad de aplicación. Tu perfil está accesible las 24 horas, los 7 días de la semana.",
  },
  {
    cardHeader: <Users className="h-12 w-12 text-red-500 mb-4" />,
    cardSubHeader: "Privacidad ante todo",
    cardBody:
      "Tus datos están seguros y solo son accesibles mediante tu código QR único.",
  },
] as const;

const HeroFeatures: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 p-8 md:flex-row">
      {features.map((props, i) => (
        <FeatureCard key={i} {...props} />
      ))}
    </div>
  );
};

export default HeroFeatures;
