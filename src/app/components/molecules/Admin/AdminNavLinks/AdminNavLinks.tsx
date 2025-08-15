import NavLink from "@/app/components/atoms/nav/NavLink";
import { Box, LayoutDashboard, Mail, Settings, Users } from "lucide-react";
import React from "react";

const navItems = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-6 w-6 text-red-600" />,
    disabled: false,
  },
  {
    title: "Usuarios",
    icon: <Users className="h-6 w-6 text-red-600" />,
    disabled: false,
  },
  {
    title: "Ordenes",
    icon: <Box className="h-6 w-6 text-red-600" />,
    disabled: true,
  },
  {
    title: "Emails",
    icon: <Mail className="h-6 w-6 text-red-600" />,
    disabled: true,
  },
  {
    title: "Configuración",
    icon: <Settings className="h-6 w-6 text-red-600" />,
    disabled: true,
  },
] as const;

const AdminNavLinks: React.FC = () => {
  return (
    <section className="flex gap-4 items-center">
      {navItems.map((item) => (
        <NavLink
          key={item.title}
          title={item.title}
          icon={item.icon}
          disabled={item.disabled}
        />
      ))}
    </section>
  );
};

export default AdminNavLinks;
