
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Limbs Orthopaedic – Clinic Website",
      industry: "Healthcare",
      location: "Kasarani, Nairobi",
      overview: "A responsive website for a leading prosthetics and orthotics clinic, designed to streamline patient inquiries and appointment bookings.",
      features: [
        "Online appointment scheduler",
        "Service pages with treatment details",
        "Integrated patient feedback form",
        "SSL-secured patient data handling"
      ],
      image: "https://i.imgur.com/aFixvm9.png"
    },
    {
      title: "Unspotted Africa Auto Spares",
      industry: "Automotive",
      location: "Fundi Lane, Kirinyaga Road, Nairobi",
      overview: "A clean, modern site that showcases services, parts catalog, and contact options for a busy car repair and spares business.",
      features: [
        "Interactive parts gallery",
        "Service booking form with date/time picker",
        "Google Maps integration for directions",
        "Mobile-first design for on-the-go customers"
      ],
      image: "https://i.imgur.com/Fsixvm9.png"
    },
    {
      title: "LawiSchoolPro LMS",
      industry: "Education / E-Learning",
      location: "Nairobi (Online)",
      overview: "A full-featured platform enabling instructors to create courses and students to track progress, complete quizzes, and download certificates.",
      features: [
        "Course authoring dashboard",
        "Student progress analytics",
        "Secure payment gateway integration",
        "Responsive video and document viewer"
      ],
      image: "https://i.imgur.com/ssixvm9.png"
    },
    {
      title: "Richsmart General Works",
      industry: "Retail / Furniture",
      location: "Kariobangi, Nairobi",
      overview: "A sleek online storefront for a bespoke furniture maker, complete with product filters, secure checkout, and gallery.",
      features: [
        "Category filtering (chairs, tables, school sets, etc.)",
        "M-Pesa and card payment integration",
        "High-resolution product galleries with zoom",
        "Inventory management dashboard"
      ],
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80"
    },
    {
      title: "CV & KRA Services Portal",
      industry: "Professional Services",
      location: "Kenya (Online)",
      overview: "A streamlined backend solution supporting hundreds of CV revamps and KRA filings, with order tracking and automated reminders.",
      features: [
        "Client order portal with status updates",
        "Secure document upload and storage",
        "Automated email notifications",
        "Admin dashboard for volume reporting"
      ],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300">
            Explore a selection of our recent work. Click on any project to see detailed case studies, screenshots, and the technologies we used.
          </p>
        </div>
      </section>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {project.industry}
                  </span>
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {project.location}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{project.overview}</p>
                <h3 className="font-semibold mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Book Free Consultation
        </Link>
      </div>
    </div>
  );
}
