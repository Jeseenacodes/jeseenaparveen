import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 text-center animate-fade-in-up">
        <p className="text-sm md:text-base tracking-[0.5em] text-foreground/70 mb-4 font-light">
          YOUR NAME
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-[0.15em] text-foreground text-glow leading-tight">
          ANALYTICS
          <br />
          ENGINEER
        </h1>
        <a
          href="#about"
          className="inline-block mt-12 text-foreground/50 hover:text-primary transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
