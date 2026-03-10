import { SectionHeader } from "./ComparisonMatrix";

interface Protocol {
  name: string;
  color: string;
  pros: string[];
  cons: string[];
}

const protocols: Protocol[] = [
  {
    name: "Uniswap",
    color: "hsl(var(--primary))",
    pros: [
      "Industry standard, massive brand moat",
      '"Hook" ecosystem allows for KYC/Oracle-based pools',
    ],
    cons: [
      "Licensing restrictions",
      "High security risk (Singleton bug risk)",
      "Fragmented liquidity across hooks",
      "Will need to audit"
    ],
  },
  {
    name: "Algebra Integral",
    color: "hsl(262, 60%, 58%)",
    pros: [
      'Fastest "Time-to-Market"',
      "Dynamic fee spikes protect LPs from volatility",
      "Pre-audited",
      "Pre Build plug-in's (MEV, Limit orders, no fee wallets, etcs"
    ],
    cons: [
      "Perpetual revenue tax to the Algebra team",
      "Less control over the core roadmap",
    ],
  },
  {
    name: "Carbon DeFi",
    color: "hsl(38, 92%, 58%)",
    pros: [
      "Zero slippage on limit orders",
      "Solves Impermanent Loss",
      "Native MEV protection",
    ],
    cons: [
      "Niche liquidity",
      "Steeper learning curve for retail users",
      "UI-intensive logic",
    ],
  },
];

const ProsConsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="04" title="Pros & Cons Analysis" />

        <div className="grid md:grid-cols-3 gap-4">
          {protocols.map((p) => (
            <div
              key={p.name}
              className="bg-card rounded-lg border border-border p-6 hover:border-primary/20 transition-colors"
            >
              <h3 className="text-lg font-bold mb-6" style={{ color: p.color }}>
                {p.name}
              </h3>

              <div className="mb-6">
                <span className="font-mono text-xs text-primary/60 uppercase tracking-wider">Pros</span>
                <ul className="mt-3 space-y-2">
                  {p.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-xs text-destructive/60 uppercase tracking-wider">Cons</span>
                <ul className="mt-3 space-y-2">
                  {p.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-0.5 shrink-0">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProsConsSection;
