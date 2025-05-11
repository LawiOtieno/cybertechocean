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
      answer: "We specialize in Web Development, Career Assistance, Government Services (eCitizen), Graphic Design, Digital Marketing, Academic Writing, and Data Analysis—delivering tailored, end-to-end solutions for individuals and businesses."
    },
    {
      question: "2. How can I request a quote or consultation?",
      answer: "Click 'Get Your Free Consultation' in the hero section, fill out the Contact Us form, or email us at CyberTechOcean@gmail.com. You can also WhatsApp or call +254 706 943 651—responses within 2 business hours."
    },
    {
      question: "3. What is the typical project turnaround time?",
      answer: "Websites & landing pages: 1–2 weeks. Complex platforms & LMS: 3–6 weeks. CV revamps, academic writing & KRA filings: 48–72 hours once all inputs are provided. We'll confirm exact timelines after consultation."
    },
    {
      question: "4. How are your pricing and payment terms structured?",
      answer: "We use transparent, custom pricing: flat rates for KRA, eCitizen, CV, and academic writing services, and bespoke quotes for development, design, and marketing projects. We accept M-Pesa, bank transfer, and PayPal. A 30% deposit is required to initiate most projects."
    },
    {
      question: "5. Do you offer ongoing support and maintenance?",
      answer: "Yes—choose from monthly retainer plans or pay-as-you-go support for updates, security patches, content edits, and analytics reporting."
    },
    {
      question: "6. Can you help with domain, hosting, and SSL?",
      answer: "Absolutely. We handle domain registration, DNS setup, SSL installation, and reliable hosting to ensure your site stays secure and performant."
    },
    {
      question: "7. Which sectors have you served?",
      answer: "We’ve partnered with healthcare clinics (Limbs Orthopaedic), auto garages (Unspotted Africa Auto Spares), e‑commerce furniture platforms (Richsmart General Works), e‑learning solution providers (LawiSchoolPro), and hundreds of professionals for CVs and KRA services—across diverse industries."
    },
    {
      question: "8. How do you protect my data and privacy?",
      answer: "We follow industry-standard encryption, secure coding practices, and strict confidentiality protocols. All sensitive information is stored on encrypted servers with limited access."
    },
    {
      question: "9. What are your business hours and response times?",
      answer: "Monday–Friday: 8 AM–8 PM. Saturday: Closed. Sunday: 10 AM–4 PM. We respond to queries within 2 business hours during operating hours."
    },
    {
      question: "10. Where can I view your past work and testimonials?",
      answer: "Visit our Projects page for case studies (Limbs Orthopaedic, Richsmart, Unspotted Africa, LawiSchoolPro) and check the Testimonials page for client feedback on our Career Assistance and digital services."
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
            Have questions or ready to get started? We’re here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-[#34f4a4] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">CyberTechOcean@gmail.com</p>
            <p className="text-sm text-gray-500 mt-2">(Replies within 2 business hours)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FontAwesomeIcon icon={faPhone} className="text-4xl text-[#34f4a4] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone & WhatsApp</h3>
            <p className="text-gray-600">+254 706 943 651</p>
            <p className="text-sm text-gray-500 mt-2">(Call or message us anytime)</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-[#34f4a4] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">Ruaraka, Nairobi, Kenya</p>
            <p className="text-sm text-gray-500 mt-2">(Visits by appointment)</p>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faClock} className="text-3xl text-[#34f4a4] mr-4" />
            <h2 className="text-2xl font-bold">Business Hours</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded text-center">
              <h3 className="font-semibold mb-2">Mon–Fri</h3>
              <p className="text-gray-600">8:00 AM – 8:00 PM</p>
            </div>
            <div className="p-4 border rounded text-center">
              <h3 className="font-semibold mb-2">Saturday</h3>
              <p className="text-gray-600">Closed</p>
            </div>
            <div className="p-4 border rounded text-center">
              <h3 className="font-semibold mb-2">Sunday</h3>
              <p className="text-gray-600">10:00 AM – 4:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, i) => (
              <a
                key={i}
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
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
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
