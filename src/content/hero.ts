import { withBasePath } from "@/lib/basePath";

export const HERO = {
  title: "Твоя территория силы и роста!",
  subtitle:
    "Тренируйся в премиальной атмосфере: дисциплина, технология и комфорт — без лишнего шума.",
  primaryCta: {
    label: "Записаться",
    href: "#lead",
  },
  secondaryCta: {
    label: "Абонементы",
    href: "#pricing",
  },
  athleteImage: {
    src: withBasePath("/assets/hero/GuysReady3-v3.png"),
    alt: "Спортсмены JFC GYM",
  },
} as const;

