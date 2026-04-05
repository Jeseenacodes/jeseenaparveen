import Reveal from "./Reveal";
import { projects } from "./projectsData";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-4">PORTFOLIO</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h3>
        <p className="text-sm text-muted-foreground mb-12 max-w-lg leading-relaxed">
          Real-world analytics across multiple industries — each project built with a business question, not just a dataset.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className={`rounded-xl overflow-hidden group transition-all duration-500 bg-card border border-border hover:border-primary/40 hover:glow-box hover:translate-y-[-4px] ${p.featured ? "lg:col-span-2" : ""}`}>
              <div className="h-44 relative overflow-hidden bg-secondary/30 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  {p.svg}
                </div>
                <span className="absolute bottom-3 left-4 text-[0.6rem] tracking-[0.12em] uppercase text-primary font-semibold z-10">
                  {p.category}
                </span>
                <div className="absolute top-3 right-4 flex gap-3 z-10">
                  {p.liveHref && (
                    <a href={p.liveHref} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] tracking-[0.08em] uppercase text-primary font-medium hover:underline">
                      Live
                    </a>
                  )}
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-[0.65rem] tracking-[0.08em] uppercase text-muted-foreground font-medium hover:text-primary transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-heading text-sm font-semibold text-foreground leading-snug mb-2">{p.title}</h4>
                <p className="text-xs text-muted-foreground leading-[1.7] mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  {p.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-heading text-xl font-bold gradient-text leading-none">{m.val}</div>
                      <div className="text-[0.55rem] tracking-[0.1em] uppercase text-muted-foreground font-medium mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 border border-border rounded text-[0.58rem] tracking-[0.08em] uppercase text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
