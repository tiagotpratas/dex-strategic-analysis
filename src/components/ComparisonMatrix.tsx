const data = [
  { feature: "Architecture", uniswap: "Singleton (All-in-one)", algebra: "Modular Plugins", carbon: "Asymmetrical Curves" },
  { feature: "Customization", uniswap: "v3 + v4 Hooks (Infinite logic)", algebra: "Ready-made Plugins", carbon: "UI-based Strategies" },
  { feature: "GTM Speed", uniswap: "Slow (High Dev effort)", algebra: "Fast (Plug-and-play)", carbon: "Moderate (Math-heavy)" },
  { feature: "Gas Efficiency", uniswap: "Best for Multi-hop", algebra: "Optimized for L2/L3", carbon: "Strategy Dependent" },
  { feature: "Time-to-market", uniswap: "1-2 months", algebra: "2 weeks", carbon: "0 (already live)" }
];

const ComparisonMatrix = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title="Core Comparison Matrix" />
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-mono text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-6 text-muted-foreground font-medium">Feature</th>
                <th className="text-left py-4 px-6 text-primary font-semibold">Uniswap</th>
                <th className="text-left py-4 px-6 font-semibold" style={{ color: 'hsl(262, 60%, 58%)' }}>Algebra Integral</th>
                <th className="text-left py-4 pl-6 font-semibold" style={{ color: 'hsl(38, 92%, 58%)' }}>Carbon DeFi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 pr-6 text-foreground font-semibold">{row.feature}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.uniswap}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.algebra}</td>
                  <td className="py-4 pl-6 text-muted-foreground">{row.carbon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <span className="font-mono text-primary text-sm">{number}</span>
    <div className="glow-line w-8" />
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
  </div>
);

export { SectionHeader };
export default ComparisonMatrix;
