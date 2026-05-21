'use client';

import { usePathname } from 'next/navigation';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    path: 'M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 2.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z',
  },
  {
    name: 'TikTok',
    href: '#',
    path: 'M16.7 2c.35 3.08 2.08 4.92 5.3 5.12v3.42a8.9 8.9 0 0 1-5.2-1.65v6.43c0 4.1-2.48 6.68-6.34 6.68C6.78 22 4 19.55 4 16.08c0-3.56 2.88-6.08 6.9-6.08.43 0 .78.03 1.12.1v3.5a4.3 4.3 0 0 0-1.14-.15c-1.86 0-3.12 1.04-3.12 2.54 0 1.45 1.13 2.45 2.72 2.45 1.75 0 2.75-1.1 2.75-3.05V2h3.47Z',
  },
  {
    name: 'Facebook',
    href: '#',
    path: 'M14.2 8.08V6.66c0-.68.45-.84.77-.84h1.96V2.16L14.22 2C11.2 2 10.5 4.26 10.5 5.7v2.38H8v3.76h2.5V22h3.7V11.84h2.98l.14-1.48.22-2.28H14.2Z',
  },
] as const;

function LbvWordmark() {
  return (
    <div
      aria-label="LBV"
      className="lbv-logo-font flex h-full w-full items-center justify-center overflow-hidden text-[clamp(4.75rem,16vw,10.5rem)] leading-none tracking-[0.04em] text-[#d4af37]"
      role="img"
    >
      LBV
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isOnUsPage = pathname === '/on-us';
  const navLink = {
    href: isOnUsPage ? '/pricing' : '/on-us',
    label: isOnUsPage ? 'Pricing' : 'On Us',
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/95 backdrop-blur">
      <div className="container mx-auto px-4 py-3">
        <div className="relative h-24 overflow-hidden border-y border-[#c6a15b]/40 bg-black px-3 shadow-[0_0_24px_rgba(198,161,91,0.16)] sm:h-28 md:h-32">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#c6a15b]/15 via-transparent to-[#ff1493]/10"
          />
          <LbvWordmark />
          <nav
            aria-label="Primary navigation"
            className="absolute right-3 top-3 z-20"
          >
            <a
              href={navLink.href}
              className="rounded-full border border-[#c6a15b]/35 bg-[#0b0b0b]/80 px-3 py-1 text-[10px] font-semibold uppercase not-italic tracking-[0.16em] text-white/75 shadow-[0_0_14px_rgba(0,0,0,0.65)] transition hover:border-[#c6a15b]/70 hover:text-white sm:text-xs"
            >
              {navLink.label}
            </a>
          </nav>
          <div className="absolute left-0 right-0 top-4 z-10 border-y border-[#c6a15b]/30 bg-gradient-to-r from-transparent via-[#0b0b0b]/90 to-transparent py-1 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
            If We&apos;re There; It&apos;s an Event.
          </div>
          <nav
            aria-label="Social media"
            className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c6a15b]/40 bg-[#0b0b0b]/80 text-[#d4af37] shadow-[0_0_14px_rgba(0,0,0,0.65)] transition hover:border-[#c6a15b]/70 hover:bg-[#c6a15b]/10 hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
