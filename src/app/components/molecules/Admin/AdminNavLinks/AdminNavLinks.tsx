"use client";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "@/app/components/atoms/nav/NavLink";
import {
  Box,
  LayoutDashboard,
  Mail,
  Settings,
  Users,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Button } from "@/app/components/atoms/button/Button";

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
  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="flex items-center">
      <div className="hidden lg:flex gap-4 items-center">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            title={item.title}
            icon={item.icon}
            disabled={item.disabled}
          />
        ))}
      </div>

      <div className="lg:hidden relative" ref={popoverRef}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="admin-nav-popover"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white/80 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Abrir menú</span>
        </button>

        {open && (
          <div
            id="admin-nav-popover"
            role="menu"
            className="absolute right-0 z-50 mt-2 w-64 rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/5 p-2"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.title} onClick={() => setOpen(false)}>
                  <NavLink
                    title={item.title}
                    icon={item.icon}
                    disabled={item.disabled}
                  />
                </div>
              ))}

              <div className="mt-2 border-t border-gray-200 pt-2">
                <Button
                  icon={<LogOut className="h-6 w-6 text-gray-600" />}
                  variant="secondary"
                  className="w-full justify-start"
                  onClick={() => setOpen(false)}
                >
                  Log out
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminNavLinks;
