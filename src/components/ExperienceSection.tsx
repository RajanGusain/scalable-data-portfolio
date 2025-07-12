import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "FarEye Technologies",
      position: "Data Engineer I",
      location: "Noida",
      duration: "Sep 2023 – Present",
      type: "Full-time",
      achievements: [
        "Built and managed end-to-end pipelines for First Mile to Last Mile logistics",
        "Developed real-time ingestion using Kafka + PostgreSQL",
        "Created silver/gold layer models for 300+ dashboards",
        "Migrated workloads to EMR for 45% cost savings",
        "Implemented validation with PyDeequ and CI/CD for ETL",
        "Acted as SME across modules and supported cross-functional teams"
      ],
      technologies: ["Kafka", "PostgreSQL", "EMR", "PyDeequ", "CI/CD", "ETL"]
    },
    {
      company: "Airtel",
      position: "SDE Intern",
      location: "Gurgaon",
      duration: "Sep 2022 – Dec 2022",
      type: "Internship",
      achievements: [
        "Built E-Bill Extractor tool automating invoice data processing",
        "Achieved 95% reduction in manual effort",
        "Implemented Java + REGEX solution for telecom billing"
      ],
      technologies: ["Java", "REGEX", "Automation", "Data Processing"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-max mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable data solutions across logistics and telecommunications
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="relative flex flex-col md:flex-row md:items-start gap-8">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-tech"></div>
                
                {/* Experience card */}
                <div className="flex-1 md:ml-20">
                  <div className="project-card">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-lg text-primary font-medium mb-2">
                          <Building2 className="h-5 w-5" />
                          {exp.company}
                        </div>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-border/50 hover:border-primary/30 transition-colors">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};