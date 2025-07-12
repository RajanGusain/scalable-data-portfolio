import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const handleDownloadResume = () => {
    // This would typically download a PDF resume
    window.open("#", "_blank");
  };

  const handleContactMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with tech grid overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container-max mx-auto px-6 text-center">
        <div className="hero-float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-gradient">Rajan</span>{" "}
            <span className="text-foreground">Gusain</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-jetbrains text-accent mb-6">
            Data Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Building scalable data platforms and intelligent pipelines to power decisions in real time.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleDownloadResume}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-medium shadow-tech hover:shadow-glow transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            onClick={handleContactMe}
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-4 rounded-xl font-medium transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://linkedin.com/in/rajan-gusain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 rounded-lg transition-all duration-300 hover:scale-110 shadow-tech"
          >
            <Linkedin className="h-6 w-6 text-accent" />
          </a>
          
          <a 
            href="https://github.com/RajanGusain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 rounded-lg transition-all duration-300 hover:scale-110 shadow-tech"
          >
            <Github className="h-6 w-6 text-accent" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};