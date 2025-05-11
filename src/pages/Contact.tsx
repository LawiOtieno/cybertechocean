
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faYoutube,
  faInstagram,
  faTwitter,
  faPinterest,
  faLinkedin,
  faThreads
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const socialLinks = [
    { icon: faFacebook, url: "https://facebook.com/CyberTechOcean" },
    { icon: faTiktok, url: "https://tiktok.com/@CyberTechOcean" },
    { icon: faYoutube, url: "https://youtube.com/@CyberTechOcean" },
    { icon: faInstagram, url: "https://instagram.com/CyberTechOcean" },
    { icon: faTwitter, url: "https://twitter.com/CyberTechOcean" },
    { icon: faPinterest, url: "https://pinterest.com/CyberTechOcean" },
    { icon: faLinkedin, url: "https://linkedin.com/company/CyberTechOcean" },
    { icon: faThreads, url: "https://threads.net/@CyberTechOcean" }
  ];

  const faqs = [
    {
      question: "1. What services does CyberTechOcean offer?",
      answer: "We provide end-to-end digital solutions including bespoke Web & App Development (Django, React, WordPress), Branding & Design, Digital Marketing & SEO, and Government & Regulatory Compliance (KRA returns, PIN services, e-Citizen applications). We also specialize in professional CV writing and KRA filing services."
    },
    {
      question: "2. How do I request a quote or consultation?",
      answer: "Simply click 'Get Your Free Consultation' in the hero section or use the Contact Us form. You can also email us at CyberTechOcean@gmail.com or WhatsApp/phone +254 706 943 651—our team replies within 2 business hours."
    },
    {
      question: "3. What is your project turnaround time?",
      answer: "Simple websites & landing pages: 1–2 weeks, Complex web applications & LMS: 3–6 weeks, CV revamps & KRA filings: Typically completed within 48–72 hours once all information is received. Timelines can vary based on project scope; we'll confirm details during consultation."
    },
    {
      question: "4. How do you handle pricing and payments?",
      answer: "We offer transparent, custom pricing: Fixed flat rates for KRA & CV services, 'Price on Order' model for bespoke web/app and design projects. Invoices are issued via email; we accept M-Pesa, bank transfer, or PayPal. A 30% deposit is required to kick off most projects."
    },
    {
      question: "5. Do you provide ongoing support and maintenance?",
      answer: "Absolutely. We offer optional support packages for updates, security patches, and content edits. You can choose a monthly retainer or pay-as-you-go plan—just let us know what works best."
    },
    {
      question: "6. Can you help with domain registration and hosting?",
      answer: "Yes! We'll handle domain purchase, DNS configuration, SSL setup, and reliable hosting so you can focus on your business, not server upkeep."
    },
    {
      question: "7. What industries have you worked with?",
      answer: "We've built sites and systems for healthcare clinics (e.g., Limbs Orthopaedic), auto garages (Unspotted Africa Auto Spares), E-commerce furniture platforms (Richsmart General Works), E-learning platforms (LawiSchoolPro LMS), plus 100s of individual professionals needing CVs or KRA filing. Our cross-industry experience ensures best practices and tailored solutions."
    },
    {
      question: "8. How do you ensure data security and privacy?",
      answer: "We follow industry‐standard encryption and secure coding practices. All sensitive information (e.g., personal data for CVs or tax filings) is treated with strict confidentiality and stored on encrypted servers."
    },
    {
      question: "9. What are your business hours and response times?",
      answer: "Monday–Friday: 8 AM–8 PM, Sunday: 10 AM–4 PM. We aim to respond to emails and form submissions within 2 business hours during these times."
    },
    {
      question: "10. How can I see examples of your work?",
      answer: "Visit our Projects page to explore featured case studies, including Limbs Orthopaedic, Unspotted Africa Auto Spares, LawiSchoolPro LMS, and our CV & KRA filings portal. You can also read client stories on the Testimonials page."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text">
            Let's Chart Your Digital Path Together
          </h1>
          <p className="text-xl text-gray-300">
            Have questions or are you ready to get started? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-[#34f4a4] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">CyberTechOcean@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">(We aim to reply within 2 business hours.)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faPhone} className="text-4xl text-[#34f4a4] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+254 706 943 651</p>
              <p className="text-sm text-gray-500 mt-2">(Call or WhatsApp—we're standing by.)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-[#34f4a4] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Ruaraka, Nairobi, Kenya</p>
              <p className="text-sm text-gray-500 mt-2">(Office visits by appointment—see map below.)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faClock} className="text-3xl text-[#34f4a4] mr-4" />
              <h2 className="text-2xl font-bold">Business Hours</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded">
                <h3 className="font-semibold mb-2">Monday – Friday</h3>
                <p className="text-gray-600">6:00 AM – 8:00 PM</p>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-semibold mb-2">Saturday</h3>
                <p className="text-gray-600">Closed</p>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-semibold mb-2">Sunday</h3>
                <p className="text-gray-600">10:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#34f4a4] transition-colors"
              >
                <FontAwesomeIcon icon={link.icon} className="text-2xl" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#34f4a4]">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Find Our Office</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.462950468223!2d36.87655494999999!3d-1.2191733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15b9976751c1%3A0xf97a86fce71d56ce!2sRuaraka%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1653835271619!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
