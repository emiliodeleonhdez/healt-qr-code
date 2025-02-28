import React from "react";

interface ButtonProps {
  tailwindOptions: string;
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  tailwindOptions,
  type,
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={tailwindOptions} type={type}>
      {children}
    </button>
  );
};

export default Button;
