import React from "react";

type FeatureCardProps = {
  cardHeader?: React.ReactNode;
  cardSubHeader?: string;
  cardBody: React.ReactNode;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  cardHeader,
  cardSubHeader,
  cardBody,
  className = "",
}) => {
  return (
    <article
      className={`card container mx-auto rounded-2xl border border-gray-200 bg-white p-2 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <header className="card_header">
        {cardHeader ? (
          <div className="flex items-center gap-3">{cardHeader}</div>
        ) : null}
      </header>

      {cardSubHeader ? (
        <h3 className="card_subheader mb-2 text-left text-lg font-semibold text-gray-800">
          {cardSubHeader}
        </h3>
      ) : null}

      <div className="card_body text-left text-sm leading-relaxed text-gray-500">
        {cardBody}
      </div>
    </article>
  );
};

export default FeatureCard;
