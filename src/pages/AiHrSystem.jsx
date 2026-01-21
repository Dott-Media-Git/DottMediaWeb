import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClipboard,
  FiShield,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import Seo from "../components/Seo";
import seoData, { BASE_URL } from "../data/seoData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI HR Management System",
  description:
    "AI-powered HR system for recruiting, onboarding, performance, compliance, and people analytics.",
  provider: {
    "@type": "Organization",
    name: "Dott-Media",
    url: BASE_URL,
  },
  areaServed: "Worldwide",
  serviceType: "AI HR Management System",
  url: `${BASE_URL}/ai-hr-system`,
  image: `${BASE_URL}/og-image.svg`,
};

const importanceCards = [
  {
    title: "Faster hiring decisions",
    description: "AI screening and scheduling cut time-to-hire without losing quality.",
    icon: FiUserCheck,
  },
  {
    title: "Compliance and trust",
    description: "Audit-ready documentation, approvals, and policy tracking in one place.",
    icon: FiShield,
  },
  {
    title: "Retention clarity",
    description: "Spot engagement and performance trends before they become risks.",
    icon: FiTrendingUp,
  },
];

const modules = [
  {
    title: "Recruiting pipeline",
    description: "Job posts, candidate tracking, and AI shortlisting.",
    icon: FiUsers,
  },
  {
    title: "Onboarding flows",
    description: "Automated checklists, training paths, and role handoffs.",
    icon: FiClipboard,
  },
  {
    title: "Performance reviews",
    description: "Goal tracking, feedback cycles, and growth plans.",
    icon: FiActivity,
  },
  {
    title: "Policy compliance",
    description: "Document control, approvals, and audit-ready records.",
    icon: FiShield,
  },
  {
    title: "People analytics",
    description: "Insights on retention, engagement, and productivity.",
    icon: FiTrendingUp,
  },
  {
    title: "Workflow automation",
    description: "AI tasks, reminders, and approvals across the HR lifecycle.",
    icon: FiZap,
  },
];

const workflowSteps = [
  {
    title: "Attract",
    description: "Publish roles, rank candidates, and prioritize high-fit talent.",
  },
  {
    title: "Onboard",
    description: "Automate documents, training, and access provisioning.",
  },
  {
    title: "Develop",
    description: "Track goals, reviews, and continuous feedback.",
  },
  {
    title: "Retain",
    description: "Monitor engagement and act on early signals.",
  },
];

const outcomes = [
  "Reduce HR admin time with AI automation",
  "Improve employee experience and retention",
  "Keep compliance, policies, and audits aligned",
  "Make data-backed people decisions faster",
];

const AiHrSystem = () => {
  return (
    <>
      <Seo {...seoData.aiHrSystem} jsonLd={serviceSchema} jsonLdId="seo-ai-hr-system" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className={badgeStyle}>Product</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              AI HR Management System for modern teams.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              Dott-Media&apos;s AI HR Management System brings recruiting, onboarding, performance,
              and compliance into one intelligent workspace. It keeps people ops proactive, not
              reactive.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Hiring automation", "People analytics", "Compliance ready", "Smart workflows"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-slate-200/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:text-white/70"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
              >
                Book a demo <FiArrowRight />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/15 dark:text-white/90"
              >
                See all services
              </Link>
            </div>
          </div>

          <motion.div
            {...cardMotion}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#101a2c]/80"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(76,29,149,0.2),transparent_30%)] opacity-80" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <FiCheckCircle className="text-brand-amber" />
                Why AI-powered HR matters
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {outcomes.map((item) => (
                  <div key={item} className={`${surfaceClass} px-4 py-3 text-sm`}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-white/70">
                <FiActivity className="text-brand-amber" />
                Always-on visibility for people and performance.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>Importance</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              The importance of a modern AI HR system
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              A strong HR foundation reduces turnover, protects compliance, and keeps teams
              aligned as you grow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {importanceCards.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...cardMotion}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-amber/20 text-xl text-brand-amber">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={badgeStyle}>Modules</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Everything HR needs, automated.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
          >
            Build your HR roadmap <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.title}
                {...cardMotion}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-amber/20 text-xl text-brand-amber">
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {module.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                  {module.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className={badgeStyle}>Workflow</span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
                A simple HR flow that scales with your team.
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Align on implementation <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step) => (
              <motion.div
                key={step.title}
                {...cardMotion}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber">
                  {step.title}
                </p>
                <p className="mt-3 text-sm text-slate-700 dark:text-white/70">
                  {step.description}
                </p>
              </motion.div>
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
                Ready to modernize HR?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Launch your AI HR system in weeks.
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                We handle strategy, setup, and training so your team can focus on people.
              </p>
            </div>
            <Link
              to="/contact"
              className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
            >
              Get started <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AiHrSystem;
