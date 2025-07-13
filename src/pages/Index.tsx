import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { FloatingResumeButton } from "@/components/FloatingResumeButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      <FloatingResumeButton />
      
      {/* Footer */}
      <footer className="bg-secondary/30 border-t border-border py-8">
        <div className="container-max mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Rajan Gusain. Built with passion for data engineering excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
