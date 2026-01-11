import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiTarget } from "react-icons/fi";
import Seo from "../components/Seo";
import seoData from "../data/seoData";
import { industries } from "../data/landingPages";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const Industries = () => {
  return (
    <>
      <Seo {...seoData.industriesIndex} />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <span className={badgeStyle}>Industries</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Industry-specific AI growth systems.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              We support AI startups, SMEs, agencies, automotive dealers, fintech platforms, and
              corporate teams with AI Sales Agent solutions, automation, and digital showrooms.
            </p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry.slug}
                  className="rounded-full border border-slate-200/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:text-white/70"
                >
                  {industry.name}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            {...cardMotion}
            className={`${surfaceClass} space-y-4 px-6 py-6`}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <FiTarget className="text-brand-amber" />
              Targeted delivery
            </div>
            <p className="text-sm text-slate-700 dark:text-white/70">
              We align automation and CRM workflows to the sales cycles and compliance needs of
              each industry.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Schedule a strategy call <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <motion.div
              key={industry.slug}
              {...cardMotion}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#101a2c]/80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <FiTarget className="text-brand-amber" />
                  {industry.name}
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                  {industry.headline}
                </h2>
                <p className="text-sm text-slate-700 dark:text-white/70">
                  {industry.summary}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-white/60">
                  {industry.serviceFocus.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-slate-200/80 px-3 py-1 dark:border-white/10"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition group-hover:text-brand-amber dark:text-brand-amber"
                >
                  Explore {industry.name} <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <motion.div
            {...cardMotion}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-10 shadow-2xl dark:border-white/10 dark:bg-[#101a2c]/80"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(76,29,149,0.2),transparent_30%)] opacity-80" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                  Industry playbooks
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  Align your AI roadmap with the right outcomes.
                </h2>
                <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                  We build tailored automation plans that match your market, sales cycle, and team
                  structure.
                </p>
              </div>
              <Link
                to="/contact"
                className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
              >
                Get an industry plan <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Industries;
