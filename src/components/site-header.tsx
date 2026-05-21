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
  const letterPaths = (
    <>
      <path d="M18 16H112L122 26V74H260L270 84V94L260 104H28L18 94V16Z" />
      <path
        d="M326 16H548L564 30V49L551 58L570 70V90L554 104H336L326 94V16ZM430 32V49H512L521 43V38L512 32H430ZM430 70V88H524L534 82V76L524 70H430Z"
        fillRule="evenodd"
      />
      <path d="M620 16H714L686 104H650L620 16Z" />
      <path d="M754 16H848L766 104H716L754 16Z" />
    </>
  );

  return (
    <svg
      aria-label="LBV"
      className="h-20 w-full text-[#d4af37] drop-shadow-[0_0_16px_rgba(212,175,55,0.36)] sm:h-24 md:h-32"
      viewBox="0 0 900 110"
      role="img"
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="lbv-wordmark-top">
          <rect x="0" y="0" width="900" height="55" />
        </clipPath>
      </defs>
      <g fill="currentColor" transform="skewX(-5)">
        {letterPaths}
      </g>
      <g
        clipPath="url(#lbv-wordmark-top)"
        fill="currentColor"
        transform="translate(18 0) skewX(-5)"
      >
        {letterPaths}
      </g>
    </svg>
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
    <header className="border-b border-white/10 bg-[#0b0b0b]">
      <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
        <div className="relative overflow-hidden border-y border-[#c6a15b]/40 bg-black px-3 py-1 shadow-[0_0_24px_rgba(198,161,91,0.16)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#c6a15b]/15 via-transparent to-[#ff1493]/10"
          />
          <LbvWordmark />
          <div className="absolute left-0 right-0 top-4 z-10 border-y border-[#c6a15b]/30 bg-gradient-to-r from-transparent via-[#0b0b0b]/90 to-transparent py-1 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
            If We&apos;re There; It&apos;s an Event.
          </div>
        </div>
        <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div aria-hidden="true" />
          <nav
            aria-label="Social media"
            className="flex items-center justify-center gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c6a15b]/35 text-[#d4af37] transition hover:border-[#c6a15b]/70 hover:bg-[#c6a15b]/10 hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </nav>
          <nav aria-label="Primary navigation" className="text-center md:text-right">
            <a
              href={navLink.href}
              className="text-sm uppercase tracking-[0.14em] text-white/70 transition hover:text-white"
            >
              {navLink.label}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
