import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/ui/animated-hero";
import { Specialties } from "@/components/sections/specialties";
import { Conditions } from "@/components/sections/conditions";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { PatientJourney } from "@/components/sections/patient-journey";
import { Hours } from "@/components/sections/hours";
import { Reviews } from "@/components/sections/reviews";
import { Speaking } from "@/components/sections/speaking";
import { Media } from "@/components/sections/media";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function App() {
  return (
    <div className="relative min-h-svh overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Specialties />
      <Conditions />
      <Stats />
      <About />
      <PatientJourney />
      <Hours />
      <Reviews />
      <Speaking />
      <Media />
      <Contact />
      <Footer />
    </div>
  );
}
