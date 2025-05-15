
import { useState } from "react";
import { BedDouble, Wifi, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RoomCardProps {
  title: string;
  description: string;
  image: string;
  capacity: number;
  price?: string;
  features: string[];
  delay?: number;
}

const RoomCard = ({ 
  title, 
  description, 
  image, 
  capacity,
  price,
  features,
  delay = 0
}: RoomCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`} 
        />
        {price && (
          <div className="absolute top-4 right-4 bg-hotel-green text-white px-4 py-2 rounded-md font-semibold">
            {price}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <BedDouble className="w-4 h-4 mr-1 text-hotel-green" />
            <span>Apartment</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1 text-hotel-green" />
            <span>Up to {capacity}</span>
          </div>
          <div className="flex items-center">
            <Wifi className="w-4 h-4 mr-1 text-hotel-green" />
            <span>Free WiFi</span>
          </div>
        </div>
        
        <ul className="mb-6 space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-hotel-green rounded-full mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link 
          to="/rooms" 
          className="inline-flex items-center text-hotel-green hover:text-hotel-green/80 transition-colors font-medium"
        >
          View Details
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
