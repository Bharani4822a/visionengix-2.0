import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-orange-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-fade-in">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <img 
                src={logo} 
                alt="VisionEngix Logo - Engineering the Vision to Grow" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-in">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold">
              TRAINING & DEVELOPMENT PLATFORM
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-blue-600">Vision</span>
              <span className="text-gray-700">Eng</span>
              <span className="text-orange-500">ix</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
              Engineering the Vision to Grow
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              VisionEngix is a forward-thinking initiative dedicated to empowering the next generation of technology professionals. We bridge the gap between academic knowledge and industry requirements by providing comprehensive training programs, hands-on project experience, and real-world skill development.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to equip students and young professionals with future-ready skills, connect them with freelancing opportunities, and provide entrepreneurial guidance to help them thrive in the rapidly evolving tech landscape.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-500 hover:bg-blue-600 text-white"
                onClick={() => scrollToSection("courses")}
              >
                Explore Courses
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
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
}

export default Hero;
