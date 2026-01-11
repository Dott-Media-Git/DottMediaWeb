import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiClock,
  FiMessageSquare,
  FiPlay,
  FiPlayCircle,
  FiStar,
  FiUserCheck,
} from "react-icons/fi";
import Seo from "../components/Seo";
import seoData from "../data/seoData";
import { industries, locations } from "../data/landingPages";
import { projects, services, stats, testimonials } from "../data/siteData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const salesAgentHighlights = [
  {
    title: "Instant lead response",
    description: "Engage inbound leads in under 60 seconds.",
    icon: FiMessageSquare,
  },
  {
    title: "Auto-qualification",
    description: "Scores intent and routes to the right rep.",
    icon: FiUserCheck,
  },
  {
    title: "Always-on booking",
    description: "Schedules meetings and sends confirmations.",
    icon: FiClock,
  },
];

const Home = () => {
  return (
    <>
      <Seo {...seoData.home} />
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-24">
        <motion.div {...cardMotion} className="flex-1 space-y-6">
          <span className={badgeStyle}>AI-First Agency</span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-brand-amber">AI-Powered</span> Digital Solutions for modern brands
          </h1>
          <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
            Dott-Media blends human strategy with AI execution to launch, optimize, and scale digital
            experiences. We craft the narrative, automate the ops, and deliver measurable momentum.
          </p>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-white/60">
            Core capabilities include AI Sales Agent solutions, digital showroom development,
            automated social media marketing, AI chatbot integration, and AI-powered CRM for
            businesses.
          </p>
          <p className="max-w-2xl text-sm text-slate-600 dark:text-white/60">
            Serving AI-focused startups, SMEs, agencies, automotive dealers, fintech platforms, and
            enterprise teams across Kampala, Dubai, New York, England, and Johannesburg.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
            >
              Get Started <FiArrowRight />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/15 dark:text-white/90"
            >
              View Work <FiPlay />
            </Link>
          </div>

          <div className="divider" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className={`${surfaceClass} glass px-4 py-3 shadow-md`}>
                <p className="text-sm text-slate-600 dark:text-white/60">{item.label}</p>
                <p className="text-2xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...cardMotion}
          className="relative flex-1 rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-brand-navy/15 via-white to-brand-amber/20 p-8 shadow-2xl dark:border-white/10 dark:from-brand-navy/50 dark:via-[#0b1018]/60 dark:to-brand-amber/10"
        >
          <div className="absolute inset-0 bg-hero-grid opacity-80 blur-[1px] dark:opacity-80" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                Media + Tech
              </p>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-navy shadow-sm dark:bg-white/10 dark:text-brand-amber">
                24/7
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              AI Performance Command Center
            </h2>
            <p className="text-slate-700 dark:text-white/70">
              Live AI insights, automation, and guardrails that keep your brand ahead. Built for teams
              that move fast.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {["AI observability", "Campaign health", "Pipeline velocity", "Automation flows"].map(
                (line) => (
                  <div
                    key={line}
                    className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-amber" />
                    {line}
                  </div>
                )
              )}
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-sm font-semibold text-slate-900 dark:text-white">
              {["94% Engagement", "+38% CTR Lift", "99.9% Uptime"].map((stat) => (
                <div
                  key={stat}
                  className="rounded-xl border border-slate-200/80 bg-white px-3 py-4 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-lg font-semibold">{stat.split(" ")[0]}</p>
                  <p className="text-xs text-slate-600 dark:text-white/60">
                    {stat.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className={badgeStyle}>Services</span>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
                Digital solutions built to move the needle
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                Strategy, creative, and engineering under one roof. We build the stack that fuels
                growth and keeps your brand sharp.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Explore all services <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  {...cardMotion}
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
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-navy transition group-hover:text-brand-amber dark:text-white/80">
                    Learn more <FiArrowRight />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <span className={badgeStyle}>Product</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              AI Sales Agent that keeps your pipeline moving.
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              Meet the AI Sales Agent built to qualify, follow up, and book meetings while your
              team stays focused on closing. It works across chat, email, and web intake with
              brand-safe responses.
            </p>
            <div className="flex flex-wrap gap-3">
              {["24/7 coverage", "CRM synced", "Human handoff"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:text-white/70"
                >
                  {pill}
                </span>
              ))}
            </div>
            <Link
              to="/ai-sales-agent"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Explore AI Sales Agent <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-4">
            {salesAgentHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...cardMotion}
                  className={`${surfaceClass} flex items-start gap-3 px-5 py-4`}
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-amber/20 text-lg text-brand-amber">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-700 dark:text-white/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div {...cardMotion} className={`${surfaceClass} space-y-4 px-6 py-6`}>
            <span className={badgeStyle}>Locations</span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              We deliver across key global hubs.
            </h2>
            <p className="text-sm text-slate-700 dark:text-white/70">
              Localized AI Sales Agent solutions, automated social media marketing, and digital
              showroom development.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  to={`/locations/${location.slug}`}
                  className="rounded-xl border border-slate-200/80 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-[#0f1624]/80 dark:text-white/80"
                >
                  {location.name}
                </Link>
              ))}
            </div>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Explore all locations <FiArrowRight />
            </Link>
          </motion.div>

          <motion.div {...cardMotion} className={`${surfaceClass} space-y-4 px-6 py-6`}>
            <span className={badgeStyle}>Industries</span>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Built for teams that need AI momentum.
            </h2>
            <p className="text-sm text-slate-700 dark:text-white/70">
              From AI startups to enterprise automation, we tailor workflows to your sales cycle.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="rounded-xl border border-slate-200/80 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/10 dark:bg-[#0f1624]/80 dark:text-white/80"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Explore all industries <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <span className={badgeStyle}>Showreel</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              See Dott-Media in motion.
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              A quick look at how we blend creative, AI, and growth engineering to deliver
              measurable outcomes for modern teams.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-white/70">
              <FiPlayCircle className="text-brand-amber" />
              60-second studio reel.
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Schedule a walkthrough <FiArrowRight />
            </Link>
          </div>

          <motion.div
            {...cardMotion}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-[#101a2c]/80"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.12),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(245,158,11,0.18),transparent_35%)] opacity-90" />
            <video
              className="relative z-10 w-full rounded-2xl"
              src="/media/dott-media-reel.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className={badgeStyle}>Portfolio</span>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Recent wins we are proud of
            </h2>
            <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
              A snapshot of AI-enhanced launches, rebrands, and automations built for ambitious teams.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
          >
            See the full portfolio <FiArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, idx) => (
            <motion.div
              key={project.title}
              {...cardMotion}
              transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl dark:border-white/10 dark:bg-[#101a2c]/80"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] dark:opacity-0"
                />
                <img
                  src={project.imageDark || project.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] dark:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-white/20 dark:from-[#0b1018]/60 dark:via-transparent dark:to-[#0b1018]/20" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_80%_40%,rgba(124,58,237,0.2),transparent_35%)] opacity-70" />
              </div>
              <div className="relative space-y-2 px-6 pb-6 pt-4">
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
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>Client Love</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Trusted by growth leaders
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div
                key={item.name}
                {...cardMotion}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <div className="flex items-center gap-2 text-brand-amber">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FiStar key={`${item.name}-${idx}`} />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-700 dark:text-white/70">"{item.quote}"</p>
                <div className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </div>
                <div className="text-xs text-slate-600 dark:text-white/60">
                  {item.role}, {item.company}
                </div>
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
                Ready to build?
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                Let&apos;s design the next chapter of your brand.
              </h2>
              <p className="mt-2 max-w-2xl text-slate-700 dark:text-white/70">
                Tell us where you want to go, and we will craft the AI-enabled roadmap to get you
                there.
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

export default Home;
