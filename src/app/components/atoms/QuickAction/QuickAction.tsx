import { title } from "process";
import React from "react";

type QuickActionProps = {
  icon: React.ReactNode;
  title: string;
};

const QuickAction: React.FC<QuickActionProps> = ({ icon, title }) => {
  return (
    <section className="flex flex-col items-center gap-2 rounded-2xl border bg-white px-16 py-4 shadow-md">
      {icon}
      <span className="font-semibold text-sm">{title}</span>
    </section>
  );
};

export default QuickAction;
