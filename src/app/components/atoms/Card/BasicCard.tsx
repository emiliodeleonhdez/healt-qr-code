import clsx from "clsx";
import React from "react";

type Size = "sm" | "md" | "lg"

type BasicCardProps = {
  cardHeader?: React.ReactNode;
  cardSubHeader?: string;
  cardBody: React.ReactNode;
  className?: string;
  size?: Size; 
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-lg",
  lg: "h-12 px-5 text-2xl",
};

export const BasicCard: React.FC<BasicCardProps> = ({
  size="sm",
  cardHeader,
  cardSubHeader,
  cardBody,
  className = "",
}) => {
  return (
    <article
      className={`rounded-2xl border border-gray-200 bg-white p-2 shadow-sm ${className}`}
    >
      <header className="card_header">
        {cardHeader ? (
          <div className={clsx("flex justify-center gap-3 font-bold", sizeClasses[size])}>{cardHeader}</div>
        ) : null}
      </header>

      {cardSubHeader ? (
        <h3 className="card_subheader mb-2 text-gray-500">
          {cardSubHeader}
        </h3>
      ) : null}

      <div className="card_body text-left text-sm leading-relaxed text-gray-500">
        {cardBody}
      </div>
    </article>
  );
};
