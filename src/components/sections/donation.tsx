import { Heart, MessageCircle, Users } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

const donationTiers = [
  {
    icon: MessageCircle,
    amount: "36 ₪ / €",
    title: "Participer à une réponse personnalisée",
    description:
      "Contribuez au coût d'une réponse détaillée à une famille en questionnement.",
  },
  {
    icon: Users,
    amount: "180 ₪ / €",
    title: "Aider une famille à être accompagnée",
    description:
      "Permettez à une famille de bénéficier d'un accompagnement complet.",
    featured: true,
  },
  {
    icon: Heart,
    amount: "Don libre",
    title: "Soutenir la mission de Ner Yaalé",
    description:
      "Chaque contribution, quelle qu'elle soit, fait une différence.",
  },
];

export function DonationSection() {
  return (
    <SectionWrapper id="don" className="py-24 lg:py-32">
      <div className="relative rounded-[2rem] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-teal/80 to-navy" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-coral/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal/20 blur-3xl" />

        <div className="relative px-6 sm:px-10 lg:px-16 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <FadeIn>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-6">
                Aider une famille à choisir la bonne école, c&apos;est aider un
                enfant à réussir son Alya.
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-white/60 leading-relaxed">
                Ner Yaalé accompagne les familles grâce au soutien de
                donateurs. Chaque don permet de continuer à informer, conseiller
                et orienter des parents souvent perdus face à des décisions
                importantes.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {donationTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <FadeIn key={tier.title} delay={0.15 * index}>
                  <div
                    className={`h-full rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                      tier.featured
                        ? "bg-white/10 border-gold/30 shadow-lg shadow-gold/10"
                        : "bg-white/5 border-white/10 hover:bg-white/8"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-gold" />
                    </div>
                    <p className="text-2xl font-display font-semibold text-gold mb-2">
                      {tier.amount}
                    </p>
                    <h3 className="font-medium text-white mb-2">{tier.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.5}>
            <div className="text-center">
              <Button
                href="#"
                variant="secondary"
                size="lg"
                className="bg-gold hover:bg-gold/90"
              >
                <Heart size={18} />
                Soutenir l&apos;association
              </Button>
              <p className="text-sm text-white/30 mt-4">
                Reçu SEIF46 disponible — 35% de crédit d&apos;impôt
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
