import { SiteHeader } from '@/components/site-header';
import { ReadyToBook } from '@/components/ready-to-book';
import {
  Citrus,
  Droplets,
  GlassWater,
  Martini,
  Star,
  type LucideIcon,
} from 'lucide-react';

const pricingItems = [
  {
    id: 'base-rate',
    title: 'Base Rate',
    price: '$50',
    unit: '/ hour',
    description: '4 hour minimum',
    Icon: Martini,
  },
  {
    id: 'per-guest',
    title: 'Per Guest',
    price: '$1.75',
    unit: 'per guest hourly',
    description: 'Standard service rate',
    Icon: GlassWater,
  },
] as const;

const addOns = [
  {
    id: 'mixers-package',
    title: 'Mixers Package',
    price: '$5',
    unit: 'per guest hourly',
    description: 'Includes mixers for your event',
    Icon: Citrus,
  },
  {
    id: 'infused-water-station',
    title: 'Infused Water Station',
    price: '$30',
    unit: 'flat rate',
    description: 'Refreshing infused water setup',
    Icon: Droplets,
  },
] as const;

const reviews = [
  {
    id: 'sarah-wedding',
    name: 'Sarah M.',
    event: 'Wedding Reception',
    text: 'LBV made our wedding reception amazing! The drinks were perfect and the service was top-notch.',
    rating: 5,
  },
  {
    id: 'james-corporate',
    name: 'James T.',
    event: 'Corporate Event',
    text: 'Professional, punctual, and great cocktails. Will definitely book again for our next company event.',
    rating: 5,
  },
  {
    id: 'maria-birthday',
    name: 'Maria L.',
    event: 'Birthday Party',
    text: 'Everyone loved the personalized drink menu. Made the party so much easier to host!',
    rating: 5,
  },
] as const;

type LuxuryPricingCardProps = {
  title: string;
  price: string;
  unit: string;
  description: string;
  Icon: LucideIcon;
};

function LuxuryPricingCard({
  title,
  price,
  unit,
  description,
  Icon,
}: LuxuryPricingCardProps) {
  return (
    <article className="group relative min-h-[245px] overflow-hidden rounded-2xl border border-white/10 bg-[#111111] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)] transition-all hover:border-[#c6a15b]/40 hover:bg-[#14120d]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#ff1493]/10 via-transparent to-[#c6a15b]/10"
      />

      <div
        aria-hidden="true"
        className="absolute -left-8 top-8 flex h-36 w-36 items-center justify-center overflow-hidden rounded-3xl border border-[#c6a15b]/35 bg-black shadow-[0_0_30px_rgba(198,161,91,0.18)]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff1493]/15 via-[#c6a15b]/10 to-transparent" />
        <div className="absolute inset-0 shadow-[inset_0_0_24px_rgba(198,161,91,0.18)]" />
        <Icon
          aria-hidden="true"
          focusable="false"
          className="relative z-10 h-24 w-24 text-[#d4af37] opacity-90 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        />
      </div>

      <div className="relative z-10 flex min-h-[190px] flex-col items-end justify-between text-right">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="mt-2 max-w-[180px] text-sm text-white/60">
            {description}
          </p>
        </div>

        <div>
          <span className="text-5xl font-bold text-[#d4af37]">{price}</span>
          <span className="ml-1 text-sm text-white/60">{unit}</span>
        </div>
      </div>
    </article>
  );
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b0b] text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-center text-4xl font-bold tracking-[0.16em] text-white md:text-5xl">
              SIMPLE PRICING
            </h1>

            <div
              aria-hidden="true"
              className="mx-auto mt-4 h-px max-w-sm bg-gradient-to-r from-transparent via-[#c6a15b] to-transparent"
            />

            <p className="mx-auto mt-5 max-w-lg text-center text-xl text-white/60">
              Transparent rates with no hidden fees
            </p>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
              {pricingItems.map((item) => (
                <LuxuryPricingCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#161616] py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-[0.14em] text-white">
              ADD-ONS
            </h2>

            <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
              {addOns.map((item) => (
                <LuxuryPricingCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-2xl font-bold text-white">
              What Our Clients Say
            </h2>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-white/10 bg-[#111111] p-6"
                >
                  <div
                    className="mb-3 flex gap-1"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={`${review.id}-star-${i}`}
                        aria-hidden="true"
                        focusable="false"
                        className="h-4 w-4 fill-[#d4af37] text-[#d4af37]"
                      />
                    ))}
                  </div>

                  <p className="mb-4 text-sm text-white/60">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-white/50">{review.event}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ReadyToBook />
      </main>
    </div>
  );
}
