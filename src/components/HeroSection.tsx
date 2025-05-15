
import { useState, useEffect } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  images: string[];
  height?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  images,
  height = "h-[70vh] md:h-[80vh]"
}: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className={`relative ${height} overflow-hidden`}>
      {/* Image Slider */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        </div>
      ))}
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in font-serif tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl animate-fade-in mb-8" style={{ animationDelay: "0.3s" }}>
            {subtitle}
          </p>
        )}
        <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a href="/contact" className="button-primary text-lg">
            Book Your Stay
          </a>
        </div>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
