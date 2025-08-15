import React from "react";
import clsx from "clsx";

type NavLinkProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  disabled?: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ icon, title, disabled = false }) => {
  return (
    <div
      className={clsx(
        "nav_link flex gap-2 p-2 border-b-2 border-transparent rounded-t-2xl",
        disabled
          ? "opacity-50 cursor-not-allowed text-gray-400"
          : "hover:border-b-2 hover:border-red-600 hover:bg-red-50 hover:cursor-pointer"
      )}
    >
      {icon}
      <span
        className={clsx(
          "font-semibold",
          disabled ? "text-gray-400" : "text-red"
        )}
      >
        {title}
      </span>
    </div>
  );
};

export default NavLink;
