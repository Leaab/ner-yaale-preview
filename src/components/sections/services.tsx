import {
  School,
  UserCheck,
  MapPin,
  Sparkles,
  ShieldAlert,
  HeartHandshake,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

const services = [
  {
    icon: School,
    title: "Comprendre les types d'écoles",
    description:
      "Mamlakhti, Mamad, Torani, Harédi, francophone, israélien : comprendre les différences.",
    iconBg: "bg-teal/15 text-teal",
    cardBg: "hover:bg-teal/5 hover:border-teal/25",
  },
  {
    icon: UserCheck,
    title: "Évaluer les besoins de l'enfant",
    description:
      "Niveau d'hébreu, âge, caractère, parcours scolaire, sensibilité religieuse.",
    iconBg: "bg-coral/15 text-coral",
    cardBg: "hover:bg-coral/5 hover:border-coral/25",
  },
  {
    icon: MapPin,
    title: "Choisir une ville ou un quartier",
    description:
      "Comprendre l'impact du lieu de vie sur les options scolaires.",
    iconBg: "bg-gold/20 text-navy",
    cardBg: "hover:bg-gold/5 hover:border-gold/30",
  },
  {
    icon: Sparkles,
    title: "Préparer l'intégration",
    description:
      "Langue, rythme, adaptation sociale, différences culturelles.",
    iconBg: "bg-sky/30 text-teal",
    cardBg: "hover:bg-sky/10 hover:border-sky/30",
  },
  {
    icon: ShieldAlert,
    title: "Éviter les erreurs fréquentes",
    description:
      "Ne pas choisir uniquement selon la proximité, les amis ou une réputation générale.",
    iconBg: "bg-rose/15 text-rose",
    cardBg: "hover:bg-rose/5 hover:border-rose/25",
  },
  {
    icon: HeartHandshake,
    title: "Être accompagné humainement",
    description:
      "Pouvoir poser ses questions à quelqu'un qui connaît le terrain.",
    iconBg: "bg-sage/30 text-navy",
    cardBg: "hover:bg-sage/10 hover:border-sage/35",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-mint/15 to-transparent pointer-events-none" />

      <div className="relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-teal mb-4">
              Nos domaines d&apos;expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight tracking-tight">
              Concrètement, nous vous aidons à y voir plus clair.
            </h2>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={0.08 * index}>
                <div
                  className={`group h-full bg-white rounded-2xl p-7 border border-navy/8 shadow-sm ${service.cardBg} hover:shadow-lg hover:-translate-y-1 transition-all duration-500`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.iconBg}`}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-navy mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-navy/55 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
