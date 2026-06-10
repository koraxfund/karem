'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { site } from '../lib/site-data';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#04131B]/80 backdrop-blur-xl border-b border-white/10">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img src="/logo.svg" alt="karem logo" className="h-10 w-10" />
          </Link>
          <span className="font-extrabold text-xl tracking-tight text-[#7CFF6A]">karem</span>
        </div>
        <div className="hidden md:flex gap-7 text-[#F8FEF8] font-semibold">
          {site.navigation.map(item => (
            <a
              href={item.href}
              key={item.label}
              className="hover:text-[#7CFF6A] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ConnectButton chainStatus="icon" showBalance={false} accountStatus="address" />
        </div>
      </nav>
    </header>
  );
}
