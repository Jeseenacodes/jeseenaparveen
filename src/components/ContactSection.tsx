import Reveal from "./Reveal";

const links = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jeseena-parveen-k",
    href: "https://www.linkedin.com/in/jeseena-parveen-k/",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 stroke-primary fill-none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Jeseenacodes",
    href: "https://github.com/Jeseenacodes",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 stroke-primary fill-none">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "Portfolio",
    value: "jeseenacodes.github.io/my_portfolio",
    href: "https://jeseenacodes.github.io/my_portfolio/",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 stroke-primary fill-none">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "jeseenaparveenk@gmail.com",
    href: "mailto:jeseenaparveenk@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 stroke-primary fill-none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-4">CONTACT</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Open to remote Data Analyst and Business Analyst roles. US work authorized — no sponsorship needed.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 bg-card border border-border hover:border-primary/30 hover:translate-y-[-2px] group"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/[0.08] border border-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/[0.15] transition-colors">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-[0.62rem] tracking-[0.12em] uppercase text-muted-foreground font-medium">{link.label}</div>
                  <div className="text-xs text-foreground mt-0.5 truncate">{link.value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactSection;
