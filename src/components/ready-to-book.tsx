export function ReadyToBook() {
  const bookingEmail =
    process.env.NEXT_PUBLIC_BOOKING_EMAIL ?? 'booking@lbvbartending.com';

  return (
    <section id="booking" className="border-t border-white/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-[0.08em] text-white md:text-4xl">
          READY TO BOOK?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/60">
          Contact LBV to reserve your date and customize your event package.
        </p>
        <a
          href={`mailto:${bookingEmail}`}
          className="mt-8 inline-flex rounded-full border border-[#c6a15b]/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af37] transition hover:bg-[#c6a15b]/10"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
