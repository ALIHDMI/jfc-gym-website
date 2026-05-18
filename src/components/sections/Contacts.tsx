import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACTS } from "@/content/contacts";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Clock,
  Headphones,
  AtSign,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/cn";

const MAP_DARK_FILTER =
  "invert-[0.92] hue-rotate-180 saturate-[0.85] contrast-[1.05] brightness-[0.9]";

function ContactHighlight({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] text-jfc-accent shadow-[0_0_0_1px_rgba(208,0,0,0.10)]">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-[0.1em] text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-jfc-muted">{description}</p>
      </div>
    </div>
  );
}

function ContactChannelCard({
  icon,
  children,
  className,
}: {
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("h-full p-5", className)}>
      <div className="flex h-full gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] text-jfc-accent">
          {icon}
        </span>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </Card>
  );
}

export function Contacts() {
  const mapQuery = encodeURIComponent(CONTACTS.address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  const highlights = [
    {
      icon: <MapPin className="h-4 w-4" />,
      ...CONTACTS.highlights[0],
    },
    {
      icon: <Clock className="h-4 w-4" />,
      ...CONTACTS.highlights[1],
    },
    {
      icon: <Headphones className="h-4 w-4" />,
      ...CONTACTS.highlights[2],
    },
  ] as const;

  return (
    <Section
      id="contacts"
      variant="base"
      ariaLabelledby="contacts-title"
      withTopDivider
      withBottomDivider
      className="!bg-black !pt-10 !pb-16 sm:!pt-12 sm:!pb-20 lg:!pt-14 lg:!pb-24"
    >
      <div className="flex flex-col gap-10 lg:gap-10">
        <Reveal>
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-8">
            <div className="lg:pointer-events-none lg:col-span-6 lg:relative lg:z-10 lg:bg-black">
              <SectionHeading
                id="contacts-title"
                title={CONTACTS.title}
                description={CONTACTS.description}
              />

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
                {highlights.map((item) => (
                  <ContactHighlight
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-20 lg:pointer-events-none lg:col-span-6 lg:col-start-7 lg:-mt-6 xl:-mt-8">
              <div className="relative aspect-[4/3] w-full lg:aspect-[5/4]">
                <Image
                  src={CONTACTS.heroImage.src}
                  alt={CONTACTS.heroImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-bottom drop-shadow-[0_28px_80px_rgba(0,0,0,0.72)]"
                />
              </div>
            </div>

            <div className="relative z-[1] -mt-[20%] sm:-mt-20 lg:col-span-12 lg:-mt-32 xl:-mt-36">
              <Card className="overflow-hidden p-0">
                <div className="relative w-full aspect-[9/16] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[32rem] xl:min-h-[34rem]">
                  <iframe
                    title="Google карта — г. Бишкек, ул. Кара-Кульская, 1/4"
                    src={mapSrc}
                    className={cn(
                      "absolute inset-0 h-full w-full scale-[1.02]",
                      MAP_DARK_FILTER,
                    )}
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-black/20" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center p-4 sm:inset-y-0 sm:left-0 sm:right-auto sm:w-auto sm:justify-start sm:items-center sm:p-6">
                    <Card className="pointer-events-auto w-full max-w-[22rem] border-white/10 bg-jfc-bg/95 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:max-w-sm sm:p-6">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-jfc-border bg-white/[0.02] text-jfc-accent">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold leading-6 text-white">
                            {CONTACTS.address}
                          </p>
                          <p className="mt-1 text-sm text-jfc-muted">{CONTACTS.postalCode}</p>
                        </div>
                      </div>

                      <Button
                        href={directionsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 w-full justify-center"
                      >
                        {CONTACTS.mapDirectionsLabel}
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Card>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Reveal>

        <RevealStagger className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactChannelCard icon={<Phone className="h-4 w-4" />}>
            <p className="text-xs font-medium tracking-[0.14em] text-white/55">ТЕЛЕФОН</p>
            <div className="mt-3 grid gap-1">
              {CONTACTS.phoneDisplay.map((phone, index) => (
                <Link
                  key={phone}
                  href={`tel:${(index === 0 ? CONTACTS.phone : CONTACTS.phone2).replace(/[^\d+]/g, "")}`}
                  className="text-sm text-white/85 transition-colors hover:text-white"
                >
                  {phone}
                </Link>
              ))}
            </div>
          </ContactChannelCard>

          <ContactChannelCard icon={<MessageCircle className="h-4 w-4" />}>
            <p className="text-xs font-medium tracking-[0.14em] text-white/55">WHATSAPP</p>
            <Link
              href={CONTACTS.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-between gap-3 text-sm text-white/85 transition-colors hover:text-white"
            >
              <span>{CONTACTS.whatsapp.cta}</span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-jfc-accent" />
            </Link>
          </ContactChannelCard>

          <ContactChannelCard icon={<AtSign className="h-4 w-4" />}>
            <p className="text-xs font-medium tracking-[0.14em] text-white/55">INSTAGRAM</p>
            <Link
              href={CONTACTS.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block transition-colors hover:text-white"
            >
              <p className="text-sm font-semibold text-white/90">{CONTACTS.instagram.handle}</p>
              <p className="mt-1 text-sm text-jfc-muted">{CONTACTS.instagram.cta}</p>
            </Link>
          </ContactChannelCard>

          <ContactChannelCard icon={<Clock className="h-4 w-4" />}>
            <p className="text-xs font-medium tracking-[0.14em] text-white/55">
              {CONTACTS.hoursLabel.toUpperCase()}
            </p>
            <div className="mt-3 grid gap-1">
              {CONTACTS.hours.map((line) => (
                <p key={line} className="text-sm text-white/85">
                  {line}
                </p>
              ))}
            </div>
          </ContactChannelCard>
        </RevealStagger>
      </div>
    </Section>
  );
}
