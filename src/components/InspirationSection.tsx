import { useState, useEffect } from "react";
import quote1 from "@/assets/A1.jpg";
import quote2 from "@/assets/A2.jpg";
import quote3 from "@/assets/A3.jpg";
import quote4 from "@/assets/A4.jpg";

const InspirationSection = () => {
  const inspirations = [
    {
      img: quote1,
      quote: "Innovation distinguishes between a leader and a follower.",
    },
    {
      img: quote2,
      quote: "Learning never exhausts the mind — keep growing.",
    },
    {
      img: quote3,
      quote: "Dream big. Start small. Act now.",
    },
    {
      img: quote4,
      quote: "The future belongs to those who prepare for it today.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % inspirations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [inspirations.length]);

  const currentItem = inspirations[currentIndex];

  return (
    <section
      id="inspiration"
      className="relative py-20 bg-gradient-to-b from-slate-900 via-sky-950/70 to-slate-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-rgba(53, 53, 53, 0.15)" />

      <div className="relative z-10 container mx-auto px-6">
        <div
          key={currentIndex}
          className="grid md:grid-cols-2 items-center gap-8 transition-all duration-700 ease-in-out animate-fade-in"
        >
          {/* Image on Left */}
          <div className="flex justify-center">
            <img
              src={currentItem.img}
              alt={`Inspiration ${currentIndex + 1}`}
              className="w-full max-w-md h-[350px] object-cover rounded-2xl shadow-lg border border-sky-700/40 hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Quote on Right */}
          <div className="text-center md:text-left text-gray-200 px-4">
            <p className="text-2xl md:text-3xl font-semibold italic leading-relaxed">
              “{currentItem.quote}”
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-3">
              {inspirations.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-sky-400 scale-110"
                      : "bg-sky-700/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
