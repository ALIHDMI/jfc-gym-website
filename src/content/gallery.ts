import { withBasePath } from "@/lib/basePath";

export type GalleryItem = {
  id: string;
  alt: string;
  src?: string;
};

export const GALLERY = {
  title: "Галерея",
  description:
    "Интерьер, оборудование и атмосфера — всё в одном стиле: строго, чисто, премиально.",
  showMoreLabel: "Показать еще",
  items: [
    {
      id: "gallery-1",
      alt: "Фото зала 1",
      src: withBasePath(
        "/assets/gallery/47688410_204674073793436_6161290994550571008_n.jpg",
      ),
    },
    {
      id: "gallery-2",
      alt: "Фото зала 2",
      src: withBasePath(
        "/assets/gallery/48206626_208435113417332_4947862931275513856_n.jpg",
      ),
    },
    {
      id: "gallery-3",
      alt: "Фото зала 3",
      src: withBasePath(
        "/assets/gallery/48275175_208435080084002_2836513710720155648_n.jpg",
      ),
    },
    {
      id: "gallery-4",
      alt: "Фото зала 4",
      src: withBasePath(
        "/assets/gallery/48361370_210299236564253_8250954074824900608_n.jpg",
      ),
    },
    {
      id: "gallery-5",
      alt: "Фото зала 5",
      src: withBasePath(
        "/assets/gallery/48364655_211640779763432_1775172969132195840_n.jpg",
      ),
    },
    {
      id: "gallery-6",
      alt: "Фото зала 6",
      src: withBasePath(
        "/assets/gallery/48365670_211610603099783_4517800056266424320_n.jpg",
      ),
    },
    {
      id: "gallery-7",
      alt: "Фото зала 7",
      src: withBasePath(
        "/assets/gallery/48367385_210299256564251_8589051456529629184_n.jpg",
      ),
    },
    {
      id: "gallery-8",
      alt: "Фото зала 8",
      src: withBasePath(
        "/assets/gallery/48367874_211610646433112_8684141809124769792_n.jpg",
      ),
    },
    {
      id: "gallery-9",
      alt: "Фото зала 9",
      src: withBasePath(
        "/assets/gallery/48370108_211610579766452_8551497993365225472_n.jpg",
      ),
    },
    {
      id: "gallery-10",
      alt: "Фото зала 10",
      src: withBasePath(
        "/assets/gallery/48370612_209446649982845_4226478158360084480_n.jpg",
      ),
    },
    {
      id: "gallery-11",
      alt: "Фото зала 11",
      src: withBasePath(
        "/assets/gallery/48376517_208435056750671_2492549300609875968_n.jpg",
      ),
    },
    {
      id: "gallery-12",
      alt: "Фото зала 12",
      src: withBasePath(
        "/assets/gallery/48378187_210299206564256_3575113313853374464_n.jpg",
      ),
    },
    {
      id: "gallery-13",
      alt: "Фото зала 13",
      src: withBasePath(
        "/assets/gallery/48428122_212422333018610_7311131319684038656_n.jpg",
      ),
    },
    {
      id: "gallery-14",
      alt: "Фото зала 14",
      src: withBasePath(
        "/assets/gallery/48950336_216591289268381_5933605548304891904_n.jpg",
      ),
    },
    {
      id: "gallery-15",
      alt: "Фото зала 15",
      src: withBasePath(
        "/assets/gallery/48997513_219342872326556_4377075800705335296_n.jpg",
      ),
    },
    {
      id: "gallery-16",
      alt: "Фото зала 16",
      src: withBasePath(
        "/assets/gallery/49017782_219344922326351_3497099927320788992_n.jpg",
      ),
    },
    {
      id: "gallery-17",
      alt: "Фото зала 17",
      src: withBasePath(
        "/assets/gallery/49069673_219342945659882_1264448512360185856_n.jpg",
      ),
    },
    {
      id: "gallery-18",
      alt: "Фото зала 18",
      src: withBasePath("/assets/gallery/gallery-18.jpg"),
    },
    {
      id: "gallery-19",
      alt: "Фото зала 19",
      src: withBasePath(
        "/assets/gallery/49210668_219342922326551_4389755149753516032_n.jpg",
      ),
    },
    {
      id: "gallery-20",
      alt: "Фото зала 20",
      src: withBasePath(
        "/assets/gallery/49288368_219342998993210_9218853044064616448_n.jpg",
      ),
    },
  ] satisfies GalleryItem[],
} as const;

