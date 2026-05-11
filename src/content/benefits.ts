import type { LucideIcon } from "lucide-react";
import {
  Dumbbell,
  ShieldCheck,
  Sparkles,
  Swords,
  Users,
  Trophy,
} from "lucide-react";
import { withBasePath } from "@/lib/basePath";

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
};

export const BENEFITS = {
  title: {
    leading: "ПОЧЕМУ\nВЫБИРАЮТ",
    accent: "JFC GYM",
  },
  description:
    "Мы создали идеальные условия для тех, кто хочет стать сильнее, быстрее и увереннее.",
  cards: [
    {
      title: "ЕДИНОБОРСТВА ДЛЯ ВСЕХ",
      description:
        "ММА, бокс, грэпплинг, борьба. Наши залы и группы — для мужчин, женщин и детей.",
      icon: Swords,
      imageSrc: withBasePath("/assets/benefits/cards/pb1.jpg"),
    },
    {
      title: "ПРОФЕССИОНАЛЬНЫЕ ТРЕНЕРЫ",
      description:
        "Опытные тренеры и наставники, которые знают, что такое характер, путь и победа.",
      icon: ShieldCheck,
      imageSrc: withBasePath("/assets/benefits/cards/pb2.png"),
    },
    {
      title: "ТРЕНАЖЕРНЫЙ ЗАЛ ПРЕМИУМ-КЛАССА",
      description:
        "Современное оборудование, просторные зоны и всё для эффективного тренинга.",
      icon: Dumbbell,
      imageSrc: withBasePath("/assets/benefits/cards/pb3.png"),
    },
    {
      title: "СПАРРИНГИ И БОЕВАЯ ПРАКТИКА",
      description:
        "Регулярные спарринги, турниры и боевая практика для роста и закалки характера.",
      icon: Trophy,
      imageSrc: withBasePath("/assets/benefits/cards/pb4.png"),
    },
    {
      title: "ДЕТСКИЕ И ПОДРОСТКОВЫЕ ГРУППЫ",
      description:
        "Развиваем дисциплину, уверенность и силу с ранних лет — безопасно и системно.",
      icon: Users,
      imageSrc: withBasePath("/assets/benefits/cards/pb5.png"),
    },
    {
      title: "КОМФОРТ И СЕРВИС",
      description:
        "Чистота, удобные раздевалки, душевые, парковка и внимательный персонал.",
      icon: Sparkles,
      imageSrc: withBasePath("/assets/benefits/cards/pb6.jpg"),
    },
  ] satisfies BenefitItem[],
  cta: {
    title: "JFC GYM — ЭТО ТЕРРИТОРИЯ СИЛЫ\nИ ЧЕМПИОНСКОГО ДУХА",
    description:
      "Присоединяйтесь к клубу, где тренируются лучшие и становятся сильнее каждый день.",
    buttonLabel: "СТАТЬ ЧАСТЬЮ JFC",
    href: "#lead",
  },
} as const;

