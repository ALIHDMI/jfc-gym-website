import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-jfc-bg">
      <Header />
      <main>
        <Section id="not-found" variant="surface" withBottomDivider>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium tracking-[0.22em] text-white/55">
              404
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.02em] text-white">
              Тренер не найден
            </h1>
            <p className="mt-4 text-[15px] leading-7 text-jfc-muted">
              Возможно, ссылка устарела. Вернитесь к списку тренеров.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/#trainers" variant="primary">
                К тренерам
              </Button>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-full border border-jfc-border bg-white/[0.02] px-5 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/[0.04]"
              >
                На главную
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}

