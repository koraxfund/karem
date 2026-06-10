export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-extrabold mb-6 text-[#7CFF6A]">Privacy Policy</h1>
      <p className="mb-4">karem respects your privacy. This policy explains what information may be collected and how it is used.</p>
      <ul className="list-disc pl-6 space-y-3 text-[#F8FEF8]">
        <li>We do not collect personal data or store wallet addresses.</li>
        <li>Any wallet connection is processed via third-party providers (e.g., RainbowKit, WalletConnect) and not stored by karem.</li>
        <li>Site analytics may be used for product improvement, but no personally identifiable information is retained.</li>
        <li>Links to third-party sites are not covered by this policy.</li>
      </ul>
      <p className="mt-6 text-[#D9FFD2]">By using this site, you consent to this privacy policy. Updates will be posted on this page.</p>
    </section>
  );
}
