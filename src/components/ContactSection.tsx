import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Download,
  Phone 
} from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a backend
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container-max mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss data engineering opportunities or collaborate on innovative projects?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a 
                    href="mailto:gusainrajan053@gmail.com" 
                    className="text-accent hover:text-primary transition-colors duration-300"
                  >
                    gusainrajan053@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/rajan-gusain-20812a218/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors duration-300"
                  >
                    linkedin.com/in/rajan-gusain-20812a218
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <a 
                    href="https://github.com/RajanGusain" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent hover:text-primary transition-colors duration-300"
                  >
                    github.com/RajanGusain
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a 
                    href="tel:+918851178394" 
                    className="text-accent hover:text-primary transition-colors duration-300"
                  >
                    +91 8851178394
                  </a>
                </div>
              </div>

              {/* Resume Download */}
              <div className="p-6 bg-tech-subtle rounded-lg border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Download Resume</h4>
                    <p className="text-sm text-muted-foreground">Get my latest resume with detailed experience</p>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => window.open("https://raw.githubusercontent.com/RajanGusain/portfolio/main/Rajan_Gusain_DE1.pdf", "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="contact-input"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="contact-input"
                  placeholder="Job opportunity, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="contact-input resize-none"
                  placeholder="Tell me about the opportunity or project you'd like to discuss..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-tech hover:shadow-glow transition-all duration-300"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};