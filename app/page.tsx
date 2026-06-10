import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Tokenomics from '../components/Tokenomics';
import Staking from '../components/Staking';
import LaunchSection from '../components/LaunchSection';
import HowToBuy from '../components/HowToBuy';
import Security from '../components/Security';
import Roadmap from '../components/Roadmap';
import Contracts from '../components/Contracts';
import Partners from '../components/Partners';
import Community from '../components/Community';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Tokenomics />
        <Staking />
        <LaunchSection />
        <HowToBuy />
        <Security />
        <Roadmap />
        <Contracts />
        <Partners />
        <Community />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
