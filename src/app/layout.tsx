import type { Metadata } from 'next';
import './globals.css';
import LayoutFrame from './LayoutFrame';

export const metadata: Metadata = {
  title: 'mediscanid.info',
  description: 'Identificación médica inmediata ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body className="flex min-h-svh flex-col bg-gradient-to-br from-red-50 to-pink-50">
        <LayoutFrame>{children}</LayoutFrame>
      </body>
    </html>
  );
}
