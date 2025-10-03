import HeroSection from '@/components/sections/HeroSection';
import TurbineWasteSection from '@/components/sections/TurbineWasteSection';
import SolutionSection from '@/components/sections/SolutionSection';
import EconomicsSection from '@/components/sections/EconomicsSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <TurbineWasteSection />
      <SolutionSection />
      <EconomicsSection />
      <CallToActionSection />
    </main>
  );
}