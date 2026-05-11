"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { HERO } from "@/content/hero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const videoSrc = "/assets/hero/JFCready.mp4";

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-jfc-bg"
    >
      <div className="absolute inset-0">
        {/* Desktop background video (avoid image flash on first paint) */}
        {/* <video
          className="hidden h-full w-full object-cover md:block motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video> */}

        {/* Mobile + reduced-motion fallback image */}
        <Image
          src={HERO.athleteImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="block object-cover opacity-60 md:hidden md:motion-reduce:block"
        />
      </div>

      {/* Premium overlays (читаемость текста + фирменная атмосфера) */}
      <div className="absolute inset-0 bg-jfc-hero opacity-65" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)] opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.62),rgba(0,0,0,0.35)_35%,rgba(0,0,0,0.90))]" />
      <div className="absolute inset-0 bg-black/20" />

      <Container className="relative">
        <div className="grid min-h-[560px] items-center gap-10 pb-10 pt-20 md:min-h-[620px] lg:min-h-[clamp(560px,46vw,680px)] lg:grid-cols-12 lg:items-stretch lg:gap-8 lg:pb-0 lg:pt-10">
          <div className="lg:col-span-6 lg:self-center lg:pb-12">
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance uppercase text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-6xl lg:text-[72px]"
            >
              {HERO.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              className="mt-5 max-w-lg text-pretty text-[15px] leading-7 text-jfc-muted sm:text-lg sm:leading-8"
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
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href={HERO.primaryCta.href}>{HERO.primaryCta.label}</Button>
              <Button href={HERO.secondaryCta.href} variant="secondary">
                {HERO.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.22,
              }}
              className="mt-10 flex items-center gap-3 text-xs text-white/55"
            >
              <span className="h-px w-10 bg-white/10" />
              
            </motion.div>
          </div>

          <div
            className="relative hidden lg:flex lg:col-span-6 lg:items-end"
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
        </div>
      </Container>
    </section>
  );
}

