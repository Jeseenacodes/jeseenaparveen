import { ChevronDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const stats = [
  { val: "$75M", label: "Revenue Risk Identified", desc: "SQL analysis of 10 years of Massachusetts General Hospital data" },
  { val: "$275M", label: "BI Pipeline Built", desc: "Snowflake → Power BI end-to-end for a beverage business" },
  { val: "13+", label: "Industry Projects", desc: "Healthcare, retail, telecom, HR, e-commerce" },
  { val: "2", label: "Certifications", desc: "Microsoft PL-300 Power BI Analyst · IBM Data Analyst" },
];

const tags = ["SQL", "Power BI", "Python", "Tableau", "Snowflake", "DAX", "PostgreSQL"];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/[0.06] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[0.68rem] tracking-[0.15em] uppercase text-green-400 font-medium">
                  Open to Remote Roles
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">
                Data Analyst · Remote
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight mb-2 text-foreground">
                Jeseena
                <br />
                <span className="gradient-text">Parveen K</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-heading text-lg md:text-xl text-muted-foreground font-normal mt-4 mb-6 max-w-lg">
                Turning Data Into Decisions That Move Businesses Forward
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-sm leading-[1.85] text-muted-foreground max-w-lg mb-6">
                I am a <strong className="text-foreground font-medium">PL-300 certified Power BI professional</strong> specializing
                in transforming complex datasets into clear, actionable business insights. I deliver end-to-end analytics
                solutions focusing on <span className="text-primary font-medium">intuitive, business-oriented reports</span> that
                help stakeholders make informed decisions.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-3 flex-wrap mb-6">
                <a href="#projects" className="px-6 py-2.5 bg-primary text-primary-foreground font-heading text-xs tracking-[0.12em] uppercase rounded-lg font-semibold transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_hsl(350_80%_55%/0.3)]">
                  View Projects
                </a>
                <a href="#contact" className="px-6 py-2.5 border border-border text-foreground font-heading text-xs tracking-[0.12em] uppercase rounded-lg font-medium transition-all duration-200 hover:border-primary hover:text-primary hover:translate-y-[-2px]">
                  Get In Touch
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 border border-border rounded-md text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} direction="right">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="rounded-xl p-5 relative overflow-hidden group transition-all duration-300 hover:translate-y-[-4px] bg-card border border-border hover:border-primary/30 hover:glow-box"
                >
                  <div className="absolute top-0 left-0 w-[3px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-primary to-primary/50" />
                  <div className="font-heading text-3xl font-bold leading-none gradient-text">{s.val}</div>
                  <div className="text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground font-medium mt-1">{s.label}</div>
                  <div className="text-xs text-muted-foreground/70 mt-2 leading-relaxed">{s.desc}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-primary transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
