import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { Pricing } from "@/components/sections/Pricing";
import { LeadForm } from "@/components/sections/LeadForm";
import { Gallery } from "@/components/sections/Gallery";
import { Trainers } from "@/components/sections/Trainers";
import { Reviews } from "@/components/sections/Reviews";
import { Contacts } from "@/components/sections/Contacts";

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-jfc-bg">
      <Header />
      <main id="main">
        <Hero />

        <Marquee />
        <About />
        <Benefits />

        <Marquee items={["Тренировки", "Техника", "Результат"]} />
        <Pricing />
        <LeadForm />
        <Gallery />
        <Marquee items={["Экспертность", "Система", "Прогресс"]} />
        <Trainers />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
