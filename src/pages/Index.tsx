import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SaaS from "@/components/SaaS";
import Courses from "@/components/Courses";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InspirationSection from "@/components/InspirationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <InspirationSection />
      <About />
      <SaaS />
      <Courses />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
