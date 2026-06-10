import { site } from '../lib/site-data';

export default function Stats() {
  return (
    <section className="py-12 px-6 md:px-0 max-w-4xl mx-auto flex flex-wrap justify-center gap-8">
      {site.stats.map((stat, i) => (
        <div key={i} className="glass-card px-8 py-6 min-w-[180px] flex-1 text-center">
          <div className="text-3xl font-bold text-[#7CFF6A]">{stat.value}</div>
          <div className="mt-1 text-[#D9FFD2] text-sm uppercase tracking-wide">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
