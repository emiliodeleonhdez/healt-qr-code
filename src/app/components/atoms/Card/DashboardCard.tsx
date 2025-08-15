import React from "react";
import clsx from "clsx";

type DashboardCardProps = {
  className?: string;
  title: string;
  count: string;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  className = "",
  title,
  count,
  icon,
  description,
  disabled = false,
}) => {
  return (
    <article
      className={clsx(
        "flex flex-col justify-center items-center gap-2 rounded-2xl border bg-white p-8 shadow-md transition",
        disabled
          ? "opacity-50 cursor-not-allowed border-gray-300"
          : "border-gray-200 hover:shadow-md",
        className
      )}
    >
      <span className="text-gray-700 font-semibold">{title}</span>
      <div className="flex items-center gap-6">
        <p className="text-2xl font-bold">{count}</p>
        {icon}
      </div>
      {description && (
        <p className="text-gray-500 text-sm text-center">{description}</p>
      )}
    </article>
  );
};

export default DashboardCard;
