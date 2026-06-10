import { site } from '../lib/site-data';

export default function HowToBuy() {
  return (
    <section id="howtobuy" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">How to Join karem</h2>
      <p className="mb-6 text-[#D9FFD2]">{site.howToBuy.intro}</p>
      <ol className="space-y-4">
        {site.howToBuy.steps.map((step, i) => (
          <li key={i} className="glass-card p-4 flex items-center gap-4">
            <span className="flex-shrink-0 h-10 w-10 bg-[#7CFF6A] text-[#04131B] font-bold rounded-full flex items-center justify-center text-xl mr-2">{i + 1}</span>
            <span className="text-[#F8FEF8] text-lg">{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
