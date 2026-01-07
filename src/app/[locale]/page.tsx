import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { WhyLocal } from '@/components/WhyLocal';
import { Demo } from '@/components/Demo';
import { Install } from '@/components/Install';
import { Providers } from '@/components/Providers';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <WhyLocal />
      <Demo />
      <Install />
      <Providers />
      <Footer />
    </div>
  );
}