import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Award, CalendarDays, Dumbbell } from "lucide-react";

import { getTrainerBySlug, TRAINERS } from "@/content/trainers";
import { SITE } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = getTrainerBySlug(slug);
  if (!t) return { title: "Тренер не найден" };

  return {
    title: `${t.name} — Тренер`,
    description: t.shortBio,
    openGraph: {
      title: `${t.name} — ${SITE.name}`,
      description: t.shortBio,
      type: "profile",
      siteName: SITE.name,
    },
  };
}

export function generateStaticParams() {
  return TRAINERS.items.map((t) => ({ slug: t.slug }));
}

export default async function TrainerPage({ params }: PageProps) {
  const { slug } = await params;
  const t = getTrainerBySlug(slug);
  if (!t) notFound();

  return (
    <div id="top" className="min-h-screen bg-jfc-bg">
      <Header />
      <main id="main">
        <Section id="trainer" variant="surface" withBottomDivider>
          <div className="mb-10 flex items-center justify-between gap-3">
            <Link
              href="/#trainers"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад к списку
            </Link>

            <Button href="/#lead" size="sm">
              {SITE.cta.label}
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Card className="p-3">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                  {t.photo?.src ? (
                    <Image
                      src={t.photo.src}
                      alt={t.photo.alt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 420px"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(620px_320px_at_20%_0%,rgba(208,0,0,0.12),transparent_60%)]" />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.80))]" />
                </div>
              </Card>
            </div>

            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-[0.22em] text-white/55">
                Тренер
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                {t.name}
              </h1>
              <p className="mt-4 text-pretty text-[15px] leading-7 text-white/70 sm:text-lg sm:leading-8">
                {t.specialization}
              </p>

              <div className="mt-8 grid gap-4">
                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <Dumbbell className="mt-1 h-5 w-5 text-jfc-accent" />
                    <div>
                      <p className="text-sm font-medium text-white/90">О тренере</p>
                      <p className="mt-2 text-[15px] leading-7 text-jfc-muted">
                        {t.shortBio}
                      </p>
                      <p className="mt-3 text-sm text-white/55">
                        Опыт: <span className="text-white/80">{t.experience}</span>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 text-jfc-accent" />
                    <div>
                      <p className="text-sm font-medium text-white/90">Достижения</p>
                      <ul className="mt-3 grid gap-2">
                        {t.achievements.map((a) => (
                          <li key={a} className="text-[15px] leading-7 text-jfc-muted">
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-1 h-5 w-5 text-jfc-accent" />
                    <div>
                      <p className="text-sm font-medium text-white/90">Расписание</p>
                      <p className="mt-2 text-[15px] leading-7 text-jfc-muted">
                        {t.scheduleNote}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

