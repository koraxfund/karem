import { site } from '../lib/site-data';

export default function Staking() {
  return (
    <section id="staking" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">Stake & Earn (Coming Soon)</h2>
      <p className="text-[#D9FFD2] mb-4">
        {site.staking.description}
      </p>
      <div className="glass-card p-6 mt-6 text-center">
        <span className="text-[#7CFF6A] font-bold">Staking contract address will be published after deployment for full transparency.</span>
      </div>
    </section>
  );
}
