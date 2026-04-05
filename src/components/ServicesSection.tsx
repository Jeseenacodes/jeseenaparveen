import { BarChart3, Database, TrendingUp } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Reporting & Dashboard Creation",
    items: [
      "Interactive dashboard design",
      "Data-driven decision-making support",
      "Infographics and data storytelling",
      "Utilize visualization tools (Tableau, Power BI)",
    ],
  },
  {
    icon: Database,
    title: "Data Management",
    items: [
      "Database architecture & schema design",
      "ETL processes development",
      "Scalable data pipelines",
      "Data quality measurements",
    ],
  },
  {
    icon: TrendingUp,
    title: "Analysis & Interpretation",
    items: [
      "Data exploration & descriptive analytics",
      "Statistical analysis",
      "KPIs definition and monitoring",
      "Customer behavior analysis",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-4">SERVICES</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16">
          What I Can <span className="gradient-text">Offer</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:glow-box transition-all duration-500"
            >
              <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg font-heading font-semibold text-foreground mb-4">{service.title}</h4>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
