export const ABOUT = {
  title: {
    leading: "КЛУБ",
    accent: "JFC GYM",
  },
  description:
    "JFC GYM — место, где формируется\nсила и характер. Здесь тренируются\nне ради процесса — здесь тренируются\nради результата.",
  features: [
    {
      icon: "trophy",
      title: "ЗДЕСЬ ТРЕНИРУЮТСЯ ЧЕМПИОНЫ",
      description:
        "Бойцы и спортсмены, которые уже доказали свой уровень.",
    },
    {
      icon: "target",
      title: "ЕДИНОБОРСТВА — ОСНОВА КЛУБА",
      description:
        "ММА, бокс, борьба — система подготовки сильных.",
    },
    {
      icon: "dumbbell",
      title: "ИНФРАСТРУКТУРА ДЛЯ РОСТА",
      description:
        "Оборудование, зоны и условия для максимального прогресса.",
    },
  ],
  infrastructureGallery: [
    {
      src: "/assets/about/collage/picture-2-1.png",
      alt: "Силовая зона JFC GYM",
    },
    {
      src: "/assets/about/collage/picture-3-1.png",
      alt: "Зона свободных весов JFC GYM",
    },
    {
      src: "/assets/about/collage/picture-4-1.png",
      alt: "Функциональная и ударная зона JFC GYM",
    },
  ],
  collage: {
    main: {
      src: "/assets/about/collage/picture-1-1-2.jpeg",
      alt: "Зал JFC GYM (главное фото)",
    },
    tiles: [
      { src: "/assets/about/collage/picture-2-1.png", alt: "Зал JFC GYM" },
      { src: "/assets/about/collage/picture-3-v2.png", alt: "Зал JFC GYM" },
      { src: "/assets/about/collage/picture-4-1.png", alt: "Зал JFC GYM" },
    ],
  },
  fightersHeading: {
    leading: "НАШИ ",
    accent: "БОЙЦЫ",
  },
  fighters: [
    {
      name: "МЫКТЫБЕК ОРОЛБАЙ",
      subtitle: "БОЕЦ UFC",
      mark: "UFC",
      logoSrc: "/assets/about/fighter-logos/ufc-v2.png",
      logoAlt: "UFC",
      logoScale: 0.5,
      description:
        "Профессиональный боец MMA, выступающий в UFC",
      imageSrc: "/assets/about/fighters/myktybek.jpg",
    },
    {
      name: "САМАТ АБДЫРАХМАНОВ",
      subtitle: "БОЕЦ Hardcore FC",
      mark: "HARDCORE",
      logoSrc: "/assets/about/fighter-logos/hardcorefc-v2.png",
      logoAlt: "Hardcore FC",
      logoScale: 1,
      description:
        "Боец лиги HFC. Мастер спорта и чемпион России по боксу.",
      imageSrc: "/assets/about/fighters/samat.png",
    },
    {
      name: "РАЖАБАЛИ ШАЙДУЛЛАЕВ",
      subtitle: "ЧЕМПИОН RIZIN FF",
      mark: "RIZIN",
      logoSrc: "/assets/about/fighter-logos/rizinff-v2.png",
      logoAlt: "Rizin FF",
      logoScale: 0.8,
      description:
        "Непобежденный боец RIZIN FF в весе до 66 кг.",
      imageSrc: "/assets/about/fighters/rajabali.jpg",
    },
    {
      name: "АЛИМАРДАН АБДЫКААРОВ",
      subtitle: "БОЕЦ ACA MMA",
      mark: "ACA",
      logoSrc: "/assets/about/fighter-logos/aca-v2.png",
      logoAlt: "ACA",
      logoScale: 0.5,
      description:
        "Опытный боец ACA MMA.\nПостоянный рост\nи стремление к вершине.",
      imageSrc: "/assets/about/fighters/alimardan.jpg",
    },
  ],
  stats: [
    {
      icon: "cube",
      value: "600+ м²",
      title: "пространства силы",
      description: "Современный клуб с просторными\nзонами для тренировок.",
    },
    {
      icon: "users",
      value: "10+",
      title: "тренеров с опытом",
      description: "Профессионалы, которые помогут\nдостичь твоих целей.",
    },
    {
      icon: "star",
      value: "100+",
      title: "бойцов и чемпионов",
      description: "Сообщество сильных и мотивированных\nлюдей.",
    },
    {
      icon: "calendar",
      value: "6 дней",
      title: "в неделю — твой рост",
      description: "Работаем, чтобы прогресс был\nкаждый день.",
    },
  ],
  cta: {
    titleLeading: "ГОТОВ НАЧАТЬ?",
    titleAccent: "СДЕЛАЙ ПЕРВЫЙ ШАГ УЖЕ СЕГОДНЯ",
    description:
      "Присоединяйся к команде сильных и достигай большего вместе с JFC Gym.",
    buttonLabel: "ЗАПИСАТЬСЯ НА ТРЕНИРОВКУ",
    buttonHint: "Ответим на все вопросы и подберём программу",
    href: "#lead",
    imageSrc: "/assets/about/collage/main.png",
  },
} as const;

