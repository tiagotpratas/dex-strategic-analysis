import { SectionHeader } from "./ComparisonMatrix";

const RecommendationSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="05" title="Recommendation" />

        <div className="bg-card rounded-lg border border-primary/20 p-8">
          <h3 className="text-xl font-bold text-primary mb-4">Strategic Recommendation</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Based on our analysis, <span className="text-foreground font-semibold">Algebra Integral</span> offers the best balance of speed-to-market, cost efficiency, and feature readiness for DNAx's immediate needs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="text-foreground font-semibold">Uniswap</span> remains the gold standard for long-term composability and brand recognition, but requires significantly higher upfront investment and development time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">Carbon DeFi</span> is best suited as a complementary tool for advanced users rather than a primary DEX engine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
