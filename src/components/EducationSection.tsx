import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, Trophy } from "lucide-react";

export const EducationSection = () => {
  const certifications = [
    "Microsoft Certified: Azure Data Engineer Associate",
    "Databricks Certified Spark Developer",
    "AWS Certified Data Analytics"
  ];

  const achievements = [
    {
      title: "Top Performer – Q4 2023",
      description: "Improved Spark ETL execution time by 80% through PySpark optimization, significantly reducing infrastructure cost.",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      title: "Top Performer – Q4 2024", 
      description: "Led the migration of batch + streaming Spark jobs from Databricks to AWS EMR, achieving a 20% cost reduction.",
      icon: Award,
      color: "text-blue-500"
    },
    {
      title: "Top 4 Finalist – AI Ideathon",
      description: "Developed an AI-powered agent using Gemini 2.5 and Tulip for autonomous logistics support, reducing manual workload by 40%.",
      icon: Award,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/10">
      <div className="container-max mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional recognitions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="h-7 w-7 text-primary" />
              Education
            </h3>
            
            <div className="project-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-lg text-primary font-medium mb-3">
                    IILM University, Greater Noida
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      2019 – 2023
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Greater Noida, UP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <h3 className="text-2xl font-semibold mb-6 mt-12 flex items-center gap-3">
              <Badge className="p-2 bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </Badge>
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={cert} className="project-card border-l-4 border-l-primary/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-medium text-foreground">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Trophy className="h-7 w-7 text-primary" />
              Awards & Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="project-card group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/50 rounded-lg group-hover:bg-secondary transition-colors duration-300">
                      <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  <div className="data-flow-line h-px bg-border group-hover:bg-primary/30 transition-colors duration-500 mt-4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};