import { site } from '../lib/site-data';

export default function Contracts() {
  return (
    <section id="contracts" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">Contracts & Transparency</h2>
      <div className="glass-card p-6 flex flex-col gap-4">
        <span className="text-[#D9FFD2]">Contract addresses for $kkr and staking will be published here after deployment for maximum transparency. All contracts will be verified and auditable on BNB Chain explorers.</span>
        <ul className="mt-4 space-y-2">
          <li className="text-[#F8FEF8]">Token contract: <span className="text-[#7CFF6A]">To be announced</span></li>
          <li className="text-[#F8FEF8]">Staking contract: <span className="text-[#7CFF6A]">To be announced</span></li>
          <li className="text-[#F8FEF8]">Vault contract: <span className="text-[#7CFF6A]">To be announced</span></li>
        </ul>
      </div>
    </section>
  );
}
