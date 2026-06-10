import { site } from '../lib/site-data';

export default function Security() {
  return (
    <section id="security" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">Security & Transparency</h2>
      <p className="text-[#D9FFD2] mb-6">{site.security.description}</p>
      <ul className="list-disc pl-6 text-[#F8FEF8] space-y-2">
        {site.security.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
