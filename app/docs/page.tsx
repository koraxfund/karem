import { site } from '../../lib/site-data';

export default function DocsPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-extrabold mb-6 text-[#7CFF6A]">karem Docs</h1>
      <p className="text-lg mb-8 text-[#D9FFD2]">Welcome to the official documentation for the karem Web3 project. Here you'll find details about the project structure, tokenomics, roadmap, and best practices for interacting with the $kkr ecosystem.</p>
      <ul className="space-y-6 text-[#F8FEF8]">
        <li>
          <strong>Project Overview:</strong> {site.about.description}
        </li>
        <li>
          <strong>Token Symbol:</strong> $kkr
        </li>
        <li>
          <strong>Network:</strong> BNB Chain
        </li>
        <li>
          <strong>Tokenomics:</strong> {site.tokenomics.description}
        </li>
        <li>
          <strong>Roadmap:</strong> {site.roadmap.intro}
        </li>
        <li>
          <strong>Security:</strong> {site.security.description}
        </li>
      </ul>
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Need more information?</h2>
        <p>Watch for updates as karem evolves. For technical questions, keep an eye on our future GitHub and social channels!</p>
      </div>
    </section>
  );
}
