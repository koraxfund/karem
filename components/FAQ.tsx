import { site } from '../lib/site-data';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">Frequently Asked Questions</h2>
      <div className="space-y-6 mt-8">
        {site.faq.map((item, idx) => (
          <div key={idx} className="glass-card p-6">
            <div className="font-semibold text-lg text-[#F8FEF8]">{item.q}</div>
            <div className="mt-2 text-[#D9FFD2]">{item.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
