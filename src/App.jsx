import { useState, useEffect, useRef } from "react";
import { PERSON, EXPERIENCE, CLIENT_PROJECTS, TECHNICAL_PROJECTS, SKILLS, EDUCATION, NAV_LINKS } from "./constants.js";
import { IMAGES } from "./images.js";
import "./App.css";

// ── Utility ──────────────────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── Logo component ────────────────────────────────────────────────────────────
function Logo({ logoKey, logoBg, size = 48, className = "" }) {
  const src = IMAGES[logoKey];
  if (!src) return null;
  return (
    <div
      className={`logo-badge ${className}`}
      style={{ background: logoBg, width: size, height: size, minWidth: size }}
    >
      <img src={src} alt={logoKey} />
    </div>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <span className="nav-brand">
          <span className="brand-accent">A</span>S
        </span>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <button key={l.href} className="nav-link" onClick={() => handleNav(l.href)}>
              {l.label}
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleDark} aria-label="Toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <div className="hero-text">
          <Reveal delay={0}>
            <div className="hero-greeting">Hello, I'm</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="hero-name">{PERSON.name}</h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="hero-title">{PERSON.title}</div>
          </Reveal>
          <Reveal delay={300}>
            <p className="hero-tagline">{PERSON.tagline}</p>
          </Reveal>
          <Reveal delay={400}>
            <div className="hero-cta">
              <a href={`mailto:${PERSON.email}`} className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#experience" className="btn btn-outline"
                onClick={(e) => { e.preventDefault(); document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" }); }}>
                View Work
              </a>
            </div>
          </Reveal>
          <Reveal delay={500}>
            <div className="hero-meta">
              <span className="meta-chip">📍 {PERSON.location}</span>
              <a href={PERSON.linkedin} target="_blank" rel="noreferrer" className="meta-chip meta-link">
                💼 LinkedIn
              </a>
              <a href={`tel:${PERSON.phone}`} className="meta-chip meta-link">
                📞 {PERSON.phone}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img src={IMAGES.profile} alt={PERSON.name} className="hero-photo" />
          </div>
          <div className="hero-photo-tag">
            <Logo logoKey="fnz" logoBg="#000" size={36} />
            <span>Currently @ FNZ</span>
          </div>
        </Reveal>
      </div>

      <div className="hero-about-card">
        <p>{PERSON.about}</p>
      </div>
    </section>
  );
}

// ── Section Heading ───────────────────────────────────────────────────────────
function SectionHeading({ label, title }) {
  return (
    <Reveal>
      <div className="section-head">
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
        <div className="section-rule" />
      </div>
    </Reveal>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────
function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeading label="Career" title="Work Experience" />
        {EXPERIENCE.map((exp, i) => (
          <Reveal key={i} delay={100}>
            <div className="exp-card">
              <div className="exp-header">
                <Logo logoKey={exp.logoKey} logoBg={exp.logoBg} size={56} />
                <div className="exp-info">
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-meta">
                    <span className="badge">{exp.period}</span>
                    <span className="exp-sub">{exp.subtitle}</span>
                  </div>
                </div>
              </div>
              <ul className="bullet-list">
                {exp.bullets.map((b, j) => (
                  <li key={j}><span className="bullet-dot" />{b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        {/* Client Projects */}
        <Reveal delay={50}>
          <div className="section-sub-head">Client Engagements</div>
        </Reveal>
        <div className="client-grid">
          {CLIENT_PROJECTS.map((proj, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="client-card">
                <div className="client-card-top">
                  <Logo logoKey={proj.logoKey} logoBg={proj.logoBg} size={52} />
                  <div>
                    <div className="client-name">{proj.clientShort}</div>
                    <div className="client-region">🌏 {proj.region}</div>
                  </div>
                </div>
                <p className="client-about">{proj.about}</p>
                <ul className="bullet-list">
                  {proj.bullets.map((b, j) => (
                    <li key={j}><span className="bullet-dot" />{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {proj.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <SectionHeading label="Portfolio" title="Technical Projects" />
        <div className="proj-grid">
          {TECHNICAL_PROJECTS.map((proj, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="proj-card">
                <div className="proj-icon">{proj.icon}</div>
                <div className="proj-header">
                  <h3 className="proj-name">{proj.name}</h3>
                  <span className="badge">{proj.period}</span>
                </div>
                <div className="proj-stat">{proj.stat}</div>
                <ul className="bullet-list">
                  {proj.bullets.map((b, j) => (
                    <li key={j}><span className="bullet-dot" />{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {proj.tools.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Skills ────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading label="Expertise" title="Skills & Tools" />
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="skill-card">
                <div className="skill-icon">{s.icon}</div>
                <div className="skill-category">{s.category}</div>
                <div className="skill-items">
                  {s.items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Education ─────────────────────────────────────────────────────────────────
function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <SectionHeading label="Academic" title="Education" />
        {EDUCATION.map((edu, i) => (
          <Reveal key={i} delay={100}>
            <div className="edu-card">
              <Logo logoKey={edu.logoKey} logoBg={edu.logoBg} size={72} className="edu-logo" />
              <div className="edu-info">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-meta">
                  <span className="badge">{edu.period}</span>
                  <span className="badge badge-gold">{edu.cgpa}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionHeading label="Connect" title="Get In Touch" />
        <Reveal delay={100}>
          <div className="contact-grid">
            <a href={`mailto:${PERSON.email}`} className="contact-card">
              <div className="contact-icon">✉️</div>
              <div className="contact-label">Email</div>
              <div className="contact-value">{PERSON.email}</div>
            </a>
            <a href={`tel:${PERSON.phone}`} className="contact-card">
              <div className="contact-icon">📱</div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">{PERSON.phone}</div>
            </a>
            <a href={PERSON.linkedin} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">💼</div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">View Profile →</div>
            </a>
            <div className="contact-card no-link">
              <div className="contact-icon">📍</div>
              <div className="contact-label">Location</div>
              <div className="contact-value">{PERSON.location}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-name">{PERSON.name}</span>
        <span className="footer-copy">© {new Date().getFullYear()} · All rights reserved</span>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="app">
      <Navbar dark={dark} toggleDark={() => setDark(!dark)} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
