import React from 'react';
import { Menu } from '../components/menu';
import Footer from '../components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Menu />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}