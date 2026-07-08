import { Layers, Users, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

const problemCards = [
  {
    icon: Layers,
    title: "Un système différent",
    description:
      "Le système scolaire israélien a ses propres codes, ses filières et ses subtilités.",
  },
  {
    icon: Users,
    title: "Un choix qui engage toute la famille",
    description:
      "L'école influence les amis, l'hébreu, l'intégration et l'équilibre de l'enfant.",
  },
  {
    icon: Clock,
    title: "Des décisions souvent prises trop vite",
    description:
      "Beaucoup de parents choisissent selon le quartier ou les recommandations d'amis, sans vision complète.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-navy leading-tight mb-6">
            Choisir une école en Israël ne se fait pas comme en France.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-lg text-navy/65 leading-relaxed">
            Beaucoup de familles arrivent avec de bonnes intentions, mais sans
            comprendre les différentes filières scolaires, les codes culturels,
            les nuances religieuses, l&apos;environnement social, l&apos;écart
            linguistique et l&apos;impact de l&apos;école sur l&apos;intégration
            de l&apos;enfant.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {problemCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <FadeIn key={card.title} delay={0.15 * index}>
              <div className="group h-full bg-white rounded-3xl p-8 shadow-sm shadow-navy/5 border border-navy/5 hover:shadow-lg hover:shadow-navy/8 hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-sand/50 flex items-center justify-center mb-6 group-hover:bg-sand/70 transition-colors">
                  <Icon size={22} className="text-navy/70" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-navy/60 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
