export const SkillsSection = () => {
  const skills = [
    "AWS", "PySpark", "Python", "SQL", "Kafka", "Databricks", 
    "Azure", "ETL", "Redshift", "Snowflake", "Data Warehousing", 
    "Big Data", "Data Lake", "Azure Data Factory", "Superset", 
    "Sisense", "PostgreSQL", "Hive", "Docker", "GitHub", "CI/CD", "Debezium", "Datamart"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build scalable data solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-badge"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-medium text-foreground">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};