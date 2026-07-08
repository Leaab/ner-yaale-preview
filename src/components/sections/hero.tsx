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

const floatingCards = [
  {
    icon: GraduationCap,
    label: "Choix d'école",
    delay: 0,
    position: "top-8 right-4 lg:right-8",
    color: "bg-white",
  },
  {
    icon: Users,
    label: "Intégration",
    delay: 0.2,
    position: "top-32 right-24 lg:right-32",
    color: "bg-sand/60",
  },
  {
    icon: Languages,
    label: "Hébreu",
    delay: 0.4,
    position: "top-56 right-8 lg:right-16",
    color: "bg-sky/30",
  },
  {
    icon: Home,
    label: "Projet familial",
    delay: 0.6,
    position: "bottom-32 right-20 lg:right-28",
    color: "bg-sage/30",
  },
  {
    icon: HeartHandshake,
    label: "Accompagnement personnalisé",
    delay: 0.8,
    position: "bottom-12 right-4 lg:right-12",
    color: "bg-gold/20",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-ivory via-ivory to-sand/30" />

        {/* Blurred gradient circles */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-sky/20 blur-3xl" />
        <div className="absolute top-1/2 -left-48 w-[400px] h-[400px] rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/10 blur-3xl" />

        {/* Abstract map lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#123047"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Notebook line decoration */}
        <div className="absolute left-12 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-navy/5 to-transparent hidden lg:block" />
        <div className="absolute left-16 top-1/4 space-y-8 hidden lg:block">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-32 h-px bg-navy/5" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="max-w-xl">
            <FadeIn>
              <p className="text-sm font-medium tracking-widest uppercase text-gold mb-6">
                Mon école en Israël
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] font-semibold text-navy mb-6">
                L&apos;Alya de vos enfants commence par le{" "}
                <span className="relative">
                  bon choix d&apos;école
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M2 6C50 2 150 2 198 6"
                      stroke="#D8A84F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.5"
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
              <p className="text-sm text-navy/50 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-sage" />
                + de 1000 familles accompagnées depuis 2014
              </p>
            </FadeIn>
          </div>

          {/* Right: Floating cards */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] hidden sm:block">
            {/* Central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-sky/20 to-sage/20 blur-2xl" />

            {floatingCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  className={`absolute ${card.position} z-10`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + card.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div
                    className={`${card.color} backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg shadow-navy/5 border border-white/60 flex items-center gap-3 cursor-default`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: card.delay,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(18, 48, 71, 0.1)",
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center">
                      <Icon size={20} className="text-navy/70" />
                    </div>
                    <span className="text-sm font-medium text-navy whitespace-nowrap">
                      {card.label}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-navy/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-dashed border-navy/[0.03]" />
          </div>
        </div>
      </div>
    </section>
  );
}
