import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionImage } from "@/components/ui/section-image";
import { images } from "@/lib/images";

/** Warm photo mosaic — school life & family moments */
export function PhotoGallerySection() {
  return (
    <SectionWrapper className="py-16 lg:py-20">
      <FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 md:auto-rows-[180px] lg:auto-rows-[200px]">
          {images.gallery.map((src, index) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl shadow-md border-2 border-white group min-h-[140px] ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <SectionImage
                src={src}
                alt={`Moment de vie scolaire et familiale ${index + 1}`}
                fill
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none ${
                  index % 4 === 0
                    ? "bg-teal/40"
                    : index % 4 === 1
                      ? "bg-coral/30"
                      : index % 4 === 2
                        ? "bg-gold/30"
                        : "bg-sage/35"
                }`}
              />
            </div>
          ))}
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
