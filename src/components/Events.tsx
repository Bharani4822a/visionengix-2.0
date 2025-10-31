import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";
import event5 from "@/assets/event5.jpg";
import event6 from "@/assets/event6.jpg";
import event7 from "@/assets/event7.jpg";
import event8 from "@/assets/event8.jpg";
import event9 from "@/assets/event9.jpg";
import event10 from "@/assets/event10.jpg";

const events = [
  {
    image: event1,
    title: "AI & Coding Workshop",
    description: "Students learning cutting-edge AI and programming skills in our comprehensive workshop session",
  },
  {
    image: event2,
    title: "Tech Hackathon 2024",
    description: "Young professionals collaborating on innovative tech solutions in our annual hackathon event",
  },
  {
    image: event3,
    title: "Career Guidance Seminar",
    description: "Professional development seminar guiding students towards successful tech careers",
  },
  {
    image: event4,
    title: "Web Development Bootcamp",
    description: "Intensive bootcamp where students master modern web development technologies and frameworks",
  },
  {
    image: event5,
    title: "Machine Learning Workshop",
    description: "Hands-on AI and data science training with real-world machine learning applications",
  },
  {
    image: event6,
    title: "Tech Networking Meetup",
    description: "Connecting talented professionals and fostering collaboration in the tech community",
  },
  {
    image: event7,
    title: "Cybersecurity Training",
    description: "Advanced security training covering threat detection and protection strategies",
  },
  {
    image: event8,
    title: "Project Showcase",
    description: "Students presenting their innovative tech projects to industry professionals",
  },
  {
    image: event9,
    title: "One-on-One Mentorship",
    description: "Personalized guidance sessions helping students achieve their career goals",
  },
  {
    image: event10,
    title: "Success Celebration",
    description: "Celebrating student achievements and successful project completions",
  },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Events
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-hover">
            <img
              src={events[currentIndex].image}
              alt={events[currentIndex].title}
              className="w-full h-[500px] object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">{events[currentIndex].title}</h3>
              <p className="text-lg opacity-90">{events[currentIndex].description}</p>
            </div>

            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

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

export default Events;
