import { SectionHeader } from "./ComparisonMatrix";

const costs = [
  { category: "Licensing", uniswap: "BUSL-1.1 (Needs License)", algebra: "15% Fee Share Tax", carbon: "Open Source (Core)" },
  { category: "Audit Fees", uniswap: "$50k – $150k+", algebra: "$10k – $20k", carbon: "$30k – $60k" },
  { category: "Dev Hours", uniswap: "High (Senior Solidity)", algebra: "Low (Implementation)", carbon: "Medium (Strategy UI)" },
];

const FinancialBreakdown = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="03" title="Financial Breakdown" />

        <div className="grid md:grid-cols-3 gap-4">
          {costs.map((row, i) => (
            <div key={i} className="bg-card rounded-lg border border-border p-6 hover:border-primary/30 transition-colors">
              <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-6">{row.category}</h3>
              
              <div className="space-y-4">
                <CostRow label="Uniswap V4" value={row.uniswap} color="hsl(var(--primary))" />
                <CostRow label="Algebra" value={row.algebra} color="hsl(262, 60%, 58%)" />
                <CostRow label="Carbon" value={row.carbon} color="hsl(38, 92%, 58%)" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CostRow = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-xs font-mono" style={{ color }}>{label}</span>
    <span className="text-sm text-foreground">{value}</span>
  </div>
);

export default FinancialBreakdown;
