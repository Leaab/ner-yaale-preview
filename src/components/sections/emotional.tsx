import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

export function EmotionalSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Warm full-width background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand/40 via-ivory to-sky/10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-navy/10 to-transparent" />
      <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-gold/8 blur-3xl" />
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 rounded-full bg-sage/10 blur-3xl" />

      <SectionWrapper className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block mb-8">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="#D8A84F"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <path
                  d="M24 14C24 14 18 20 18 26C18 29.3 20.7 32 24 32C27.3 32 30 29.3 30 26C30 20 24 14 24 14Z"
                  fill="#D8A84F"
                  opacity="0.4"
                />
              </svg>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-[1.2] mb-8">
              Parce qu&apos;une école, ce n&apos;est pas seulement une classe.
              <br />
              <span className="text-navy/50">C&apos;est un cadre de vie.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-navy/65 leading-relaxed max-w-2xl mx-auto">
              Pour un enfant qui fait son Alya, l&apos;école devient souvent le
              premier lieu d&apos;intégration, d&apos;amitié, de langue, de
              confiance et d&apos;identité. C&apos;est pourquoi ce choix mérite
              d&apos;être accompagné avec sérieux, sensibilité et expérience.
            </p>
          </FadeIn>

          {/* Decorative quote marks */}
          <FadeIn delay={0.3}>
            <div className="mt-12 flex justify-center gap-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gold/40"
                  style={{ opacity: 1 - i * 0.25 }}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>
    </section>
  );
}
