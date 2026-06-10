import { site } from '../lib/site-data';

export default function Hero() {
  return (
    <section className="aurora-bg relative pt-24 pb-20 px-6 md:px-0 flex flex-col items-center justify-center text-center overflow-hidden">
      <img src="/hero-bg.svg" alt="aurora" className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-60" aria-hidden />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#7CFF6A] via-[#41B883] to-[#23235F] mb-4 drop-shadow-lg">
          Unleash Meme Energy.<br />Build for Web3.
        </h1>
        <p className="text-lg md:text-2xl font-medium text-[#D9FFD2] mb-8">
          {site.about.hero}
        </p>
        <a href="#about" className="btn-primary">Learn More</a>
      </div>
    </section>
  );
}
