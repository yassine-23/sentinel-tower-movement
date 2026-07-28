import dynamic from 'next/dynamic';
import NewHero from '@/components/sections/NewHero';

// Dynamically import sections below the fold for better initial load performance
const Reckoning = dynamic(() => import('@/components/sections/Reckoning'), {
  loading: () => <div className="w-full h-screen bg-pine-950" />,
});

const Experience3D = dynamic(() => import('@/components/sections/Experience3D'), {
  loading: () => <div className="w-full h-screen bg-pine-950" />,
});

const TransformationStory = dynamic(() => import('@/components/sections/TransformationStory'), {
  loading: () => <div className="w-full h-screen bg-pine-950" />,
});

const LiveImpact = dynamic(() => import('@/components/sections/LiveImpact'), {
  loading: () => <div className="w-full h-screen bg-pine-950" />,
});

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="w-full h-screen bg-pine-950" />,
});

const DonateSection = dynamic(() => import('@/components/sections/DonateSection'), {
  loading: () => <div className="w-full h-screen bg-pine-950" />,
});

const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'), {
  loading: () => <div className="w-full h-screen bg-pine-950" />,
});

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <NewHero />
      <Reckoning />
      <Experience3D />
      <TransformationStory />
      <LiveImpact />
      <Testimonials />
      <DonateSection />
      <FinalCTA />
    </main>
  );
}