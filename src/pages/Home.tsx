
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text">
            Navigate Your Digital Frontier with CyberTechOcean
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            All-in-one web, tech & regulatory solutions to help your business sail smoothly online.
          </p>
          <div className="flex justify-center mb-8 text-black">
            <SearchBar />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition">
              Get Free Consultation
            </Link>
            <Link to="/services" className="text-[#34f4a4] hover:text-[#ff0000] transition flex items-center">
              Explore Our Services ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Web & App Development</h3>
              <p className="text-gray-600 mb-4">Bespoke websites, e-commerce stores, LMS and more—built on modern stacks (Django, React, WordPress).</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Gov & Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4">KRA returns & PIN services, e-Citizen applications, passports, licences—all handled for you.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Branding & Design</h3>
              <p className="text-gray-600 mb-4">Logos, brochures, social-media graphics and PowerPoint decks that tell your story.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">Digital Marketing & SEO</h3>
              <p className="text-gray-600 mb-4">Social-media management, Google/Facebook ads, email campaigns and on-page SEO.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="glow-on-hover">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose CyberTechOcean?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Deep Expertise</h3>
              <p className="text-gray-600">Over 6 years of combined web-development, design & compliance experience.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">All-In-One Partner</h3>
              <p className="text-gray-600">From registering your domain to launching your ad campaigns—we cover the full spectrum.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">"Price on Order" for custom projects; clear, flat rates for government & career services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link to="/projects" className="text-[#34f4a4] hover:text-[#ff0000]">See More</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <img src="https://i.imgur.com/aFixvm9.png" alt="Limbs Orthopaedic" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Limbs Orthopaedic</h3>
                <p className="text-gray-600 mb-4">Modern, responsive website with patient inquiry support for a medical clinic in Kasarani, Nairobi.</p>
                <a href="https://exampleone.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img src="https://i.imgur.com/Fsixvm9.png" alt="Unspotted Africa Auto Spares" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Unspotted Africa Auto Spares</h3>
                <p className="text-gray-600 mb-4">Clean layout and service listing for a busy car garage at Fundi Lane, Kirinyaga Road.</p>
                <a href="https://exampletwo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <img src="https://i.imgur.com/ssixvm9.png" alt="LawiSchoolPro LMS" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">LawiSchoolPro LMS</h3>
                <p className="text-gray-600 mb-4">Full-featured education portal with courses, dashboards, and student progress tracking.</p>
                <a href="https://examplethree.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Testimonials</h2>
            <Link to="/testimonials" className="text-[#34f4a4] hover:text-[#ff0000]">Read More</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">"CyberTechOcean built a clean, modern site for our clinic—our patients now book appointments online with ease."</p>
              <p className="font-semibold">— Limbs Orthopaedic, Kasarani, Nairobi</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">"Our auto shop website now gets inquiries daily, thanks to the team's work on our Fundi Lane garage brand."</p>
              <p className="font-semibold">— Unspotted Africa Auto Spares, Kirinyaga Rd, Nairobi</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-4">"They designed and launched our entire e-learning platform, LawiSchoolPro LMS, faster than expected—excellent support throughout."</p>
              <p className="font-semibold">— LawiSchoolPro Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make Waves Online?</h2>
          <p className="text-xl mb-8">Let's chart your course together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/254706943651?text=Hello%20*CyberTechOcean*%20%F0%9F%91%8B%F0%9F%8F%BB"
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition">
            Book Your a Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
