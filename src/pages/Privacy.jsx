import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiShield } from "react-icons/fi";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const sections = [
  {
    title: "Overview",
    body: [
      "Dott-Media is an AI-powered digital solutions company. This Privacy Policy explains how we collect, use, and protect information when you engage with our website, services, and communications.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "We collect information you provide directly and data gathered automatically when you use our site.",
    ],
    list: [
      "Contact details such as name, email, phone, and company.",
      "Project details you share with us in forms, calls, or emails.",
      "Website usage data such as IP address, device, browser, and pages visited.",
      "Cookies and similar technologies used for analytics and performance.",
    ],
  },
  {
    title: "How we use information",
    body: [
      "We use information to deliver our services, improve performance, and communicate with you.",
    ],
    list: [
      "Respond to inquiries and manage client relationships.",
      "Deliver strategy, creative, automation, and development work.",
      "Analyze performance and optimize campaigns.",
      "Maintain security, compliance, and operational integrity.",
    ],
  },
  {
    title: "AI and automation",
    body: [
      "We use AI tools to support research, content generation, and process automation. We do not use client confidential data to train public AI models. When AI is used, we apply human review and governance.",
    ],
  },
  {
    title: "Sharing and disclosure",
    body: [
      "We may share information with trusted service providers to operate our business. We do not sell your personal information.",
    ],
    list: [
      "Hosting, analytics, and communication tools.",
      "Professional advisors when required for legal or financial purposes.",
      "Authorities if required by law or to protect rights and safety.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "We retain information only as long as necessary to provide services, meet legal obligations, and resolve disputes.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "Depending on your location, you may request access, correction, deletion, or restriction of your personal data.",
    ],
    list: [
      "Access the information we hold about you.",
      "Request corrections or updates.",
      "Request deletion where legally permissible.",
      "Opt out of marketing communications.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use industry-standard safeguards to protect your data. No method of transmission is completely secure, but we continuously improve our controls.",
    ],
  },
  {
    title: "International transfers",
    body: [
      "Dott-Media operates globally. Your data may be processed in countries with different data protection laws. We apply safeguards to protect your information.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "Our services are not directed to children under 13, and we do not knowingly collect personal data from them.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions or requests? Email us at hello@dott-media.com and we will respond promptly.",
    ],
  },
];

const Privacy = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <span className={badgeStyle}>Privacy Policy</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Privacy and data protection at Dott-Media
            </h1>
            <p className="text-lg text-slate-700 dark:text-white/70">
              Last updated: September 1, 2025
            </p>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              We respect your data and are committed to transparency. This policy outlines how we
              handle information across our AI-powered digital services.
            </p>
          </div>
          <motion.div
            {...cardMotion}
            className={`${surfaceClass} space-y-4 px-6 py-6`}
          >
            <div className="flex items-center gap-3 text-brand-amber">
              <FiShield />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 dark:text-white/70">
                Our promise
              </p>
            </div>
            <p className="text-sm text-slate-700 dark:text-white/70">
              We collect only what we need, keep it secure, and never sell personal data. We use AI
              responsibly with human oversight.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Ask a question <FiArrowRight />
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
                {section.list && (
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-white/70">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-amber" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Privacy;
