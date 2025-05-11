
import { useState } from "react";
import { Link } from "react-router-dom";
import { Service } from "../types";
import { websiteDevelopmentServices, governmentServices, careerServices, graphicDesignServices, onlineMarketingServices, academicServices } from "../data/services";
import SearchBar from "../components/SearchBar";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const allServices: Service[] = [
    ...websiteDevelopmentServices,
    ...governmentServices,
    ...careerServices,
    ...graphicDesignServices,
    ...onlineMarketingServices,
    ...academicServices
  ];

  const categories = Array.from(new Set(allServices.map(service => service.category)));

  const filteredServices = selectedCategory 
    ? allServices.filter(service => service.category === selectedCategory)
    : allServices;

  const servicesByCategory = filteredServices.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  const handleWhatsAppOrder = (service: Service) => {
    const message = encodeURIComponent(
      `Hello CyberTechOcean, 👋 I would like you to offer me ${service.name}: ${window.location.origin}/services/${service.id}`
    );
    window.open(`https://wa.me/254706943651?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-300">
            Empowering your digital journey with expert solutions tailored to your needs. Our range of services includes Web Development, Career Assistance, 
            Government Services (eCitizen), Graphic Design, Digital Marketing, and Data Analysis.
          </p>
          <p>
            <br />
          </p>
          <div className="flex justify-center mb-8 text-black">
            <SearchBar />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex justify-center">
            <select 
              value={selectedCategory || ''} 
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="md:hidden w-full max-w-xs px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34f4a4]"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            
            <div className="hidden md:flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-[#34f4a4] text-white' : 'bg-gray-200'}`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-[#34f4a4] text-white' : 'bg-gray-200'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-[#34f4a4]">{category}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-2">{service.category}</p>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <p className="text-xl font-bold text-[#ff0000] mb-4">{service.price}</p>
                    <div className="flex space-x-4">
                      <Link
                        to={`/services/${service.id}`}
                        className="glow-on-hover"
                      >
                        See Details
                      </Link>
                      <button
                        onClick={() => handleWhatsAppOrder(service)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                      >
                        Order on WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
