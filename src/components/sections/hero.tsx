"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Languages,
  Home,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { images } from "@/lib/images";

const floatingCards = [
  {
    icon: GraduationCap,
    label: "Choix d'école",
    delay: 0,
    position: "top-[18%] left-[2%] lg:left-[0%]",
    color: "bg-sky/40 border-sky/30",
    iconBg: "bg-teal/20 text-teal",
  },
  {
    icon: Users,
    label: "Intégration",
    delay: 0.2,
    position: "top-[8%] right-[28%]",
    color: "bg-coral/25 border-coral/30",
    iconBg: "bg-coral/30 text-coral",
  },
  {
    icon: Languages,
    label: "Hébreu",
    delay: 0.4,
    position: "bottom-[38%] left-[0%]",
    color: "bg-gold/30 border-gold/40",
    iconBg: "bg-gold/30 text-navy",
  },
  {
    icon: Home,
    label: "Projet familial",
    delay: 0.6,
    position: "top-[6%] right-[2%]",
    color: "bg-sage/35 border-sage/40",
    iconBg: "bg-sage/40 text-navy",
  },
  {
    icon: HeartHandshake,
    label: "Accompagnement",
    delay: 0.8,
    position: "bottom-[12%] right-[4%]",
    color: "bg-rose/15 border-rose/25",
    iconBg: "bg-rose/20 text-rose",
  },
];

function PhotoTile({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg border-[3px] border-white ${className ?? ""}`}
    >
      <SectionImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="hover:scale-105 transition-transform duration-700"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-sky/10 to-sand/40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-gold/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          <div className="max-w-xl">
            <FadeIn>
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-teal mb-6 px-4 py-1.5 rounded-full bg-teal/10 border border-teal/20">
                <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                Mon école en Israël
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] font-bold text-navy mb-6 tracking-tight">
                L&apos;Alya de vos enfants commence par le{" "}
                <span className="relative text-teal">
                  bon choix d&apos;école
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M2 6C50 2 150 2 198 6"
                      stroke="#D8A84F"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>
                </span>
                .
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-navy/70 leading-relaxed mb-8">
                Ner Yaalé accompagne les familles francophones dans le choix
                des écoles en Israël, pour aider chaque enfant à trouver un
                cadre adapté à son niveau, son identité et son projet familial.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-start gap-3 sm:gap-4 mb-8">
                <Button href="#contact" size="lg">
                  Poser une question
                </Button>
                <Button href="#accompagnement" variant="outline" size="lg">
                  Comprendre notre accompagnement
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-sm text-navy/55 flex items-center gap-2 font-medium">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sage/30 text-teal text-xs font-bold">
                  ✓
                </span>
                + de 1000 familles accompagnées depuis 2014
              </p>
            </FadeIn>
          </div>

          {/* Bento photo collage — fills the full right column */}
          <div className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[580px]">
            <FadeIn delay={0.2} direction="left">
              <div className="relative w-full h-full min-h-[inherit]">
                {/* 5-photo bento grid */}
                <div className="grid grid-cols-12 grid-rows-6 gap-2.5 sm:gap-3 w-full h-[480px] sm:h-[540px] lg:h-[580px]">
                  {/* Main — classroom */}
                  <PhotoTile
                    src={images.hero.main}
                    alt="Enfants dans une salle de classe en Israël"
                    priority
                    className="col-span-7 row-span-5 col-start-4 row-start-2 rotate-1 shadow-2xl shadow-navy/15 rounded-3xl"
                  />

                  {/* Top-left — family discussion */}
                  <PhotoTile
                    src={images.hero.secondary}
                    alt="Famille en discussion"
                    className="col-span-5 row-span-3 col-start-1 row-start-1 -rotate-2 shadow-xl shadow-teal/20"
                  />

                  {/* Top-right — children at school */}
                  <PhotoTile
                    src={images.hero.topRight}
                    alt="Enfants à l'école"
                    className="col-span-4 row-span-2 col-start-9 row-start-1 rotate-2"
                  />

                  {/* Middle-right — school supplies */}
                  <PhotoTile
                    src={images.hero.accent}
                    alt="Fournitures et apprentissage scolaire"
                    className="col-span-4 row-span-3 col-start-9 row-start-3 -rotate-1"
                  />

                  {/* Bottom-left — fills gap below family photo */}
                  <PhotoTile
                    src={images.hero.bottomRight}
                    alt="Moment de vie familiale"
                    className="col-span-5 row-span-3 col-start-1 row-start-4 rotate-1"
                  />
                </div>

                {/* Gradient overlay on main photo area */}
                <div className="absolute top-[12%] left-[28%] w-[55%] h-[68%] rounded-3xl pointer-events-none bg-gradient-to-t from-navy/25 via-transparent to-transparent rotate-1" />

                {/* Since 2014 badge */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-gold/30">
                  <p className="text-2xl font-display font-bold text-teal">2014</p>
                  <p className="text-xs text-navy/60 font-medium">Depuis</p>
                </div>

                {/* Floating topic cards — anchored near photos */}
                {floatingCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={card.label}
                      className={`absolute ${card.position} z-20 hidden md:block`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5 + card.delay,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <motion.div
                        className={`${card.color} backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border flex items-center gap-2.5 cursor-default`}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 4 + index * 0.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: card.delay,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center ${card.iconBg}`}
                        >
                          <Icon size={18} />
                        </div>
                        <span className="text-sm font-semibold text-navy whitespace-nowrap">
                          {card.label}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
