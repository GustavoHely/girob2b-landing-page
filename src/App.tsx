import { useEffect } from 'react';
import { HeroV2 } from '@/components/sections/HeroV2';
import { PainPoints } from '@/components/sections/PainPoints';
import { HowItWorksV2 } from '@/components/sections/HowItWorksV2';
import { PricingSection } from '@/components/sections/PricingSection';
import { DifferentiatorsV2 } from '@/components/sections/DifferentiatorsV2';
import { TeamV2 } from '@/components/sections/TeamV2';
import { FAQV2 } from '@/components/sections/FAQV2';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { FooterV2 } from '@/components/sections/FooterV2';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { initScrollTracking } from '@/lib/analytics';

function App() {
  useEffect(() => {
    return initScrollTracking();
  }, []);

  return (
    <>
      <HeroV2 />
      <PainPoints />
      <HowItWorksV2 />
      <PricingSection />
      <DifferentiatorsV2 />
      <TeamV2 />
      <FAQV2 />
      <FinalCTA />
      <FooterV2 />
      <CookieConsent />
    </>
  );
}

export default App;
