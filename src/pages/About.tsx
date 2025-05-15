
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12 animate-fade-in">
    <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

const About = () => {
  const heroImage = ["/lovable-uploads/b54d1fc7-64a8-4f41-b693-684bc2f4f76b.png"];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout noTopPadding>
      <HeroSection 
        title="About Dreams Arcade" 
        subtitle="Learn more about our hotel and what makes us special"
        images={heroImage}
        height="h-[50vh] md:h-[60vh]"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Dreams Arcade was established with a vision to provide comfortable, convenient, and high-quality 
                accommodation options for travelers visiting Cochin, particularly those needing easy access to the 
                international airport.
              </p>
              <p className="text-gray-600">
                We understand the needs of both business and leisure travelers, and have created a space that 
                combines the comfort of home with the convenience of a hotel. Our fully furnished apartments 
                offer the perfect solution for short stays and extended visits alike.
              </p>
            </div>
            
            <AboutSection title="Our Apartments">
              <p className="text-gray-600 mb-4">
                Dreams Arcade features a collection of 7 thoughtfully designed apartments:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-hotel-green flex-shrink-0 mt-0.5" />
                  <span>6 fully furnished two-bedroom apartments, each designed for optimal comfort and functionality</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-hotel-green flex-shrink-0 mt-0.5" />
                  <span>1 special apartment with an additional attached single bedroom, perfect for larger families or groups</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Each apartment comes complete with a comfortable living area, convenient dining space, and practical cooking facilities, 
                accommodating 4-5 guests with ease. Whether you're traveling for business, leisure, or with family, 
                our apartments provide the perfect home away from home.
              </p>
            </AboutSection>
            
            <AboutSection title="Location & Convenience">
              <p className="text-gray-600 mb-4">
                Strategically located near Cochin International Airport, Dreams Arcade offers unparalleled convenience for travelers:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-hotel-green flex-shrink-0 mt-0.5" />
                  <span>Just minutes from the airport terminals, making early departures and late arrivals stress-free</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-hotel-green flex-shrink-0 mt-0.5" />
                  <span>Near Quality Airport Hotel in Nedumbassery, a well-known landmark</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-hotel-green flex-shrink-0 mt-0.5" />
                  <span>Easy access to major roads connecting to Kochi city and other destinations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 mr-2 text-hotel-green flex-shrink-0 mt-0.5" />
                  <span>Convenient for both short airport layovers and extended stays in the Cochin area</span>
                </li>
              </ul>
            </AboutSection>
            
            <AboutSection title="Our Mission">
              <p className="text-gray-600">
                At Dreams Arcade, our mission is to provide a seamless, comfortable, and welcoming accommodation 
                experience for all our guests. We strive to combine the personal touch of a family-run establishment 
                with the efficiency and amenities of a modern hotel. Our dedicated team works tirelessly to ensure 
                that every guest feels at home, with personalized service that anticipates needs and exceeds expectations. 
                Whether you're staying for a single night or an extended period, we are committed to making your 
                time with us memorable for all the right reasons.
              </p>
            </AboutSection>
            
            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-semibold mb-6">Terms and Conditions</h3>
              
              <div className="space-y-8">
                <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <h4 className="font-semibold text-lg mb-2">Reservation Policy</h4>
                  <ul className="space-y-2 text-gray-600 pl-5 list-disc">
                    <li>Reservations can be made online, by phone, or in person</li>
                    <li>Valid ID and credit/debit card required at check-in</li>
                    <li>Check-in: 12:00 PM; Check-out: 11:00 AM</li>
                    <li>Early check-in/late check-out subject to availability and additional charges</li>
                  </ul>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h4 className="font-semibold text-lg mb-2">Cancellation Policy</h4>
                  <ul className="space-y-2 text-gray-600 pl-5 list-disc">
                    <li>Free cancellation up to 24 hours before check-in</li>
                    <li>Cancellations within 24 hours or no-shows incur a one-night charge</li>
                    <li>Non-refundable rates and special deals are not eligible for refunds</li>
                  </ul>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <h4 className="font-semibold text-lg mb-2">Payment Terms</h4>
                  <ul className="space-y-2 text-gray-600 pl-5 list-disc">
                    <li>Accepted methods: Credit card, debit card, UPI, or cash</li>
                    <li>Full payment required at check-in unless otherwise agreed</li>
                    <li>Incidental charges must be cleared at check-out</li>
                  </ul>
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <h4 className="font-semibold text-lg mb-2">Guest Conduct & Policies</h4>
                  <ul className="space-y-2 text-gray-600 pl-5 list-disc">
                    <li>Respectful behavior and minimal noise after 10:00 PM</li>
                    <li>Damages to property will be charged to the guest</li>
                    <li>Smoking allowed only in designated areas; penalties for violations</li>
                    <li>Alcohol permitted in rooms, but disorderly conduct is prohibited</li>
                    <li>Pets not allowed unless permitted by management</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-8 text-gray-600 italic">
                For complete terms and conditions or any questions, please contact our front desk or email us at dreamsarcade23@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-hotel-green/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading">Ready to Experience Dreams Arcade?</h2>
          <p className="section-subheading">
            Book your comfortable stay near Cochin International Airport today
          </p>
          
          <div className="mt-8">
            <Link to="/contact" className="button-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
