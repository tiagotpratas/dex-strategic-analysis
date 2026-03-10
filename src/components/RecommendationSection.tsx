import { SectionHeader } from "./ComparisonMatrix";

const recommendations = [
  {
    target: "For New Chains",
    protocol: "Algebra Integral",
    color: "hsl(262, 60%, 58%)",
    description: "Immediate liquidity and modular growth.",
  },
  {
    target: "For R&D / Innovators",
    protocol: "Uniswap V4",
    color: "hsl(var(--primary))",
    description: "Build experimental financial primitives (e.g., credit-score-based swapping).",
  },
  {
    target: "For Pro Market Makers",
    protocol: "Carbon DeFi",
    color: "hsl(38, 92%, 58%)",
    description: '"Set and Forget" automated trading strategies.',
  },
];

const RecommendationSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="05" title="Technical Recommendation" />

        <div className="space-y-4">
          {recommendations.map((rec, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground md:w-48 shrink-0">
                {rec.target}
              </div>
              <div className="flex-1">
                <span className="font-bold text-lg" style={{ color: rec.color }}>
                  {rec.protocol}
                </span>
                <span className="text-muted-foreground ml-3 text-sm">{rec.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground">
            DEX Strategic Analysis 2026 — Architecture & Costs
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
