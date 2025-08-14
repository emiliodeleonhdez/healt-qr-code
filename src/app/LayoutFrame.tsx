"use client";
import { usePathname } from "next/navigation";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import HeroBanner from "./components/molecules/HeroBanner/HeroBanner";

const HIDE_ON = ["/login", "/admin/login"];

export default function LayoutFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hide = HIDE_ON.some((p) => pathname.startsWith(p));

  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {!hide && <HeroBanner />}
      {!hide && <Footer />}
    </div>
  );
}
