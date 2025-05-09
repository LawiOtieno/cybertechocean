import { Link } from "react-router-dom";
import { Service } from "../types";
import { websiteDevelopmentServices, governmentServices, careerServices } from "../data/services";

export default function Services() {
  const allServices: Service[] = [...websiteDevelopmentServices, ...governmentServices, ...careerServices];

  const servicesByCategory = allServices.reduce((acc, service) => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      
      {Object.entries(servicesByCategory).map(([category, services]) => (
        <div key={category} className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            {category === "Website Development" && (
              <p className="text-gray-600 mb-4">
                Technologies: HTML/CSS/JS, Django, React, WordPress etc.
              </p>
            )}
            {category === "Government & Regulatory" && (
              <p className="text-gray-600 mb-4">
                Official government services processing through e-Citizen, KRA, and other portals
              </p>
            )}
            {category === "Career Assistance" && (
              <p className="text-gray-600 mb-4">
                Professional career development and job search services
              </p>
            )}
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
                  <p className="text-xl font-bold text-blue-600 mb-4">{service.price}</p>
                  <div className="flex space-x-4">
                    <Link
                      to={`/services/${service.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
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
  );
}
