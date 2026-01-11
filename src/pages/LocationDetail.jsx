import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import Seo from "../components/Seo";
import { BASE_URL, OG_IMAGE, OG_IMAGE_ALT } from "../data/seoData";
import { locations } from "../data/landingPages";
import { badgeStyle, cardMotion, surfaceClass } from "../utils/ui";

const LocationDetail = () => {
  const { slug } = useParams();
  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className={`${surfaceClass} space-y-4 px-6 py-6`}>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-600 dark:text-white/60">
            Location not found
          </p>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
            We could not find that location.
          </h1>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
          >
            View all locations <FiArrowRight />
          </Link>
        </div>
      </section>
    );
  }

  const canonical = `${BASE_URL}/locations/${location.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${location.name} AI Sales and Automation`,
    description: location.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Dott-Media",
      url: BASE_URL,
    },
    areaServed: location.name,
    serviceType: location.serviceFocus,
    audience: {
      "@type": "Audience",
      audienceType: location.audiences.join(", "),
    },
    url: canonical,
    image: OG_IMAGE,
  };

  return (
    <>
      <Seo
        title={`${location.name} | Dott-Media`}
        description={location.seoDescription}
        canonical={canonical}
        image={OG_IMAGE}
        imageAlt={OG_IMAGE_ALT}
        type="website"
        keywords={location.keywords}
        jsonLd={jsonLd}
        jsonLdId={`seo-location-${location.slug}`}
      />
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className={badgeStyle}>Location</span>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl">
              {location.headline}
            </h1>
            <p className="max-w-2xl text-lg text-slate-700 dark:text-white/70">
              {location.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              {location.serviceFocus.map((service) => (
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
                Book a market plan <FiArrowRight />
              </Link>
              <Link
                to="/locations"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-amber/60 hover:text-brand-amber dark:border-white/15 dark:text-white/90"
              >
                View all locations
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
                <FiMapPin className="text-brand-amber" />
                {location.name}
              </div>
              <p className="text-sm text-slate-700 dark:text-white/70">
                Serving teams across {location.name} with AI Sales Agent solutions, automated
                social media marketing, and digital showroom development.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {location.audiences.map((audience) => (
                  <div key={audience} className={`${surfaceClass} px-4 py-3 text-sm`}>
                    {audience}
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
            <span className={badgeStyle}>Why Dott-Media</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              What we deliver in {location.name}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {location.highlights.map((item) => (
              <motion.div
                key={item.title}
                {...cardMotion}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-white/70">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <span className={badgeStyle}>Industries</span>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Teams we serve in {location.name}
            </h2>
            <p className="max-w-2xl text-slate-700 dark:text-white/70">
              We partner with fast-moving teams that need AI automation, sales acceleration, and a
              consistent digital presence.
            </p>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition hover:text-brand-amber dark:text-brand-amber"
            >
              Explore all industries <FiArrowRight />
            </Link>
          </div>
          <div className="grid gap-3">
            {location.audiences.map((audience) => (
              <div key={audience} className={`${surfaceClass} px-5 py-4`}>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationDetail;
