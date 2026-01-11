import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import Seo from "../components/Seo";
import seoData from "../data/seoData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const sections = [
  {
    title: "Agreement to terms",
    body: [
      "By accessing or using Dott-Media services, you agree to these Terms and Conditions. If you do not agree, please do not use our services.",
    ],
  },
  {
    title: "Services",
    body: [
      "Dott-Media provides AI-powered digital solutions including strategy, branding, marketing, automation, and development. Specific deliverables and timelines are defined in a statement of work or proposal.",
    ],
  },
  {
    title: "Client responsibilities",
    body: [
      "You agree to provide timely access to information, feedback, and approvals required to complete work. Delays in feedback may impact timelines.",
    ],
  },
  {
    title: "Fees and payment",
    body: [
      "Fees, payment schedules, and additional costs are outlined in your agreement. Late payments may pause work until balances are resolved.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Upon full payment, you own the final deliverables specified in your agreement. Dott-Media retains ownership of pre-existing materials, frameworks, and tools.",
    ],
  },
  {
    title: "Confidentiality",
    body: [
      "Both parties agree to keep confidential information private and to use it only for the purpose of delivering the services.",
    ],
  },
  {
    title: "AI and third-party tools",
    body: [
      "We use AI and third-party platforms to accelerate delivery. We maintain human review and apply safeguards to protect sensitive information.",
    ],
  },
  {
    title: "Warranty disclaimer",
    body: [
      "Services are provided on an \"as is\" and \"as available\" basis. Dott-Media does not warrant that services will be error-free or uninterrupted.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, Dott-Media is not liable for indirect, incidental, or consequential damages arising from the use of our services.",
    ],
  },
  {
    title: "Termination",
    body: [
      "Either party may terminate services with written notice as described in the agreement. Fees for work completed remain due.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These terms are governed by the laws of the State of California, without regard to conflict of law principles.",
    ],
  },
  {
    title: "Contact",
    body: ["Questions about these terms? Reach us at info@dott-media.org."],
  },
];

const Terms = () => {
  return (
    <>
      <Seo {...seoData.terms} />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <span className={badgeStyle}>Terms and Conditions</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Terms that keep partnerships clear and productive
            </h1>
            <p className="text-lg text-slate-700 dark:text-white/70">
              Last updated: September 1, 2025
            </p>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              These terms describe how we work together. For specific engagements, your proposal or
              statement of work will provide detailed deliverables.
            </p>
          </div>
          <motion.div
            {...cardMotion}
            className={`${surfaceClass} space-y-4 px-6 py-6`}
          >
            <div className="flex items-center gap-3 text-brand-amber">
              <FiFileText />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-white/70">
                Summary
              </p>
            </div>
            <p className="text-sm text-slate-700 dark:text-white/70">
              We align scope in writing, keep communication transparent, and use AI responsibly with
              human oversight throughout delivery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Talk to us <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-4xl space-y-10 px-5 md:px-8">
          {sections.map((section) => (
            <motion.div key={section.title} {...cardMotion} className={surfaceClass}>
              <div className="space-y-3 px-6 py-5">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                {section.body?.map((paragraph) => (
                  <p key={paragraph} className="text-sm text-slate-700 dark:text-white/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Terms;
