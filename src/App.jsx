import { useEffect, useState } from "react";
import { NavLink, Route, Routes, Link } from "react-router-dom";
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { FaThreads } from "react-icons/fa6";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import AiSalesAgent from "./pages/AiSalesAgent";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Privacy from "./pages/Privacy";
import Services from "./pages/Services";
import Terms from "./pages/Terms";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("dott-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const startingTheme = stored || (prefersDark ? "dark" : "light");
    setTheme(startingTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("dott-theme", theme);
  }, [theme]);

  const navLinkClass = ({ isActive }) =>
    [
      "text-slate-700 transition hover:text-brand-navy dark:text-white/70 dark:hover:text-white",
      isActive ? "text-brand-amber dark:text-brand-amber" : "",
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <div className="relative min-h-screen overflow-hidden bg-hero-surface bg-brand-light text-slate-900 transition-colors duration-300 dark:bg-[#0b1018] dark:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-[#FFE7C2]/45 blur-3xl dark:bg-brand-amber/20" />
        <div className="absolute right-[-20%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-[#DCE7FF]/35 blur-3xl dark:bg-brand-navy/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.04),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(255,231,194,0.18),transparent_25%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.03),transparent_35%),radial-gradient(circle_at_20%_20%,rgba(255,193,7,0.07),transparent_25%)]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 dark:from-white/[0.05] dark:to-white/[0.02]" />

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg transition-colors dark:border-white/5 dark:bg-[#0b1018]/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/dott-logo.png"
              alt="Dott-Media logo"
              className="h-10 w-10 rounded-2xl bg-white/90 object-contain p-1 shadow-glow ring-1 ring-white/40 dark:bg-white/10"
            />
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-slate-600 dark:text-white/70">
                Dott-Media
              </p>
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                Digital Solutions
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <Link
              to="/contact"
              className="hidden rounded-full bg-brand-amber px-4 py-2 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-lg hover:shadow-brand-amber/40 md:inline-flex md:items-center md:gap-2"
            >
              Get Started <FiArrowRight />
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/70 bg-white text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-white/5 dark:text-white md:hidden"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200/70 bg-white/95 px-5 py-4 backdrop-blur-lg dark:border-white/5 dark:bg-[#0b1018]/90 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-800 dark:text-white/80">
              {navLinks.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      "rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-white/5",
                      isActive ? "text-brand-amber" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="ai-pulse flex items-center justify-center gap-2 rounded-full bg-brand-amber px-4 py-2 font-semibold text-brand-dark shadow-glow"
              >
                Get Started <FiArrowRight />
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-sales-agent" element={<AiSalesAgent />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200/70 bg-white/90 py-10 backdrop-blur-lg dark:border-white/5 dark:bg-[#0b1018]/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1.2fr_1fr_1fr] md:items-start md:px-8">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
              Dott-Media
            </p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Digital solutions for modern brands.
            </p>
            <p className="text-sm text-slate-600 dark:text-white/60">
              (c) Dott-Media {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
              Explore
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-700 dark:text-white/70">
              {navLinks.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-brand-amber">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
              Legal
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-700 dark:text-white/70">
              {legalLinks.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-brand-amber">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.instagram.com/dottmedia100"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-white/5 dark:text-white"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>
              <a
                href="https://www.threads.net/@dottmedia100"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-white/5 dark:text-white"
                aria-label="Threads"
              >
                <FaThreads />
              </a>
              <a
                href="https://www.facebook.com/Dott-Media"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-white/5 dark:text-white"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/dottmedia"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-white/5 dark:text-white"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
