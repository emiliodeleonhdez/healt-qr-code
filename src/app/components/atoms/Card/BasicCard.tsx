import clsx from "clsx";
import React from "react";

type Size = "sm" | "md" | "lg";
type HeaderAlignment = "start" | "center" | "end";

type BasicCardProps = {
  cardHeader?: React.ReactNode;
  cardSubHeader?: string;
  cardBody: React.ReactNode;
  className?: string;
  size?: Size;
  headerAlignment?: HeaderAlignment;
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3",
  md: "h-10 px-4",
  lg: "h-12 px-5",
};

const headerAlignmentClasses: Record<HeaderAlignment, string> = {
  start: "text-left",
  center: "text-center",
  end: "text-right",
};

export const BasicCard: React.FC<BasicCardProps> = ({
  size = "sm",
  cardHeader,
  cardSubHeader,
  cardBody,
  className = "",
  headerAlignment = "start",
}) => {
  return (
    <article
      className={`rounded-2xl border border-gray-200 bg-white p-2 shadow-sm ${className}`}
    >
      <header className="card_header">
        {cardHeader ? (
          <div
            className={clsx(
              "font-bold text-lg md:text-2xl lg:text-3xl",
              sizeClasses[size],
              headerAlignmentClasses[headerAlignment]
            )}
          >
            {cardHeader}
          </div>
        ) : null}
      </header>

      {cardSubHeader ? (
        <h3 className="card_subheader mb-2 text-gray-500">{cardSubHeader}</h3>
      ) : null}

      <div className="card_body text-left text-sm leading-relaxed text-gray-500">
        {cardBody}
      </div>
    </article>
  );
};
