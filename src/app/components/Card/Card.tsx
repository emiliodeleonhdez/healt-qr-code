import { ICardProps } from "@/app/interfaces";
import React from "react";

const Card: React.FC<ICardProps> = ({ cardTitle, description }) => {
  return (
    <div className="bg-stone-300 p-2 w-full rounded-lg border-s-8 border-purple-500">
      <h2 className="font-bold text-xl p-2">{cardTitle}</h2>
      <div className="p-2">
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;
