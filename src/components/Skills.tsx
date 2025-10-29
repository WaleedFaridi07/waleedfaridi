import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, TestTube, Layers, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages & Frameworks",
      skills: [".NET", "Angular", "ReactJs", "C#"]
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: ["AWS Services", "Azure Services", "GCP"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "Microsoft SQL Server"]
    },
    {
      icon: Layers,
      title: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Datadog", "Sonarqube", "CI/CD"]
    },
    {
      icon: TestTube,
      title: "Testing",
      skills: ["Test containers", "Integration Tests", "Unit Tests", "End-to-end Testing"]
    },
    {
      icon: Globe,
      title: "Languages",
      skills: ["English (Fluent)", "Svenska (Beginner)"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Core Skills</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology stack and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
