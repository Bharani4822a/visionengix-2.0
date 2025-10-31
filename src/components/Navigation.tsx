import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="VisionEngix Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              VisionEngix
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Button variant="ghost" onClick={() => scrollToSection("home")}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("about")}>
              About Us
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("courses")}>
              Courses
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("events")}>
              Events
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
