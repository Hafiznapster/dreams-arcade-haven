
import { BedDouble, Clock, Wifi, Phone, MapPin, Users, Lock } from "lucide-react";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => (
  <div 
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
    style={{ animationDelay: `${delay * 0.1}s` }}
  >
    <div className="w-14 h-14 bg-hotel-green/10 rounded-full flex items-center justify-center mb-4 text-hotel-green">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: <Clock className="w-7 h-7" />,
      title: "24/7 Front Desk",
      description: "Our front desk is available around the clock to assist you with any needs or inquiries during your stay."
    },
    {
      icon: <BedDouble className="w-7 h-7" />,
      title: "Daily Housekeeping",
      description: "Enjoy a clean and fresh environment with our professional daily housekeeping services."
    },
    {
      icon: <Wifi className="w-7 h-7" />,
      title: "Free High-Speed WiFi",
      description: "Stay connected with complimentary high-speed wireless internet available throughout the property."
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Airport Transfers",
      description: "We provide convenient airport pick-up and drop-off services on request for a hassle-free journey."
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Prime Location",
      description: "Ideally situated near Cochin International Airport, perfect for business and leisure travelers."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Spacious Apartments",
      description: "Our fully furnished apartments with living areas and cooking spaces are perfect for families and groups."
    },
    {
      icon: <Lock className="w-7 h-7" />,
      title: "Safety & Security",
      description: "Rest easy with our comprehensive security features including CCTV surveillance and electronic door locks."
    }
  ];

  return (
    <section className="py-16 bg-hotel-cream/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subheading">
          Experience comfort and convenience with our premium hotel services
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
