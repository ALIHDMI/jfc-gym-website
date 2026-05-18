export const CONTACTS = {
  title: "Контакты",
  eyebrow: "МЫ ВСЕГДА НА СВЯЗИ",
  description:
    "Свяжитесь с нами удобным способом. Мы ответим на вопросы и поможем выбрать формат.",
  heroImage: {
    src: "/assets/contacts/building2-export.png",
    alt: "Здание JFC GYM",
  },
  highlights: [
    {
      title: "УДОБНОЕ РАСПОЛОЖЕНИЕ",
      description: "В центре города, легко добраться",
    },
    {
      title: "РАБОТАЕМ ДЛЯ ВАС",
      description: "Ежедневно без выходных",
    },
    {
      title: "БЫСТРАЯ ОБРАТНАЯ СВЯЗЬ",
      description: "Ответим на все ваши вопросы",
    },
  ],
  address: "г. Бишкек, ул. Кара-Кульская, 1/4",
  postalCode: "720053, Кыргызстан",
  phone: "0559665555",
  phone2: "0509665555",
  phoneDisplay: ["0559 665 555", "0509 665 555"],
  whatsapp: {
    label: "WhatsApp",
    cta: "Напишите нам в WhatsApp",
    href: "https://wa.me/996559665555",
  },
  instagram: {
    label: "Instagram",
    handle: "@jfc.gym.bishkek",
    cta: "Подписывайтесь",
    href: "https://www.instagram.com/jfc_gym.kg/",
  },
  youtube: {
    label: "YouTube",
    href: "https://www.youtube.com/",
  },
  hours: ["Пн – Сб: 07:00 – 23:00", "Вс: выходной"],
  hoursLabel: "Часы работы",
  mapDirectionsLabel: "Построить маршрут",
  cta: {
    label: "Записаться",
    href: "#lead",
  },
  privacyPolicy: {
    label: "Политика конфиденциальности",
    href: "#",
  },
} as const;
