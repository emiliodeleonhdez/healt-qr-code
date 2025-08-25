'use client';
import { usePathname } from 'next/navigation';
import Header from './components/organisms/Header/Header';
import Footer from './components/organisms/Footer/Footer';
import HeroBanner from './components/molecules/HeroBanner/HeroBanner';

const HIDE_ON = ['/login', '/register', '/admin', '/user'];
const HEADER_HIDE_ON = ['/admin', '/user'];

export default function LayoutFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hide = HIDE_ON.some((p) => pathname.startsWith(p));
  const hideHeader = HEADER_HIDE_ON.some((p) => pathname.startsWith(p));

  return (
    <div className="flex min-h-svh flex-col">
      {!hideHeader && <Header />}
      <main className="flex-1">{children}</main>
      {!hide && <HeroBanner />}
      {!hide && <Footer />}
    </div>
  );
}
