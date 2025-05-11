
import { Link } from "react-router-dom";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CyberTechOcean built a clean, modern site for our clinic—our patients now book appointments online with ease.",
      author: "Dr. Collins Otieno",
      company: "Limbs Orthopaedic, Kasarani, Nairobi"
    },
    {
      quote: "CyberTechOcean crafted a sleek, user-friendly furniture e-commerce site for us—our sales have surged since launch.",
      author: "Richard Omedo",
      company: "Richsmart General Works, Kariobangi, Nairobi"
    },
    {
      quote: "Our auto shop website now gets inquiries daily. The team captured our brand perfectly and made everything so simple.",
      author: "Oscar Otieno",
      company: "Unspotted Africa Auto Spares, Kirinyaga Rd"
    },
    {
      quote: "They designed and launched our entire e-learning platform, LawiSchoolPro LMS, faster than expected—excellent support throughout.",
      author: "LawiSchoolPro Team",
      company: ""
    },
    {
      quote: "I got my CV revamped and KRA returns filed in record time. The new format helped me land multiple interviews!",
      author: "Pauline Nkatha",
      company: "Professional Client"
    },
    {
      quote: "CyberTechOcean's regulatory compliance service took all the stress out of KRA filings. Highly recommend them.",
      author: "Peter Mwangi",
      company: "Small Business Owner"
    }
  ];

  const features = [
    {
      title: "Personalized Service",
      description: "We take time to understand your unique needs—and deliver solutions that fit."
    },
    {
      title: "Fast Turnaround",
      description: "From project kickoff to launch, we move quickly without cutting corners."
    },
    {
      title: "Reliable Support",
      description: "Whether it's a site update or last-minute tax filing, our team is just a message away."
    },
    {
      title: "Tangible Results",
      description: "Increased bookings, higher site traffic, and countless career-success stories."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300">
            Real stories from real clients we've helped grow, streamline, and succeed.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
            <div className="text-right">
              <p className="font-semibold text-[#34f4a4]">{testimonial.author}</p>
              {testimonial.company && (
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Our Clients Love Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-[#34f4a4]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
        <p className="text-gray-600 mb-6">
          Have we helped you succeed? We'd love to hear how CyberTechOcean has made a difference for your business or career.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition"
        >
          Submit Your Testimonial
        </Link>
      </div>
    </div>
  );
}
