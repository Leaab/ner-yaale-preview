import { Layers, Users, Clock } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { images } from "@/lib/images";

const problemCards = [
  {
    icon: Layers,
    title: "Un système différent",
    description:
      "Le système scolaire israélien a ses propres codes, ses filières et ses subtilités.",
    accent: "from-sky/30 to-teal/20",
    iconBg: "bg-teal/15 text-teal",
    border: "hover:border-teal/30",
  },
  {
    icon: Users,
    title: "Un choix qui engage toute la famille",
    description:
      "L'école influence les amis, l'hébreu, l'intégration et l'équilibre de l'enfant.",
    accent: "from-coral/25 to-rose/15",
    iconBg: "bg-coral/20 text-coral",
    border: "hover:border-coral/30",
  },
  {
    icon: Clock,
    title: "Des décisions souvent prises trop vite",
    description:
      "Beaucoup de parents choisissent selon le quartier ou les recommandations d'amis, sans vision complète.",
    accent: "from-gold/25 to-sand/40",
    iconBg: "bg-gold/25 text-navy",
    border: "hover:border-gold/40",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        <div>
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-coral mb-4">
              Le défi
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight mb-6 tracking-tight">
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

        <FadeIn delay={0.15} direction="left">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-navy/10 border-4 border-white">
            <SectionImage
              src={images.problem}
              alt="Vue de Jérusalem — contexte de vie en Israël"
              fill
              className="hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-teal/20" />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3">
              <p className="text-sm font-medium text-navy">
                Chaque quartier, chaque ville — des options scolaires différentes
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {problemCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <FadeIn key={card.title} delay={0.15 * index}>
              <div
                className={`group h-full bg-gradient-to-br ${card.accent} rounded-3xl p-8 shadow-sm border border-white/60 ${card.border} hover:shadow-lg hover:-translate-y-1 transition-all duration-500`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${card.iconBg}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  {card.title}
                </h3>
                <p className="text-navy/65 leading-relaxed">{card.description}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
