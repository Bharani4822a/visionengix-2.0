import { motion } from "framer-motion";
import quote1 from "@/assets/A1.jpg";
import quote2 from "@/assets/A2.jpg";
import quote3 from "@/assets/A3.jpg";
import quote4 from "@/assets/A4.jpg";
import quote5 from "@/assets/A5.jpg";
import quote6 from "@/assets/A6.jpg";
import quote7 from "@/assets/A7.jpg";
import quote8 from "@/assets/A8.avif";

const InspirationSection = () => {
  const inspirations = [
    {
      img: quote1,
      quote: "Your future is created by what you do today, not tomorrow.",
    },
    {
      img: quote2,
      quote:
        "The struggle you’re in today is developing the strength you need for tomorrow.",
    },
    {
      img: quote3,
      quote: "Believe in yourself, and you’ll be unstoppable.",
    },
    {
      img: quote4,
      quote: "Don’t compare your beginning to someone else’s middle.",
    },
    {
      img: quote5,
      quote:
        "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    },
    {
      img: quote6,
      quote: "Be the energy you want to attract.",
    },
    {
      img: quote7,
      quote: "You only live once, but if you do it right, once is enough.",
    },
    {
      img: quote8,
      quote: "Make today so awesome that yesterday gets jealous.",
    },
  ];

  return (
    <section
      id="inspiration"
      className="py-20 bg-gradient-to-b from-slate-900 via-sky-950/60 to-slate-900"
    >
      <div className="container mx-auto px-6">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Inspiring Thoughts
        </h2> */}

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {inspirations.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transform transition-transform"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={`Inspiration ${index + 1}`}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              {/* Quote */}
              <div className="p-5 text-center">
                <p className="text-gray-100 text-lg italic leading-relaxed">
                  “{item.quote}”
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
