const BASE_URL = "https://dott-media.org";
const OG_IMAGE = `${BASE_URL}/og-image.svg`;
const OG_IMAGE_ALT = "Dott-Media AI-Powered Digital Solutions";
const DEFAULT_TITLE = "Dott-Media | AI-Powered Digital Agency";
const DEFAULT_DESCRIPTION =
  "Dott-Media is an AI-powered digital agency delivering branding, marketing, automation, web development, and the AI Sales Agent for growth-focused teams.";
const DEFAULT_KEYWORDS =
  "Dott-Media, AI digital agency, AI sales agent, digital marketing, branding, automation, web development, lead generation";

const seoData = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonical: `${BASE_URL}/`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "website",
    keywords: DEFAULT_KEYWORDS,
  },
  services: {
    title: "Services | Dott-Media",
    description:
      "Explore Dott-Media services including AI Sales Agent, digital marketing, branding, AI automation, web development, and data insights.",
    canonical: `${BASE_URL}/services`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "website",
    keywords: DEFAULT_KEYWORDS,
  },
  aiSalesAgent: {
    title: "AI Sales Agent | Dott-Media",
    description:
      "Always-on AI Sales Agent that qualifies leads, schedules meetings, powers social campaigns, auto-replies, and lead generation.",
    canonical: `${BASE_URL}/ai-sales-agent`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "product",
    keywords: DEFAULT_KEYWORDS,
  },
  portfolio: {
    title: "Portfolio | Dott-Media",
    description:
      "Case studies from Dott-Media featuring AI-enhanced launches, brand refreshes, automation, and growth wins.",
    canonical: `${BASE_URL}/portfolio`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "website",
    keywords: DEFAULT_KEYWORDS,
  },
  about: {
    title: "About Dott-Media | AI-Powered Digital Agency",
    description:
      "Meet the Dott-Media team and learn our AI-first approach to strategy, design, and engineering.",
    canonical: `${BASE_URL}/about`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "website",
    keywords: DEFAULT_KEYWORDS,
  },
  contact: {
    title: "Contact Dott-Media | Start a Project",
    description:
      "Contact Dott-Media to discuss AI-powered digital marketing, branding, automation, and AI Sales Agent services.",
    canonical: `${BASE_URL}/contact`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "website",
    keywords: DEFAULT_KEYWORDS,
  },
  privacy: {
    title: "Privacy Policy | Dott-Media",
    description: "Privacy policy for Dott-Media and its digital services.",
    canonical: `${BASE_URL}/privacy-policy`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "website",
    keywords: DEFAULT_KEYWORDS,
  },
  terms: {
    title: "Terms & Conditions | Dott-Media",
    description: "Terms and conditions for Dott-Media services.",
    canonical: `${BASE_URL}/terms`,
    image: OG_IMAGE,
    imageAlt: OG_IMAGE_ALT,
    type: "website",
    keywords: DEFAULT_KEYWORDS,
  },
};

export {
  BASE_URL,
  OG_IMAGE,
  OG_IMAGE_ALT,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
};

export default seoData;
