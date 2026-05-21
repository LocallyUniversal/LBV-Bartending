import { ReadyToBook } from '@/components/ready-to-book';
import { SiteHeader } from '@/components/site-header';
import { Citrus, GlassWater, Martini, Package, Sparkles } from 'lucide-react';

const providedItems = [
  {
    title: 'Ice Chest',
    description: 'A clean event-ready cooler setup for keeping service items chilled.',
    Icon: Package,
  },
  {
    title: 'Mixers',
    description: 'Classic mixer options prepared for your selected bar package.',
    Icon: Citrus,
  },
  {
    title: 'Bar Tools',
    description: 'Essential tools for shaking, stirring, pouring, and serving.',
    Icon: Martini,
  },
  {
    title: 'Service Setup',
    description: 'A polished station layout that keeps the bar area organized.',
    Icon: Sparkles,
  },
] as const;

export default function OnUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b0b] text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4af37]">
              Provided By LBV
            </p>
            <h1 className="mt-4 text-4xl font-bold uppercase tracking-[0.16em] text-white md:text-5xl">
              On Us
            </h1>
            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-px max-w-sm bg-gradient-to-r from-transparent via-[#c6a15b] to-transparent"
            />
            <p className="mx-auto mt-5 max-w-2xl text-xl text-white/60">
              The essentials we bring to help your event bar feel smooth,
              stocked, and ready.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {providedItems.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-[#ff1493]/10 via-transparent to-[#c6a15b]/10"
                  />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#c6a15b]/35 bg-black text-[#d4af37] shadow-[0_0_30px_rgba(198,161,91,0.18)]">
                      <Icon
                        aria-hidden="true"
                        focusable="false"
                        className="h-9 w-9"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{title}</h2>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#c6a15b]/25 bg-[#161616] p-6 text-center">
              <GlassWater
                aria-hidden="true"
                focusable="false"
                className="mx-auto h-8 w-8 text-[#d4af37]"
              />
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55">
                Final included items can vary by event size, location, and
                package. LBV will confirm the exact setup before your date.
              </p>
            </div>
          </div>
        </section>

        <ReadyToBook />
      </main>
    </div>
  );
}
