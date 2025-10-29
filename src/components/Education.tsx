import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of Education (PK)",
      period: "01/2010 – 01/2014"
    },
    {
      degree: "FSC Pre Engineering",
      institution: "Garrison Degree College",
      period: "01/2008 – 01/2009",
      grade: "A"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified AI Practitioner",
      link: "https://www.credly.com/badges/e6323fc7-0f8a-43c9-bf84-413a691e8bca/linked_in_profile"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      link: "https://www.credly.com/badges/24eaa026-8b20-4bed-9d70-f5dd1d34f688?source=linked_in_profile"
    },
    {
      name: "C# TestDome",
      link: null
    },
    {
      name: "Scania Hack 2025",
      link: "https://www.credly.com/badges/e8288a24-3021-4f9f-aa2d-dbfb63f0ff56/linked_in_profile"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Academic background and professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-primary">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                  {edu.grade && (
                    <Badge variant="secondary" className="bg-secondary/50">
                      GPA: {edu.grade}
                    </Badge>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <Card className="p-6 bg-card border-border">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    {cert.link ? (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                      >
                        {cert.name}
                      </a>
                    ) : (
                      <p className="flex-1 text-foreground">{cert.name}</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Continuously updating skills through professional certifications in cloud computing, 
                AI/ML, and modern development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
