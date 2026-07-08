import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { images } from "@/lib/images";

/** Warm photo mosaic — school life & family moments */
export function PhotoGallerySection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          {images.gallery.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl shadow-md border-2 border-white group ${
                index === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full" : "aspect-[4/3]"
              }`}
            >
              <SectionImage
                src={src}
                alt={`Moment de vie scolaire et familiale ${index + 1}`}
                fill
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity ${
                  index % 4 === 0
                    ? "bg-teal/30"
                    : index % 4 === 1
                      ? "bg-coral/25"
                      : index % 4 === 2
                        ? "bg-gold/25"
                        : "bg-sage/30"
                }`}
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
