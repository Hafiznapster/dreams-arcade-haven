
import { useEffect } from "react";
import { BedDouble, Wifi, Users, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";

interface RoomDetailProps {
  title: string;
  description: string;
  capacity: number;
  amenities: string[];
  features: string[];
  images: string[];
  reverse?: boolean;
}

const RoomDetail = ({ 
  title, 
  description, 
  capacity, 
  amenities, 
  features,
  images,
  reverse = false
}: RoomDetailProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <div className={`${reverse ? 'lg:order-2 animate-fade-in-right' : 'animate-fade-in-left'}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1 text-hotel-green" />
            <span>Apartment</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1 text-hotel-green" />
            <span>Up to {capacity} guests</span>
          </div>
          <div className="flex items-center">
            <Wifi className="w-4 h-4 mr-1 text-hotel-green" />
            <span>Free WiFi</span>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Room Amenities:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Check className="w-4 h-4 mr-2 text-hotel-green" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Features & Services:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Check className="w-4 h-4 mr-2 text-hotel-green" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className={`${reverse ? 'lg:order-1 animate-fade-in-left' : 'animate-fade-in-right'} grid grid-cols-2 gap-4`}>
        {images.slice(0, 2).map((image, index) => (
          <div key={index} className={`overflow-hidden rounded-lg ${index === 1 ? 'mt-6' : ''}`}>
            <img 
              src={image} 
              alt={`${title} - Image ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
            />
          </div>
        ))}
        {images.length > 2 && (
          <div className="col-span-2 overflow-hidden rounded-lg mt-4">
            <img 
              src={images[2]} 
              alt={`${title} - Image 3`} 
              className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

const Rooms = () => {
  const heroImage = ["/lovable-uploads/ca8fc3df-1141-4e4d-89a4-2d1b6479e628.png"];
  
  const roomTypes = [
    {
      title: "Standard Two-Bedroom Apartment",
      description: "Our spacious standard two-bedroom apartments offer the perfect blend of comfort and functionality. Each apartment features two well-appointed bedrooms, a cozy living area for relaxation, a convenient dining space, and a practical cooking area. Designed with both short and extended stays in mind, these apartments comfortably accommodate up to 4 guests, making them ideal for families, friends traveling together, or business colleagues.",
      capacity: 4,
      amenities: [
        "Two comfortable bedrooms",
        "Living room with seating",
        "Dining area",
        "Cooking space",
        "Private bathroom",
        "Air conditioning",
        "LED TV with satellite channels",
        "Tea/coffee maker"
      ],
      features: [
        "Daily housekeeping",
        "Free high-speed WiFi",
        "24/7 front desk assistance",
        "Airport transfers (on request)",
        "CCTV surveillance",
        "Electronic door locks",
        "Laundry service (on request)",
        "Free on-site parking"
      ],
      images: [
        "/lovable-uploads/ca8fc3df-1141-4e4d-89a4-2d1b6479e628.png", 
        "/lovable-uploads/870cde52-feca-4b2a-81e8-379f5399c247.png"
      ]
    },
    {
      title: "Deluxe Two-Bedroom Apartment",
      description: "Experience elevated comfort in our deluxe two-bedroom apartments. These premium accommodations feature two spacious bedrooms with enhanced amenities, an elegantly designed living room, a well-appointed dining area, and a well-equipped cooking space. With attention to detail in every aspect, these deluxe apartments provide a sophisticated stay experience for up to 4 guests, perfect for those seeking additional comfort during their stay.",
      capacity: 4,
      amenities: [
        "Two spacious bedrooms",
        "Enhanced living area",
        "Dining space with premium furnishings",
        "Well-equipped cooking area",
        "Modern bathroom",
        "Premium bedding",
        "Large LED TV",
        "Enhanced amenities kit"
      ],
      features: [
        "Priority housekeeping",
        "High-speed WiFi",
        "Personalized check-in experience",
        "Complimentary airport transfers",
        "Enhanced security features",
        "Express check-out option",
        "Premium laundry service access",
        "Dedicated parking spot"
      ],
      images: [
        "/lovable-uploads/49e52e68-cb4f-437a-a929-ddc2da125079.png", 
        "/lovable-uploads/ca8fc3df-1141-4e4d-89a4-2d1b6479e628.png"
      ]
    },
    {
      title: "Extended Family Suite",
      description: "Our largest accommodation, the Extended Family Suite, features an additional attached single bedroom alongside the standard two-bedroom layout. With expansive living areas, a comfortable dining space, and a complete cooking area, this suite is designed to comfortably host up to 5 guests. Perfect for larger families, extended stay guests, or groups requiring more space and privacy during their visit to Cochin.",
      capacity: 5,
      amenities: [
        "Three bedrooms in total",
        "Expanded living room",
        "Large dining area",
        "Full cooking facilities",
        "Multiple bathrooms",
        "Entertainment system",
        "Additional storage space",
        "Multiple air conditioning units"
      ],
      features: [
        "Enhanced housekeeping service",
        "Ultra-fast WiFi connection",
        "Personalized concierge service",
        "Priority airport transfers",
        "Extra security features",
        "Express services priority",
        "Extended laundry options",
        "Multiple parking spaces"
      ],
      images: [
        "/lovable-uploads/135e6e68-4c7b-4c80-a6c3-c3fcc8a45fce.png", 
        "/lovable-uploads/870cde52-feca-4b2a-81e8-379f5399c247.png",
        "/lovable-uploads/extended-family-suite-bed.jpg"
      ]
    }
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout noTopPadding>
      <HeroSection 
        title="Our Accommodations" 
        subtitle="Discover our thoughtfully designed apartments for your comfortable stay"
        images={heroImage}
        height="h-[50vh] md:h-[60vh]"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Comfortable & Spacious Apartments</h1>
            <p className="text-gray-600">
              Dreams Arcade offers 7 fully furnished apartments designed for your comfort and convenience. 
              Each apartment features living areas, dining spaces, and cooking facilities to make you feel at home,
              whether you're staying for a night or an extended period.
            </p>
          </div>
          
          {roomTypes.map((room, index) => (
            <RoomDetail 
              key={index}
              title={room.title}
              description={room.description}
              capacity={room.capacity}
              amenities={room.amenities}
              features={room.features}
              images={room.images}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-hotel-cream/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading">Ready to Book Your Stay?</h2>
          <p className="section-subheading">
            Contact us directly for the best rates and availability
          </p>
          
          <div className="mt-8 animate-fade-in">
            <a 
              href="mailto:dreamsarcade23@gmail.com" 
              className="button-primary mx-2 my-2 inline-block"
            >
              Email Us
            </a>
            <a 
              href="tel:+911234567890" 
              className="button-secondary mx-2 my-2 inline-block"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Rooms;
