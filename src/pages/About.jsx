import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCompass, FiUsers } from "react-icons/fi";
import { stats, team, values } from "../data/siteData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const principles = [
  {
    title: "Human + AI, always",
    description: "We keep strategy and creativity human-led, then scale execution with AI.",
  },
  {
    title: "Focus on momentum",
    description: "Small wins compound. We ship weekly and adapt fast.",
  },
  {
    title: "Visibility over guesswork",
    description: "Dashboards and reporting keep everyone aligned on outcomes.",
  },
];

const milestones = [
  {
    year: "2019",
    detail: "Dott-Media launches as a strategy and creative studio.",
  },
  {
    year: "2021",
    detail: "Automation and AI capabilities added across growth programs.",
  },
  {
    year: "2023",
    detail: "Expanded delivery pods for global startups and enterprise teams.",
  },
  {
    year: "2025",
    detail: "Launched AI-driven performance command centers for clients.",
  },
];

const About = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className={badgeStyle}>About</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Built for teams that expect momentum.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              Dott-Media is an AI-powered digital solutions studio. We blend strategy, design, and
              engineering to unlock growth and keep your brand ahead of the curve.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Distributed team", "Remote-first", "Global delivery"].map((pill) => (
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Meet the team <FiArrowRight />
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
                Mission
              </p>
              <p className="mt-2 text-xl font-semibold">
                Elevate digital experiences with precision, creativity, and measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>Values</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              The principles that guide every engagement
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <motion.div
                key={value.label}
                {...cardMotion}
                className={`${surfaceClass} px-6 py-5`}
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{value.label}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{value.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={badgeStyle}>Team</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              A cross-functional squad of strategists and makers
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-white/60">
            <FiUsers /> Remote-first leadership
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <motion.div
              key={member.name}
              {...cardMotion}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-sm dark:border-white/10 dark:bg-[#0f1624]/80"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-navy to-brand-amber text-lg font-semibold text-white">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{member.name}</p>
                <p className="text-sm text-slate-700 dark:text-white/70">{member.role}</p>
                <p className="text-xs text-slate-500 dark:text-white/50">{member.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>How we work</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Built on clarity, collaboration, and continuous improvement
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <motion.div
                key={item.title}
                {...cardMotion}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <FiCompass className="text-2xl text-brand-amber" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10 space-y-3">
          <span className={badgeStyle}>Timeline</span>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Growth moments that shaped Dott-Media
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {milestones.map((milestone) => (
            <motion.div
              key={milestone.year}
              {...cardMotion}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-amber">
                {milestone.year}
              </p>
              <p className="mt-3 text-sm text-slate-700 dark:text-white/70">{milestone.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <motion.div
          {...cardMotion}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-10 shadow-2xl dark:border-white/10 dark:bg-[#101a2c]/80"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.15),transparent_35%),radial-gradient(circle_at_80%_50%,rgba(76,29,149,0.2),transparent_30%)] opacity-80" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                Ready to meet?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Let&apos;s build your next growth chapter.
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                We would love to hear what you are planning and how we can help.
              </p>
            </div>
            <Link
              to="/contact"
              className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
            >
              Start a conversation <FiArrowRight />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
