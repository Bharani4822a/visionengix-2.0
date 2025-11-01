import logo from "@/assets/logo.jpg";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-gray-800 text-background py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="VisionEngix"
                className="h-10 w-auto rounded-full"
              />
              <span className="text-xl font-bold">VisionEngix</span>
            </div>
            <p className="text-sm opacity-80">
              Empowering the next generation of tech professionals with
              future-ready skills.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-pink-500/30 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-sky-500/30 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-blue-500/30 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-cyan-400/30 transition"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
              <a
                href="wa.me/+919342411558"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-green-500/30 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Events
                </button>
              </li>
            </ul>
          </div>

          {/* Courses */}
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

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                visionengix@gmail.com
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                +91 9342411558
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="w-4 h-4" />
                Salem, Tamil Nadu
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-background/20 pt-10 text-center">
          <p className="text-sm opacity-80 pt-5">
            © {new Date().getFullYear()} VisionEngix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
