import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { AboutStats } from '../components/AboutStats';
import { OurClients } from '../components/OurClients';
import { Services } from '../components/Services';
import { CaseStudies } from '../components/CaseStudies';
import { OurValues } from '../components/OurValues';
import { Process } from '../components/Process';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FounderMessage } from '../components/FounderMessage';
import { NewCTA } from '../components/NewCTA';

export function HomePage() {
  return (
    <main>
      <Hero />
      <AboutStats />
      <About />
      <OurClients />
      <NewCTA />
      <Services />
      <CaseStudies />
      <OurValues />
      <Process />
      <Testimonials />
      <FounderMessage />
      <FAQ />
    </main>
  );
}


