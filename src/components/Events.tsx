import { motion } from "framer-motion";
import event1 from "@/assets/event1.jpeg";
import event2 from "@/assets/event2.jpeg";
import event3 from "@/assets/event3.jpeg";
import event4 from "@/assets/event4.jpeg";
import event5 from "@/assets/event5.jpeg";
import event6 from "@/assets/event6.jpeg";
import event7 from "@/assets/event7.jpeg";
import event8 from "@/assets/event8.jpeg";
import event9 from "@/assets/event9.jpeg";
import event10 from "@/assets/event10.jpeg";
import event11 from "@/assets/event11.jpeg";

const events = [
  {
    id: 1,
    img: event1,
    title: "Inspiring Young Innovators through VisionEngiX",
    instructor: "Government College of Arts and Science, Salem",
    date: "Aug 2025",
    description:
      "A motivational event inspiring students to innovate and embrace technology-driven creativity through VisionEngiX initiatives.",
  },
  {
    id: 2,
    img: event2,
    title: "Empowering the Next Generation with Python and AI",
    instructor: "Sakthikailash College",
    date: "Sep 2025",
    description:
      "An interactive session where students explored how Python drives AI through hands-on learning and real-world projects.",
  },
  {
    id: 3,
    img: event3,
    title: "Mastering Collaboration with Git and GitHub",
    instructor: "VisionEngiX Tech Team",
    date: "Oct 2025",
    description:
      "An engaging session with MCA students exploring how Git and GitHub simplify teamwork in coding and enable effective version control.",
  },
  {
    id: 4,
    img: event4,
    title: "Empowering Educators with AI Tools",
    instructor: "AVS College",
    date: "Nov 2025",
    description:
      "A transformative training session where staff explored how AI can enhance teaching, streamline workflows, and boost creativity.",
  },
  {
    id: 5,
    img: event5,
    title: "Exploring the World of AI & Machine Learning",
    instructor: "VisionEngiX Academy",
    date: "Dec 2025",
    description:
      "An interactive session where students discovered how machines learn from data and drive innovation across industries.",
  },
  {
    id: 6,
    img: event6,
    title: "Career Development and Industry Readiness",
    instructor: "Sri Ganesh College",
    date: "Jan 2026",
    description:
      "A focused training session enhancing students’ communication, problem-solving, and technical skills for career success.",
  },
  {
    id: 7,
    img: event7,
    title: "Technical Trends of the Computer World",
    instructor: "Kavery Engineering College",
    date: "Feb 2026",
    description:
      "An insightful session highlighting emerging technologies like AI, ML, Cloud Computing, and Cybersecurity shaping the future.",
  },
  {
    id: 8,
    img: event8,
    title: "Hands-on Training on Full-Stack Development",
    instructor: "Kavery Engineering College",
    date: "Feb 2026",
    description: "Conducted an interactive session where students gained practical experience in full-stack development, covering front-end (HTML, CSS, JavaScript), back-end (Node.js, Python), and database (MongoDB). Students built real-world mini-projects, strengthening their confidence and understanding through hands-on learning."
  },
  {
    id: 9,
    img: event9,
    title: "Career Development Training Session",
    instructor: "Sri Ganesh College",
    date: "Mar 2026",
    description: "Conducted a session focused on improving students’ communication, problem-solving, and technical skills. Covered topics like resume building, interview preparation, teamwork, and adaptability to help students align their abilities with industry expectations."
  },
  {
    id: 10,
    img: event10,
    title: "Career Development Training Session",
    instructor: "Sri Ganesh College",
    date: "Mar 2026",
    description: "Conducted a session focused on improving students’ communication, problem-solving, and technical skills. Covered topics like resume building, interview preparation, teamwork, and adaptability to help students align their abilities with industry expectations."
  },
  {
    id: 11,
    img: event11,
    title: "Career Development Training Session",
    instructor: "Sri Ganesh College",
    date: "Mar 2026",
    description: "Conducted a session focused on improving students’ communication, problem-solving, and technical skills. Covered topics like resume building, interview preparation, teamwork, and adaptability to help students align their abilities with industry expectations."
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Events
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer relative transform transition-transform"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Description Section */}
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-1">
                  {event.instructor} • {event.date}
                </p>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {event.description}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-500">14,097 learners</p>
                  <button className="text-primary font-medium hover:underline">
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
