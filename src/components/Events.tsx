import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/event1.jpeg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpeg";
import event4 from "@/assets/event4.jpeg";
import event5 from "@/assets/event5.jpeg";
import event6 from "@/assets/event6.jpeg";
import event7 from "@/assets/event7.jpeg";

interface Event {
  image: string;
  title: string;
  description: string;
}

const EventsSection = () => {
  const events: Event[] = [
    {
      image: event1,
      title: "Inspiring Young Innovators through VisionEngiX",
      description: "Government College of Arts and Science, Salem.",
    },
    {
      image: event2,
      title: "Empowering the Next Generation with Python and AI",
      description:
        "An interactive session at Sakthikailash College where students discovered how Python drives the world of Artificial Intelligence through hands-on learning and real-world mini projects.",
    },
    {
      image: event3,
      title: "Mastering Collaboration with Git and GitHub",
      description:
        "An engaging session with MCA students exploring how Git and GitHub simplify teamwork in coding—enabling version control, smooth collaboration, and error-free development through branching and merging.",
    },
    {
      image: event4,
      title: "Empowering Educators with AI Tools",
      description:
        "A transformative training session at AVS College, where staff members explored how AI can enhance teaching, streamline workflows, and revolutionize content creation, productivity, and data-driven decision-making in education.",
    },
    {
      image: event5,
      title: "Exploring the World of AI & Machine Learning",
      description:
        "An interactive session with students delving into how machines learn from data, understand patterns, and drive innovation across industries like healthcare, finance, and automation.",
    },
    {
      image: event6,
      title: "Career Development and Industry Readiness",
      description:
        "A focused training session at Sri Ganesh College aimed at enhancing students’ communication, problem-solving, and technical skills, preparing them for real-world career opportunities and professional growth.",
    },
    {
      image: event7,
      title: "Technical Trends of the Computer World",
      description:
        "An insightful session at Kavery Engineering College highlighting emerging technologies like AI, ML, Cloud Computing, Cybersecurity, and Full-Stack Development—guiding students to understand their impact on the future of tech.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  return (
    <section id="events" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Events
        </h2>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={events[currentIndex].image}
              alt={events[currentIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                {events[currentIndex].title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 line-clamp-3 sm:line-clamp-none">
                {events[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-black rounded-full w-10 h-10 sm:w-12 sm:h-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-black rounded-full w-10 h-10 sm:w-12 sm:h-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
