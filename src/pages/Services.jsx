import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { processSteps, services, stats, toolStack } from "../data/siteData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const Services = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className={badgeStyle}>Services</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Full-stack digital growth, powered by AI.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              Dott-Media designs, builds, and optimizes experiences across marketing, brand, and
              product. We work like an embedded growth squad with AI copilots layered into every
              workflow.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Strategy", "Creative", "Automation", "Engineering"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:text-white/70"
                >
                  {pill}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="ai-pulse inline-flex items-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
            >
              Build your roadmap <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-4">
            {stats.map((item) => (
              <div key={item.label} className={`${surfaceClass} px-5 py-4`}>
                <p className="text-sm text-slate-600 dark:text-white/60">{item.label}</p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-navy/10 to-brand-amber/20 p-5 text-slate-900 shadow-sm dark:border-white/10 dark:from-brand-navy/40 dark:to-brand-amber/20 dark:text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-700 dark:text-white/70">
                Delivery cadence
              </p>
              <p className="mt-2 text-xl font-semibold">Weekly sprints, daily AI monitoring</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                We keep progress visible with real-time dashboards and rapid feedback loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>Capabilities</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Services designed to move fast and stay consistent
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              Each engagement is built around a flexible pod: strategy, creative, engineering, and
              AI automation working together.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  {...cardMotion}
                  transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.04 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#0f1624]/80"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-amber/20 text-xl text-brand-amber">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-white/70">
                    {service.focus.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <FiCheckCircle className="text-brand-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={badgeStyle}>Process</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              A modern delivery engine with AI guardrails
            </h2>
            <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
              From discovery to optimization, we ship in focused cycles to deliver outcomes fast.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
          >
            Align on a scope <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                {...cardMotion}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-amber/20 text-xl text-brand-amber">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-6 space-y-3">
            <span className={badgeStyle}>Toolbox</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Modern stacks we love to ship with
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {toolStack.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-200/80 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-[#0f1624]/80 dark:text-white/70"
              >
                {tool}
              </span>
            ))}
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
                Let&apos;s collaborate
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Need a custom engagement?
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                We build bespoke pods for product launches, growth sprints, and AI automation
                rollouts.
              </p>
            </div>
            <Link
              to="/contact"
              className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
            >
              Request a proposal <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Services;
