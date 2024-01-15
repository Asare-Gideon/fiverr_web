import AboutSection from "@/components/AboutSection";
import InvestmentCalculator from "@/components/Calculator";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import InvestSection from "@/components/InvestSection";
import Navbar from "@/components/Navbar";
import PricingSections from "@/components/PricingSections";
import SkillsSections from "@/components/SkillsSections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-deepBg w-full flex justify-center flex-col items-center">
        <Hero />
      </div>
      <div className="bg-lightBg w-full flex justify-center">
        <CardSection />
      </div>
      <div className="bg-lightBg w-full flex justify-center">
        <AboutSection />
      </div>
      <div className="bg-lightBg w-full flex justify-center">
        <InvestSection />
      </div>
      <div className="bg-deepBg w-full flex justify-center">
        <SkillsSections />
      </div>
      <div className="bg-deepBg w-full flex justify-center">
        <InfoSection />
      </div>
      <div className="bg-deepBg w-full flex justify-center">
        <PricingSections />
      </div>
      <div className="bg-[#0E213E]  w-full flex justify-center">
        <Footer />
      </div>
      <InvestmentCalculator />
    </main>
  );
}
