"use client";

import { AssetImage as Image } from "@/components/ui/AssetImage";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { HERO } from "@/content/hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const titleMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const heroTitleClass =
  "uppercase font-semibold tracking-[-0.02em] text-white";

function MobileHeroContent() {
  return (
    <>
      <motion.h1
        id="hero-title"
        {...titleMotion}
        className={cn(heroTitleClass, "text-[40px] leading-[0.95] sm:text-[46px]")}
      >
        {HERO.titleMobileLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="mt-0.5 block text-jfc-accent">{HERO.titleAccent}</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.08,
        }}
        className="mt-3 max-w-lg text-pretty text-[14px] leading-6 text-jfc-muted sm:text-[15px] sm:leading-7"
      >
        {HERO.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.16,
        }}
        className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3"
      >
        <Button
          href={HERO.primaryCta.href}
          className="h-11 w-full justify-between px-5 sm:h-12"
        >
          <span>{HERO.primaryCta.label}</span>
          <ArrowRight className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
        </Button>
        <Button
          href={HERO.secondaryCta.href}
          variant="secondary"
          className="h-11 w-full justify-between px-5 sm:h-12"
        >
          <span>{HERO.secondaryCta.label}</span>
          <ArrowRight className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
        </Button>
      </motion.div>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-black lg:bg-jfc-bg"
    >
      {/* Desktop: градиенты без фоновой картинки */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-jfc-hero opacity-65" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)] opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.35)_35%,rgba(0,0,0,0.90))]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <Container className="relative bg-black px-3 sm:px-5 lg:bg-transparent lg:px-6 lg:pb-0 lg:pt-10">
        {/* Mobile: картинка + текст с наслоением, всё в первом экране */}
        <motion.div className="relative min-h-[calc(100dvh-5rem)] bg-black lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="relative -mx-3 aspect-square w-[calc(100%+1.5rem)] bg-black sm:-mx-5 sm:w-[calc(100%+2.5rem)]"
          >
            <Image
              src={HERO.athleteImageMobile.src}
              alt={HERO.athleteImageMobile.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            className="absolute inset-x-0 bottom-0 z-10 bg-[linear-gradient(to_top,#000_0%,#000_38%,rgba(0,0,0,0.92)_52%,transparent_100%)] px-3 pb-4 pt-28 sm:px-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <MobileHeroContent />
          </motion.div>
        </motion.div>

        {/* Desktop */}
        <motion.div className="hidden lg:grid lg:min-h-[clamp(560px,46vw,680px)] lg:grid-cols-12 lg:items-stretch lg:gap-8">
          <div className="flex flex-col lg:col-span-6 lg:self-center lg:pb-12">
            <motion.h1
              id="hero-title-desktop"
              {...titleMotion}
              className={cn(
                heroTitleClass,
                "text-balance text-[44px] leading-[1.05] sm:text-6xl lg:text-6xl xl:text-[72px]",
              )}
            >
              {HERO.titleLead}
              <span className="text-jfc-accent">{HERO.titleAccent}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              className="mt-5 max-w-lg text-pretty text-lg leading-8 text-jfc-muted"
            >
              {HERO.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.16,
              }}
              className="mt-8 flex flex-row items-center gap-3"
            >
              <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
              <Button href={HERO.secondaryCta.href} variant="secondary">
                {HERO.secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          <div
            className="relative flex lg:col-span-6 lg:items-end"
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute -right-10 -top-12 h-64 w-64 rounded-full bg-jfc-accent/20 blur-3xl lg:-right-16 lg:-top-16 lg:h-80 lg:w-80" />
            <div className="pointer-events-none absolute -bottom-12 right-12 h-56 w-56 rounded-full bg-jfc-accent-2/15 blur-3xl lg:-bottom-16 lg:right-28 lg:h-72 lg:w-72" />

            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[620px] lg:ml-auto lg:mr-0 lg:max-w-[720px]"
            >
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(208,0,0,0.18),transparent_65%)] blur-2xl" />
              <Image
                src={HERO.athleteImage.src}
                alt={HERO.athleteImage.alt}
                width={1200}
                height={1600}
                priority={false}
                sizes="(max-width: 1280px) 46vw, 720px"
                className="relative h-auto w-full origin-bottom scale-[1.13] -translate-x-3 select-none drop-shadow-[0_20px_60px_rgba(0,0,0,0.70)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
