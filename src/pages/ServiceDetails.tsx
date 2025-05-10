
import { useParams } from "react-router-dom";
import { Service } from "../types";
import { websiteDevelopmentServices, governmentServices, careerServices, graphicDesignServices, onlineMarketingServices, academicServices } from "../data/services";

export default function ServiceDetails() {
  const { id } = useParams();
  const service: Service | undefined = [
    ...websiteDevelopmentServices,
    ...governmentServices,
    ...careerServices,
    ...graphicDesignServices,
    ...onlineMarketingServices,
    ...academicServices
  ].find(
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
        <div className="relative">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
              <p className="text-xl">{service.category}</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="mb-4 md:mb-0">
              <span className="inline-block bg-[#34f4a4] bg-opacity-10 text-[#34f4a4] px-4 py-2 rounded-full font-semibold">
                {service.category}
              </span>
            </div>
            <div className="text-2xl font-bold text-[#ff0000]">
              {service.price}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-4">Service Details</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <pre className="whitespace-pre-line text-gray-600 font-sans">
                {service.details}
              </pre>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Order on WhatsApp
            </button>
            <button
              onClick={() => window.history.back()}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
