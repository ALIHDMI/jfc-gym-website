import { withBasePath } from "@/lib/basePath";

export type Trainer = {
  slug: string;
  name: string;
  specialization: string;
  shortBio: string;
  experience: string;
  achievements: string[];
  scheduleNote: string;
  photo?: {
    src?: string;
    alt: string;
  };
};

export const TRAINERS = {
  title: "Тренеры",
  description:
    "Сильная команда — это дисциплина, техника и стабильный прогресс. Выберите своего тренера.",
  showMoreLabel: "Показать еще",
  items: [
    {
      slug: "bakyt",
      name: "Бакыт",
      specialization: "Вольная борьба",
      shortBio: "Техника, дисциплина и прогресс на каждой тренировке.",
      experience: "5+ лет",
      achievements: ["Постановка техники", "Общая физическая подготовка"],
      scheduleNote: "Оставьте заявку — подберём удобное время.",
      photo: {
        src: withBasePath("/assets/trainers/bakyt.png"),
        alt: "Портрет тренера Бакыт",
      },
    },
    {
      slug: "janbulat",
      name: "Жанбулат",
      specialization: "Кикбоксинг",
      shortBio: "Техника ударов, выносливость и уверенность в каждом раунде.",
      experience: "5+ лет",
      achievements: ["Постановка техники ударов", "Спарринги по уровню"],
      scheduleNote: "Оставьте заявку — подберём удобное время.",
      photo: {
        src: withBasePath("/assets/trainers/janbulat.png"),
        alt: "Портрет тренера Жанбулат",
      },
    },
  ] satisfies Trainer[],
} as const;

export function getTrainerBySlug(slug: string) {
  return TRAINERS.items.find((t) => t.slug === slug) ?? null;
}

