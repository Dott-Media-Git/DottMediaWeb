export const badgeStyle =
  "inline-flex items-center gap-2 rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-slate-700 dark:border-white/15 dark:text-white/80";

export const surfaceClass =
  "rounded-2xl border border-slate-200/80 bg-white/90 text-slate-900 shadow-lg dark:border-white/10 dark:bg-[#0f1624]/80 dark:text-white";

export const cardMotion = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};
