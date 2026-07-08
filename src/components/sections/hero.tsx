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
    position: "top-4 -left-2 lg:-left-6",
    color: "bg-sky/40 border-sky/30",
    iconBg: "bg-teal/20 text-teal",
  },
  {
    icon: Users,
    label: "Intégration",
    delay: 0.2,
    position: "top-24 -right-2 lg:right-0",
    color: "bg-coral/25 border-coral/30",
    iconBg: "bg-coral/30 text-coral",
  },
  {
    icon: Languages,
    label: "Hébreu",
    delay: 0.4,
    position: "bottom-28 -left-4 lg:-left-8",
    color: "bg-gold/30 border-gold/40",
    iconBg: "bg-gold/30 text-navy",
  },
  {
    icon: Home,
    label: "Projet familial",
    delay: 0.6,
    position: "bottom-16 -right-4 lg:right-2",
    color: "bg-sage/35 border-sage/40",
    iconBg: "bg-sage/40 text-navy",
  },
  {
    icon: HeartHandshake,
    label: "Accompagnement",
    delay: 0.8,
    position: "top-1/2 -translate-y-1/2 -right-8 lg:-right-12",
    color: "bg-rose/15 border-rose/25",
    iconBg: "bg-rose/20 text-rose",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-sky/10 to-sand/40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full bg-gold/15 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] rounded-full bg-rose/8 blur-3xl" />
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
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

          {/* Photo collage + floating cards */}
          <div className="relative h-[440px] sm:h-[520px] lg:h-[580px]">
            <FadeIn delay={0.2} direction="left">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none h-full">
                {/* Main photo */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-8 w-[72%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-navy/15 border-4 border-white rotate-1">
                  <SectionImage
                    src={images.hero.main}
                    alt="Enfants dans une salle de classe en Israël"
                    fill
                    priority
                    className="hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                </div>

                {/* Secondary photo */}
                <div className="absolute bottom-12 left-0 w-[42%] aspect-square rounded-2xl overflow-hidden shadow-xl shadow-teal/20 border-[3px] border-white -rotate-3 z-10">
                  <SectionImage
                    src={images.hero.secondary}
                    alt="Famille en discussion"
                    fill
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Accent photo */}
                <div className="absolute top-16 right-0 lg:right-4 w-[35%] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-[3px] border-white rotate-6 z-10 hidden sm:block">
                  <SectionImage
                    src={images.hero.accent}
                    alt="Livres et fournitures scolaires"
                    fill
                  />
                </div>

                {/* Color badge */}
                <div className="absolute top-4 left-4 lg:left-8 z-20 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-gold/30">
                  <p className="text-2xl font-display font-bold text-teal">2014</p>
                  <p className="text-xs text-navy/60 font-medium">Depuis</p>
                </div>

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
