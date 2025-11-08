import founderImg from "@/assets/founder.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:h-screen flex items-center bg-gradient-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Text Section */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold text-primary">
              Sudhersan G
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I’m a Computer Science Engineer with experience in training, software
              development, and entrepreneurship. I began my journey at VK Software
              Solutions as a Junior Trainer & Developer (Nov 2023 – Apr 2024) and
              later served as Training & Development Lead (Jun 2024 – Jul 2025),
              mentoring students and managing hands-on technical programs.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I’m also the Founder of VisionEngiX, an initiative empowering students
              and young professionals with future-ready skills, freelancing
              opportunities, and entrepreneurial guidance. Passionate about
              technology and continuous learning, I strive to bridge the gap between
              education and industry through impactful learning experiences.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center md:justify-end animate-slide-in">
            <img
              src={founderImg}
              alt="Sudhersan G - Founder"
              className="rounded-2xl hover:shadow-2xl w-56 sm:w-64 md:w-80 lg:w-96 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
