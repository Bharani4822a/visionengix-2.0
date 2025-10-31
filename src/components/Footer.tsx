import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="VisionEngix" className="h-10 w-auto" />
              <span className="text-xl font-bold">VisionEngix</span>
            </div>
            <p className="text-sm opacity-80">
              Empowering the next generation of tech professionals with future-ready skills.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("home")} className="opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("courses")} className="opacity-80 hover:opacity-100 transition-opacity">
                  Courses
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("events")} className="opacity-80 hover:opacity-100 transition-opacity">
                  Events
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Courses</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>AI / Data Science</li>
              <li>Data Analysis</li>
              <li>Python Full Stack</li>
              <li>Java Full Stack</li>
              <li>Cyber Security</li>
              <li>C, Java, Python</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                info@visionengix.com
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                +91 1234567890
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="w-4 h-4" />
                Chennai, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} VisionEngix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
