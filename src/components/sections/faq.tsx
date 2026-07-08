import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "À quel moment faut-il contacter Ner Yaalé ?",
    answer:
      "Le plus tôt possible dans votre projet d'Alya — idéalement plusieurs mois avant votre arrivée. Mais il n'est jamais trop tard : nous accompagnons aussi les familles déjà installées qui envisagent un changement d'école.",
  },
  {
    question:
      "Est-ce utile même si nous ne savons pas encore dans quelle ville vivre ?",
    answer:
      "Absolument. Le choix de la ville et le choix de l'école sont souvent liés. Nous pouvons vous aider à comprendre comment ces deux décisions s'articulent, même si vous n'avez pas encore fixé votre lieu de résidence.",
  },
  {
    question: "Aidez-vous aussi les familles déjà installées en Israël ?",
    answer:
      "Oui. De nombreuses familles nous contactent après leur installation, lorsqu'elles réalisent que l'école choisie ne correspond pas à leurs attentes. Nous les aidons à explorer les alternatives.",
  },
  {
    question: "Pouvez-vous recommander une école précise ?",
    answer:
      "Nous ne recommandons pas une école en particulier. Notre rôle est de vous donner les clés pour comprendre les options et faire un choix éclairé qui correspond à votre famille — pas de vous imposer une décision.",
  },
  {
    question: "Comment soutenir l'association ?",
    answer:
      "Ner Yaalé est une association bénévole qui fonctionne grâce aux dons. Vous pouvez faire un don ponctuel ou régulier. Chaque contribution permet de continuer à accompagner les familles. Un reçu SEIF46 est délivré pour bénéficier de 35% de crédit d'impôt.",
  },
];

export function FAQSection() {
  return (
    <SectionWrapper id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy leading-tight">
              Les questions que les parents se posent souvent
            </h2>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
