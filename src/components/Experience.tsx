import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Integration Developer",
      company: "TRATON Financial Services",
      period: "Present",
      current: true,
      description: "Leading multiple integration projects involving AI via ChatGPT Assistant APIs and AWS services like Bedrock and Sagemaker. Developing and supporting financial integrations between major brands Scania, MAN, International and Volkswagen.",
      tech: [".NET 9+", "AWS Services", "Azure", "PostgreSQL", "AI/ML"]
    },
    {
      title: "Senior Software Developer",
      company: "Scania Group",
      period: "09/2023 – 06/2024",
      description: "Worked as a Senior FullStack developer on multiple financial integrations.",
      tech: [".NET 8", "AWS Services", "Azure", "PostgreSQL", "SQL Server"]
    },
    {
      title: "Lead Developer",
      company: "Transfer Galaxy",
      period: "07/2022 – 09/2023",
      description: "Led backend system development, enhanced KYC process, Risk score process and multiple integrations for global remittance.",
      tech: [".NET 6", "Angular", "SQL Server"]
    },
    {
      title: "Senior Consultant Development",
      company: "Visionet Systems Inc.",
      period: "08/2018 – 07/2022",
      description: "Senior Consultant Developer with Ascent360, a global marketing platform. Led migration from Webforms to .NET core.",
      tech: [".NET Core", "React", "SQL Server", "Azure Services"]
    },
    {
      title: "Senior Consultant Development",
      company: "Systems Limited",
      period: "08/2018 – 07/2022",
      description: "Lead developer for TransRe Portfolio Management system for Transatlantic Reinsurance Company.",
      tech: ["Angular", ".NET Core", "SQL Server", "Azure Services"]
    },
    {
      title: "Senior Software Engineer",
      company: "BroadPeak Technologies",
      period: "07/2017 – 07/2018",
      description: "Developed new features and enhancements for Edible Arrangements, a franchise system with 500+ franchises in USA.",
      tech: ["ASP.NET", "SQL Server"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          <p className="text-xl text-muted-foreground">
            Building enterprise solutions across financial services and technology sectors
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content card */}
                <Card className={`md:w-1/2 p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card ml-8 md:ml-0 ${
                  exp.current ? 'border-primary/50 shadow-glow' : ''
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <Badge variant="default" className="bg-primary text-primary-foreground">
                          Current
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Briefcase className="h-4 w-4" />
                      {exp.period}
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-primary/30 text-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
