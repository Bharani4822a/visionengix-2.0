import founderImg from "@/assets/founder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-primary">Sudhersan G</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Computer Science Engineer, with experience in training, development, 
              and entrepreneurship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From Nov 2023 to Apr 2024, I worked as a Junior Trainer & Developer at VK 
              Software Solutions, where I supported software development projects and guided 
              students in core technologies. Later, from Jun 2024 to Jul 2025, I served as 
              Training & Development Lead, managing training programs, mentoring juniors, 
              and bridging technical concepts with real-world applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Alongside my corporate experience, I founded VisionEngiX, a growing initiative 
              aimed at empowering students and young professionals with future-ready skills, 
              freelancing opportunities, and entrepreneurial guidance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about technology, continuous learning, and building platforms 
              that connect talent with real-world opportunities.
            </p>
          </div>
          
          <div className="flex justify-center animate-slide-in">
            <img 
              src={founderImg} 
              alt="Sudhersan G - Founder" 
              className="rounded-2xl shadow-hover w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
