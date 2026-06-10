import { site } from '../lib/site-data';

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A] drop-shadow">What is karem?</h2>
      <p className="text-lg text-[#D9FFD2] mb-6">
        {site.about.description}
      </p>
      <ul className="list-disc pl-6 text-[#F8FEF8] space-y-2">
        {site.about.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
