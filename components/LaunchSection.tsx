import { site } from '../lib/site-data';

export default function LaunchSection() {
  return (
    <section id="launch" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">Launch on KORAX Launchpad</h2>
      <p className="text-[#D9FFD2] mb-6">
        {site.launch.description}
      </p>
      <div className="glass-card p-6 text-center">
        <span className="text-[#D9FFD2]">The $kkr token will be launched with full transparency and auditability on the KORAX Launchpad. Stay tuned for updates and official links.</span>
      </div>
    </section>
  );
}
