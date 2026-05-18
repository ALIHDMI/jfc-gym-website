import type { ReactNode } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/content/navigation";
import { SITE } from "@/content/site";
import { CONTACTS } from "@/content/contacts";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { AtSign, MapPin, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/cn";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1 31.5 31.5 0 0 0 .5-5.8 31.5 31.5 0 0 0-.5-5.8ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

function SocialIconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-jfc-border",
        "bg-white/[0.02] text-jfc-accent transition-colors",
        "hover:border-white/15 hover:bg-white/[0.04] hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}

function FooterContactItem({
  icon,
  children,
  href,
}: {
  icon: ReactNode;
  children: ReactNode;
  href?: string;
}) {
  const content = (
    <span className="flex items-start gap-2.5">
      <span className="mt-0.5 text-jfc-accent">{icon}</span>
      <span>{children}</span>
    </span>
  );

  if (!href) {
    return <div className="text-sm text-white/75">{content}</div>;
  }

  return (
    <Link href={href} className="text-sm text-white/75 transition-colors hover:text-white">
      {content}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-jfc-border bg-jfc-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(208,0,0,0.08),transparent_60%)]" />
      <Container className="relative py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col lg:col-span-4">
            <Logo size="footer" priority={false} />
            <p className="mt-4 max-w-md text-sm leading-6 text-jfc-muted">
              {SITE.description}
            </p>
            <p className="mt-auto hidden pt-8 text-xs text-white/45 lg:block">
              © {new Date().getFullYear()} {SITE.name}. Все права защищены.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">НАВИГАЦИЯ</p>
              <nav className="mt-4 grid gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">КОНТАКТЫ</p>
              <div className="mt-4 grid gap-3">
                <FooterContactItem icon={<MapPin className="h-4 w-4" />}>
                  {CONTACTS.address}
                </FooterContactItem>
                {CONTACTS.phoneDisplay.map((phone, index) => (
                  <FooterContactItem
                    key={phone}
                    icon={<Phone className="h-4 w-4" />}
                    href={`tel:${(index === 0 ? CONTACTS.phone : CONTACTS.phone2).replace(/[^\d+]/g, "")}`}
                  >
                    {phone}
                  </FooterContactItem>
                ))}
                <FooterContactItem
                  icon={<MessageCircle className="h-4 w-4" />}
                  href={CONTACTS.whatsapp.href}
                >
                  {CONTACTS.whatsapp.label}
                </FooterContactItem>
                <FooterContactItem
                  icon={<AtSign className="h-4 w-4" />}
                  href={CONTACTS.instagram.href}
                >
                  {CONTACTS.instagram.handle}
                </FooterContactItem>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">МЫ В СОЦСЕТЯХ</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <SocialIconLink href={CONTACTS.instagram.href} label={CONTACTS.instagram.label}>
                  <AtSign className="h-5 w-5" />
                </SocialIconLink>
                <SocialIconLink href={CONTACTS.youtube.href} label={CONTACTS.youtube.label}>
                  <YoutubeIcon className="h-5 w-5" />
                </SocialIconLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/5" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="lg:hidden">
            © {new Date().getFullYear()} {SITE.name}. Все права защищены.
          </p>
          <Link
            href={CONTACTS.privacyPolicy.href}
            className="transition-colors hover:text-white/70 sm:ml-auto"
          >
            {CONTACTS.privacyPolicy.label}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
