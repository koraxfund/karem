import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 bg-[#04131B]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="karem logo" className="h-8 w-8" />
          <span className="font-bold text-[#7CFF6A] text-lg">karem</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-[#F8FEF8] text-sm font-medium">
          <Link href="/docs">Docs</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <a href="#roadmap">Roadmap</a>
          <a href="#tokenomics">Tokenomics</a>
        </nav>
        <div className="text-[#D9FFD2] text-xs">&copy; {new Date().getFullYear()} karem. All rights reserved.</div>
      </div>
    </footer>
  );
}
