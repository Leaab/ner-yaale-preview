"use client";

import { Ear, Search, Compass } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    number: "01",
    icon: Ear,
    title: "On écoute votre histoire",
    description:
      "Votre projet d'Alya, vos enfants, vos attentes, vos inquiétudes.",
  },
  {
    number: "02",
    icon: Search,
    title: "On clarifie les options",
    description:
      "Types d'écoles, niveau religieux, intégration, langue, rythme, environnement.",
  },
  {
    number: "03",
    icon: Compass,
    title: "On vous aide à avancer",
    description:
      "Vous repartez avec une vision plus claire et des pistes concrètes.",
  },
];

export function SolutionSection() {
  return (
    <SectionWrapper id="accompagnement" className="py-24 lg:py-32">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sand/20 to-transparent pointer-events-none" />

      <div className="relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn>
            <p className="text-sm font-medium tracking-widest uppercase text-gold mb-4">
              Notre accompagnement
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-navy leading-tight mb-6">
              Ner Yaalé aide les parents à poser les bonnes questions avant de
              choisir.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-navy/65 leading-relaxed">
              Nous écoutons votre famille, comprenons votre enfant, clarifions
              votre projet d&apos;Alya, expliquons les options scolaires et
              guidons vos décisions — pour éviter les erreurs douloureuses.
            </p>
          </FadeIn>
        </div>

        {/* 3-step process */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px">
            <svg className="w-full h-8" preserveAspectRatio="none">
              <line
                x1="0"
                y1="4"
                x2="100%"
                y2="4"
                stroke="#EADDCB"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={step.number} delay={0.2 * index}>
                  <div className="relative text-center">
                    {/* Step number circle */}
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md shadow-navy/8 border border-sand mb-8 mx-auto">
                      <Icon size={28} className="text-navy/60" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-navy text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-navy/60 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
