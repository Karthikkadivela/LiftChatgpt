import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@assets/generated_images/luxury_glass_elevator_lobby.png";
import heroImage2 from "@assets/generated_images/futuristic_control_panel_closeup.png";
import heroImage3 from "@assets/generated_images/industrial_elevator_shaft_upward.png";
import heroImage4 from "@assets/generated_images/residential_elevator_modern_interior.png";
import heroImage5 from "@assets/generated_images/service_technician_with_tablet.png";

const slides = [
  {
    id: 1,
    image: heroImage1,
    title: "Elevating Excellence",
    subtitle: "Premium elevator solutions for modern buildings",
    cta: "Explore Products",
    ctaLink: "#products",
  },
  {
    id: 2,
    image: heroImage2,
    title: "Smart Technology",
    subtitle: "Advanced control systems powered by AI",
    cta: "Learn More",
    ctaLink: "#company",
  },
  {
    id: 3,
    image: heroImage3,
    title: "Precision Engineering",
    subtitle: "Industrial-grade elevators built to last",
    cta: "View Solutions",
    ctaLink: "#industries",
  },
  {
    id: 4,
    image: heroImage4,
    title: "Residential Luxury",
    subtitle: "Elegant home elevator systems",
    cta: "Discover More",
    ctaLink: "#products",
  },
  {
    id: 5,
    image: heroImage5,
    title: "24/7 Support",
    subtitle: "Expert service and maintenance worldwide",
    cta: "Contact Us",
    ctaLink: "/contact",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full h-[85vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">{slide.subtitle}</p>
                <a href={slide.ctaLink} onClick={(e) => handleCtaClick(e, slide.ctaLink)}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground backdrop-blur-sm text-lg px-8"
                    data-testid={`button-hero-cta-${index}`}
                  >
                    {slide.cta}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover-elevate active-elevate-2 transition-all z-10"
        aria-label="Previous slide"
        data-testid="button-slider-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover-elevate active-elevate-2 transition-all z-10"
        aria-label="Next slide"
        data-testid="button-slider-next"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-12 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`button-slider-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
