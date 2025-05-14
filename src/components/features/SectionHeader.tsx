
import ScrollReveal from "@/components/ScrollReveal";

const SectionHeader = () => {
  return (
    <ScrollReveal animation="slide-up" delay={100}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center justify-center px-4 py-1.5 space-x-2 rounded-full neo-frost text-xs font-medium uppercase tracking-wider text-blue-400">
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          <span>Powerful Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold my-6 tracking-tight">
          AI-Powered <span className="gradient-text">Lead Generation</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl">
          Our intelligent calling platform automates outreach and qualification, delivering high-quality leads with minimal effort.
        </p>
      </div>
    </ScrollReveal>
  );
};

export default SectionHeader;
