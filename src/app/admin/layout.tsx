import React from "react";
import AdminLayoutFrame from "./AdminLayoutFrame";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-svh flex flex-col bg-white">
      <AdminLayoutFrame>{children}</AdminLayoutFrame>
    </section>
  );
}
