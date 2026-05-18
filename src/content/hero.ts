export const HERO = {
  /** Две верхние строки заголовка на мобильных */
  titleMobileLines: ["Твоя", "Территория"] as const,
  /** Красная строка (включая «!») */
  titleAccent: "силы и роста!",
  /** Однострочный заголовок на десктопе */
  titleLead: "Твоя территория ",
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
    src: "/assets/hero/GuysReady3-v3.png",
    alt: "Спортсмены JFC GYM",
  },
  athleteImageMobile: {
    src: "/assets/hero/GuysReady3Mobile.jpeg",
    alt: "Спортсмены JFC GYM",
  },
} as const;
