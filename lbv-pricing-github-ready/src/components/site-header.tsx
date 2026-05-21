'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

export function SiteHeader() {
  const pathname = usePathname();
  const [logoVariant, setLogoVariant] = useState<string | null>(null);
  const isOnUsPage = pathname === '/on-us';
  const navHrefBase = isOnUsPage ? '/pricing' : '/on-us';
  const navLink = {
    href: logoVariant
      ? `${navHrefBase}?logo=${encodeURIComponent(logoVariant)}`
      : navHrefBase,
    label: isOnUsPage ? 'Pricing' : 'On Us',
  };
  const isSketchOne = logoVariant === 'sketch-1';
  const isSketchTwo = logoVariant === 'sketch-2';

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLogoVariant(new URLSearchParams(window.location.search).get('logo'));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <header className="border-b border-white/10 bg-[#0b0b0b]">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
          {isSketchOne || isSketchTwo ? (
            <div className="relative h-24 w-56 overflow-hidden border-y border-[#c6a15b]/35 bg-black sm:w-64 md:h-28">
              <Image
                src={
                  isSketchTwo ? '/lbv-sketch-2.jpeg' : '/lbv-sketch-1.jpeg'
                }
                alt="LBV logo concept"
                fill
                priority
                sizes="(min-width: 768px) 16rem, 14rem"
                className="h-full w-full scale-125 object-cover opacity-90 contrast-125 saturate-150"
                style={{
                  objectPosition: isSketchTwo ? '56% 50%' : '66% 53%',
                }}
              />
              {isSketchTwo ? (
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-y border-[#c6a15b]/40 bg-[#0b0b0b]/90 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75">
                  If We&apos;re There; It&apos;s an Event.
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <div className="text-5xl font-bold uppercase leading-none tracking-[0.22em] text-[#d4af37] sm:text-6xl md:text-7xl">
                LBV
              </div>
              <p className="max-w-[220px] text-xs font-semibold uppercase tracking-[0.14em] text-white/60 sm:max-w-none">
                If We&apos;re There; It&apos;s an Event.
              </p>
            </>
          )}
        </div>
        <nav
          aria-label="Social media"
          className="flex items-center justify-center gap-3"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c6a15b]/35 text-[#d4af37] transition hover:border-[#c6a15b]/70 hover:bg-[#c6a15b]/10 hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </nav>
        <nav aria-label="Primary navigation" className="justify-self-end">
          <a
            href={navLink.href}
            className="text-sm uppercase tracking-[0.14em] text-white/70 transition hover:text-white"
          >
            {navLink.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
