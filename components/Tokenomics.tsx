import { site } from '../lib/site-data';

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">$kkr Tokenomics</h2>
      <p className="text-[#D9FFD2] mb-8">
        {site.tokenomics.description}
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {site.tokenomics.breakdown.map((item, i) => (
          <div key={i} className="glass-card p-6 flex flex-col items-center">
            <div className="text-2xl font-bold text-[#7CFF6A]">{item.percent}</div>
            <div className="text-lg font-semibold text-[#F8FEF8] mt-1">{item.title}</div>
            <div className="text-sm text-[#D9FFD2] mt-2 text-center">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
