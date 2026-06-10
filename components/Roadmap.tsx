import { site } from '../lib/site-data';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">karem Roadmap</h2>
      <p className="text-[#D9FFD2] mb-6">{site.roadmap.intro}</p>
      <div className="grid md:grid-cols-2 gap-6">
        {site.roadmap.phases.map((phase, idx) => (
          <div key={idx} className="glass-card p-6">
            <div className="font-bold text-lg text-[#7CFF6A] mb-2">{phase.title}</div>
            <ul className="list-disc pl-5 space-y-1 text-[#F8FEF8]">
              {phase.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
