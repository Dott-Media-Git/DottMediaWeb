import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiTarget } from "react-icons/fi";
import Seo from "../components/Seo";
import { BASE_URL, OG_IMAGE, OG_IMAGE_ALT } from "../data/seoData";
import { industries } from "../data/landingPages";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className={`${surfaceClass} space-y-4 px-6 py-6`}>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
            Industry not found
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
            We could not find that industry.
          </h1>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
          >
            View all industries <FiArrowRight />
          </Link>
        </div>
      </section>
    );
  }

  const canonical = `${BASE_URL}/industries/${industry.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${industry.name} AI Growth Systems`,
    description: industry.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Dott-Media",
      url: BASE_URL,
    },
    areaServed: "Worldwide",
    serviceType: industry.serviceFocus,
    audience: {
      "@type": "Audience",
      audienceType: industry.name,
    },
    url: canonical,
    image: OG_IMAGE,
  };

  return (
    <>
      <Seo
        title={`${industry.name} | Dott-Media`}
        description={industry.seoDescription}
        canonical={canonical}
        image={OG_IMAGE}
        imageAlt={OG_IMAGE_ALT}
        type="website"
        keywords={industry.keywords}
        jsonLd={jsonLd}
        jsonLdId={`seo-industry-${industry.slug}`}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className={badgeStyle}>Industry</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              {industry.headline}
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              {industry.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {industry.serviceFocus.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-slate-200/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 dark:border-white/10 dark:text-white/70"
                >
                  {service}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="ai-pulse inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-brand-dark shadow-glow transition hover:-translate-y-[1px] hover:shadow-brand-amber/40"
              >
                Book an industry plan <FiArrowRight />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/15 dark:text-white/90"
              >
                View all industries
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
                <FiTarget className="text-brand-amber" />
                {industry.name}
              </div>
              <p className="text-sm text-slate-700 dark:text-white/70">
                Purpose-built automation for {industry.name.toLowerCase()} with AI Sales Agent
                solutions, automated social media marketing, and CRM workflows.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {industry.outcomes.map((outcome) => (
                  <div key={outcome} className={`${surfaceClass} px-4 py-3 text-sm`}>
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-section-surface bg-white py-16 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 space-y-3">
            <span className={badgeStyle}>Challenges</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Common challenges we solve
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {industry.challenges.map((item) => (
              <motion.div
                key={item}
                {...cardMotion}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <p className="text-sm text-slate-700 dark:text-white/70">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <span className={badgeStyle}>Locations</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Global coverage, local execution.
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              We serve teams in Kampala, Dubai, New York, England, Europe, and Johannesburg.
            </p>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Explore locations <FiArrowRight />
            </Link>
          </div>
          <div className="grid gap-3">
            {industry.serviceFocus.map((service) => (
              <div key={service} className={`${surfaceClass} px-5 py-4`}>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryDetail;
