import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Github, Linkedin, Mail, Download, Send, Menu, X, ExternalLink, GraduationCap,
  Code2, Server, Layout, Wrench, Award, Sparkles, Terminal, ArrowUp,
} from "lucide-react";
import { profile, skills, projects, education, learning, achievements } from "./data.js";

const icons = { Code2, Server, Layout, Wrench };
const nav = ["About", "Skills", "Projects", "Education", "Learning", "Achievements", "Contact"];
const initials = profile.name.split(" ").map((w) => w[0]).join("");

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: profile.linkedin },
  { label: "GitHub", icon: Github, href: profile.github },
  { label: "Email", icon: Mail, href: profile.email && `mailto:${profile.email}` },
].filter((s) => s.href);

const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-xl text-slate-400">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl border border-white/10 bg-panel/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-electric/50 hover:shadow-[0_10px_40px_-12px_rgba(59,130,246,.45)] ${className}`}>
    {children}
  </div>
);

const LinkBtn = ({ href, icon: Icon, children, primary, ...rest }) => (
  <a
    href={href}
    {...rest}
    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:scale-[1.03] ${
      primary
        ? "bg-gradient-to-r from-electric to-violet text-white shadow-lg shadow-electric/25 hover:shadow-violet/40"
        : "border border-white/15 text-white hover:border-electric hover:bg-white/5"
    }`}
  >
    {Icon && <Icon size={18} aria-hidden />}
    {children}
  </a>
);

function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-lg font-bold text-white">
          {profile.name.split(" ")[0]}<span className="text-electric">.dev</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className="text-sm text-slate-400 transition hover:text-white">{n}</a></li>
          ))}
        </ul>
        <button className="rounded-lg p-2 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/5 bg-ink px-5 pb-4 lg:hidden">
          {nav.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-slate-300 hover:text-white">{n}</a>
            </li>
          ))}
        </ul>
      )}
      <motion.div style={{ scaleX: bar }} className="h-0.5 origin-left bg-gradient-to-r from-electric to-violet" />
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-40">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-electric/20 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-40 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
          <motion.p variants={fade} className="mb-4 inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-sm text-blue-300">
            <Terminal size={14} aria-hidden /> B.Tech CSE · Class of 2027
          </motion.p>
          <motion.h1 variants={fade} className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-electric to-violet bg-clip-text text-transparent">{profile.name}</span>
          </motion.h1>
          <motion.h2 variants={fade} className="mt-5 font-display text-xl text-slate-200 sm:text-2xl">{profile.title}</motion.h2>
          <motion.p variants={fade} className="mt-4 max-w-xl text-lg text-slate-400">{profile.tagline}</motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-4">
            <LinkBtn primary href={profile.resume} icon={Download} download>Download Resume</LinkBtn>
            <LinkBtn href="#contact" icon={Send}>Contact Me</LinkBtn>
          </motion.div>
          {socials.length > 0 && (
            <motion.div variants={fade} className="mt-8 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-electric hover:text-white hover:shadow-lg hover:shadow-electric/30">
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mx-auto">
          <div className="rounded-full bg-gradient-to-br from-electric via-violet to-electric p-1 shadow-2xl shadow-violet/30">
            <div className="grid h-64 w-64 place-items-center overflow-hidden rounded-full bg-navy sm:h-80 sm:w-80">
              {profile.image ? (
                <img src={profile.image} alt={`Portrait of ${profile.name}`} className="h-full w-full object-cover" />
              ) : (
                <span className="font-display text-7xl font-bold text-white/90" aria-label="Profile photo placeholder">{initials}</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Technical skills" subtitle="Technologies I work with and keep sharpening.">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map(({ group, icon, items }) => {
          const Icon = icons[icon] || Code2;
          return (
            <Card key={group}>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-violet/30 text-blue-300"><Icon size={20} aria-hidden /></span>
                <h3 className="font-display text-lg font-semibold text-white">{group}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-slate-200 transition hover:border-violet hover:text-white">{s}</li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built while learning.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col">
            <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
            <p className="mt-3 flex-1 text-slate-400">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => <li key={t} className="rounded-md bg-electric/10 px-2.5 py-1 text-xs text-blue-300">{t}</li>)}
            </ul>
            {(p.demo || p.github) && (
              <div className="mt-6 flex gap-3">
                {p.demo && <LinkBtn primary href={p.demo} icon={ExternalLink} target="_blank" rel="noopener noreferrer">Live Demo</LinkBtn>}
                {p.github && <LinkBtn href={p.github} icon={Github} target="_blank" rel="noopener noreferrer">GitHub</LinkBtn>}
              </div>
            )}
          </Card>
        ))}
        <Card className="grid place-items-center border-dashed text-center">
          <div>
            <Sparkles className="mx-auto mb-3 text-violet" aria-hidden />
            <p className="font-display text-lg text-white">More projects on the way</p>
            <p className="mt-1 text-sm text-slate-400">New work will appear here as I build it.</p>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      {education.map((e) => (
        <Card key={e.degree} className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-electric/30 to-violet/30 text-blue-300"><GraduationCap aria-hidden /></span>
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{e.degree}</h3>
            <p className="mt-1 text-slate-300">{e.school}</p>
            <p className="text-sm text-slate-400">{e.year}</p>
          </div>
        </Card>
      ))}
    </Section>
  );
}

function Learning() {
  return (
    <Section id="learning" title="What I'm learning" subtitle="Where my time is going right now.">
      <ul className="flex flex-wrap gap-3">
        {learning.map((l) => (
          <motion.li key={l} whileHover={{ scale: 1.06 }} className="rounded-full border border-violet/30 bg-violet/10 px-5 py-2.5 text-slate-100">{l}</motion.li>
        ))}
      </ul>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" title="Achievements & certifications" subtitle="Certifications, achievements and coding profiles.">
      {achievements.length === 0 ? (
        <Card className="text-center">
          <Award className="mx-auto mb-3 text-electric" aria-hidden />
          <p className="font-display text-lg text-white">Nothing listed yet</p>
          <p className="mt-1 text-sm text-slate-400">Verified certifications and achievements will be added here.</p>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <Card key={a.title}>
              <p className="text-sm text-blue-300">{a.type}</p>
              <h3 className="mt-1 font-display text-lg font-semibold text-white">{a.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{[a.issuer, a.year].filter(Boolean).join(" · ")}</p>
              {(a.certificate || a.link) && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {a.certificate && <a href={a.certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-300 hover:text-white">View certificate <ExternalLink size={14} aria-hidden /></a>}
                  {a.link && <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-300 hover:text-white">Verify <ExternalLink size={14} aria-hidden /></a>}
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const field = "w-full rounded-xl border border-white/10 bg-navy px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-electric";

  const submit = (e) => {
    e.preventDefault();
    if (!profile.email) return setStatus("Set your email in src/data.js to enable this form.");
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app to send the message.");
  };

  return (
    <Section id="contact" title="Get in touch" subtitle="Open to internships, placements and collaborations.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {socials.length === 0 && <p className="text-slate-400">Contact links will appear here.</p>}
          {socials.map(({ label, icon: Icon, href }) => (
            <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-panel/70 p-4 transition hover:border-electric/50 hover:text-white">
              <Icon className="text-blue-300" aria-hidden /> <span>{label}</span>
            </a>
          ))}
        </div>
        <form onSubmit={submit} className="space-y-4 rounded-2xl border border-white/10 bg-panel/70 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">Name<input required className={`${field} mt-1.5`} value={form.name} onChange={set("name")} placeholder="Your name" /></label>
            <label className="block text-sm">Email<input required type="email" className={`${field} mt-1.5`} value={form.email} onChange={set("email")} placeholder="you@example.com" /></label>
          </div>
          <label className="block text-sm">Subject<input required className={`${field} mt-1.5`} value={form.subject} onChange={set("subject")} placeholder="What's this about?" /></label>
          <label className="block text-sm">Message<textarea required rows={5} className={`${field} mt-1.5 resize-none`} value={form.message} onChange={set("message")} placeholder="Write your message" /></label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-electric/25 transition hover:scale-[1.03]">
            <Send size={18} aria-hidden /> Send Message
          </button>
          <p role="status" className="min-h-5 text-sm text-slate-400">{status}</p>
        </form>
      </div>
    </Section>
  );
}

export default function App() {
  const [top, setTop] = useState(false);
  useEffect(() => {
    const on = () => setTop(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title="About me">
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{profile.about}</p>
        </Section>
        <Skills />
        <Projects />
        <Education />
        <Learning />
        <Achievements />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-slate-500">
        Designed &amp; Developed by {profile.name}
      </footer>
      {top && (
        <a href="#home" aria-label="Back to top" className="fixed bottom-6 right-6 grid h-11 w-11 place-items-center rounded-full bg-electric text-white shadow-lg transition hover:scale-110">
          <ArrowUp size={20} />
        </a>
      )}
    </>
  );
}
