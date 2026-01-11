import { useEffect } from "react";

const upsertMeta = (attr, key, content) => {
  if (!content) {
    return;
  }

  let element = document.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  if (!href) {
    return;
  }

  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

const upsertJsonLd = (id, data) => {
  if (!id || !data) {
    return null;
  }

  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(data);
  return script;
};

const removeJsonLd = (id) => {
  if (!id) {
    return;
  }

  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
};

const Seo = ({
  title,
  description,
  canonical,
  image,
  imageAlt,
  type = "website",
  keywords,
  jsonLd,
  jsonLdId,
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta("property", "og:title", title);
      upsertMeta("name", "twitter:title", title);
    }

    if (description) {
      upsertMeta("name", "description", description);
      upsertMeta("property", "og:description", description);
      upsertMeta("name", "twitter:description", description);
    }

    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    upsertMeta("name", "robots", "index, follow");
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", "Dott-Media");
    upsertMeta("property", "og:locale", "en_US");
    upsertMeta("name", "twitter:card", "summary_large_image");

    if (canonical) {
      upsertLink("canonical", canonical);
      upsertMeta("property", "og:url", canonical);
    }

    if (image) {
      upsertMeta("property", "og:image", image);
      upsertMeta("name", "twitter:image", image);
    }

    if (imageAlt) {
      upsertMeta("property", "og:image:alt", imageAlt);
      upsertMeta("name", "twitter:image:alt", imageAlt);
    }

    if (jsonLd && jsonLdId) {
      upsertJsonLd(jsonLdId, jsonLd);
    }

    return () => removeJsonLd(jsonLdId);
  }, [title, description, canonical, image, imageAlt, type, keywords, jsonLd, jsonLdId]);

  return null;
};

export default Seo;
