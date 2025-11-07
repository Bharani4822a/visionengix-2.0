import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // ✅ Renamed label to "SaaS"
  const navItems = ["home", "about", "services", "courses", "events", "contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white md:bg-slate-900/80 md:backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4 md:px-0">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className={`text-2xl font-bold ${
                isScrolled
                  ? "text-sky-500 md:text-sky-400"
                  : "text-sky-400"
              }`}
            >
              Vision
              <span
                className={`${
                  isScrolled
                    ? "text-gray-600 md:text-gray-200"
                    : "text-gray-200"
                }`}
              >
                Engix
              </span>
            </span>
          </div>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-slate-900 md:text-white"
                    : "text-white"
                }`}
              >
                {section === "home"
                  ? "Home"
                  : section === "about"
                  ? "About Us"
                  : section === "services"
                  ? "SaaS"
                  : section === "courses"
                  ? "Courses"
                  : section === "events"
                  ? "Events"
                  : "Contact Us"}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${
                isScrolled ? "text-blue-500" : "text-white"
              }`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* ✅ Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-slate-900/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out border-l border-sky-700/30 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 text-white">
          <div className="flex items-center justify-between mb-8">
            <span className="text-2xl font-bold text-sky-400">
              Vision
              <span className="text-gray-400">Engix</span>
            </span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X size={28} className="text-gray-300" />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {navItems.map((section) => (
              <Button
                key={section}
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="w-full text-left text-gray-200 text-lg hover:text-sky-400"
              >
                {section === "home"
                  ? "Home"
                  : section === "about"
                  ? "About Us"
                  : section === "services"
                  ? "SaaS"
                  : section === "courses"
                  ? "Courses"
                  : section === "events"
                  ? "Events"
                  : "Contact Us"}
              </Button>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-sky-800/40">
            <p className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} VisionEngix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
