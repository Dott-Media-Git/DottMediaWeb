import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiTrendingUp, FiZap } from "react-icons/fi";
import { projects, stats } from "../data/siteData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const filters = [
  "All",
  "Brand",
  "Growth",
  "Automation",
  "Product",
  "Data",
];

const Portfolio = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <span className={badgeStyle}>Portfolio</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Case studies built with AI precision.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              Every engagement combines strategy, creative, and automation. Here is a look at the
              momentum we have built for ambitious teams.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className={`${surfaceClass} px-4 py-3 text-center`}>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                  {item.label}
                </p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className="rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm transition hover:border-brand-amber/70 hover:text-brand-amber dark:border-white/10 dark:bg-[#0f1624]/80 dark:text-white/70"
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              {...cardMotion}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl dark:border-white/10 dark:bg-[#101a2c]/80"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 dark:from-[#0b1018]/60 dark:via-transparent dark:to-[#0b1018]/20" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(124,58,237,0.2),transparent_35%)] opacity-70" />
              </div>
              <div className="relative space-y-3 px-6 pb-6 pt-4">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 dark:text-white/60">
                  <span>{project.category}</span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800 shadow-sm dark:bg-white/10 dark:text-white/80">
                    {project.result}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-700 dark:text-white/70">{project.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-white/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200/80 px-2 py-1 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            {...cardMotion}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-[#101a2c]/80"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(76,29,149,0.2),transparent_30%)] opacity-80" />
            <div className="relative space-y-4">
              <span className={badgeStyle}>Spotlight</span>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Multi-channel launch for Vela Mobility
              </h2>
              <p className="text-slate-700 dark:text-white/70">
                We orchestrated a full-funnel rollout, new partner materials, and AI-driven nurture
                journeys that opened enterprise doors in 45 days.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Partner enablement", "Narrative refresh", "Lifecycle automation"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
              >
                See the full walkthrough <FiArrowRight />
              </Link>
            </div>
          </motion.div>

          <div className="space-y-4">
            <div className={`${surfaceClass} flex items-start gap-3 px-5 py-4`}>
              <FiTrendingUp className="mt-1 text-brand-amber" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Outcome-driven storytelling
                </p>
                <p className="text-sm text-slate-700 dark:text-white/70">
                  We align creative with the metrics that leadership cares about most.
                </p>
              </div>
            </div>
            <div className={`${surfaceClass} flex items-start gap-3 px-5 py-4`}>
              <FiZap className="mt-1 text-brand-amber" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Rapid experimentation
                </p>
                <p className="text-sm text-slate-700 dark:text-white/70">
                  Weekly iterations keep performance moving upward without long delays.
                </p>
              </div>
            </div>
            <div className={`${surfaceClass} flex items-start gap-3 px-5 py-4`}>
              <FiArrowRight className="mt-1 text-brand-amber" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Always-on reporting
                </p>
                <p className="text-sm text-slate-700 dark:text-white/70">
                  Real-time dashboards keep you aligned on wins, risks, and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <motion.div
          {...cardMotion}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-10 shadow-2xl dark:border-white/10 dark:bg-[#101a2c]/80"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(76,29,149,0.2),transparent_30%)] opacity-80" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                Next case study
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Want to build the next success story?
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                Let&apos;s map the growth levers we can unlock together.
              </p>
            </div>
            <Link
              to="/contact"
              className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
            >
              Start a project <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Portfolio;
