import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { images } from "@/lib/images";

const testimonials = [
  {
    quote:
      "Nous étions complètement perdus entre les écoles, les quartiers et les avis contradictoires. Ner Yaalé nous a aidés à comprendre ce qui correspondait vraiment à notre fils.",
    author: "Famille C.",
    location: "Jérusalem",
    accent: "border-teal/20 bg-teal/5",
    dot: "bg-teal",
  },
  {
    quote:
      "Avant de contacter Ner Yaalé, nous avions choisi une école par recommandation d'amis. L'accompagnement nous a permis de réaliser que ce n'était pas adapté à notre projet familial.",
    author: "Famille M.",
    location: "Raanana",
    accent: "border-coral/20 bg-coral/5",
    dot: "bg-coral",
  },
  {
    quote:
      "Ce qui nous a le plus aidés, c'est d'avoir quelqu'un qui connaît vraiment le terrain israélien et qui prend le temps d'écouter nos inquiétudes sans nous juger.",
    author: "Famille B.",
    location: "Ashdod",
    accent: "border-gold/30 bg-gold/5",
    dot: "bg-gold",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper id="temoignages" className="py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-sky/10 via-transparent to-sand/20 pointer-events-none" />

      <div className="relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <span className="inline-block text-sm font-semibold uppercase tracking-wide text-rose mb-4">
              Témoignages
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy leading-tight tracking-tight">
              Ils ont préparé leur Alya avec plus de clarté.
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={0.15 * index}>
              <div
                className={`h-full rounded-3xl p-8 shadow-sm border ${testimonial.accent} flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
                    <SectionImage
                      src={images.testimonials[index]}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Quote size={20} className="text-navy/20" aria-hidden="true" />
                </div>
                <blockquote className="text-navy/75 leading-relaxed flex-grow mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="border-t border-navy/8 pt-6 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${testimonial.dot}`} />
                  <div>
                    <p className="font-semibold text-navy">{testimonial.author}</p>
                    <p className="text-sm text-navy/45">{testimonial.location}</p>
                  </div>
                </footer>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-center text-sm text-navy/40 mt-10">
            Témoignages anonymisés pour préserver la confidentialité des
            familles.
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
