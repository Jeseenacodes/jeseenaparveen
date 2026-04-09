import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Reveal from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const tags = ["SQL", "Power BI", "Python", "Tableau", "Snowflake", "DAX", "PostgreSQL"];

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      <motion.img
        src={heroBg}
        alt=""
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      {/* Open to Remote Roles — left aligned */}
      <div className="relative z-10 pt-28 px-6 md:px-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[0.68rem] tracking-[0.15em] uppercase text-primary font-medium">
              Open to Remote Roles
            </span>
          </div>
        </Reveal>
      </div>

      {/* Centered name + designation + tagline */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pb-8">
        <Reveal delay={0.1}>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-extrabold leading-none tracking-tight text-center text-foreground uppercase whitespace-nowrap drop-shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
            Jeseena <span className="gradient-text drop-shadow-[0_0_30px_hsl(var(--primary)/0.2)]">Parveen K</span>
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.25em] uppercase text-muted-foreground text-center mt-4">
            Data Analyst
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-heading text-base md:text-lg text-muted-foreground font-normal mt-6 mb-6 max-w-xl text-center">
            Turning Data Into Decisions That Move Businesses Forward
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex gap-3 flex-wrap justify-center mb-6">
            <a href="#projects" className="px-6 py-2.5 bg-primary text-primary-foreground font-heading text-xs tracking-[0.12em] uppercase rounded-lg font-semibold transition-all duration-200 hover:translate-y-[-2px] hover:shadow-[0_12px_40px_hsl(350_80%_55%/0.3)]">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-2.5 border border-border text-foreground font-heading text-xs tracking-[0.12em] uppercase rounded-lg font-medium transition-all duration-200 hover:border-primary hover:text-primary hover:translate-y-[-2px]">
              Get In Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1 border border-border rounded-md text-[0.65rem] tracking-[0.1em] uppercase text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-primary transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
