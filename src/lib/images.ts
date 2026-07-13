/** Local images — stored in /public/images for reliable loading */
export const images = {
  hero: {
    main: "/images/hero-main.jpg",
    secondary: "/images/hero-secondary.jpg",
    accent: "/images/hero-accent.jpg",
    topRight: "/images/hero-top-right.jpg",
    bottomRight: "/images/hero-bottom-right.jpg",
  },
  emotional: "/images/emotional.jpg",
  problem: "/images/problem.jpg",
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
  ],
  testimonials: [
    "/images/testimonial-1.jpg",
    "/images/testimonial-2.jpg",
    "/images/testimonial-3.jpg",
  ],
} as const;
