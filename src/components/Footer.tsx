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

export default function Footer() {
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

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">CyberTechOcean</h3>
            <p>Your one-stop cyber café solution</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>Email: CyberTechOcean@gmail.com</p>
            <p>Phone: +254706943651</p>
            <p>Location: Ruaraka, Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CyberTechOcean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
