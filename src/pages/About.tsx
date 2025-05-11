export default function About() {
  const values = [
    {
      title: "Accessibility",
      description: "Open doors, open minds—everyone deserves equal access to technology."
    },
    {
      title: "Integrity",
      description: "Transparent pricing, honest advice, and strict data privacy."
    },
    {
      title: "Excellence",
      description: "Expert teams, reliable infrastructure, and solutions that stand the test of time."
    },
    {
      title: "Community",
      description: "Local partnerships, skills workshops, and tech mentorship programs for youth and small businesses."
    }
  ];

  const services = [
    {
      title: "Cyber Café & Co-Working",
      description: "Fast internet, printing, scanning, and comfortable workstations."
    },
    {
      title: "Web & App Development",
      description: "Custom sites, e-commerce, LMS platforms, and ongoing maintenance."
    },
    {
      title: "Regulatory Compliance",
      description: "KRA returns, e-Citizen facilitation, and business registration services."
    },
    {
      title: "Branding & Digital Marketing",
      description: "Logos, social-media campaigns, SEO, and paid ad management."
    },
    {
      title: "Professional Support",
      description: "CV writing, career consultations, and KRA filing assistance."
    }
  ];

  const impact = [
    {
      title: "Digital Literacy Workshops",
      description: "Monthly sessions teaching basic computing, online safety, and productivity tools."
    },
    {
      title: "Youth Mentorship",
      description: "Internship opportunities for local students interested in IT and design."
    },
    {
      title: "Outreach Partnerships",
      description: "Collaborations with nearby schools and NGOs to donate equipment and training."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#34f4a4] to-[#ff0000] text-transparent bg-clip-text">
            About CyberTechOcean
          </h1>
          <p className="text-xl text-gray-300">
            Know why CyberTechOcean is the trusted tech partner for individuals, businesses, and institutions in Nairobi and beyond.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Story */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-8">
            Founded in Ruaraka, Nairobi, CyberTechOcean began as a vision to empower individuals and businesses through accessible digital resources. What started as a modest cyber café has grown into a full-service technology partner—offering everything from high-speed internet access and printing to bespoke web development, regulatory compliance, and digital marketing solutions.
          </p>

          <div className="border-l-4 border-[#34f4a4] pl-6 mb-8">
            <h3 className="text-xl font-bold mb-2">Meet Our Founder</h3>
            <h4 className="font-semibold mb-2">Lawrence Otieno</h4>
            <p className="text-gray-600 italic">CEO & Co-Founder</p>
            <p className="text-gray-600 mt-2">
              With a background in Mathematics, Website Development, and grassroots community outreach, Lawrence leads our team with a passion for closing the digital gap. His hands-on approach ensures every client—from students to SMEs—receives personalized support and innovative solutions.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 italic mb-4">
              "Bridging the digital divide by providing accessible, high-quality computer and internet services to our community."
            </p>
            <p className="text-gray-600">
              We believe technology should be within everyone's reach. Through fair pricing, expert guidance, and continuous training, we empower our neighbors in Ruaraka and beyond to thrive in an increasingly connected world.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become Nairobi's most trusted technology hub—where cutting-edge services meet community values, and every customer leaves more capable, confident, and connected than when they arrived.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-[#34f4a4]">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Services at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#34f4a4]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Impact */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Community Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impact.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[#34f4a4]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTO */}
        <div className="bg-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join the CyberTechOcean Family</h2>
          <p className="mb-6">
            Whether you're a freelancer needing quiet workspace, a startup seeking end-to-end tech support, or a resident looking to upskill, we're here for you.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#34f4a4] text-black font-semibold rounded-lg hover:bg-opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
