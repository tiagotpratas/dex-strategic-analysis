import { SectionHeader } from "./ComparisonMatrix";

const costs = [
  { category: "Licensing", uniswap: "BUSL-1.1 (Needs License)", algebra: "$15k Lincense Fee", carbon: "Open Source (Core)" },
  { category: "Audit Fees", uniswap: "+$50k", algebra: "$0", carbon: "$0" },
  { category: "Dev Hours", uniswap: "High (Senior Solidity)", algebra: "Low (Implementation)", carbon: "Medium (Strategy UI)" },
  { category: "Fee's to Protocol", uniswap: "0", algebra: "3% Perpetual", carbon: "360k a year" },
];

const FinancialBreakdown = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title="Financial Breakdown" />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-mono text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-6 text-muted-foreground font-medium">Cost Category</th>
                <th className="text-left py-4 px-6 text-primary font-semibold">Uniswap</th>
                <th className="text-left py-4 px-6 font-semibold" style={{ color: 'hsl(262, 60%, 58%)' }}>Algebra Integral</th>
                <th className="text-left py-4 pl-6 font-semibold" style={{ color: 'hsl(38, 92%, 58%)' }}>Carbon DeFi</th>
              </tr>
            </thead>
            <tbody>
              {costs.map((row, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 pr-6 text-foreground font-semibold">{row.category}</td>
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

export default FinancialBreakdown;
