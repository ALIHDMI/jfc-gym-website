import Link from "next/link";
import { NAV_ITEMS } from "@/content/navigation";
import { SITE } from "@/content/site";
import { CONTACTS } from "@/content/contacts";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-jfc-border bg-jfc-bg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_520px_at_20%_0%,rgba(208,0,0,0.08),transparent_60%)]" />
      <Container className="relative py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Logo size="md" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-jfc-muted">
              {SITE.description}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                Навигация
              </p>
              <nav className="mt-4 grid gap-2">
                {NAV_ITEMS.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {i.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                Контакты
              </p>
              <div className="mt-4 grid gap-2 text-sm text-white/75">
                <p>{CONTACTS.address}</p>
                <Link
                  href={`tel:${CONTACTS.phone.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACTS.phone}
                </Link>
                <Link
                  href={`tel:${CONTACTS.phone2.replace(/[^\d+]/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {CONTACTS.phone2}
                </Link>
                <Link
                  href={CONTACTS.whatsapp.href}
                  className="transition-colors hover:text-white"
                >
                  {CONTACTS.whatsapp.label}
                </Link>
                <Link
                  href={CONTACTS.instagram.href}
                  className="transition-colors hover:text-white"
                >
                  {CONTACTS.instagram.label}
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                Часы работы
              </p>
              <div className="mt-4 grid gap-2 text-sm text-white/75">
                {CONTACTS.hours.map((h) => (
                  <p key={h}>{h}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-white/5" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Все права защищены.
          </p>
        </div>
      </Container>
    </footer>
  );
}

