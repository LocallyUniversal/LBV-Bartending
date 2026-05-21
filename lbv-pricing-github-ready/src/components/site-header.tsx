export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#0b0b0b]">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
            LBV
          </div>
          <p className="max-w-[220px] text-xs font-semibold uppercase tracking-[0.14em] text-white/60 sm:max-w-none">
            If We&apos;re There; It&apos;s an Event.
          </p>
        </div>
        <nav aria-label="Primary navigation">
          <a
            href="#"
            className="text-sm uppercase tracking-[0.14em] text-white/70 transition hover:text-white"
          >
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
}
