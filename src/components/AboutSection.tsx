
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database, 
  Zap, 
  BarChart3, 
  Cpu, 
  Server,
  CloudSnow,
  Activity,
  GitBranch,
  Globe,
  Layers,
  Workflow
} from "lucide-react";

export const AboutSection = () => {
  const techStack = [
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
    { name: "Azure", icon: CloudSnow, color: "text-blue-400" },
    { name: "Databricks", icon: Database, color: "text-red-400" },
    { name: "Kafka", icon: Activity, color: "text-green-400" },
    { name: "Spark", icon: Zap, color: "text-yellow-400" },
    { name: "Redshift", icon: Server, color: "text-purple-400" },
    { name: "Superset", icon: BarChart3, color: "text-indigo-400" },
    { name: "Sisense", icon: BarChart3, color: "text-pink-400" },
    { name: "ADF", icon: Workflow, color: "text-blue-500" },
    { name: "Data Lake", icon: Layers, color: "text-teal-400" },
    { name: "Data Warehouse", icon: Server, color: "text-emerald-400" }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container-max mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Data Engineer with <span className="text-primary font-semibold">2 years of experience</span> designing 
                scalable data systems, real-time streaming pipelines, and cloud-native architectures.
              </p>
              
              <p>
                Skilled in integrating business-critical data across logistics and enterprise systems using 
                modern data tools like <span className="text-accent font-medium">Kafka, Spark, Databricks, 
                Redshift</span>, and <span className="text-accent font-medium">DataLakehouse</span>.
              </p>
              
              <p>
                I specialize in <span className="text-primary font-semibold">performance optimization</span>, 
                cost-efficient migrations, and building intelligent reporting layers using Data Modeling like 
                <span className="text-accent font-medium"> Star Schema</span>.
              </p>
            </div>
          </div>

          {/* Tech stack visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-tech-subtle rounded-2xl blur-xl"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
              
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={tech.name}
                    className="group flex flex-col items-center p-4 bg-secondary/30 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-tech"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <tech.icon className={`h-8 w-8 mb-2 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-6 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
