import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm tracking-[0.3em] text-primary font-medium mb-4">CONTACT</h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Let's Work <span className="gradient-text">Together</span>
        </h3>
        <p className="text-muted-foreground max-w-xl mb-12">
          I'm always open to discussing new opportunities. Got questions or feedback? Feel free to reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] text-muted-foreground">MAIL</p>
                <p className="text-sm text-foreground">your@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs tracking-[0.2em] text-muted-foreground">PHONE</p>
                <p className="text-sm text-foreground">+1 234 567 890</p>
              </div>
            </div>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              placeholder="Your Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wider rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
