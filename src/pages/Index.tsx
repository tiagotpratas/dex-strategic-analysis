import HeroSection from "@/components/HeroSection";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import FinancialBreakdown from "@/components/FinancialBreakdown";
import ProsConsSection from "@/components/ProsConsSection";
import RecommendationSection from "@/components/RecommendationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ComparisonMatrix />
      <FinancialBreakdown />
      <ProsConsSection />
      <RecommendationSection />
    </div>
  );
};

export default Index;
