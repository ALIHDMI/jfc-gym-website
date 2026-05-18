export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel?: string;
};

export type PricingSportItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
};

export type PricingSportCategory = {
  id: "men" | "women" | "kids";
  title: string;
  items: PricingSportItem[];
};

export const PRICING = {
  title: "Абонементы",
  description:
    "Выберите формат, который подходит вашему ритму.\nЛюбой план — это премиальная атмосфера, дисциплина и комфорт.",
  ctaHref: "#lead",
  heroBanner: {
    imageSrc: "/assets/pricing/banner.jpeg",
    alt: "Зал JFC GYM — премиальная атмосфера",
  },
  gym: {
    title: "ТРЕНАЖЕРНЫЙ ЗАЛ",
    subtitle: "Сила, форма, результат",
  },
  plans: [
    {
      id: "morning",
      name: "Утренний",
      description: "Ранний ритм и максимум пользы.",
      price: "24 900 сом",
      period: "на 3 месяца",
      features: [
        "Действует: 07:00–12:00",
        "+21 день заморозки",
        "36 посещений: тренажерный зал + все секции",
      ],
      ctaLabel: "Записаться",
    },
    {
      id: "day",
      name: "Дневной",
      description: "Комфортный график для прогресса.",
      price: "29 800 сом",
      period: "на 3 месяца",
      features: [
        "Действует: 07:00–16:00",
        "+21 день заморозки",
        "36 посещений: тренажерный зал + все секции",
      ],
      ctaLabel: "Записаться",
    },
    {
      id: "evening",
      name: "Вечерний",
      description: "Лучший вариант после работы.",
      price: "29 800 сом",
      period: "на 3 месяца",
      features: [
        "Действует: 16:00–23:00",
        "+21 день заморозки",
        "36 посещений: тренажерный зал + все секции",
      ],
      ctaLabel: "Записаться",
    },
  ] satisfies PricingPlan[],
  sports: {
    title: "ЕДИНОБОРСТВА И ФИТНЕС",
    subtitle: "Выберите направление и начните свой путь",
    categories: [
      {
        id: "men",
        title: "МУЖЧИНЫ",
        items: [
          {
            id: "mixfight",
            title: "МИКС ФАЙТ",
            description:
              "Комплексная подготовка: удары, борьба, выносливость и тактика.",
            imageSrc: "/assets/pricing/sports/mixfight.png",
            href: "#lead",
          },
          {
            id: "grappling",
            title: "ГРЭППЛИНГ",
            description:
              "Борьба без ударов. Контроль, болевые и удушающие приемы.",
            imageSrc: "/assets/pricing/sports/grappling.jpg",
            href: "#lead",
          },
          {
            id: "boxing",
            title: "БОКС",
            description:
              "Развивает технику ударов, скорость, реакцию и выносливость.",
            imageSrc: "/assets/pricing/sports/boxing.png",
            href: "#lead",
          },
          {
            id: "wrestling",
            title: "ВОЛЬНАЯ БОРЬБА",
            description: "Броски, контроль и работа в партере. Сила, ловкость и характер.",
            imageSrc: "/assets/pricing/sports/freestyle-wrestling.jpg",
            href: "#lead",
          },
        ],
      },
      {
        id: "women",
        title: "ЖЕНЩИНЫ",
        items: [
          {
            id: "abcspine",
            title: "ABC SPINE",
            description: "Здоровая спина, осанка и гибкость. Забота о теле каждый день.",
            imageSrc: "/assets/pricing/sports/abc-spine.jpg",
            href: "#lead",
          },
          {
            id: "thaiboxing",
            title: "ТАЙСКИЙ БОКС",
            description: "Техника ударов руками и ногами. Уверенность и отличная форма.",
            imageSrc: "/assets/pricing/sports/muay-thai.jpg",
            href: "#lead",
          },
          {
            id: "flexpower",
            title: "FLEX POWER",
            description: "Силовые тренировки для тонуса, рельефа и энергии.",
            imageSrc: "/assets/pricing/sports/flex-power.jpg",
            href: "#lead",
          },
          {
            id: "fullbody",
            title: "FULL BODY",
            description:
              "Комплексные тренировки на все тело. Эффективно и сбалансировано.",
            imageSrc: "/assets/pricing/sports/full-body.jpg",
            href: "#lead",
          },
        ],
      },
      {
        id: "kids",
        title: "ДЕТИ И ПОДРОСТКИ",
        items: [
          {
            id: "kids-muaythai",
            title: "ТАЙСКИЙ БОКС",
            description: "Развивает дисциплину, координацию и уверенность.",
            imageSrc: "/assets/pricing/sports/kids-muay-thai.jpg",
            href: "#lead",
          },
          {
            id: "kickboxing",
            title: "КИКБОКСИНГ",
            description: "Удары, скорость и сила. Физическая подготовка и характер.",
            imageSrc: "/assets/pricing/sports/kickboxing.jpg",
            href: "#lead",
          },
          {
            id: "kids-boxing",
            title: "БОКС",
            description: "Основы бокса, техника и выносливость. Путь чемпиона.",
            imageSrc: "/assets/pricing/sports/kids-boxing.jpg",
            href: "#lead",
          },
          {
            id: "greco",
            title: "ГРЕКО-РИМСКАЯ БОРЬБА",
            description: "Сила, выносливость и воля к победе.",
            imageSrc: "/assets/pricing/sports/greco-roman.jpg",
            href: "#lead",
          },
          {
            id: "taekwondo",
            title: "ТХЭКВОНДО",
            description: "Гибкость, скорость, дисциплина и уважение.",
            imageSrc: "/assets/pricing/sports/taekwondo.jpg",
            href: "#lead",
          },
        ],
      },
    ] satisfies PricingSportCategory[],
  },
  bottomCta: {
    title: "НЕ ЗНАЕТЕ, ЧТО ВЫБРАТЬ?",
    description:
      "Наши тренеры помогут подобрать идеальный формат именно для вас.",
    buttonLabel: "ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ",
    href: "#lead",
  },
} as const;

