import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
// import { BenefitsCardSection } from "@/components/sections/BenefitsCardSection";
import { ContactSection } from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServiceSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        {/* <BenefitsCardSection /> */}
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}