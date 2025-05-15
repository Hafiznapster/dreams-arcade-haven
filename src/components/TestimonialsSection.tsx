
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    location: "Business Traveler",
    rating: 5,
    text: "The apartments were spacious and well-maintained. The proximity to the airport made my business trip so much more convenient. Highly recommended for both short and long stays!"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    location: "Family Vacation",
    rating: 5,
    text: "We stayed as a family of 4 and found the apartment perfect for our needs. The staff was exceptionally helpful, and the amenities were exactly what we needed for a comfortable stay."
  },
  {
    id: 3,
    name: "Michael Chen",
    location: "Solo Traveler",
    rating: 4,
    text: "Great location near the airport with clean rooms and friendly staff. The WiFi was fast, and the room service was prompt. Will definitely return on my next visit to Cochin."
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    location: "Weekend Getaway",
    rating: 5,
    text: "Dreams Arcade exceeded my expectations. The apartments are beautifully maintained with all the amenities you need. The staff went above and beyond to make our stay special."
  }
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-hotel-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Guest Experiences</h2>
        <p className="section-subheading">
          What our guests have to say about their stay with us
        </p>
        
        <div className="relative max-w-4xl mx-auto mt-16">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-8 shadow-lg">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.text}"</p>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToPrevSlide}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-hotel-green/10 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-hotel-dark" />
          </button>
          
          <button 
            onClick={goToNextSlide}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-hotel-green/10 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-hotel-dark" />
          </button>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "bg-hotel-green w-6" : "bg-hotel-green/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
