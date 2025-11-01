import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* 🌌 Matching gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-800" />

      {/* Soft glowing accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-800/30 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Section - Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions about our courses or events? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-slate-800/70 backdrop-blur-md border border-sky-700/40 shadow-md hover:shadow-sky-500/30 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-white">
                    <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">visionengix@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/70 backdrop-blur-md border border-sky-700/40 shadow-md hover:shadow-sky-500/30 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-white">
                    <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">+91 9342411558‬
</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/70 backdrop-blur-md border border-sky-700/40 shadow-md hover:shadow-sky-500/30 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg text-white">
                    <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Salem, Tamil Nadu, India</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <Card className="bg-slate-800/70 backdrop-blur-md border border-sky-700/40 shadow-lg hover:shadow-sky-500/30 transition-all animate-slide-in">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/70 text-white border-sky-700/40 focus:border-sky-500"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/70 text-white border-sky-700/40 focus:border-sky-500"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-slate-900/70 text-white border-sky-700/40 focus:border-sky-500"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/70 text-white border-sky-700/40 focus:border-sky-500"
                />
                <Button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg hover:shadow-sky-400 transition-all duration-300"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
