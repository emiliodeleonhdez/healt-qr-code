"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, LogIn, UserPlus } from "lucide-react";

const HIDE_ON = ["/login", "/register"];

const NavActions: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const hide = HIDE_ON.some((p) => pathname.startsWith(p));

  const [open, setOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!popoverRef.current) return;
      if (!popoverRef.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (hide) return null;

  return (
    <div className="flex items-center">
      <div className="hidden sm:flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/login")}
          className="rounded-full px-4 py-1.5 font-medium"
        >
          Iniciar&nbsp;sesión
        </Button>
        <Button
          variant="primary"
          size="sm"
          onClick={() => router.push("/register")}
          className="rounded-full px-4 py-1.5 font-medium"
        >
          Comenzar&nbsp;ahora
        </Button>
      </div>

      <div className="sm:hidden relative" ref={popoverRef}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="navactions-popover"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white/80 backdrop-blur px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/20"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Abrir menú</span>
        </button>

        {open && (
          <div
            id="navactions-popover"
            role="menu"
            className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/5 p-2"
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/login")}
              className="w-full justify-start rounded-lg"
            >
              <span>Iniciar&nbsp;sesión</span>
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => router.push("/register")}
              className="mt-2 w-full justify-start rounded-lg"
            >
              <span>Comenzar&nbsp;ahora</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavActions;
