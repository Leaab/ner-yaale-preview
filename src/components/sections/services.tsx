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
  },
  {
    icon: UserCheck,
    title: "Évaluer les besoins de l'enfant",
    description:
      "Niveau d'hébreu, âge, caractère, parcours scolaire, sensibilité religieuse.",
  },
  {
    icon: MapPin,
    title: "Choisir une ville ou un quartier",
    description:
      "Comprendre l'impact du lieu de vie sur les options scolaires.",
  },
  {
    icon: Sparkles,
    title: "Préparer l'intégration",
    description:
      "Langue, rythme, adaptation sociale, différences culturelles.",
  },
  {
    icon: ShieldAlert,
    title: "Éviter les erreurs fréquentes",
    description:
      "Ne pas choisir uniquement selon la proximité, les amis ou une réputation générale.",
  },
  {
    icon: HeartHandshake,
    title: "Être accompagné humainement",
    description:
      "Pouvoir poser ses questions à quelqu'un qui connaît le terrain.",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeIn>
          <p className="text-sm font-medium tracking-widest uppercase text-gold mb-4">
            Nos domaines d&apos;expertise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-navy leading-tight">
            Concrètement, nous vous aidons à y voir plus clair.
          </h2>
        </FadeIn>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.title} delay={0.08 * index}>
              <div className="group h-full bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-navy/5 hover:border-sage/30 hover:shadow-lg hover:shadow-sage/10 hover:-translate-y-1 transition-all duration-500">
                <div className="w-11 h-11 rounded-xl bg-ivory flex items-center justify-center mb-5 group-hover:bg-sage/20 transition-colors">
                  <Icon size={20} className="text-navy/60" />
                </div>
                <h3 className="font-medium text-navy mb-2 leading-snug">
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
    </SectionWrapper>
  );
}
