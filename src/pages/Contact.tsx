
import { useState, useEffect } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import { toast } from "@/components/ui/use-toast";

const ContactCard = ({ 
  icon, 
  title, 
  children,
  delay
}: { 
  icon: JSX.Element; 
  title: string; 
  children: React.ReactNode;
  delay: number;
}) => (
  <div 
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
    style={{ animationDelay: `${delay * 0.1}s` }}
  >
    <div className="w-12 h-12 bg-hotel-green/10 rounded-full flex items-center justify-center mb-4 text-hotel-green">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="text-gray-600">{children}</div>
  </div>
);

const Contact = () => {
  const heroImage = ["/lovable-uploads/c2017536-77ea-4a4f-9a57-c07e155f46b4.png"];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout noTopPadding>
      <HeroSection 
        title="Contact Us" 
        subtitle="Reach out to us for bookings, inquiries, or assistance"
        images={heroImage}
        height="h-[50vh] md:h-[60vh]"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">
              We're here to help with your inquiries, bookings, or to provide any assistance you might need. 
              Feel free to reach out to us through any of the methods below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactCard icon={<Phone className="w-6 h-6" />} title="Phone" delay={1}>
              <a href="tel:+911234567890" className="hover:text-hotel-green transition-colors">
                +91 1234 567 890
              </a>
            </ContactCard>
            
            <ContactCard icon={<Mail className="w-6 h-6" />} title="Email" delay={2}>
              <a href="mailto:dreamsarcade23@gmail.com" className="hover:text-hotel-green transition-colors">
                dreamsarcade23@gmail.com
              </a>
            </ContactCard>
            
            <ContactCard icon={<MapPin className="w-6 h-6" />} title="Address" delay={3}>
              <p>Near Quality Airport Hotel,</p>
              <p>Nedumbassery, Nayathode Post Office, 683572</p>
            </ContactCard>
            
            <ContactCard icon={<Clock className="w-6 h-6" />} title="Hours" delay={4}>
              <p>Front Desk: 24/7</p>
              <p>Check-in: 12:00 PM</p>
              <p>Check-out: 11:00 AM</p>
            </ContactCard>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-green focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-green focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-green focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="information">General Information</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Issue/Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-green focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center bg-hotel-green text-white px-6 py-3 rounded-md font-medium hover:bg-hotel-green/90 transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            <div className="animate-fade-in-right h-full min-h-[300px]">
              <h3 className="text-2xl font-semibold mb-6">Find Us</h3>
              <div className="rounded-lg overflow-hidden h-[450px] shadow-md">
                <iframe
                  title="Dreams Arcade Location"
                  className="w-full h-full border-0"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=10.165350,76.394600&zoom=15`}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  <a 
                    href="https://maps.google.com/?q=10.165350,76.394600" 
                    target="_blank"
                    rel="noreferrer" 
                    className="text-hotel-green hover:underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
