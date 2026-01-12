import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClipboard,
  FiShield,
} from "react-icons/fi";
import Seo from "../components/Seo";
import seoData from "../data/seoData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const generalChecklist = [
  "Admin access to each social account and Page",
  "Two-factor authentication enabled on admin accounts",
  "Business profile details and brand assets ready",
  "Privacy Policy and Terms links on your website",
  "A primary contact email for platform verification",
];

const handoffItems = [
  "Confirm which Pages and profiles to connect",
  "Share the best contact email for platform approvals",
  "Approve OAuth connection prompts when requested",
  "Provide any business verification documents if asked",
];

const platformRequirements = [
  {
    name: "Instagram + Facebook (Meta)",
    summary:
      "Meta connections power publishing, comments, insights, and messaging from one business hub.",
    requirements: [
      "Facebook Page with admin access",
      "Instagram Professional account linked to that Page",
      "Meta Business Suite or Business Manager access",
      "Permissions for publishing, engagement, and insights",
    ],
    steps: [
      "Switch Instagram to a Business or Creator account.",
      "Connect Instagram to your Facebook Page in Meta Accounts Center.",
      "Create or claim a Meta Business Manager and add your Page.",
      "Add Dott-Media as a partner or admin, then approve permissions.",
    ],
  },
  {
    name: "LinkedIn",
    summary:
      "LinkedIn requires Page admin access plus OAuth approval for posting and reporting.",
    requirements: [
      "LinkedIn Page admin role",
      "Company Page URL and organization ID",
      "OAuth approval for publishing and analytics access",
      "LinkedIn developer access if advanced posting is required",
    ],
    steps: [
      "Confirm you are an admin of the LinkedIn Page.",
      "Approve the Dott-Media connection when prompted.",
      "If required, request LinkedIn API access and add redirect URLs.",
      "Grant publishing and analytics permissions.",
    ],
  },
  {
    name: "Threads (via Meta)",
    summary:
      "Threads connects through your Instagram Professional account and Meta Business setup.",
    requirements: [
      "Instagram Professional account with Threads enabled",
      "Meta Business Manager access",
      "Permissions for publishing and engagement",
    ],
    steps: [
      "Enable Threads on your Instagram Professional account.",
      "Confirm the Instagram account is linked to Meta Business Manager.",
      "Approve the Threads publishing permissions when prompted.",
      "Test a draft post to validate access.",
    ],
  },
];

const SocialRequirements = () => {
  return (
    <>
      <Seo {...seoData.socialRequirements} />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className={badgeStyle}>Social Requirements</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Connect your socials to the AI Sales Agent.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              Use this checklist to prepare your social accounts for publishing, insights, and
              messaging. Requirements can vary slightly by platform, but these are the standard
              steps the Sales Agent app uses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/ai-sales-agent"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/15 dark:text-white/90"
              >
                Back to AI Sales Agent <FiArrowRight />
              </Link>
              <Link
                to="/contact"
                className="ai-pulse inline-flex items-center gap-2 rounded-full bg-brand-amber px-5 py-2 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
              >
                Get help connecting <FiArrowRight />
              </Link>
            </div>
          </div>

          <motion.div {...cardMotion} className={`${surfaceClass} space-y-4 px-6 py-6`}>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <FiClipboard className="text-brand-amber" />
              Quick prep checklist
            </div>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-white/70">
              {generalChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FiCheckCircle className="mt-0.5 text-brand-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>Platform requirements</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              What each platform expects before connecting.
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              Make sure these items are ready so we can connect, publish, and report without
              delays.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {platformRequirements.map((platform) => (
              <motion.div
                key={platform.name}
                {...cardMotion}
                className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {platform.name}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                  {platform.summary}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                    Requirements
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-white/70">
                    {platform.requirements.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FiCheckCircle className="mt-0.5 text-brand-amber" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
                    How to get it
                  </p>
                  <ol className="space-y-2 text-sm text-slate-700 dark:text-white/70">
                    {platform.steps.map((step, index) => (
                      <li key={step} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-amber/20 text-xs font-semibold text-brand-amber">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <span className={badgeStyle}>Handoff checklist</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              What to send the Dott-Media team.
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              Share the items below and we will guide the rest of the connection process.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Share your accounts <FiArrowRight />
            </Link>
          </div>

          <motion.div {...cardMotion} className={`${surfaceClass} space-y-4 px-6 py-6`}>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <FiShield className="text-brand-amber" />
              Secure connection steps
            </div>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-white/70">
              {handoffItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FiCheckCircle className="mt-0.5 text-brand-amber" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SocialRequirements;
