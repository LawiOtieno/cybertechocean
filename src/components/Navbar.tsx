import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="https://i.imgur.com/24wHowD.jpg" alt="CyberTechOcean Logo" className="h-8 w-8 rounded-full" />
              <span className="text-2xl font-bold text-red-600">CyberTechOcean</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/services" className="hover:text-blue-600">Services</Link>
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
            <Link to="/testimonials" className="hover:text-blue-600">Testimonials</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 px-2 py-1">Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 px-2 py-1">Services</Link>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 px-2 py-1">Projects</Link>
              <Link to="/testimonials" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 px-2 py-1">Testimonials</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 px-2 py-1">About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-600 px-2 py-1">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}