import Reveal from "./Reveal";

const timeline = [
  {
    period: "Jul 2016 – Present",
    role: "Freelance Educator → Data Analyst",
    tag: "Volunteer",
    company: "Freelance · Remote · 9 years",
    bullets: [
      "Analyzed learner performance data, contributing to 20% reduction in learning gaps",
      "Built Excel-based KPI dashboards increasing engagement by 15–25%",
      "Translated complex findings into clear recommendations for non-technical audiences",
    ],
  },
  {
    period: "Oct 2025 – Dec 2025",
    role: "Content Team Lead",
    tag: "Volunteer",
    company: "Tech Sisters for Muslim Women in Tech · Remote · 3 mos",
    bullets: [
      "Designed an end-to-end Python data analysis curriculum from scratch",
      "Achieved a remarkable 29% completion rate in a voluntary format",
      "Recognized by leadership for high-quality content and initiative",
    ],
  },
  {
    period: "Sep 2025 – Oct 2025",
    role: "Data Analyst",
    tag: "Internship",
    company: "Elevvo Pathways · Remote · Internship",
    bullets: [
      "Applied SQL, Python, and Power BI to real-world business datasets",
      "Built interactive Power BI dashboards and performed EDA using Python",
    ],
  },
  {
    period: "Jun 2016 – Jun 2017",
    role: "Customer Insights Analyst",
    tag: "Volunteer",
    company: "Bayyinah LLC · Remote",
    bullets: [
      "Managed 50+ daily queries via Zendesk — 95% SLA resolution rate",
      "Analyzed support data, contributing to 15% reduction in repeat complaints",
    ],
  },
];

const certs = [
  { abbr: "PL-300", name: "Microsoft Power BI Data Analyst", issuer: "Microsoft · PL-300 Certified", url: "https://learn.microsoft.com/en-us/users/jeseenak-9349/credentials/b4f76c4a80d38fec" },
  { abbr: "IBM", name: "IBM Data Analyst Professional Certificate", issuer: "Coursera / IBM · Apr – Jul 2025", url: "https://www.coursera.org/account/accomplishments/specialization/K5FM5PY91LXI" },
  { abbr: "DC", name: "Data Analyst Power BI Track", issuer: "DataCamp", url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a938685537cc729a3904398fce83b4b7ce0482ab" },
];

const competencies = [
  "Data cleaning, validation & analysis",
  "Interactive dashboards & reporting",
  "KPI tracking & business metrics",
  "Trend analysis & process improvement",
  "Stakeholder communication",
  "Storytelling through data visuals",
  "Star schema & data modelling",
  "ETL & Power Query transformations",
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-4">BACKGROUND</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Experience <span className="gradient-text">&</span> Skills
        </h3>
      </Reveal>

      <div className="space-y-0 mb-12">
        {timeline.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="relative pl-7 pb-8 border-l border-border last:pb-0">
              <div className="absolute left-[-5px] top-1 w-[10px] h-[10px] rounded-full bg-primary border-2 border-background" />
              <p className="text-[0.68rem] tracking-[0.12em] uppercase text-primary font-semibold mb-1">{item.period}</p>
              <h4 className="font-heading text-base md:text-lg font-semibold text-foreground mb-0.5 flex items-center gap-2 flex-wrap">
                {item.role}
                {item.tag && (
                  <span className="text-[0.6rem] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full border border-primary/30 text-primary bg-primary/[0.06]">
                    {item.tag}
                  </span>
                )}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
              <ul className="space-y-1">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="text-xs text-muted-foreground/80 leading-[1.7] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-primary before:text-xs">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="flex flex-col gap-3 mb-12">
          {certs.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 bg-secondary/50 border border-border hover:border-primary/30 hover:translate-x-1 group"
            >
              <div className="w-10 h-10 rounded-full bg-primary/[0.08] border border-primary/25 flex items-center justify-center text-[0.6rem] text-primary font-bold flex-shrink-0 group-hover:bg-primary/[0.15] transition-colors">
                {c.abbr}
              </div>
              <div>
                <div className="font-heading text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{c.issuer}</div>
              </div>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="pt-8 border-t border-border">
          <p className="text-sm tracking-[0.3em] text-primary font-medium mb-2">EXPERTISE</p>
          <h4 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-foreground">
            Core <span className="gradient-text">Competencies</span>
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {competencies.map((c, i) => (
              <div key={i} className="bg-card p-4 relative overflow-hidden transition-colors hover:bg-primary/[0.04] group">
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-gradient-to-b from-primary to-primary/30 transition-all duration-400 group-hover:h-full" />
                <span className="text-[0.65rem] text-primary/70 mb-1 block">{String(i + 1).padStart(2, "0")}.</span>
                <span className="text-xs text-foreground leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ExperienceSection;
