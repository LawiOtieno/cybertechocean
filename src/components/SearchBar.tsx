
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { allServices } from "../data/services";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof allServices>([]);
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const filtered = allServices.filter(service =>
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
      setIsVisible(true);
    } else {
      setSuggestions([]);
      setIsVisible(false);
    }
  }, [query]);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search services..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#34f4a4]"
      />
      {isVisible && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg max-h-96 overflow-auto">
          {suggestions.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                navigate(`/services/${service.id}`);
                setQuery("");
                setIsVisible(false);
              }}
              className="p-3 hover:bg-gray-100 cursor-pointer"
            >
              <div className="font-semibold">{service.name}</div>
              <div className="text-sm text-gray-600">{service.category}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
