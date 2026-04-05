import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Reveal from "./Reveal";

const infoItems = [
  { label: "Name", value: "Jeseena Parveen K" },
  { label: "Mail", value: "jeseenaparveenk@gmail.com" },
  { label: "Location", value: "Remote · US Work Authorized" },
  { label: "Languages", value: "English" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-12">ABOUT ME</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.1}>
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
          </Reveal>
          <Reveal delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
                Hi, I'm <span className="gradient-text">Jeseena</span>,
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A PL-300 certified Power BI professional specializing in transforming complex datasets into clear,
                actionable business insights. I deliver end-to-end analytics solutions from raw data wrangling to
                interactive executive dashboards. With 9+ years of volunteer leadership and instructional experience,
                I bring structured thinking, strong communication, and stakeholder-focused problem solving to analytics projects.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="/Jeseena_Parveen_K_Resume.pdf" download className="px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wider rounded-lg hover:opacity-90 transition-opacity">
                  Show CV
                </a>
                <a href="#contact" className="px-6 py-3 border border-primary text-primary text-sm tracking-wider rounded-lg hover:bg-primary/10 transition-colors">
                  Hire Me
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
