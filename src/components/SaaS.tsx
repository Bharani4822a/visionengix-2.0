import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, Megaphone } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    icon: Globe,
    description:
      "We design and build dynamic, responsive, and secure web applications tailored to your business needs.",
  },
  {
    title: "Mobile Application Development",
    icon: Smartphone,
    description:
      "Create seamless and high-performance mobile apps for Android and iOS using modern frameworks and technologies.",
  },
  {
    title: "Digital Marketing Services",
    icon: Megaphone,
    description:
      "Grow your brand online through strategic marketing, SEO optimization, and social media management.",
  },
];

const SaaS = () => {
  const handleContact = (serviceTitle) => {
    const message = `Hello! I'm interested in your *${serviceTitle}* service. Please share more details.`;
    const whatsappLink = `https://wa.me/919342411558?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="services" className="relative py-32 min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-800" />

      {/* Glow effects */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-800/30 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our SaaS Services
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Empower your business with our end-to-end SaaS solutions. We specialize in 
            building web and mobile applications and providing digital marketing services 
            to help your brand grow, scale, and stand out in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/70 backdrop-blur-md border border-sky-700/40 shadow-lg hover:shadow-sky-500/30 hover:-translate-y-2 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-sky-600 flex items-center justify-center mb-5 shadow-md shadow-sky-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg hover:shadow-sky-400 transition-all duration-300"
                    onClick={() => handleContact(service.title)}
                  >
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SaaS;
