import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Seo from "../components/Seo";
import seoData from "../data/seoData";
import { faqItems } from "../data/siteData";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("required");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus("missing-config");
      return;
    }

    setFormStatus("sending");
    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setFormStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error", error);
      setFormStatus("error");
    }
  };

  return (
    <>
      <Seo {...seoData.contact} jsonLd={faqSchema} jsonLdId="seo-faq-contact" />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <span className={badgeStyle}>Contact</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              Let&apos;s build what is next.
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              Share a few details and we will respond within one business day. Our AI-enabled team
              keeps your project moving fast.
            </p>

            <div className={`${surfaceClass} space-y-3 px-5 py-4`}>
              <div className="flex items-center gap-3 text-slate-800 dark:text-white/80">
                <FiMail /> info@dott-media.org
              </div>
              <div className="flex items-center gap-3 text-slate-800 dark:text-white/80">
                <FiPhone /> +256 775 067 216 (WhatsApp)
              </div>
              <div className="flex items-center gap-3 text-slate-800 dark:text-white/80">
                <FiMapPin /> Serving Kampala, Dubai, New York, England, and Johannesburg
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-brand-navy/10 to-brand-amber/20 p-5 text-slate-900 shadow-sm dark:border-white/10 dark:from-brand-navy/40 dark:to-brand-amber/20 dark:text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-700 dark:text-white/70">
                  Response time
                </p>
                <p className="mt-2 text-xl font-semibold">Within 24 hours</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                  We reply quickly and keep delivery transparent.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f1624]/80">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                  <FiClock className="text-brand-amber" /> Office hours
                </div>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">
                  Mon - Fri, 9:00 AM - 6:00 PM EAT / GST
                </p>
                <p className="mt-2 text-xs text-slate-500 dark:text-white/50">
                  Remote-first team with global coverage.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            {...cardMotion}
            className="w-full rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-white/5"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-amber/60 dark:border-white/10 dark:bg-[#0f1624] dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-amber/60 dark:border-white/10 dark:bg-[#0f1624] dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 dark:text-white">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project, goals, and timeline."
                  className="mt-2 w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-brand-amber/60 dark:border-white/10 dark:bg-[#0f1624] dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="ai-pulse inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
              >
                {formStatus === "sending" ? "Sending..." : "Send message"} <FiArrowRight />
              </button>

              {formStatus === "missing-config" && (
                <p className="text-sm text-brand-amber">
                  Add EmailJS keys to .env: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID,
                  VITE_EMAILJS_PUBLIC_KEY.
                </p>
              )}
              {formStatus === "required" && (
                <p className="text-sm text-brand-amber">Please complete all fields.</p>
              )}
              {formStatus === "sent" && (
                <p className="text-sm text-emerald-500">Message sent. We will be in touch soon.</p>
              )}
              {formStatus === "error" && (
                <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>FAQ</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Quick answers before we connect
            </h2>
          </div>
          <div className="grid gap-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-[1px] dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <summary className="cursor-pointer text-sm font-semibold text-slate-900 dark:text-white">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm text-slate-700 dark:text-white/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
