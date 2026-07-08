import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="relative rounded-[2rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/15 via-sand/40 to-coral/15" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-teal/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute inset-4 rounded-[1.5rem] border border-teal/15 pointer-events-none" />

        <div className="relative px-6 sm:px-12 lg:px-20 py-16 lg:py-24 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6 max-w-3xl mx-auto tracking-tight">
              Vous préparez votre Alya avec des enfants ?
              <br />
              <span className="text-teal">
                Ne choisissez pas l&apos;école seuls.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-navy/65 leading-relaxed max-w-xl mx-auto mb-10">
              Posez votre question à Ner Yaalé et avancez avec plus de clarté,
              de sérénité et de confiance.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" size="lg">
                Poser une question
                <ArrowRight size={18} />
              </Button>
              <Button href="#don" variant="outline" size="lg">
                Faire un don
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
