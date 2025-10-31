import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center animate-fade-in">
            <img 
              src={logo} 
              alt="VisionEngix Logo" 
              className="w-full max-w-md h-auto drop-shadow-2xl"
            />
          </div>
          
          <div className="text-white space-y-6 animate-slide-in">
            <h1 className="text-5xl md:text-6xl font-bold">VisionEngix</h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-95">
              VisionEngix is a growing initiative aimed at empowering students and young 
              professionals with future-ready skills, freelancing opportunities, and 
              entrepreneurial guidance. We bridge the gap between academic learning and 
              real-world industry requirements through comprehensive training programs, 
              hands-on projects, and mentorship.
            </p>
            <p className="text-lg opacity-95">
              Our mission is to build platforms that connect talent with real-world 
              opportunities, fostering innovation and continuous learning in the 
              ever-evolving technology landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
