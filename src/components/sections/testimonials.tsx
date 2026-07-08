import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";

const testimonials = [
  {
    quote:
      "Nous étions complètement perdus entre les écoles, les quartiers et les avis contradictoires. Ner Yaalé nous a aidés à comprendre ce qui correspondait vraiment à notre fils.",
    author: "Famille C.",
    location: "Jérusalem",
  },
  {
    quote:
      "Avant de contacter Ner Yaalé, nous avions choisi une école par recommandation d'amis. L'accompagnement nous a permis de réaliser que ce n'était pas adapté à notre projet familial.",
    author: "Famille M.",
    location: "Raanana",
  },
  {
    quote:
      "Ce qui nous a le plus aidés, c'est d'avoir quelqu'un qui connaît vraiment le terrain israélien et qui prend le temps d'écouter nos inquiétudes sans nous juger.",
    author: "Famille B.",
    location: "Ashdod",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper id="temoignages" className="py-24 lg:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-sand/15 to-transparent pointer-events-none" />

      <div className="relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-navy leading-tight">
              Ils ont préparé leur Alya avec plus de clarté.
            </h2>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={0.15 * index}>
              <div className="h-full bg-white rounded-3xl p-8 shadow-sm shadow-navy/5 border border-navy/5 flex flex-col">
                <Quote
                  size={28}
                  className="text-gold/40 mb-6 shrink-0"
                  aria-hidden="true"
                />
                <blockquote className="text-navy/75 leading-relaxed flex-grow mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <footer className="border-t border-navy/5 pt-6">
                  <p className="font-medium text-navy">{testimonial.author}</p>
                  <p className="text-sm text-navy/45">{testimonial.location}</p>
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
