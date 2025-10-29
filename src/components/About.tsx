import { Card } from "@/components/ui/card";
import { Code2, Sparkles, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Technical Excellence",
      description: "Expertise in .NET, AWS, Azure, and modern web frameworks"
    },
    {
      icon: Sparkles,
      title: "AI & Innovation",
      description: "Leading AI integration projects using ChatGPT APIs and AWS ML services"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Leading development teams and architecting enterprise-scale solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional with focus on system architecture, bringing wealth of experience in 
            designing and optimizing complex systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-subtle border-border">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Current Role</h3>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as <span className="text-foreground font-semibold">Lead Developer at TRATON Financial Services</span>, 
              leading multiple integration projects involving AI via ChatGPT Assistant APIs and AWS services like 
              Bedrock and Sagemaker. Developing and supporting financial integrations between major brands 
              including Scania, MAN, International, and Volkswagen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Known for collaborative approach and delivering results that align with organizational goals. 
              Reliable and adaptable, skilled in system integration, project management, and problem-solving.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
