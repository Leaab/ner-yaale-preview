import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { images } from "@/lib/images";

export function EmotionalSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-sand/30 to-coral/10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-coral/12 blur-3xl" />
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />

      <SectionWrapper className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl shadow-teal/20 border-4 border-white">
                <SectionImage
                  src={images.emotional}
                  alt="Enfants apprenant ensemble"
                  fill
                  className="hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent" />
              </div>
              {/* Floating color chips */}
              <div className="absolute -bottom-4 -right-4 lg:right-8 bg-gold text-navy font-display font-bold text-lg px-5 py-3 rounded-2xl shadow-lg rotate-2">
                Un cadre de vie
              </div>
              <div className="absolute -top-3 -left-3 bg-teal text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                Intégration
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <span className="inline-block text-sm font-semibold uppercase tracking-wide text-teal mb-4">
                Notre conviction
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy leading-[1.15] mb-8 tracking-tight">
                Parce qu&apos;une école, ce n&apos;est pas seulement une classe.
                <br />
                <span className="text-teal">C&apos;est un cadre de vie.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg sm:text-xl text-navy/65 leading-relaxed">
                Pour un enfant qui fait son Alya, l&apos;école devient souvent le
                premier lieu d&apos;intégration, d&apos;amitié, de langue, de
                confiance et d&apos;identité. C&apos;est pourquoi ce choix mérite
                d&apos;être accompagné avec sérieux, sensibilité et expérience.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                {["Amitié", "Langue", "Confiance", "Identité"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white/80 border border-teal/20 text-teal shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
