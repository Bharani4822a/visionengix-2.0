import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Database, Brain, Shield, Terminal, Boxes } from "lucide-react";

const courses = [
  {
    title: "AI / Data Science",
    icon: Brain,
    description: "Master artificial intelligence and machine learning algorithms with hands-on projects",
  },
  {
    title: "Data Analysis",
    icon: Database,
    description: "Learn to analyze, visualize, and derive insights from complex datasets",
  },
  {
    title: "Python Full Stack",
    icon: Code2,
    description: "Build complete web applications using Python, Django, and modern frontend frameworks",
  },
  {
    title: "Java Full Stack",
    icon: Boxes,
    description: "Develop enterprise-level applications with Java, Spring Boot, and React",
  },
  {
    title: "Cyber Security",
    icon: Shield,
    description: "Protect systems and networks from cyber threats and security vulnerabilities",
  },
  {
    title: "C Programming",
    icon: Terminal,
    description: "Master the fundamentals of programming with C language and memory management",
  },
  {
    title: "Java Programming",
    icon: Code2,
    description: "Learn object-oriented programming and build robust applications with Java",
  },
  {
    title: "Python Programming",
    icon: Brain,
    description: "Start your coding journey with Python's simple syntax and powerful libraries",
  },
];

const Courses = () => {
  const handleApplyNow = () => {
    window.open("https://forms.google.com/demo", "_blank");
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Our Courses
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{course.description}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="cta" 
                    className="w-full"
                    onClick={handleApplyNow}
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
