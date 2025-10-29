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
    "AWS Certified AI Practitioner",
    "Microsoft Certified: Azure Fundamentals",
    "C# TestDome",
    "Scania Hack 2025"
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
                    <p className="flex-1 text-foreground">{cert}</p>
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
