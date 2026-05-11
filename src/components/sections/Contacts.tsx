import type React from "react";
import Link from "next/link";
import { CONTACTS } from "@/content/contacts";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AtSign, Clock, MapPin, Phone, MessageCircle } from "lucide-react";

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] text-jfc-accent">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium tracking-[0.22em] text-white/55">
          {label}
        </p>
        <p className="mt-1 text-[15px] leading-7 text-white/85">{value}</p>
      </div>
    </div>
  );

  if (!href) {
    return <div className="rounded-xl p-3">{content}</div>;
  }

  return (
    <Link
      href={href}
      className="block rounded-xl p-3 transition-colors hover:bg-white/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jfc-accent/45"
    >
      {content}
    </Link>
  );
}

export function Contacts() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACTS.address,
  )}&output=embed`;

  return (
    <Section
      id="contacts"
      variant="surface"
      ariaLabelledby="contacts-title"
      withTopDivider
      withBottomDivider
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            id="contacts-title"
            eyebrow="Связь"
            title={CONTACTS.title}
            description={CONTACTS.description}
          />

          <div className="mt-8 grid gap-3">
            <Card className="p-2">
              <InfoRow
                icon={<MapPin className="h-4 w-4" />}
                label="Адрес"
                value={CONTACTS.address}
              />
              <InfoRow
                icon={<Phone className="h-4 w-4" />}
                label="Телефон"
                value={CONTACTS.phone}
                href={`tel:${CONTACTS.phone.replace(/[^\d+]/g, "")}`}
              />
              <InfoRow
                icon={<Phone className="h-4 w-4" />}
                label="Телефон"
                value={CONTACTS.phone2}
                href={`tel:${CONTACTS.phone2.replace(/[^\d+]/g, "")}`}
              />
              <InfoRow
                icon={<MessageCircle className="h-4 w-4" />}
                label="WhatsApp"
                value={CONTACTS.whatsapp.label}
                href={CONTACTS.whatsapp.href}
              />
              <InfoRow
                icon={<AtSign className="h-4 w-4" />}
                label="Instagram"
                value={CONTACTS.instagram.label}
                href={CONTACTS.instagram.href}
              />
              <div className="px-3 py-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] text-jfc-accent">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                      Часы работы
                    </p>
                    <div className="mt-1 grid gap-1 text-[15px] leading-7 text-white/85">
                      {CONTACTS.hours.map((h) => (
                        <p key={h}>{h}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid gap-3">
              <Button href={CONTACTS.cta.href} className="w-full justify-center">
                {CONTACTS.cta.label}
              </Button>
              <Button
                href={CONTACTS.whatsapp.href}
                variant="secondary"
                className="w-full justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="relative lg:col-span-7">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-jfc-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-8 h-56 w-56 rounded-full bg-jfc-accent-2/10 blur-3xl" />

          <Card className="p-0">
            <div className="relative aspect-[16/9] w-full">
              <iframe
                title="Google карта — г. Бишкек, ул. Кара-Кульская, 1/4"
                src={mapSrc}
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

