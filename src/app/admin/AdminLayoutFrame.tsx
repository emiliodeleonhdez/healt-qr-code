"use client";
import { usePathname } from "next/navigation";
import AdminHeader from "../components/organisms/AdminHeader/AdminHeader";

const HIDE_ON = ["/login", "/register", "/admin"];
const HEADER_HIDE_ON = ["/admin"];

export default function AdminLayoutFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hide = HIDE_ON.some((p) => pathname.startsWith(p));
  const hideHeader = HEADER_HIDE_ON.some((p) => pathname.startsWith(p));

  return (
    <div className="min-h-svh flex flex-col">
      <AdminHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
