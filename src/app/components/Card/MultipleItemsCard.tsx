import { IMultipleItemsCardProps } from "@/app/interfaces";
import React from "react";

const MultipleItemsCard: React.FC<IMultipleItemsCardProps> = ({
  cardTitle,
  description,
}) => {
  const isArray = (value: unknown) => Array.isArray(value);

  return (
    <div className="bg-stone-300 p-2 w-full rounded-lg border-s-8 border-red-500">
      <h2 className="font-bold text-xl p-2">{cardTitle}</h2>
      <div className="p-2">
        <div key={description.name} className="space-y-2">
          <p>
            <strong>Nombre:</strong> {description.name}
          </p>
          <p>
            <strong>Relación:</strong> {description.relation}
          </p>
          <p>
            <strong>Teléfono:</strong> {description.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MultipleItemsCard;
