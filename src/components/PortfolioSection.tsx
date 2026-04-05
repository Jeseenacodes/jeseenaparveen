import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "E-commerce", "Healthcare", "Travel"];

const projects = [
  {
    title: "Online Superstore Performance Dashboard",
    description: "Overview of performance in terms of sales and profits, customer behavior insights and product trends.",
    category: "E-commerce",
    link: "#",
  },
  {
    title: "Data Modeling & BI-Optimized Cleaning",
    description: "Experimented with star and snowflake schemas to structure data of firms selling computer workstations.",
    category: "E-commerce",
    link: "#",
  },
  {
    title: "Emergency Room Admission Dashboard",
    description: "Designed to help healthcare professionals analyze emergency room admission trends.",
    category: "Healthcare",
    link: "#",
  },
  {
    title: "Healthcare Analytics Report",
    description: "Empowering healthcare professionals to optimize patient care and resource allocation.",
    category: "Healthcare",
    link: "#",
  },
  {
    title: "Hotel Booking Analysis Report",
    description: "Dashboard designed to help hotel managers understand and analyze booking trends.",
    category: "Travel",
    link: "#",
  },
  {
    title: "Las Vegas Hotels Reviews Analysis",
    description: "Analyzing reviews on various hotels to understand how small details affect guest experience.",
    category: "Travel",
    link: "#",
  },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-4">PORTFOLIO</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Results-Driven <span className="gradient-text">Project Samples</span>
        </h3>
        <div className="flex gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm tracking-wider rounded-full border transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:glow-box transition-all duration-500"
            >
              <div className="w-full h-40 rounded-lg bg-secondary mb-5 flex items-center justify-center overflow-hidden">
                <BarPlaceholder />
              </div>
              <span className="text-xs tracking-[0.2em] text-primary">{project.category.toUpperCase()}</span>
              <h4 className="text-base font-heading font-semibold text-foreground mt-2 mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              <a
                href={project.link}
                className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline"
              >
                Read More <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BarPlaceholder = () => (
  <svg viewBox="0 0 200 100" className="w-24 h-16 text-muted-foreground/30">
    <rect x="20" y="60" width="20" height="40" fill="currentColor" rx="2" />
    <rect x="50" y="30" width="20" height="70" fill="hsl(350 80% 55%)" opacity="0.5" rx="2" />
    <rect x="80" y="45" width="20" height="55" fill="currentColor" rx="2" />
    <rect x="110" y="15" width="20" height="85" fill="hsl(350 80% 55%)" opacity="0.5" rx="2" />
    <rect x="140" y="50" width="20" height="50" fill="currentColor" rx="2" />
  </svg>
);

export default PortfolioSection;
