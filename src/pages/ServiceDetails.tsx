import { useParams } from "react-router-dom";
import { Service } from "../types";
import { websiteDevelopmentServices, governmentServices, careerServices } from "../data/services";

export default function ServiceDetails() {
  const { id } = useParams();
  const service: Service | undefined = [...websiteDevelopmentServices, ...governmentServices, ...careerServices].find(
    (s) => s.id === id
  );

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Service not found</h1>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello CyberTechOcean, 👋 I would like you to offer me ${service.name}: ${window.location.href}`
    );
    window.open(`https://wa.me/254706943651?text=${message}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
          <p className="text-gray-600 mb-2">{service.category}</p>
          <p className="text-xl font-bold text-blue-600 mb-4">{service.price}</p>
          <div className="prose max-w-none mb-6 whitespace-pre-line">
            {service.details}
          </div>
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Order on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
