import logo from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-30 md:pt-0"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-800" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-800/30 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 py-10 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Logo Section */}
          <div className="flex justify-center animate-fade-in mt-10 md:mt-0">
            <div className="bg-slate-800/70 backdrop-blur-md shadow-2xl rounded-full p-4 border border-sky-700/50">
              <img
                src={logo}
                alt="VisionEngix Logo - Engineering the Vision to Grow"
                className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-sky-400 shadow-lg transition-all duration-500 hover:shadow-[0_0_40px_10px_rgba(56,189,248,0.6)] hover:scale-105"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6 animate-slide-in text-center md:text-left">
            <div className="inline-block bg-sky-900 text-sky-300 px-6 py-2 rounded-full text-sm font-semibold shadow-md">
              TRAINING & DEVELOPMENT PLATFORM
            </div>

            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-sky-400">Vision</span>
              <span className="text-gray-200">Eng</span>
              <span className="text-gray-200">ix</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
              Engineering the Vision to Grow
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              VisionEngix is a forward-thinking initiative dedicated to
              empowering the next generation of technology professionals. We
              bridge the gap between academic knowledge and industry
              requirements by providing comprehensive training programs,
              hands-on project experience, and real-world skill development.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <Button
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-sky-400 transition-all duration-300"
                onClick={() => scrollToSection("courses")}
              >
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-400 text-sky-300 hover:bg-sky-950 transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
