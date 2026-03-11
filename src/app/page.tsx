import HeroSection from "@/components/home/HeroSection";
import ServiceSummary from "@/components/home/ServiceSummary";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServiceSummary />
      <CtaSection />
    </div>
  );
}
