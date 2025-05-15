
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import RoomCard from "@/components/RoomCard";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  // Images for hero slider
  const heroImages = [
    "/lovable-uploads/b54d1fc7-64a8-4f41-b693-684bc2f4f76b.png",
    "/lovable-uploads/c2017536-77ea-4a4f-9a57-c07e155f46b4.png",
  ];
  
  // Room data
  const rooms = [
    {
      title: "Standard Two-Bedroom Apartment",
      description: "Spacious apartment with two bedrooms, living area, dining space, and cooking facilities. Perfect for families and small groups.",
      image: "/lovable-uploads/ca8fc3df-1141-4e4d-89a4-2d1b6479e628.png",
      capacity: 4,
      features: ["Two bedrooms", "Living & dining area", "Cooking space", "Free WiFi", "Air conditioning"]
    },
    {
      title: "Deluxe Two-Bedroom Apartment",
      description: "Premium apartment featuring two spacious bedrooms, an elegant living room, dining area, and fully-equipped cooking space.",
      image: "/lovable-uploads/49e52e68-cb4f-437a-a929-ddc2da125079.png",
      capacity: 4,
      features: ["Two bedrooms", "Enhanced living space", "Full kitchen", "Premium amenities", "Airport view"]
    },
    {
      title: "Extended Family Suite",
      description: "Our largest offering with an additional attached single bedroom, perfect for larger families or groups requiring extra space.",
      image: "/lovable-uploads/135e6e68-4c7b-4c80-a6c3-c3fcc8a45fce.png",
      capacity: 5,
      features: ["Three bedrooms", "Expanded living area", "Full kitchen", "Extra storage", "Multiple bathrooms"]
    }
  ];
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout noTopPadding>
      {/* Hero Section */}
      <HeroSection 
        title="Dreams Arcade"
        subtitle="Experience comfort and luxury near Cochin International Airport"
        images={heroImages}
      />
      
      {/* Quick Info Section */}
      <section className="bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <MapPin className="w-5 h-5 mr-2 text-hotel-green" />
              <p className="text-sm">
                Near Quality Airport Hotel, Nedumbassery, Kochi
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Link 
                to="/rooms" 
                className="button-primary"
              >
                Book Now
              </Link>
              <a 
                href="https://maps.google.com/?q=10.165350,76.394600" 
                target="_blank" 
                rel="noreferrer"
                className="button-secondary"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to <span className="text-hotel-green">Dreams Arcade</span></h2>
              <p className="text-gray-600 mb-6">
                Dreams Arcade is a premium hotel strategically located near Cochin International Airport, 
                designed to cater to both business and leisure travelers. Our modern and spacious apartments 
                provide the perfect blend of comfort, convenience, and personalized service.
              </p>
              <p className="text-gray-600 mb-8">
                Each of our fully furnished apartments features comfortable bedrooms, a welcoming living area, 
                convenient dining space, and practical cooking facilities. Whether you're staying for a night or 
                an extended period, Dreams Arcade offers a home away from home experience.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center button-primary"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/870cde52-feca-4b2a-81e8-379f5399c247.png" 
                  alt="Dreams Arcade Interior" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-lg mt-6">
                <img 
                  src="/lovable-uploads/ca8fc3df-1141-4e4d-89a4-2d1b6479e628.png" 
                  alt="Dreams Arcade Room" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/49e52e68-cb4f-437a-a929-ddc2da125079.png" 
                  alt="Dreams Arcade Bedroom" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-lg mt-6">
                <img 
                  src="/lovable-uploads/135e6e68-4c7b-4c80-a6c3-c3fcc8a45fce.png" 
                  alt="Dreams Arcade Twin Room" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Rooms */}
      <section className="py-16 bg-hotel-cream/30">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Our Accommodations</h2>
          <p className="section-subheading">
            Discover our spacious and well-appointed apartments designed for your comfort
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                title={room.title}
                description={room.description}
                image={room.image}
                capacity={room.capacity}
                features={room.features}
                delay={index + 1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/rooms" className="button-primary">
              View All Apartments
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Call to Action */}
      <section className="py-16 bg-hotel-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading">Ready to Experience Dreams Arcade?</h2>
          <p className="section-subheading">
            Book your stay now for a comfortable and convenient experience near Cochin International Airport
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rooms" className="button-primary">
              Book Your Stay
            </Link>
            <Link to="/contact" className="button-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
