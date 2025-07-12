import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Mic, 
  Database, 
  Zap, 
  BarChart3, 
  CloudDownload,
  FileText,
  GitBranch 
} from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Stream WISMO – GenAI Agent for Logistics",
      description: "Built a voice/chat agent using Gemini 2.5 and Tulip for 24/7 customer interaction in logistics. Enabled real-time tracking, rescheduling, and address updates with zero manual effort.",
      icon: Mic,
      technologies: ["Gemini 2.5", "Tulip", "GenAI", "Voice AI", "Real-time"],
      metrics: "40% reduction in manual workload",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Centralized Datamart for Trip, Route & Shipments",
      description: "Created a unified datamart for logistics data domains using ADF and Redshift, reducing data redundancy and enabling faster reporting.",
      icon: Database,
      technologies: ["Azure Data Factory", "Redshift", "Data Modeling", "ETL"],
      metrics: "30% cost savings",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Pipeline – Kafka + Spark",
      description: "Ingested real-time shipment and GPS data via Kafka → Spark → S3 to power 300+ dashboards and operational alerts.",
      icon: Zap,
      technologies: ["Kafka", "Spark", "S3", "Real-time", "Streaming"],
      metrics: "300+ dashboards powered",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Databricks to AWS EMR Migration",
      description: "Migrated Spark workloads to EMR, reducing compute costs through optimized resource tuning and job orchestration.",
      icon: CloudDownload,
      technologies: ["AWS EMR", "Spark", "Cost Optimization", "Migration"],
      metrics: "45% cost reduction",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "BI Dashboards & Reporting Models",
      description: "Designed Snowflake-based data models with fact/dimension tables and built interactive dashboards in Superset and Sisense covering delivery, dispatch, and fleet performance.",
      icon: BarChart3,
      technologies: ["Snowflake", "Superset", "Sisense", "Data Modeling"],
      metrics: "Complete KPI tracking",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Zero-Downtime Data Migration",
      description: "Led large-scale data migration across AWS S3 and Azure Blob, using optimized strategies to reduce object count and API costs while ensuring uninterrupted access.",
      icon: Database,
      technologies: ["AWS S3", "Azure Blob", "Migration", "Cost Optimization"],
      metrics: "Zero downtime achieved",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "CI/CD for ETL Pipelines",
      description: "Set up GitHub-based CI/CD workflows for PySpark pipelines with support for multi-env deployments and version control.",
      icon: GitBranch,
      technologies: ["GitHub Actions", "PySpark", "CI/CD", "DevOps"],
      metrics: "Multi-env deployments",
      gradient: "from-gray-500 to-slate-500"
    },
    {
      title: "PDF E-Bill Extractor – Airtel",
      description: "Built a Java + REGEX tool to automate telecom billing data extraction, improving operational efficiency.",
      icon: FileText,
      technologies: ["Java", "REGEX", "Automation", "Data Extraction"],
      metrics: "95% efficiency improvement",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/10">
      <div className="container-max mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world data engineering solutions that drive business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10`}>
                  <project.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                      {project.metrics}
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs border-border/50 hover:border-primary/30 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Hover effect line */}
              <div className="data-flow-line h-px bg-border group-hover:bg-primary/30 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};