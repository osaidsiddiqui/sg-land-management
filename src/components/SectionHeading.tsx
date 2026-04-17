export function SectionHeading({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2 className={`rule-h font-rye text-2xl md:text-3xl uppercase tracking-[0.2em] ${dark ? "text-cream" : "text-ink"}`}>
      <span>{children}</span>
    </h2>
  );
}
