import { Mail, Phone, MapPin, Globe } from "lucide-react";

const infoItems = [
  { label: "Name", value: "Your Name" },
  { label: "Mail", value: "your@email.com", icon: Mail },
  { label: "Phone", value: "+1 234 567 890", icon: Phone },
  { label: "Address", value: "City, Country", icon: MapPin },
  { label: "Languages", value: "English, Arabic", icon: Globe },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-12">ABOUT ME</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {infoItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xs tracking-[0.2em] text-muted-foreground">{item.label}</p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
              Hi, I'm <span className="gradient-text">Your Name</span>,
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A Business Intelligence Engineer with over 2 years of experience,
              bringing a unique blend of problem-solving skills and hands-on experience in BI solutions,
              ETL development, and automation workflows. I focus on building robust analytics systems
              that scale with business needs and drive strategic decision-making.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wider rounded-lg hover:opacity-90 transition-opacity"
              >
                Show CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary text-sm tracking-wider rounded-lg hover:bg-primary/10 transition-colors"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
