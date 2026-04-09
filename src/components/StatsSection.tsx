import Reveal from "./Reveal";
import { motion } from "framer-motion";

const stats = [
  { val: "$75M", label: "Revenue Risk Identified", desc: "SQL analysis of 10 years of Massachusetts General Hospital data" },
  { val: "$275M", label: "BI Pipeline Built", desc: "Snowflake → Power BI end-to-end for a beverage business" },
  { val: "13+", label: "Industry Projects", desc: "Healthcare, retail, telecom, HR, e-commerce" },
  { val: "2", label: "Certifications", desc: "Microsoft PL-300 Power BI Analyst · IBM Data Analyst" },
];

const StatsSection = () => {
  return (
    <section className="relative py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
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
    </section>
  );
};

export default StatsSection;
