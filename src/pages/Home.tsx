import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import TeamSection from '../components/sections/TeamSection';
import FAQSection from '../components/sections/FAQSection';
import CredibilitySection from '../components/sections/CredibilitySection';
import ContactSection from '../components/sections/ContactSection';

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <TeamSection />
      <CredibilitySection />
      <FAQSection />
      <ContactSection />
    </>
  );
}

export default Home;
