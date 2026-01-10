import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiArrowRight,
  FiClock,
  FiLayers,
  FiMessageSquare,
  FiPhoneCall,
  FiShield,
  FiTrendingUp,
  FiUserCheck,
} from "react-icons/fi";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const featureHighlights = [
  {
    title: "Instant lead response",
    description: "Engage inbound leads in under 60 seconds across web, email, and chat.",
    icon: FiMessageSquare,
  },
  {
    title: "Qualification & routing",
    description: "Scores intent, enriches data, and routes to the right rep automatically.",
    icon: FiUserCheck,
  },
  {
    title: "Calendar-ready booking",
    description: "Books meetings with your reps and confirms details in real time.",
    icon: FiPhoneCall,
  },
  {
    title: "Pipeline visibility",
    description: "Pushes notes, tags, and outcomes to your CRM without manual updates.",
    icon: FiLayers,
  },
  {
    title: "Compliance guardrails",
    description: "Brand-safe messaging with approval flows and escalation thresholds.",
    icon: FiShield,
  },
  {
    title: "Performance insights",
    description: "Track conversion, speed-to-lead, and revenue impact in one dashboard.",
    icon: FiActivity,
  },
];

const workflowSteps = [
  {
    title: "Capture",
    description: "Multi-channel intake for web, paid campaigns, inbound email, and social.",
  },
  {
    title: "Qualify",
    description: "AI asks the right questions, scores intent, and segments leads.",
  },
  {
    title: "Book",
    description: "Calendar sync, time-zone handling, and automated confirmations.",
  },
  {
    title: "Hand-off",
    description: "Context-rich summaries go straight to your sales team and CRM.",
  },
];

const integrations = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Gmail",
  "Outlook",
  "Calendly",
  "Slack",
  "Zoom",
];

const AiSalesAgent = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className={badgeStyle}>Product</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              AI Sales Agent that books meetings while you sleep.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              Dott-Media&apos;s AI Sales Agent engages, qualifies, and schedules sales-ready leads
              with human-grade conversations. You get more meetings, faster response times, and a
              clean pipeline without the busywork.
            </p>
            <div className="flex flex-wrap gap-3">
              {["24/7 coverage", "CRM synced", "Brand-safe messaging", "Human handoff"].map(
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
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-white">
                <FiTrendingUp className="text-brand-amber" />
                Pipeline impact highlights
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Speed-to-lead", value: "< 1 min" },
                  { label: "Meeting lift", value: "+32%" },
                  { label: "No-show reduction", value: "-18%" },
                  { label: "Handoff clarity", value: "99% tagged" },
                ].map((item) => (
                  <div key={item.label} className={`${surfaceClass} px-4 py-3`}>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                      {item.label}
                    </p>
                    <p className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-white/70">
                <FiClock className="text-brand-amber" />
                Average response time under 60 seconds.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>Features</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Everything your sales team needs, automated.
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              From qualification to scheduling, the AI Sales Agent works across the funnel while
              your reps focus on closing.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  {...cardMotion}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-amber/20 text-xl text-brand-amber">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                    {feature.description}
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
            <span className={badgeStyle}>How it works</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              A simple workflow that scales conversations.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
          >
            Plan your rollout <FiArrowRight />
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
              <p className="mt-3 text-sm text-slate-700 dark:text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            {...cardMotion}
            className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-[#101a2c]/80"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Integrations your team already uses
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
              Connect to your CRM, calendars, and messaging stack with minimal setup.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {integrations.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-slate-200/80 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...cardMotion}
            className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-[#101a2c]/80"
          >
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-white">
              <FiClock className="text-brand-amber" />
              Always-on coverage
            </div>
            <p className="mt-3 text-sm text-slate-700 dark:text-white/70">
              The AI Sales Agent never misses a lead, follows up instantly, and hands qualified
              prospects to your team with full context.
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-700 dark:text-white/70">
              {[
                "Auto-qualify inbound and outbound leads",
                "Personalized responses based on intent",
                "Meeting booking with rep availability",
                "Performance reporting and weekly insights",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiUserCheck className="text-brand-amber" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
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
                Ready to deploy?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Launch your AI Sales Agent in weeks.
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                We handle strategy, setup, and training so your team can focus on closing.
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

export default AiSalesAgent;
