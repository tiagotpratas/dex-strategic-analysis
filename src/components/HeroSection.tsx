const HeroSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--primary)) 0 1px, transparent 1px 60px),
                          repeating-linear-gradient(90deg, hsl(var(--primary)) 0 1px, transparent 1px 60px)`
      }} />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-sm text-primary tracking-wider uppercase">Strategic Analysis</span>
          <div className="glow-line flex-1" />
          <span className="font-mono text-sm text-muted-foreground">2026</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6">
          <span className="gradient-text">DEX Architecture Comparison</span>
          <br />
          <span className="text-foreground">& Cost Analysis</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          In the 2026 DeFi landscape, the choice of DEX engine defines your protocol's ceiling. 
          Architecture is no longer just "code"—it is your <span className="text-primary font-medium">primary competitive strategy</span>.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
