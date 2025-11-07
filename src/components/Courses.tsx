  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Code2, Database, Brain, Shield, Terminal, Boxes } from "lucide-react";

  const courses = [
    {
      title: "AI / Data Science",
      icon: Brain,
      description:
        "Master artificial intelligence and machine learning algorithms with hands-on projects",
    },
    {
      title: "Data Analysis",
      icon: Database,
      description:
        "Learn to analyze, visualize, and derive insights from complex datasets",
    },
    {
      title: "Python Full Stack",
      icon: Code2,
      description:
        "Build complete web applications using Python, Django, and modern frontend frameworks",
    },
    {
      title: "Java Full Stack",
      icon: Boxes,
      description:
        "Develop enterprise-level applications with Java, Spring Boot, and React",
    },
    {
      title: "Cyber Security",
      icon: Shield,
      description:
        "Protect systems and networks from cyber threats and security vulnerabilities",
    },
    {
      title: "C Programming",
      icon: Terminal,
      description:
        "Master the fundamentals of programming with C language and memory management",
    },
    {
      title: "Java Programming",
      icon: Code2,
      description:
        "Learn object-oriented programming and build robust applications with Java",
    },
    {
      title: "Python Programming",
      icon: Brain,
      description:
        "Start your coding journey with Python's simple syntax and powerful libraries",
    },
  ];

  const Courses = () => {
    const handleApplyNow = (courseTitle) => {
      const message = `Hello! I'm interested in applying for the *${courseTitle}* course. Please share more details.`;
      const whatsappLink = `https://wa.me/919342411558?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
    };

    return (
      <section id="courses" className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-800" />

        {/* Glow effects */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-sky-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-800/30 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <Card
                  key={index}
                  className="bg-slate-800/70 backdrop-blur-md border border-sky-700/40 shadow-lg hover:shadow-sky-500/30 hover:-translate-y-2 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-sky-600 flex items-center justify-center mb-4 shadow-md shadow-sky-500/30">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {course.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{course.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg hover:shadow-sky-400 transition-all duration-300"
                      onClick={() => handleApplyNow(course.title)}
                    >
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  export default Courses;
