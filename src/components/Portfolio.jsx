import React, { useState } from "react";

// Single-file, production-ready portfolio built with
// React functional components + Tailwind CSS (no animations)
// Theme: Dark blue / navy
// Accessibility: semantic HTML, skip link, proper heading hierarchy, alt texts
// Notes: Replace dummy links/content with real data as needed.

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:block focus:p-2 focus:bg-blue-900 focus:text-white">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Simple monogram logo */}
          <div aria-hidden className="h-9 w-9 rounded-xl bg-blue-900 grid place-items-center ring-1 ring-blue-800">
            <span className="font-bold text-slate-100">AR</span>
          </div>
          <span className="font-semibold tracking-tight text-slate-100">Alex Rivera</span>
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 px-1 py-2"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 ring-1 ring-slate-700 text-slate-200"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M3.75 6.75h16.5v1.5H3.75v-1.5ZM3.75 11.25h16.5v1.5H3.75v-1.5ZM3.75 15.75h16.5v1.5H3.75v-1.5Z" />
          </svg>
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="md:hidden border-t border-slate-800">
          <ul className="px-4 py-3 space-y-2 bg-slate-950">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-md px-3 py-2 text-slate-200 hover:bg-slate-800 focus:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h1 id="hero-title" className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Alex Rivera
        </h1>
        <p className="mt-2 text-lg md:text-2xl text-blue-300">Full Stack Developer</p>
        <p className="mt-5 max-w-2xl text-slate-300">
          Building modern web applications with passion and precision. I blend strong fundamentals with
          business-focused thinking to deliver reliable, scalable, and accessible software.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-blue-700 bg-blue-900 text-slate-100"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium ring-1 ring-slate-700 text-slate-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <h2 id="about-title" className="text-2xl md:text-3xl font-bold text-white">About</h2>
          <p className="mt-2 text-sm text-slate-400">Professional summary and background</p>
        </header>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
            <p>
              Results-driven full stack developer with a pragmatic approach to building software that ships.
              Experienced across the stack—from accessible, responsive UIs to reliable APIs and data layers.
              Comfortable collaborating with designers, product managers, and stakeholders to turn ideas into
              measurable impact.
            </p>
            <p>
              Known for clean, maintainable code, thoughtful code reviews, and a strong testing culture. I enjoy
              breaking down complex problems, choosing the simplest solution that works, and documenting decisions
              so teams can move fast with confidence.
            </p>
            <p>
              Outside of code, I mentor junior developers, champion accessibility best practices, and continually
              refine tooling for performance and developer experience.
            </p>
          </div>
          <aside className="space-y-4">
            <dl className="grid grid-cols-1 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <dt className="text-sm text-slate-400">Experience</dt>
                <dd className="text-lg font-semibold text-white">5+ years</dd>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <dt className="text-sm text-slate-400">Location</dt>
                <dd className="text-lg font-semibold text-white">San Francisco, CA</dd>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <dt className="text-sm text-slate-400">Availability</dt>
                <dd className="text-lg font-semibold text-white">Open to opportunities</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    {
      title: "Frontend",
      items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Python", "Express.js"],
    },
    {
      title: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "AWS"],
    },
  ];

  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <h2 id="skills-title" className="text-2xl md:text-3xl font-bold text-white">Skills</h2>
          <p className="mt-2 text-sm text-slate-400">Core technologies and tools</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center rounded-full border border-blue-800 bg-blue-900 px-3 py-1 text-xs text-slate-100">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      desc:
        "Scalable storefront with secure checkout and admin dashboard. Solved cart accuracy and order reliability using idempotent APIs and database transactions.",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "AWS"],
      github: "https://github.com/alexrivera/ecommerce-platform",
      demo: "https://demo.example.com/ecommerce",
      impact: "Improved conversion by 18% with faster product discovery and streamlined checkout.",
    },
    {
      name: "Task Management App",
      desc:
        "Kanban-style productivity app with offline support and optimistic UI updates. Tackled data sync conflicts and latency with local-first patterns.",
      tech: ["React", "Express", "MongoDB", "Node.js"],
      github: "https://github.com/alexrivera/task-manager",
      demo: "https://demo.example.com/tasks",
      impact: "Reduced task creation time by 40% and enabled collaboration for teams of up to 50 users.",
    },
    {
      name: "Weather Dashboard",
      desc:
        "Responsive dashboard aggregating forecasts and historical trends. Focused on accessibility and performance budgets for fast mobile loads.",
      tech: ["React", "Tailwind", "APIs", "Vite"],
      github: "https://github.com/alexrivera/weather-dashboard",
      demo: "https://demo.example.com/weather",
      impact: "Lighthouse performance score 95+ on 3G; accessible color contrasts and keyboard navigation.",
    },
    {
      name: "Social Media Analytics Tool",
      desc:
        "Insights platform to visualize engagement metrics and identify content opportunities. Addressed large dataset rendering with virtualization.",
      tech: ["React", "Node.js", "PostgreSQL", "Charting"],
      github: "https://github.com/alexrivera/social-analytics",
      demo: "https://demo.example.com/analytics",
      impact: "Cut reporting time from hours to minutes; supported 1M+ rows through server-side pagination.",
    },
  ];

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <h2 id="projects-title" className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
          <p className="mt-2 text-sm text-slate-400">Selected work highlighting range, problem-solving, and results</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col">
              <header>
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-2 text-slate-300">{p.desc}</p>
                <p className="mt-2 text-sm text-slate-400">{p.impact}</p>
              </header>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t}>
                    <span className="inline-flex items-center rounded-full border border-blue-800 bg-blue-900 px-3 py-1 text-xs text-slate-100">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3">
                <a
                  href={p.github}
                  className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium ring-1 ring-slate-700 text-slate-200"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
                <a
                  href={p.demo}
                  className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium ring-1 ring-blue-700 bg-blue-900 text-slate-100"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const info = [
    { kind: "Email", value: "alex.rivera@email.com", href: "mailto:alex.rivera@email.com" },
    { kind: "Phone", value: "(555) 123-4567", href: "tel:+15551234567" },
    { kind: "LinkedIn", value: "linkedin.com/in/alexrivera", href: "https://linkedin.com/in/alexrivera" },
    { kind: "GitHub", value: "github.com/alexrivera", href: "https://github.com/alexrivera" },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <h2 id="contact-title" className="text-2xl md:text-3xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-sm text-slate-400">Let’s build something impactful together</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate-300">
              I’m open to roles where I can contribute across the stack, collaborate closely with product/design,
              and drive measurable outcomes. For fastest response, email works best.
            </p>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Call-to-action</p>
              <p className="mt-1 font-medium text-white">Available for full-time or contract opportunities</p>
            </div>
          </div>
          <ul className="space-y-3">
            {info.map((i) => (
              <li key={i.kind} className="rounded-xl border border-slate-800 bg-slate-900">
                <a
                  href={i.href}
                  className="flex items-center justify-between gap-4 px-4 py-3 text-slate-200 hover:bg-slate-800"
                >
                  <span className="text-sm">
                    <span className="block text-slate-400">{i.kind}</span>
                    <span className="block font-medium text-white break-all">{i.value}</span>
                  </span>
                  <span aria-hidden className="shrink-0">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Alex Rivera. All rights reserved.
        </p>
        <p>
          Built with <span className="font-medium text-slate-200">React</span> & <span className="font-medium text-slate-200">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
