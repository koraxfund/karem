import { site } from '../lib/site-data';

export default function Community() {
  return (
    <section id="community" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-[#7CFF6A]">Join the karem Community</h2>
      <p className="mb-6 text-[#D9FFD2]">We’re building our meme-powered community soon! Social links will be available here after launch.</p>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {site.socials.map((social, i) => (
          <span key={i} className="glass-card px-6 py-3 text-[#7CFF6A] font-semibold flex items-center gap-2">
            {social.icon && (
              <span className="inline-block h-5 w-5">{social.icon}</span>
            )}
            {social.url ? (
              <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{social.label}</a>
            ) : (
              <span className="opacity-70">{social.label} (Coming soon)</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}
